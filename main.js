"use strict";

function main(outerDiv)
{
	// Container div
	var div = document.createElement("div");
	div.className = "patcherContainer";

	// File loader
	var loadBut = document.createElement("input");
	loadBut.className = "patcherLoadInput";
	loadBut.type = "file";
	div.appendChild(loadBut);
	loadBut.addEventListener("change", function(e)
	{
		// Get file
		var file = e.target.files[0];
		if (!file) return;

		// Get extension; error if not .smc, .sfc, or .zip
		var ext = loadBut.value.split(".").pop();
		if(ext!="smc"&&ext!="sfc"&&ext!="zip")
		{
			textDiv.innerHTML = "File must have a .smc, .sfc, or .zip extension";
			return;
		}

		// Load file
		var reader = new FileReader();
		reader.onload = function(e)
		{
			var failhelp = "Make sure you're uploading a clean unpatched rom of Final Fantasy 3 US edition, versions 1.0 or 1.1";

			// Get smc content, check version, and activate the apply button
			if(ext=="zip")
			{
				textDiv.innerHTML = "Examining zip contents...";

				// Load zip, then check it's contents
				JSZip.loadAsync(file).then(function(z)
				{try{

					//  ... god I fucking hate jszip so much
					var needlesswaits = 0;
					z.forEach(function(relativePath, zipEntry)
					{
						// Get file's extension
						var e = zipEntry.name.split(".").pop();

						// Break if not an smc or sfc
						if(e!="smc"&&e!="sfc") return;

						// Get binary for zip entry
						// ... I mean I reeaaaaaally fucking hate jszip
						needlesswaits++;
						zipEntry.async("uint8Array").then(function(bin)
						{try{

							var version = getversion(bin);
							if(version)
							{
								update(version, bin);
								// needlesswaits not decremented, so it'll
								// never hit zero and failure code won't trigger
							}
							else
							{
								needlesswaits--;
								if(needlesswaits<=0)
								{
									applyBut.disabled = true;
									saveDiv.innerHTML = "";
									textDiv.innerHTML = ".zip does not contain a valid FF3 rom.  "+failhelp;
								}
							}

						}catch(e){console.log(e)}});

					})

				}catch(e){console.log(e)}},function(e)
				{
					textDiv.innerHTML = "Unable to open this .zip";
				});

			}
			else // ext == "smc" or "sfc"
			{
				var bsmc = new Uint8Array(e.target.result);
				var version = getversion(bsmc);

				if(version) update(version, bsmc);
				else
				{
					textDiv.innerHTML = "Invalid ROM.  "+failhelp;
					applyBut.disabled = true;
					saveDiv.innerHTML = "";
				}

			}

			function getversion(bsmc)
			{
				if(bsmc.length==3146240) for(var i=0;i<512;i++) bsmc[i] = 0; // nullify header
				var cs = checksum(bsmc);
				if(cs=="7161afb7730f462cb713f8380ca6e4ab") return "h10";
				if(cs=="ef1de04ca2f61e88b77fa0f101c914da") return "h11";
				if(cs=="e986575b98300f721ce27c180264d890") return "u10";
				if(cs=="544311e104805e926083acf29ec664da") return "u11";

				return null;
			}

			function update(version, bsmc)
			{
				// Display version
				if(version=="h10")      textDiv.innerHTML = "FF3 1.0 (headered) Detected";
				else if(version=="h11") textDiv.innerHTML = "FF3 1.1 (headered) Detected";
				else if(version=="u10") textDiv.innerHTML = "FF3 1.0 (unheadered) Detected";
				else if(version=="u11") textDiv.innerHTML = "FF3 1.1 (unheadered) Detected";

				// Activate Apply button
				var isheadered = (version=="h10")||(version=="h11");
				activateApplyBut(bsmc, isheadered);
				saveDiv.innerHTML = "";
			}

		};
		reader.readAsArrayBuffer(file);

	});


	// Game Text Dropdown
	var gameTextSelect = document.createElement("select");
	gameTextSelect.className = "patcherGameTextSelect";
	(function()
	{
		function addOption(val, text)
		{
			var o = document.createElement("option");
			o.value = val;
			o.appendChild(document.createTextNode(text));
			gameTextSelect.appendChild(o);
		}

		addOption("normal", "Brave New World");
		addOption("clean", "Clean New World");
		//addOption("vanilla", "Original Text");
		div.appendChild(gameTextSelect);
		// TODO on hover, have text explaining what the difference is
		// TODO make name stylable... and it's options too? look up styling selects
		// TODO on value change, make it reset? might be a pain in the ass though...
	})();


	// Ouput Text
	var textDiv = document.createElement("div");
	textDiv.className = "patcherOutputText";
	textDiv.innerHTML = "";
	div.appendChild(textDiv);


	// Apply Button
	var applyBut = document.createElement("button");
	applyBut.className = "patcherApplyButton";
	applyBut.innerHTML = "Apply Patch";
	applyBut.disabled = true;
	div.appendChild(applyBut);
	function activateApplyBut(bsmc, headered)
	{
		applyBut.disabled = false;

		function makereq(filename, func)
		{
			var xhr = new XMLHttpRequest();
			xhr.open("GET", filename,true);
			xhr.responseType = "arraybuffer";
			xhr.onload = function(e)
			{
				var arraybuffer = xhr.response;
				if(arraybuffer) func(new Uint8Array(arraybuffer));
				else console.log("XHR request failure");
			};
			xhr.send(null);
		}

		function generateZip(warn)
		{
			// Generate zip
			var rmfn = "Readme.txt";
			var pmfn = "Printme.xls";
			var umfn = "Unlockme.rar";
			textDiv.innerHTML = "Downloading and zipping files...";
			makereq("attachments/"+rmfn,function(brm){ // TODO make these dl concurrently?
			makereq("attachments/"+pmfn,function(bpm){ //  or dl these in advance??
			makereq("attachments/"+umfn,function(bum)
			{
				var z = new JSZip();
				z.file("BNW190.smc", bsmc);
				z.file(rmfn, brm);
				z.file(pmfn, bpm);
				z.file(umfn, bum);
				z.generateAsync({type:"blob"}).then(function(content)
				{
					try
					{
						if(warn) textDiv.innerHTML = "Checksum didn't match; you can try saving the file but it might not work.  This shouldn't have happened..."
						else     textDiv.innerHTML = "Patching complete!  DON'T LOAD THE ZIP DIRECTLY IN YOUR EMULATOR, it probably won't work!  Extract all the files from the zip, and load the .smc file in your emulator.";
						genSaveBut(content);
					}
					catch(e){ console.log(e);}
				});

			})})}); // TODO herp derp
		}

		applyBut.onclick = function()
		{
			applyBut.disabled = true;
			textDiv.innerHTML = "Downloading and Applying patch...";
			var ipsfilename = headered?"patches/bnwh190.ips":"patches/bnwu190.ips";
			makereq(ipsfilename, function(bips)
			{
				// Apply ips to loaded smc file (break on failure)
				if(!applyIps(bsmc, bips))
				{
					alert("applyIps failed");
					return;
				}

				// Check checksum of result
				var warn = false;
				if(headered) var sum = "763bff2a49d97f56e9a8faceedb1d665";
				else         var sum = "54427dfadea94ef32acd77be78137ac5";
				if(checksum(bsmc)!=sum) warn = true;

				// Apply Clean New World if toggled, then Zip
				console.log(gameTextSelect.value)
				if(gameTextSelect.value=="clean")
				{
					applyBut.disabled = true;
					textDiv.innerHTML = "Downloading and Applying Clean New World...";
					var ipsfilename = headered?"patches/cnwh190.ips":"patches/cnwu190.ips";
					makereq(ipsfilename, function(bips)
					{
						// Apply ips to loaded smc file (break on failure)
						if(!applyIps(bsmc, bips))
						{
							alert("CNW applyIps failed");
							return;
						}

						generateZip(warn);
					});
				}
				else
				{
					generateZip(warn);
				}

			});

		}
	}


	// Save Button
	var saveDiv = document.createElement("div");
	saveDiv.className = "patcherSaveAncDiv";
	div.appendChild(saveDiv)
	function genSaveBut(blob)
	{
		saveDiv.innerHTML = "";
		var saveAnc = document.createElement("a");
		saveAnc.className = "patcherSaveAnchor";
		saveAnc.href = "";
		saveAnc.innerHTML = "Click here to save";
		saveDiv.appendChild(saveAnc);
		saveDiv.addEventListener("mousedown", function() // TODO is mousedown ghetto here??
		{
			var url = URL.createObjectURL(blob);
			saveAnc.download = "BNW190.zip";
			saveAnc.href = url;
		});
	}

	// Append to DOM
	outerDiv.appendChild(div);

}
