"use strict";

// TODO when a new file's uploaded, clear the download div

function main(div)
{

	div.style.fontFamily = "monospace";

	// Top Text
	div.appendChild(document.createTextNode("Upload a headered or unheadered FF3 .smc to get started"));

	// File loader & status text
	var loadBut = document.createElement("input");
	loadBut.type = "file";
	loadBut.accept = ".smc";
	var textDiv = document.createElement("div");
	textDiv.style.height = "20px";
	textDiv.innerHTML = "";
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));
	div.appendChild(loadBut);
	div.appendChild(textDiv);
	loadBut.addEventListener("change", function(e)
	{
		var file = e.target.files[0];
		if (!file) {
			return;
		}
		var reader = new FileReader();
		reader.onload = function(e)
		{
			// Compute checksum & version
			var bsmc = new Uint8Array(e.target.result);
			if(bsmc.length==3146240) for(var i=0;i<512;i++) bsmc[i] = 0; // nullify header
			var cs = checksum(bsmc);
			var hr10 = cs=="7161afb7730f462cb713f8380ca6e4ab";
			var hr11 = cs=="ef1de04ca2f61e88b77fa0f101c914da";
			var ur10 = cs=="e986575b98300f721ce27c180264d890";
		    var ur11 = cs=="544311e104805e926083acf29ec664da";

			// Display autodetect result (and stop if rom invalid)
			if(hr10)      textDiv.innerHTML = "FF3 1.0 (headered) Detected";
			else if(hr11) textDiv.innerHTML = "FF3 1.1 (headered) Detected";
			else if(ur10) textDiv.innerHTML = "FF3 1.0 (unheadered) Detected";
			else if(ur11) textDiv.innerHTML = "FF3 1.1 (unheadered) Detected";
			else
			{
				textDiv.innerHTML = "Invalid ROM.  Make sure you're uploading a clean unpatched rom of Final Fantasy 3 US edition, versions 1.0 or 1.1.  If you've got a zip file, extract the .smc file and upload that.";
				applyBut.disabled = true;
				downloadDiv.innerHTML = "";
				return;
			}

			// Activate Apply button, with appropriate data
			activateApplyBut(bsmc, hr10||hr11);
			downloadDiv.innerHTML = "";

		};
		reader.readAsArrayBuffer(file);

	});

	// Apply Button
	function activateApplyBut(bsmc, headered)
	{
		applyBut.onclick = function()
		{
			var filename = headered?"patches/bnwh190.ips":"patches/bnwu190.ips";

			var xhr = new XMLHttpRequest();
			xhr.open("GET", filename,true);
			xhr.responseType = "arraybuffer";
			xhr.onload = function(e)
			{
				var ab = xhr.response;
				if(ab)
				{
					var bips = new Uint8Array(ab);
					if(applyIps(bsmc, bips)) genDownloadBut(bsmc, headered);
					else alert("FUUUUCK some shit got fucked up"); //TODO
					if(headered) var sum = "763bff2a49d97f56e9a8faceedb1d665";
					else         var sum = "54427dfadea94ef32acd77be78137ac5";
					if(checksum(bsmc)==sum) textDiv.innerHTML = "Patching complete!";
					else textDiv.innerHTML = "Checksum didn't match... you can try downloading the file but it might not work.  This shouldn't have happened: please shoot me a PM on ngplus or discord so I can figure out what went wrong."

				}
				else console.log("FUUUUUUUUUCK"); // TODO
			};
			xhr.send(null);
			applyBut.disabled = true;
			textDiv.innerHTML = "Downloading and Applying patch...";
		}
		applyBut.disabled = false;
	}
	var applyBut = document.createElement("button");
	applyBut.innerHTML = "Apply Patch";
	applyBut.disabled = true;
	div.appendChild(document.createElement("br"));
	div.appendChild(applyBut);

	// Download Button
	var downloadDiv = document.createElement("div");
	downloadDiv.style.height = "50px";
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));
	div.appendChild(downloadDiv)
	function genDownloadBut(bsmc)
	{
		downloadDiv.innerHTML = "";
		var downloadAnc = document.createElement("a");
		downloadAnc.href = "";
		downloadAnc.style.backgroundColor = "#dfd";
		downloadAnc.style.border = "1px solid #888";
		downloadAnc.style.borderRadius = "5px";
		downloadAnc.style.padding = "5px";
		downloadAnc.innerHTML = "Click here to download";
		downloadDiv.appendChild(downloadAnc);
		downloadDiv.addEventListener("mousedown", function() // TODO is mousedown ghetto here??
		{
			var blob = new Blob([bsmc], { type: "mimeString"});

			var url = URL.createObjectURL(blob);
			downloadAnc.download = "BNW190.smc";
			downloadAnc.href = url;
		});
	}


}
