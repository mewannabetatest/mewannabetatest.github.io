
			Final Fantasy VI: Brave New World - README

			TABLE OF CONTENTS:

				1. A PERSONAL MESSAGE FROM BTB
				2. INSTALLATION
				3. CHARACTERS & GAME BALANCE
				4. PATCHES & ASSEMBLY HACKS
				5. BUGS & KNOWN ISSUES
				6. VERSION HISTORY
				7. CREDITS & CLOSING

---------------------------------------------------------------------------------------------------------




				1. A PERSONAL MESSAGE FROM BTB




---------------------------------------------------------------------------------------------------------

One day, about a year and a half ago, a coworker of mine showed me a Final Fantasy VI ROM editor he'd
found on the world-wide pornography receptacle known as the internet. We got to talking about how the
editor could be used to fix bugs and other issues in the game, like how some asshole left the caps lock
on when he was naming everybody. This soon led to a discussion about how cool it would be if there was a
way to restrict certain espers to certain characters, beyond which the story differs depending on which
one of us you ask since neither one of us wants to assume credit for instigating this mess. What we can
agree on, however, is that the resulting product is something that we're very proud of.

This mod was created in two basic parts. Using the above-mentioned editor, I set out to work on the
game's character and enemy data, espers, spells, items, and equipment. A summary of these changes is
provided in the form of a "printme" file, which is meant to provide helpful supplemental information to
players - a good deal of which couldn't be easily provided in-game - as well as invoke nostalgia for the
days when video games didn't suck and the inclusion of such "feelies" was standard practice for quality
products. A detailed discussion of these edits can be found in section three of this readme.

The other half of this mod is basically everything that I couldn't do in the editor, which was instead
done by Synchysi in a combination of assembly, hex, and voodoo/witchcraft. These edits include a large
variety of things, many of which we're not at liberty to share (at least not up-front). Those that DO
need to be advertised, however, are very important to note and are detailed in section four.

The third half of this mod (math isn't my strong suit) is the dialogue/script, which was a joint effort
between the two of us. The goal wasn't so much to change anything as it was to enhance what was already
there. We aimed to preserve the areas of the original Ted Woolsey translation that actually worked while
making what didn't more faithful to the original Japanese. In addition to this, we've further built upon
existing characterization and storylines in a manner that will hopefully blend in seamlessly with the
original and avoid an "obvious fan translation" feel (at least in the parts that were taken seriously).

We're very interested in hearing what everyone has to say about the mod, so you can find our contact
information at the bottom of this readme. Feel free to write to us with any questions or comments, or
even if you're just feeling lonely (especially if you also happen to be an attractive Swedish redhead).
And above all else... have fun. If everyone who tries this mod out has even half as much fun playing it
as Synchysi and I did making it, then I would consider it a *huge* success.

Oh, and one last thing:

			TALK TO EVERYONE AT THE BEGINNER'S SCHOOL AT NARSHE.

					-BTB, May 2013

---------------------------------------------------------------------------------------------------------




				2. INSTALLATION




---------------------------------------------------------------------------------------------------------

Brave New World is distributed as an .ips patch, which is the standard for SNES mods as it avoids the
legal issues of distributing a fully-patched ROM. To make things as easy as possible for everyone, we've
also included a utility called "Lunar IPS" which will apply the patch to the ROM directly rather than
having to set it up through your emulator.

To install the patch, just follow these easy instructions:

      •	ALWAYS PATCH A CLEAN ROM - that is, a Final Fantasy 3 US (version 1.0 or 1.1, it doesn't matter)
	ROM with nothing else already patched in. This also applies to when you are updating to a newer
	version of the mod. If you don't patch a clean ROM, you're gonna have a bad time.

      •	There are two versions of the patch: one for headered ROMS (H) and one for unheadered ROMS (N).
	Applying the wrong patch will result in the game crashing like a Russian spacecraft on re-entry
	when you attempt to run it, so you'll know real quick if you fucked up. An easy way to tell if
	your ROM has a header is to check its size: headered ROMS are 3073 kb, unheadered are 3072 kb.

      •	If you desire, apply the "Clean New World" patch AFTER applying Brave New World. Be warned that
	Clean New World was not taken seriously and contains obviously (and badly) censored dialogue.

      •	The most immediate indication you'll receive that the patch took is the new default window style
	when the game loads (the patch doesn't change the title screen - awesome as it would be - to its
	official logo). You can also view what version of the patch you're playing in the config menu.

      •	Don't freak out when you see that Terra doesn't have her special Magitek commands anymore - this
	is an intentional change to clear up much-needed space in the spell index

Finally, note that while applying an updated version of the patch to your game will not invalidate your
existing save states, you should save the game the normal way (that is, by using an in-game save rather
than a save state) prior to updating and then reset the game afterward. This is to clear data out of the
SRAM, which often includes shit that we fix in our updates.

Oh, and one last thing:

			TALK TO EVERYONE AT THE BEGINNER'S SCHOOL AT NARSHE.

				(Seriously. I'm not kidding. Do it.)

---------------------------------------------------------------------------------------------------------




				3. CHARACTERS & GAME BALANCE




---------------------------------------------------------------------------------------------------------

The original Final Fantasy VI was a lot of things, but challenging wasn't one of them. The unfortunate
trend of characters being more or less entirely interchangeable in combat situations noticeably began
with this game and only got much, much worse as the series continued. A commendable effort to create an
unprecedentedly complex system of spells and attacks was matched with oversight ill-equipped to handle
the plethora of bugs and balance issues inherent in such a setup without obsessive attention to detail,
resulting in quite possibly one of the most buggy and broken mainstream games in existence. Luckily, I
just so happen to be both exceptionally obsessive and have way too much spare time on my hands.

The discussion of a subject as broad as overall game balance should probably start at the same place we
did in development, which is at the characters themselves. At the very heart of the game's diversity is,
as mentioned above, who you can choose to play as. Final Fantasy VI had a rather unique system in that
pretty much the entirety of character development was tied to espers, which carried a few rather obvious
downsides. The first is that, due to poorly-coded/implemented game mechanics, only one stat (magic) was
at all worth raising in the first place. This led to a great deal of munchkining despite nothing at all
resembling enough difficulty to warrant it, especially considering that, because any character can use
any esper, the endgame invariably devolved into an Ultima spam-fest (which would be the other downside).

Two major sets of changes were made to the code by Synchysi (see section four of the readme) in order to
help me deal with this issue. First, we had to change the way that the game handles every other stat so
that magic isn't the only one with any significance whatsoever. Secondly, we had to take care of that
pesky "everybody can equip every esper" problem. And so, with both learnable spells and boostable stats
now restrictable by character, I set out to mold each one of them into a unique flower.

Here's a quick (not really) rundown:

---------------------------------------------------------------------------------------------------------

				TERRA & CELES
				-------------

Terra and Celes are discussed together because they both still function very similarly to one another.
They're essentially red mages on steroids: Jills-of-all-trades who can easily adapt to any team you put
them in and who can excel in any role that they're set up for. Both lack a directly offensive special
skill, and so their usefulness is largely dependent on their spells and equipment. Lucky for them, they
have access to most of the game's best equipment along with more espers (and thus more spells) than the
rest of the cast. Terra's main advantages are a superior spell selection and a skill that capitalizes on
her beat-stick nature, while Celes is more well-rounded with better stats and spells that tend to focus
more on strategy than raw power.

Runic and Morph have both been through some significant mechanical changes, as well. The former has been
standardized to work on all white, grey, and black magic (any spell that starts with a colored dot), but
not on any "blue" magic (any attack that doesn't). This, along with the fact that many more enemies use
such spells in general, is meant to make using the skill both more intuitive to use and worth your while
to do so. A few assembly hacks (discussed in section four) also fix some bugs it had so that it feels a
lot more like a proper ability instead of a broken mess.

Regarding Morph, it's now a toggled stance rather than a timed one and the first of several skills that
aims to rescue stamina from the "dump stat" heap by allowing it to reduce the doubled damage that Terra
now takes in her esper form in return for the offensive boost that it provides. This makes using Morph
a decision that hinges on more than just a simple matter of Terra being "charged up" for it, and those
who are willing to suffer the drawbacks will find that a morphed Terra is easily Brave New World's most
fearsome warrior and will likely be the first (and possibly only) character to hit the damage cap.

---------------------------------------------------------------------------------------------------------

				LOCKE
				-----

At first glance, Locke appears to be nothing more than an inferior version of Terra and Celes. He lacks
their raw magical power and their massive spell repertoires, instead focusing mainly on physical attacks
and healing magic. But what he lacks in their versatility he picks back up with high speed and evasion.
Neither stat featured very prominently in the original game, and Locke serves as a good example of just
how significant these advantages are now. He tends toward armor of the lighter variety and dual-wielding
is now baked in to his weapon of choice rather than enabled by a relic, so his main defense is just not
getting hit in the first place. Furthermore, his speed advantage will be felt both in his role as healer
as well as his ability to dish out physical damage much faster than most other characters can.

Locke's magical abilities are also aided by the fact that he is now one of the three characters to which
the X-Magic ability is restricted. However, dual-casting with Locke is something of a double-edged sword
and an effective demonstration of how the more limited MP pools for the game's non-primary spellcasters
relegates them to more physical roles. That said, Locke is more than capable of outperforming the girls
on both the offensive and restorative magical fronts, but it requires a focus on building and managing
his MP in order to pull off.

Rounding out Locke's skillset is Steal, which was reworked to make a bit of fucking sense. Only enemies
who might be actually holding something (i.e. humans) can be stolen from on Brave New World - trying to
steal from a bear will just get you a very dead Locke. The idea is that fewer and more obvious targets
for theft along with better rewards for doing so will make treasure hunting more attractive. The formula
has been reworked to use Locke's speed for both the odds of success (which previously compared his level
to his victim's) and the odds of getting a "rare" steal (previously a static 1/8 chance), and successful
theft now immediately refills Locke's ATB meter so that attempts can be chained together. This not only
makes it easier to quickly rob entire enemy parties, but also upgrades "Mug" to a tactical multi-strike.

---------------------------------------------------------------------------------------------------------

				EDGAR
				-----

In stark contrast to the above, Edgar is a character whose usefulness is tied almost completely to his
special skills. Although one of our overall goals was to make regular physical attacks more appealing,
Edgar remains the game's one character with a clearly preferable alternative is his Chainsaw and/or his
Drill. In the original game, Edgar peaked early due to his tools being very overpowered initially, but
they failed to scale well and left him with little else to do in the endgame besides dragooning. We've
thus overhauled his tools and their effects in not only an attempt to keep the skill relevant into the
late game, but also to reduce the gross amount of redundancy that many of them possessed (Chainsaw vs.
Drill comes immediately to mind). Of specific note are his two new tools - the Defibrillator and Mana
Battery - which provide a significant degree of support utility and allow for an alternate Edgar build
that seeks to capitalize on something other than just hitting things.

Of course, making Edgar a physical powerhouse is still very much an option, and his weapons have been
reworked to ensure that they remain an important part of his load-out even if they are only functioning
as stat sticks. Swords provide good basic stat boosts, whereas spears have been retooled into defensive
weapons that boost max HP and randomly protect allies. Spears now also possess the "hold with both hands
for moar damage" property (the "Gauntlet" effect), which can combine with the inherent bonus that spears
already add to jump attacks for some truly amazing damage. In part because of this, and in part because
of the whole "unique flower" thing, dragooning is now exclusive to Edgar and Mog (well, and Gogo). One
advantage of particular note in going the dragoon route is that jumping is not subject to the back-row
"half damage" damage penalty, whereas the Drill and Chainsaw (see section four below) now are.

Ultimately, Edgar's most notable feature in pretty much any build is likely his ability to tank. He gets
a lot of HP through both his equipment and espers and he likes his heavy armor. He also gets more than
one long-range physical attack (that Autocrossbow may end up more useful in the late game than you may
think), so camping in the back row is always an option for The King. He gets several healing and support
spells to assist him in this role, but he must rely exclusively on his other skills for damage output.

---------------------------------------------------------------------------------------------------------

				SABIN
				-----

Sabin has been through quite a number changes in Brave New World in order to make him fit his character
archetype. Whereas his brother is basically Kain from FF4 with Tools and a permanent hard-on, Sabin now
more closely resembles Yang. The mere presence of Blitz originally relegated his regular attacks to the
rubbish bin, and his claws didn't even make for decent stat sticks since the best blitzes all did magic
damage (due to the game's original physical damage formula being total garbage). Taking a cue from Yang,
the new name of Sabin's game is lots of elemental damage and lots of status effects: his claws now all
deal elemental damage and have random spellcasts attached. He's then forced to dual-wield them in true
Monk style by no longer being able to equip shields. He makes up for this, as well as his inability to
wear much in the way of armor, by possessing some of the game's best natural stats, again because monk.

Blitzes have also been reworked, just as Tools were, in attempt to keep them all useful throughout the
game. The result is a varied skillset that provides a choice as to how to develop Sabin's stats. A vigor
Sabin, for example, will focus more on physical blitzes like Pummel and Suplex, both of which continue
his "status" theme by setting sap and slow, respectively. Both statuses are of little consequence in the
original game since they're the mildest of the lot, but they rise to prominence in Brave New World where
they are now universally effective - particularly on (most) bosses.

On the other hand, several blitzes are now affected by Sabin's stamina, making him one of the best users
of this once-useless stat. A stamina-based Sabin is a more defensive Sabin who assists his allies with
Mantra and its new counterpart (Chakra) that restores his team's MP instead of their HP. This Sabin will
rely more on the now stamina-based Aurabolt blitz for damage, especially since the physical ones (which
Aurabolt is *not*) are now subject to the back-row penalty just as Edgar's Drill and Chainsaw are.

Early in the game, Sabin's natural stats will make him one of the most powerful and beefiest characters
available. Later on, his limited armor options will become more of an issue and he'll have to rely more
on his high HP to stay on his feet. One advantage of particular note that Sabin has in this regard is
that his high vigor and stamina will help him take much more consistent damage from enemy attacks due to
how they now function as a sort of "natural" defense (see section four below for details), but he still
ends up eating more of it in the long run than most everyone else does.

---------------------------------------------------------------------------------------------------------

				CYAN
				----

Cyan suffered immensely in the original game for being the most physically-oriented fighter in a world
where magical damage reigned supreme and shitty balance decisions made 7/8 of his special attacks not
worth the fucking lifetime it took to use them. He gets a much-needed overhaul in Brave New World in the
form of a both a new global physical damage formula that renders his style of combat no longer complete
shit, as well as some special attention to his special skills in the same vein as Tools and Blitz before
them. From the undead-vanquishing powers of Mindblow (the "Dies at 0 MP" flag is now used exclusively on
undead foes) to the supreme physical damage of Tempest (AKA "Quadra Slice"), every bushido has a purpose
to fill and a chance to shine. Also, the Bushido meter no longer takes a fucking lifetime to charge.

Like Sabin, Cyan is now denied the use of shields in order to force the inherent "can be held with both
hands for extra damage" bonus on all of his weapons, which helps make even his regular physical blows a
mighty force to be reckoned with. Also like Sabin, Bushido techniques that do physical damage will only
be half as strong to those without a brave warrior spirit who cower in the back row. But even with these
drawbacks, Cyan's heavy armor and earlier access to Empowerer ensures that he's just as good at taking
damage as he is at dishing it out. Furthermore, the overall lack of diversity in his esper bonuses more
or less guarantees that he'll end up with more vigor and/or HP than just about anyone else.

Build-wise, Cyan really only has two options. You either pump his vigor to solidify him as the resident
king of physical damage or go balls-deep into HP and stamina to make him a rock that spams stamina-based
bushidos from the back row. Like Edgar, he has some healing spells so that he can bring his allies back
from the brink whenever he finds himself the last man standing, and the fact that Empowerer also absorbs
MP also makes Cyan one the mod's best out-of-battle patch-up guys.

In conclusion, Cyan is a pretty straightforward guy who mostly hits stuff and tosses out the occasional
heal regardless of how he's set up, but at least now he does what he does exceptionally well.

---------------------------------------------------------------------------------------------------------

				SHADOW
				------

Being a ninja, Shadow naturally winds up in the role of "fragile speedster" in this mod. He doesn't use
shields because ninjas have no interest in defending themselves when they can instead be dual-wielding
(or two-handing, in the case of katanas) totally sweet ninja weapons, and the armor that he does wear is
of the "don't get hit in the first place" variety. Shadow thus tends to die whenever he gets hit, but
unless he's up against an attack that can't miss he almost never does. He nearly ends up with the same
problem as Edgar where a superior - and row-ignoring - special skill renders his normal physical attacks
pointless and thus relegates him to permanent "back-row" status, but the high price of throwables along
with the semi-exclusive option for X-Fight later in the game are sufficient to lure him out.

Regarding Throw, it's now restricted exclusively to knives, scrolls, and stars (no more chucking swords
or rods), and each type of throwable now functions more uniquely than before. Knives tend to do the most
damage, but are more expensive and only single target, whereas throwing stars can now be "spread" like a
spell to hit a group of enemies. Scrolls, as always, do elemental damage that can be extremely powerful
against a single target since the damage is forcibly "split" against multiple targets. Finally, Shadow
can now set the image status (also known as "blink") on his teammates rather than just on himself with
Smoke Bombs (known in the original game as "Shadow Edges"), which along with his handful of healing and
support spells make him an excellent utility character to have on hand.

Shadow's greatest asset by far, however, is his unmatched speed. Pound for pound, Shadow has the highest
DPS potential of any character in the game due (mostly) to just how fast he can attack; this is why he's
balanced by being made of tissue paper. Add to this his above-mentioned support capabilities and you get
an incredible addition to any team - provided you can figure out how to keep him alive.

---------------------------------------------------------------------------------------------------------

				GAU
				---

Gau has always been a love-him-or-hate-him sort of guy, and at least that much hasn't changed here. What
I've tried to do is make it harder to hate loving him by overhauling his Rage list in the same spirit as
the other special skills, thus rendering the 64 remaining rages (down from nearly four times that amount
in the original) at least as desirable as the five or six of them that were at all useful before, not to
mention a great deal more diverse. The mechanics of leaping and The Veldt itself have also been fixed so
that those inclined to use him no longer need to invest a lifetime into building him up. Without going
into too much detail, enemies without rages (not to be confused with Men Without Hats) no longer appear
on The Veldt, and you don't actually have to be on The Veldt to learn their rages.

Stat-wise, Gau ends up drinking from the same punchbowl as Shadow: he dies in a gentle breeze, he likes
to evade damage instead of taking it, and he's one speedy little shit. Much like Shadow - perhaps even
more so - Gau ends up retardedly fast by the end of the game largely due to a lack of other useful stats
to boost through his espers. Combined with the fact that his primary (ok, only) means of attack requires
no user input beyond the initial selection, Gau can easily be Brave New World's fastest character.

In the end, though, Gau is still the same as he's always been: useful bordering on broken if used well,
but very difficult to use well. As the majority of his effectiveness stems directly from proper/clever
use of his rages, the info found in the printme should prove especially helpful to Gau fans. Otherwise,
he's designed so that even if you only grab a handful of rages, those few are at least still useful.

---------------------------------------------------------------------------------------------------------

				SETZER
				------

Setzer, perhaps most importantly, is one of the game's major healers. He's also arguably the tankiest,
with the potential to gain lots of HP and being mostly restricted to heavy armor. While his selection of
healing spells is obviously important to this role, equally notable are his Slots. Losing spins are now
twice as powerful as they were in the original game and act as sort of a poor man's version of Banon's
Health command, thus making for a quite effective - and spammable - full-party heal.

How Setzer likes to heal will depend in part on where his stats are. Traditional cure magic scales with
magic power, as do his Slots. The Remedy and Regen spells, however, which now restore HP in addition to
their normal effects, instead scale in power with stamina. Both are of much more use in Brave New World
due to a larger focus on status effects, particularly sap and regen. Additionally, Setzer is one of only
three casters of an upgraded Regen spell (the other two being Terra and Relm) which targets the entire
party and is one of the main selling points of a build that focuses on stamina over magic.

On the offensive side of things, Slots have been de-rigged to favor skill completely instead of RNG, and
winning spins allow a magically-built Setzer to contribute significantly to the team's damage output if
he's good enough at nailing them. Physically, he has the option to dual-wield and is now the exclusive
user of the new "X-Fight" relic; he also has access to weapons that either aren't subject to the damage
penalties imposed by either of those things (Dice) or rely on random procs rather than direct damage to
be effective (Doom Darts). The fact that Setzer can't raise his vigor through espers also means that his
physical damage output is completely unaffected by his build choice. And then there's GP Toss, which has
been reworked into a stamina-based attack that's most likely a stamina-focused Setzer's best option for
consistent, reliable damage that doesn't involve giving up his shield.

Ultimately, however, Setzer is more about tanking than he is about fighting. His ability to take hits
ranks up there with the likes of Edgar and stamina Cyan, but he's not usually as good at returning fire
as they are since his attack options tend to require either luck or sacrifice to be truly viable. It's
through that first catch that Setzer's "gambler" persona carries over to his role in combat, and most
battles will tend to see him as either a top contributor or a creepy paperweight.

---------------------------------------------------------------------------------------------------------

				MOG
				---

Mog is something of an oddball character in Brave New World. He gets a generous selection of esper stat
boosts and a great potential to maximize them since he's an entirely optional character, but what you
focus on will depend largely on what you want to do with him. He doesn't really hybridize well, which
leads to some very unusual and rather extreme build options.

Probably the most obvious choice is to focus on Mog's magic power, which boosts both the potency of his
spells and of his offensive dance steps. With a smattering of offensive and status magic to choose from,
access to the X-Magic ability, and the ability to equip rods, going whole hog into jacking up his magic
power is far from a bad idea. Note, however, that Dance also uses his stamina not only to determine the
odds of stumbling on non-native terrain, but also to raise the effectiveness of the steps that heal the
party. The eight dances themselves have been rebalanced to be more uniquely tailored to specific builds
and situations rather than just being the same thing eight times over, just with different backgrounds.
Water Rondo, for example, is a heavily offensive dance that will be mostly appreciated by a magic-built
Mog looking to deal big damage, whereas Forest Suite is a more defensive dance that can be utilized to
great effect by a tankier build. Both examples are particularly useful in boss battles, whereas other
dances like Love Sonata and Dusk Requiem are more suited to random crowd control.

On the flip-side, Mog can also opt to forgo all of that "magic" crap and embrace his role as the mod's
other potential dragoon. While he may at first appear to be pretty much just Edgar, but cuter, he gains
access to a few things that drastically set him apart from everyone's favorite perv, the least of which
is a weapon type other than spears that make for viable pogo sticks. Generally speaking, Mog most likely
won't be doing much attacking aside from jumping since his physical damage output is otherwise lacking.
Ideally, whenever a physically-built Mog isn't taking a hint from Van Halen, he'll instead be taking
advantage of his spells and dances that don't rely on his raw magic power to be effective.

The conclusion is that, while Mog has many skills and abilities available to him, no one build is really
able to take full advantage of them all. Instead, it's better to focus on what you want out of him and
work toward that goal. Failing that, he tends to be a sub-par character with little purpose other than
being the adorable team/corporate mascot and a rather blatant author avatar.

---------------------------------------------------------------------------------------------------------

				STRAGO
				------

Strago is essentially Cyan's magical counterpart in Brave New World: he casts the spells that makes the
peoples fall down. He boasts the highest natural (and potential) raw magic power in the game, as well as
an ability which makes great use of it. Lore, as you can probably guess by now, has been given the same
treatment as every other skill before it (Rage being perhaps the best direct comparison) wherein all of
the useless crap has been dutifully pruned out and all that remains is now more useful. His normal spell
selection is a bit less impressive, but he gets X-Magic to keep it competitive/interesting. As for his
equipment, all rods (Strago's weapon of choice) now possess the "consumes MP for critical hits" property
so that their random spellcasts	can help Strago deal big magical damage even with his regular attacks.
All of this makes him more dependent on MP than any other character to be at all effective in battle,
however, and so he's one of the few characters able to significantly boost it through both espers and
equipment and one of only two to which the Osmose spell is now restricted.

Strago's two main disadvantages are that he's squishy and he's slow as all fuck. His natural stats and
armor will provide him with good magical defense, but his physical defense and HP will remain quite low.
His shitty speed can be overcome with enough of the right equipment, though it will likely come at the
expense of maximizing his other stats (by which I mean his magic power). How he's built and loaded out
will hinge mostly on whether you prefer to use him primarily as a nuker or to take advantage of the many
utility spells and lores that he possesses to support the rest of the team. In either case, he probably
needs to stay in the back row since the only advantage of not doing so is better random cast damage from
his rods - and I can really only think of three or four or five situations where that's worth dying for.

---------------------------------------------------------------------------------------------------------

				RELM
				----

Relm may seem like a pint-sized, foul-mouthed version of her grandfather at first, but she's actually a
very different beast. Both are glass cannons with an emphasis on powerful magic, but their similarities
end there. First off, she trades a bit of her grandfather's raw magic power to get back some much-needed
speed. Second, Relm possesses a handful of the game's strongest spells both as her main advantage and as
her main weakness. Dubbed "Little Miss Overkill" in testing, Relm functions well as both an offensive
powerhouse and as a traditional healer. The downside is that she's something of a two-trick pony and has
little else going on for her otherwise. Her early-game offense is largely limited to Sketch - which has
at least been fixed to no longer destroy the universe when she uses it, as well as to actually deal some
fucking damage once in awhile. And her primary healing ability outside of end-game magic is whacking her
friends with a paint brush, which (for some reason) now heals them. Definitely a late bloomer, this one.

Because of Relm's strong emphasis - that is to say her outright dependence - on powerful magics, she's
the (only) other character who now learns Osmose so that she at the very least remains self-sufficient.
Just remember that she's still quite squishy, so stick her in the rear and use her speed and offensive
magic as a means to eliminate as much of the enemy threat as quickly as possible.

---------------------------------------------------------------------------------------------------------

				UMARO AND GOGO
				--------------

These two, lastly, end up in Brave New World as largely enhanced versions of what I presume they were
originally meant to be. Umaro is big, strong, and hits like a fucking truck. Due to this, he'll appeal
greatly to inexperienced players that are just looking for a tank to smash shit up. But because he can't
really do anything *else*, his long-term usefulness is somewhat limited.

Gogo, on the other hand, looks downright horrid on paper due to his shit stats and generally lackluster
equipment options. However, the mysterious pile of rags holds great rewards for the clever player who
takes the time to unlock his true potential. In the original game, Gogo's role was heavily diminished by
the aforementioned fact that, by the time you found him, your team was already full of faceless Ultima
factories. But if we've at all succeeded in our goal to mold every character into a unique being, each
with their own distinct advantages and disadvantages, then there is tremendous value in someone who can
wield any of those advantages at will. In fact, if not for his abysmal stats, Gogo would be hands-down
the absolute best character in the game. And even with them... he still very well may be.

---------------------------------------------------------------------------------------------------------

Finally, there's the obstacles that your team will face: the enemies themselves. Something that I firmly
believe to be a common failing of many mods is an either overwhelming or outright complete focus on the
challenge, whereas the design philosophy driving Brave New World is that challenge is merely a means to
an end and that the focus of (almost) any good game should instead be on the characters that you control
to overcome them. Make no mistake: this mod is is more difficult than the original game, and not just by
sheer virtue of fixing its many broken mechanics. However, Brave New World was neither made nor marketed
as a "difficulty" hack - a label far better suited to mods that place their difficulty in the spotlight.

Back to the point, the changes made to enemies in this mod are worthy of note because they represent a
significantly large portion of the total work done. Everything about enemies, from their stats to their
formations to their AI, has been gutted and rebuilt from the ground up. The primary goals are a greater
variety of enemy behavior and an increased focus on good strategy (as in, not just mashing A to win) in
order to defeat them. Once again, many other mods tend to fall into the trap of interpreting "strategy"
as "do this one specific thing to win", or worse "exploit this one broken mechanic to win". And not to
beat a dead horse here, but our mod isn't about that. Brave New World is about choice - to make the game
your own and find your own route to victory, wherever that route may take you.

As you can see, any discussion about the enemies in this mod will quickly turn into discussion about its
attitude toward difficulty in general. To say more about them than I already have would spoil the fun of
figuring them out for yourself. Pay attention, use all of the tools at your disposal (that includes the
'ol brain meats), and most importantly...

			TALK TO EVERYONE AT THE BEGINNER'S SCHOOL AT NARSHE.

				(Or I'll eat your fucking children.)

---------------------------------------------------------------------------------------------------------




				4. PATCHES & ASSEMBLY HACKS




---------------------------------------------------------------------------------------------------------

	Esper Restrictions	This is pretty much the cornerstone of the entire mod; it restricts the
	------------------	use of espers only to characters who are compatible with them (see the
				printme for a full list), thus allowing us to make the characters more
				unique due to the fact that espers are pretty much the only contributing
				factor to character development in Final Fantasy VI.

	   Esper Bonuses	Aside from the above (and complimentary to it), the most sweeping change
				made in Brave New World is transforming the esper level-up stat bonuses
				from an apparent last-minute afterthought in the game's design into the
				core of character development and customization.

				Espers now offer the following (per-level) stat bonuses:

					• HP +60
					• MP +40
					• HP +30/MP +15
					• HP +30/Stamina +1
					• MP +25/Stamina +1
					• Vigor +1/HP +20
					• Magic +1/MP +15
					• Vigor +1/Speed +1
					• Magic +1/Speed +1
					• Vigor +1/Stamina +1
					• Magic +1/Stamina +1
					• Speed +1/Stamina +1
					• Vigor +2
					• Magic +2
					• Stamina +2
					• Speed +2

	   Esper Experience	We encountered several obstacles regarding esper stat boosts, the least
				of which was that almost every stat sucked (see "nATB System", "Physical
				Damage", and "Stamina Overhaul" below) and the most persistent of which
				was that FF6's leveling system was clearly not designed with esper stat
				boosts in mind.	This ultimately resulted in an environment where, after
				everything else was all said and done, players were penalized for not
				keeping levels as low as possible in the early game because every level
				gained without espers was "empty". Late-game characters like Setzer and
				Strago were hit particularly hard by this, as was any character build
				which relied heavily on World of Ruin espers (i.e. magic/support Locke).

				To balance this, stat boosts from espers were given their own leveling
				system independent of regular levels. Each character starts out at an
				"esper level" (EL) of 0 - regardless of their regular level - and gains
				EP (exp. for esper levels) according to the following formula:

						EP = (spell points * exp.) / 8

					(NOTE: Spell points were renamed from "magic points")

				Note that esper levels use the same experience table as regular levels
				and cap at 25. Also note that a character will not gain any EP if (s)he
				has no esper equipped, which is no longer an issue because...

	   Esper Bank		The newfound advent of character builds eventually found itself at odds
				with the fact that they still had to equip espers to learn spells, which
				meant a lot of battles on the Veldt and/or micromanagement of experience
				gains to avoid gaining unwanted esper levels. To alleviate this concern
				and finally put the whole matter to bed once and for all, spell points
				earned by characters in battle now go into a "bank" for each character,
				and spells are now learned by spending them in the esper menu without
				needing to actually equip that esper and fight with it on. The learning
				rate for spells on espers is now the cost of that spell; the maximum
				amount of spell points that any character can bank at a time is 30.

				Similarly, esper levels are "banked" in the same manner as spell points
				are rather than being granted immediately upon earning them in battle.
				This completely eliminates the need to micro-manage equipped espers for
				the purposes of stat gains, and it also allows for a "re-spec" feature
				later in the game that reverts all of your spent ELs to the bank so that
				you can rebuild characters with different stat boosts. To spend a banked
				EL, just click on the EL bonus in the esper menu. Pretty simple, right?

	   Esper Junctions	The only problem with how the EL bank system removed the need to micro-
				manage espers was exactly that - players no longer had a reason to care
				who had	what equipped since the only functional difference between them
				all at that point was summoning them in battle. To address this, espers
				now have an "on equip" bonus just like a piece of equipment - such as a
				stat boost or reducing incoming elemental damage - that is completely
				separate from that esper's EL bonus.

				For example, Kirin offers a +5 bonus to Magic when equipped, but raises
				HP and Stamina for each EL spent. The former is a static bonus that is
				only present so long as Kirin remains equipped, whereas EL bonuses are
				permanent, cumulative, and not contingent on the esper being equipped.
				Characters may also mix and match EL bonuses from their available espers
				to their liking, whereas only one may be equipped at any given time.

---------------------------------------------------------------------------------------------------------

	Levels & Experience	Character levels are now capped at 50 with a "soft" cap starting in the
	-------------------	late 30's (expected end-game levels are mid-30's). Growth is otherwise
				linear except for three "humps" after levels 10, 20 and 30. For more
				details, consult the experience/level chart in the printme.

	   Level Averaging	In the original game, characters were brought up to the team's average
				level at set points throughout the game. This was a feature we initially
				removed entirely due to issues discussed above with esper stats, as well
				as to encourage using a variety of characters rather than just the same
				four characters while everyone else sits on the bench. The EL system has
				since removed the first problem, and so we've reinstated level averaging
				in a manner that only addresses the second.

				To the point, level averaging now occurs at only one point in the game
				aside from initial averaging that's done for each character when they
				join (or, in Shadow's case, *every* time he joins you in the World of
				Balance). Everyone gets re-averaged at the game's halfway mark, which is
				importantly distinct from how the game originally did it for everyone
				when you re-obtained them later on; with the averaging all done at once,
				there's no longer any benefit in putting off getting anyone back.

				(Also note that, for obvious reasons, esper levels cannot be gained via
				re-averaging - that much must still be done the old-fashioned way.)

				Concerning the initial levels that characters join up at, that has also
				been changed. In the original game, most characters joined at slightly
				above the party average, whereas now everyone except Gogo (average -3)
				and Umaro (average +5) now joins at the exact average.

---------------------------------------------------------------------------------------------------------

	nATB System		The short explanation of what this hack does is that it pauses the ATB
	-----------		timer during attack animations, while the "Fight" command is targeting,
				and while Bushido is charging. This has two effects: one, it makes speed
				contribute more significantly to how fast and often a character acts in
				battle, as well as preventing it from effectively soft-capping at around
				60 or so; two, it removes the exploit of camping in the item menu under
				the "wait" setting to gain a huge speed advantage. The resulting system
				is basically a modified version of "wait", which I mention because there
				is no longer an "active/wait" setting, nor a "battle speed" slider.

	   Speed Tweak		Removing the soft cap from speed and thus allowing faster characters to
				get more turns over time turned it into something of a DPS god stat, if
				not just a god stat in general. In response to this, the overall effect
				of speed was lowered at high levels while slightly raising the effective
				speed of slower characters. Refer to the below benchmarks, comparing the
				number of turns gotten by several characters over the same timeframe.


					   CHARACTER		TURNS (OLD)	TURNS (NEW)
					---------------		-----------	-----------
					Strago (31 SPD)		    4.0		    4.0
					Terra  (48 SPD)		    5.33	    5.0
					Celes  (71 SPD)		    7.0		    6.0
					Shadow (126 SPD)	   10.66	    8.4


	   First Strike		On the flip-side of the above, a major intended feature of speed was to
				allow faster characters to act first in battle. The original formula to
				determine characters' initial ATB fill in battle took speed very little
				into account and was instead largely randomized. Speed is now factored
				more heavily, with faster characters like Locke and Shadow now getting
				first strike in battles much more often than not.


							Initital ATB fill% =

					OLD: ([Spd...(2Spd - 1)] + ([0...9] * 8) + 16G) * 256 / 65535
					NEW: ([2Spd...(3Spd + 29)] + ([0...9] * 4) + G) * 256 / 65535

						G = (10 - Number of entities in battle)


	   Command Delays	Complementary to the above changes, we have edited the delays between
				command	input and execution to balance various skills:


					NO DELAY       ($00)		SHORT DELAY    ($10)
					--------------------		--------------------
					Steal/Mug			Fight
					Runic				Item
					Leap				Rage
					Mimic				Dance
					Revert				Throw
					Defend/Row			Sketch
					Possess				Health
					Magitek				???

					MODERATE DELAY ($20)		LONG DELAY     ($40)
					--------------------		--------------------
					Magic/X-Magic*			Morph
					Tools				Summon (esper)
					Blitz
					Bushido				HUGE-ASS DELAY ($70)
					Slots/GP Toss			--------------------
					Lore				Jump (air time)

					*X-Magic's delay is effectively $40 in practice


				And that's... really all you need to know. Below, I'll go into the finer
				details of battle timing and what nATB had to change to work within the
				game, but I'd recommend just skipping ahead to the physical damage hack.

				-------------------------------------------------------------------------

	   Combat Speed		First of all, the nATB system triples the speed of the combat timer to
				make up for the fact that it pauses it incessantly. This is meaningless
				to the layperson as the combat timer concerns only enemy A.I., but what
				is relevant are the speed "multipliers" for the haste and slow statuses
				(plus a third for "normal" speed). Because even small speed differences
				are much more impacting in nATB - and also because Slow is now effective
				against anything (even bosses) without inherent haste - it was necessary
				to narrow the gap between the three statuses to keep them in check:


					NEW MULTIPLIERS		OLD MULTIPLIERS
					---------------		---------------
					Slow	  60x		Slow	  32x
					Normal	  75x		Normal	  64x
					Haste	  90x		Haste	  84x


				Note that while the end result is a net increase to the flow of combat,
				the pacing will feel slower very early in the game when your have fewer
				characters (especially given that Terra is one of the slower characters
				in the mod) and you don't yet have any speed-boosting espers or gear.

	   Status Timers	Several status effects utilize a timer to determine when they wear off;
				since these are different timers than the global timer mentioned above,
				it was again necessary to shorten their durations to compensate for the
				fact that their incrementation is constantly being interrupted:


					NEW TIMER SETTINGS	OLD TIMER SETTINGS
					------------------	------------------
					Stop	     5		Stop	     18
					Sleep	     10		Sleep	     18
					Freeze	     10		Freeze	     34
					Reflect	     15		Reflect	     26
					Condemned    *		Condemned    *


				Note that cutting the timers for sleep and reflect in half renders their
				durations about the same as they were originally, while stop and freeze
				were further reduced as a balance measure. Condemned is a bit tricky,
				since its timer is generated by the following formula:


					Random Number = [Caster's Lv...((Caster's Lv * 2) - 1)]

					Timer starts @ (79 - Random Number) / 2

					(NOTE: minimum starting timer value is 10)


				This formula is largely identical to the one from the original game; all
				that's been changed is that both the end result and the minimum starting
				time have been cut in half to compensate for nATB.

	   Timer Speed		The speed at which the timers count down in the original game is roughly
				1 tick every 1-2 seconds; the nATB system cuts that speed about in half
				due to the constant interruptions. The X-factor in play here is that the
				speed of these timers is also affected by slow and haste - they'll count
				down slower if you're slowed and faster if you're hasted. For the most
				part this makes sense, since the beneficial status will cause negative
				ones to wear off more quickly and the detrimental one makes them linger.

				However, the frequency of regen/sap/poison ticks (which are also edited
				by nATB, but unimportant to this discussion) are also affected by timer
				speed, which means that a hasted character will also take more frequent
				damage from sap and poison while a slowed character takes less. It also
				means that the condemned status kills you quicker if you're hasted and
				slower if you've been slowed. Reflect is sort of a wash since it can be
				seen as either positive or detrimental depending on your situation, but
				the fact that its duration is tied to your speed is still kind of weird.

	   ¡Viva La Retreat!	The last thing that nATB edits is the run timer, since running away from
				fights would be virtually impossible it it didn't. I won't get into the
				specifics since they're largely irrelevant, but the short answer is that
				running away is somewhat harder than before under ordinary circumstances
				and a lot harder from non-overworld battles in second half of the game.
				It's generally advised to warp (via Warp Whistles or the titular spell)
				from late-game encounters if you wish to avoid them.

---------------------------------------------------------------------------------------------------------

	Physical Damage		The formula for physical (non-magical) damage dealt by characters has
	---------------		been completely rewritten so that vigor plays a more significant role.


						OLD PHYSICAL DAMAGE FORMULA
						---------------------------
					Dmg = BatPwr + (Lv^2 * (2Vgr + BatPwr) / 256) * 3/2


						NEW PHYSICAL DAMAGE FORMULA
						---------------------------
					Dmg = 2Vgr + BatPwr + ((Lv^2 * Vgr / 16) * (BatPwr / 16)) / 24


	   Vigor = Defense	In addition to determining physical damage dealt, vigor now helps reduce
				incoming physical damage, as well. See "Random Variance" in the stamina
				overhaul section below for more details.

	   Back Row Nerfs	The back row now only reduces incoming physical damage by 25%. Outgoing
				physical damage is not only still halved, but the penalty now extends to
				physical damage dealt by the Tools(*), Blitz, and Bushido commands

				(*Exception: the Autocrossbow, which is long range)

				For the record, the only two commands that inherently deal row-ignoring
				physical damage regardless of weapon are Jump and Throw. Physical damage
				from other commands, i.e. Mug and Sketch, does not ignore row. The fixed
				damage from GP Toss also ignores row, but is not considered physical.

	   Blind Accuracy	Further to the above, the blind status (renamed from "dark") now affects
				all physical and most(*) stamina-based damage from special commands (all
				of which remain otherwise 100% accurate). The exception is (hilariously
				enough) Sketch, which is technically classified as a magical attack.

				(*Exception: Cyan's Eclipse bushido, as noted in the printme)

				In addition, hitting something in the back (side/pincer attacks) is now
				affected by blindness, as well, whereas before a back attack would never
				miss under any circumstances. It also isn't circumvented by weapons that
				never miss or by relics that grant perfect accuracy.

---------------------------------------------------------------------------------------------------------

	Stamina Overhaul	In the original game, stamina did as close to nothing as a stat could
	----------------	possibly do without actually doing nothing (like evasion did). Its main
				purpose was to act as a separate layer of evasion against attacks which
				considered it, except only instant death attacks did. That role has now
				expanded to include fractional damage (i.e. Demi), redirectional damage
				("steals HP"), MP damage, and all status ailments. To further emphasize
				the role of stamina in defending you against such attacks, it's now the
				*only* evasion check against them. In the printme, this is indicated by
				listing their hitrates as "Stam%", so that's what that is.

				The stamina evasion formula is a simple (Stamina/128) chance of success,
				and a rewrite of its functionality allows it to only consider the status
				portion of attacks that also deal regular damage. Such attacks will use
				regular (or magical) evasion to determine hit probability (assuming that
				it's an attack that can be dodged), and then will run a stamina check if
				the attack hits to determine if the status is set. In the printme, such
				attacks use the verbiage "may set (status)" instead of "sets (status)".
				This edit also affects negative statuses set by enemy "special" attacks:
				regular physical attacks with either an added status effect or a damage
				multiplier (most notably used by Gau in most of his rages).

				(NOTE: any attack with "Stam%" accuracy will always set its status when
				it hits, since its hitrate IS the stamina check)

				It should be noted that enemies also possess stamina; Brave New World
				lowers the minimum and maximum values for enemy	stamina from 17~40 to
				1~32 (the formula is simply [MaxHP/256] with a cap at 32). This is done
				so that weak enemies remain vulnerable to status attacks while casting
				Slow on a boss still has a relatively decent chance (75%) to hit.

				To keep things simple for the player, all attacks which are used only by
				your party skip the stamina check for statuses if the attack also deals
				damage. This is done to remove unnecessary guesswork since enemies don't
				give any visual indication of many statuses, such as slow or blind. I do
				make an exception with the "Chocobo/Chocobo/Chocobo" winning Slots spin,
				since stop is a bit too OP to allow players to set en masse with perfect
				accuracy. The other outliers are Drain and Osmose, which foes don't use
				so that I could give them set hitrates instead of stam% ones; the Bserk
				and Imp spells, which can't miss since they can be used beneficially on
				your own party; and the Poison spell (but *not* Bio), so that it's the
				better spell to use if you're just looking to set the status.

	   Random Variance	In addition to helping you avoid most of the nastier side effects of
				magical attacks, stamina now also acts as an additional layer of defense
				against their primary effects in the same manner that vigor now reduces
				physical damage. This is done via the game's "random variance" formula,
				which is applied to every attack that doesn't do a set amount of damage.


						OLD RANDOM VARIANCE FORMULA:
						----------------------------
					Damage = (Damage * [224...255] / 256) + 1


						NEW RANDOM VARIANCE FORMULA:
						----------------------------
					Damage = (Damage * [Low...High] / 225) + 1

					   Low  = 225 - (Vigor or Stamina * 2/3)
					   High = 255 - (Vigor or Stamina)


				In the original game, random variance was a fixed range between 87% and
				99% of the original value; in Brave New World, high vigor and/or stamina
				will help you take less - and more consistent - damage from attacks. To
				better demonstrate the effects of this, here are some examples:


						 24 Vigor/Stamina = 92% ~ 102%
						 30 Vigor/Stamina = 91% ~ 100%
						 36 Vigor/Stamina = 89% ~ 97%
						 42 Vigor/Stamina = 87% ~ 94%
							---
						 60 Vigor/Stamina = 82% ~ 86%
						 90 Vigor/Stamina = 73%*
						120 Vigor/Stamina = 64%*

					(*A negligible amount of variance still applies)


				The four benchmarks on the top represent the initial values that (most)
				characters possess for vigor and stamina, while the three on the bottom
				show the effects of raising them via equipment and/or espers. Note that
				the range of damage at 60 vigor/stamina is significantly smaller than at
				the earlier benchmarks, and the variance disappears (*almost) completely
				at 90 when the ceiling hits the floor. Vigor and stamina see diminishing
				returns	beyond that point as the ceiling continues to drop at the same
				rate as the floor, though it should be worth mentioning that very few
				characters will realistically ever reach that point.

				(Also, in case you were wondering, curative spells and abilities still
				use the old random variance formula.)

	   Stamina Attacks	Less broadly, stamina is now a factor in several spells/attacks/commands
				(replacing the role of magic power wherever applicable), making it more
				individually appealing to the characters that use them. This includes...

					...the Remedy & Regen spells (which now also cure HP)

					...Harvester & Sun Bath (Rage/Dance moves)

					...Rock, Tentacle, & Shrapnel (Rage attacks)

					...several blitzes (refer to the printme for details)

					...two bushidos (ditto)

					...Dance (non-native dance success % = (96 + Stam * 2) / 255)

					...Morph (see "Morphology" description below)

					...GP Toss (see "Make It Rain" description below)

					...Umaro's "Blizzard" attack (see "Umaro Hit Hard" below)

					...the Atma/Omega Weapon (see "Atma & Omega" description below)

					...desperation attacks (previously magic-based)

					...Interceptor (ditto)

					...??? ((Lv^2 * Stam) / 12) + (User's Current HP * 2)

				Just to be clear, all of the above except for the Atma/Omega Weapon are
				considered to be magical rather than physical and are thus unaffected by
				25% physical damage boosts from relics/espers or the back-row penalty.

				(And just to be clearer, ALL DAMAGE IS MAGICAL UNLESS OTHERWISE STATED.)

	   Tank & Spank		Counter to the above, which sells stamina as an alternative attack stat
				with some defensive capabilities, we wanted a way of meshing it with the
				other stats in a meaningful way. It was thus decided that it should be
				tied to two equipment-enabled abilities: cover (synergizes with HP) and
				counter-attacks (synergizes with vigor).

				As was the case in vanilla, characters with "true knight" equipment will
				always take hits for allies who are at "near fatal" status, even if they
				themselves are also at critical HP. Now, in addition to that, guardians
				who are not in critical status may also take hits for *healthy* allies.

						Cover% (healthy allies) = Stam / 192

				To balance this, characters can no longer cover AT ALL while in the back
				row, evasion is halved for any attack that he or she jumps in front of,
				and covering an ally will break a character out of the "defend" status.
				Interceptor will also not protect Shadow if he's covering someone else.

				  (See "Smart Cover" below for further changes to the cover mechanic.)

				For the "spank" half of things, the game's original counter-attack rate
				was 75%. We found this to be excessive once we got other things sorted
				out (see "Parry & Counter" below), so we opted for a new formula that
				bases the counter-attack rate on stamina (starting at a floor of ~50%).

						Counter-Attack% = (Stam + 32) / 128

				                (See also "Parry & Counter" below.)

	   Sap & Regen		Moving on, the formulas for regen and sap/poison (all of which are much
				more prominent statuses in this mod than they were originally) have been
				edited to allow stamina to contribute more significantly toward raising
				the amount of HP restored by the former while now defending against the
				latter (originally, stamina *raised* the damage dealt by sap/poison).


						OLD REGEN/SAP FORMULA
						---------------------
					*Tick = ((MaxHP * Stam) / 1024) * (Random Variance)

					(*If sap on a player character, tick is halved)


						NEW REGEN FORMULA
						-----------------
					Tick = ((MaxHP / 32) + Stam) * (Random Variance)

					(NOTE: Random Variance is 87% ~ 99%)


						NEW SAP FORMULA
						---------------
					Tick = (MaxHP / (16 + (Stam / 8)) * (Random Variance)

					(NOTE: Random Variance is the new formula shown above)


				Note that the first part of the formula is stored in an 8-bit value, and
				is thus capped at 255. The minimum value for random variance is 1, so no
				regen or sap tick can exceed 254 (further, because sap damage to player
				characters was originally halved, it could never exceed 127).

	   Poison Edits		Poison works in a manner similar to sap, except that it only ticks half
				as frequently and each tick deals incrementally more damage. Originally,
				the increment value was equal to the value of the initial tick; we have
				halved the increment value in Brave New World to keep poison from being
				too detrimental of a status (given the lower overall HP totals of player
				characters compared to the original game).

				We've also corrected an error (possibly intentional, but I doubt it) in
				the original code wherein the variable that increments with each tick
				doesn't reset when the status is cleared, so poison ticks will now start
				back over at the beginning if the status is re-applied to the same d00d
				in the same battle rather than picking back up where they left off.

	   Magic Bonus Fixes	As a side effect of the above changes, we've also fixed two other bugs
				wherein the "magical damage +25%" relic property was raising the damage
				of sap/poison ticks - even allowing them to go over the 8-bit cap - and
				wasn't being applied to curative spells. We also thought it a little bit
				odd/overpowered that the magic damage bonuses were stackable whereas the
				physical ones were not, so they no longer are now.

---------------------------------------------------------------------------------------------------------

	Evade Bug Fix		Physical and magical evasion now function properly instead of magical
	-------------		evasion covering both types and physical evasion doing nothing at all.

				Seems like a simple enough fix, right? However...

	   Status Evasion	Fixing the evasion system awakened a dormant mechanic from deep within
				the game's code wherein physical attacks will gain accuracy bonuses or
				penalties (+/-25%) if the target has certain statuses set. Some of these
				made sense and were left alone, like how being slowed, blinded, muddled,
				or zombied will now make the afflicted easier to hit. Others, most oddly
				the rerise (AKA "Life 3") status being subject the same penalty, were
				fucking retarded and were thrown in the trash where they belong.

				The big issue, however, wasn't with the accuracy bonuses, but rather the
				penalties when attacking targets affected by the haste, sap, poison, and
				"near fatal" statuses. Not only did none of these make any sense (except
				for haste, but haste is OP enough already), but their newfound ubiquity
				in Brave New World - haste and sap in particular - made	balancing the
				physical game hell (and yes, those penalties *stacked*).

				(Needless to say, the penalties in the above paragraph are now gone.)

	   Parry & Counter	On the flip side to the above, a functional evasion system combined with
				several characters who are very much built for it (Locke and Shadow come
				immediately to mind) rendered the "randomly counters" property less than
				useful since characters could originally only counter attacks that had
				successfully hit them (which in Shadow's case usually left him too dead
				to retaliate). We have removed this requirement, thus allowing the likes
				of Locke and Shadow to parry and counter to their heart's content.

---------------------------------------------------------------------------------------------------------

	Evasion%		Since evasion and MBlock (magic evasion) max out at 128 instead of 100,
	--------		they are no longer represented in-game as a percentage.

	   Accuracy%		For simplicity's sake, the accuracy of all weapons and physical attacks
				made by the enemy (except ones that never miss) have been set to 100%.
				The odds of any regular physical attack connecting are thus a straight
				check against the target's evasion (out of 128) while all other physical
				attacks (i.e. those from special commands like Blitz and Bushido) never
				miss* unless the attacker is blind - this is why the printme only lists
				hitrates for magical attacks.

				(*Exception: Edgar's Autocrossbow, which behaves like a normal weapon)

				And this is where it gets a little confusing. Because of the presence of
				evasion, 100% is only a perfect hitrate if the target's evasion is zero;
				a "true" perfect hitrate is 255%. And again to keep things as simple as
				possible, enemies in Brave New World do not possess magical evasion.

	   tl;dr		In other words, any (magical) hitrate shown in the printme is exactly
				that if the target is an enemy, whereas it will be lower against your
				characters since they actually possess magical evasion. Anything without
				a hitrate will never miss unless it's a physical attack and the attacker
				is blind or if it's just a regular physical attack (i.e. Fight/Rage).

---------------------------------------------------------------------------------------------------------

	Vanish/Doom Fix		One of the original game's more infamous bugs (and one of the select few
	---------------		to warrant a shitty patch job in all subsequent releases) related to the
				"clear" status circumventing instant death attacks. This is *properly*
				fixed in Brave New World via an	external hack created by Terii Senshi.

	   "Special" Fix	Lesser known (and infinitely less exploitable) than the above bug is one
				where enemy "special" attacks with the instant death flag would flat-out
				ignore death immunity altogether, vanish or not. The root cause of both
				bugs is the roundabout way that the code treats death as a status, and
				the general lack of enemy specials in the original game that are set to
				do so leads me to believe that the developers had to have been aware of
				this bug on at least some level. In any case, it's fixed now.

	   Overcast Fix		Similar to the above, another patch fixes an issue with an attack called
				Overcast forcibly setting zombie on your party regardless of immunity.
				This led to it being impossible to remedy due to how immunities work in
				this game; Overcast now simply no longer bypasses zombie immunity.

---------------------------------------------------------------------------------------------------------

	Abort On Enemies	Failing the old "Vanish/Doom" trick, a vanilla player's primary fallback
	----------------	for any undead enemies (including bosses) is simply to toss a Phoenix
				Down or Revivify on it and call it a day. My first response to this was
				simply to make items unable to target enemies, but clever players know
				that the muddle status can get around that little fix. That is, it *did*
				work until we hard-coded certain things to not work on enemies at all.

				Thing is, quite a few of the game's laundry list of bugs tend to involve
				hitting enemies with shit that's not meant to be used on them, Palidor
				being a rather notable offender. Curiously, there's a targeting flag in
				the game's code to abort an attack in the event that it somehow ends up
				targeting the party, yet there's no equivalent for the *enemy* party,
				where such a flag is actually needed.

				Long story short, we made an "abort on enemies" flag for shit that's not
				supposed to be used on enemies. And as for shit that is fine to use on
				just *regular* enemies, but not on bosses...

	   Boss Immunity	The "Suplex" byte, which originally prevented Suplex from targeting
				certain enemies (primarily those of the floating or stationary variety),
				is now a hard override to prevent fractional damage attacks (i.e. Demi,
				Quartr) from being cheesed against bosses. Such attacks originally were
				set to miss anything immune to instant death, so instant death attacks
				were thus always preferable. Fractional damage now deals earth and/or
				wind damage and follow suit with other earth and wind attacks by being
				generally very powerful, but unable to hit a weakness due to a lack of
				them (though some enemies still resist them).

				In addition to fractional damage attacks, this flag is also used by the
				Rerise spell (to prevent issues/bugs with bosses that drop items), and
				the Snare dance step (which otherwise disregards death immunity).

				And yes, Suplex works on everything now - have fun pile-driving Kefka.

---------------------------------------------------------------------------------------------------------

	Genji Glove Fix		Dual-wielding weapons now results in a 25% decrease in damage from both
	---------------		weapons (as it was originally intended to do). Note that this patch has
				been modified from the original version created by Assassin17 (as noted
				in the credits) to only affect regular physical attacks instead of all
				attacks that deal physical damage (i.e. most of Sabin's blitzes).

	   Dual Wind Slash	Another modification to this hack allows the damage penalty to affect
				Wind Slash and Aero when weapons randomly cast them in place of regular
				physical damage. See also the Gauntlet fix below for more on this.

	   Dual-Wield Weapons	Finally, note that the dual-wield property is now attached to certain
				weapons (see the printme) rather than to a relic. Any weapon possessing
				the dual-wield property allows a second weapon to be used regardless of
				whether or not the second one allows for it - a sword and dagger combo,
				for example, is a valid setup. The only exception is spears, which are
				disallowed in dual-weapon setups (this only affects Mog) because I spent
				most of development running my Mog with a spear/boomerang load-out and
				Synchysi thought it was bloody stupid.

---------------------------------------------------------------------------------------------------------

	Gauntlet (Fix?)		Holding certain weapons in both hands now increases battle power by 50%
	---------------		rather than 75%. This was done because, as with the dual-wield property,
				two-handed functionality is now applied to specific weapons rather than
				enabled by a relic and the game's original bonus led us to some balance
				issues (think "dragoon"). A modified version of an external hack known
				as "Throw Down (part of) The Gauntlet" is also utilized to allow their
				effective battle power to be shown accurately in the equip menu.

	   2-Hand Wind Slash	As also with the above hack, a 50% damage bonus will also apply to Wind
				Slash and Aero when two-handed weapons randomly spark them in place of
				regular damage. Combined, these two allow for a very noticeable balance
				between those weapons when used by Shadow (who typically dual-welds) and
				Cyan (who is forced to use both hands since he can't use a shield).

	   Two-Handed Weapons	Finally, note that using two hands for weapons that allow it is entirely
				optional (except for Cyan, who as noted above is forced to do so by his
				equipment restrictions). Specifically, giving Edgar or Mog a spear and a
				shield (i.e. The SPARTAAAAAAAAAAAAAA! Setup) is allowable even though it
				looks like the game doesn't want to let you do it. To further illustrate
				this, an empty off-hand will now turn yellow (instead of gray) if a two-
				handed weapon is equipped in the other one.

---------------------------------------------------------------------------------------------------------

	Sketch Fix		First and foremost, using Sketch should no longer cause the universe to
	----------		implode on itself thanks to a patch that fixes whatever in the hell was
				wrong with it in the original game. So, there's that.

	   Sketch Formula	Second, the Sketch formula now uses Relm's (or Gogo's) stats instead of
				those of the enemy so that it's actually worth using.

	   Brushless Sketch	Finally, Sketch is now disallowed unless a brush is equipped by a patch
				called "Brushless Sketch" (which does pretty much the exact opposite of
				what its name suggests) because painting with a knife is something that
				only psychopaths do (which Relm kind of is, come to think of it).

	   Brush Targeting	Aside from allowing Sketch, the other feature of paint brushes in Brave
				New World is that they now cure HP rather than damage it (a la the Heal
				Rod). The targeting code has been edited so that they correctly target
				your party by default instead of the enemy, and vice versa in the event
				that Relm (or Gogo) is muddled or bserked.

---------------------------------------------------------------------------------------------------------

	Auto-Swordless Runic	Similar to the Brushless Sketch patch (both utilize the same base code,
	--------------------	and so Brushless Sketch requires this one to work), Auto-Swordless Runic
				keeps Celes from spamming the ever-loving shit out of Runic when she's
				muddled	or at the Colosseum if she doesn't have a sword to Runic *with*.

	   Elemental Runic	We've also corrected a bug wherein Runic'd spells would not be stripped
				of their elemental properties, so protection from any element would also
				"protect" Celes (or Gogo) from absorbing the spell's MP cost.

---------------------------------------------------------------------------------------------------------

	Persistent Rage Fix	So named because the original name is stupid (it's made by the same guy
	-------------------	who made Brushless Sketch and Auto-Swordless Runic... go figure) and not
				really descriptive of what the patch does. What it does is recalculates
				resistances whenever Gau dies so that elemental immunities/weaknesses he
				gains through Rage won't persist (and stack) throughout the battle.

	   Rage Status Patch	This is an extension of the above written by Think (nATB, many others),
				which fixes it to also affect statuses. The problem with the original
				patch was that the recalculation code does not remove statuses that you
				are immune to because the code basically interprets status immunity as
				"cannot be toggled on or off". Thus, characters who are given statuses
				like safe or haste by their equipment, or in this case by Rage, are then
				considered by the game to be "immune" to those statuses.

				This patch does two things to correct the above issue. First, it strips
				characters of any status that isn't provided by their equipment whenever
				resistances are recalculated (i.e. when they die). Second, whenever Gau
				enters the rage status, he is purged of all statuses that his rage gives
				him immunity to (*actual* immunity, not "inherent" immunity). Note that
				in addition to preventing Gau from being stuck with status ailments that
				he can't cure, this also fixes an exploit where raging a monster that
				absorbs poison damage (all of whom resist the poison status in Brave New
				World) with the poison status set basically gave you regen on steroids.

---------------------------------------------------------------------------------------------------------

	Leap Anywhere		The "Leap" command can now be used on any rageable formation, regardless
	-------------		of whether or not you are on the Veldt. While this does give Gau earlier
				access to some key rages in certain areas, it's largely a QoL patch that
				makes it easier to collect all of his rages.

				Unlike before, Leap no longer ends the current battle. Rather, it will
				remove Gau from the party for its duration (he's counted as dead for the
				purpose of what happens if the rest of your party wipes); he will learn
				the rages of the enemy party whether or not you win the fight or run.

---------------------------------------------------------------------------------------------------------

	Smart Cover		This fixes the "protect allies" effect to behave more intelligently than
	-----------		before. Primarily, it disables blocking attacks that originate from your
				own team under most circumstances, which has the significant benefit of
				preventing party members from being "protected" from Relm trying to heal
				them with a brush. Muddled/Zombied/Charmed characters will be allowed to
				hit themselves, but not their teammates. One notably important change in
				light of the fact that characters can now cover non-critical allies (see
				"Tank & Spank above) is that cover will no longer activate on a counter-
				attack from an enemy - only proactive strikes.

				Cover is also disabled under the the following other conditions:


					If bodyguard has...		If target has...

					Blind				Image
					Bserk				Magitek
					Image				Death    (*)
					Magitek				Stone    (*)
					Muddle  (unchanged)		Zombie   (*)
					Sleep   (unchanged)		Clear    (unchanged)
					Death   (unchanged)
					Stone   (unchanged)
					Zombie  (unchanged)
					Clear   (unchanged)

					*This game was programmed by monkeys, I swear


				Finally, cover is disabled entirely if Golem is active, and attacks that
				would be nullified/absorbed by the intended target are also not blocked.

---------------------------------------------------------------------------------------------------------

	Impology		Imp was always one of the more misunderstood statuses in the original
	--------		game, mainly since it wasn't very up-front about what it did and even it
				seemed to not have a very good idea about it was trying to be. It was a
				weird offensive debuff/mute hybrid that didn't even behave the same way
				on enemies as it did on your party. And don't even get me *started* on
				how buggy the animation was/is.

				Now, imp is a simple output debuff: 50% off everything, both offensively
				and healing-wise. It's basically the exact opposite of Morph (see below)
				except that it doesn't affect incoming damage. Attacks and spells with
				fixed or fractional damage are also unaffected, but the imp penalty does
				apply to some things that you wouldn't expect it to like items and regen
				and sap/poison ticks (this is explained a bit more in the next section).

---------------------------------------------------------------------------------------------------------

	Morphology		Terra's Morph ability is now a toggled stance rather than a timed one.
	----------		Rather than doubling her offensive output and halving all magical damage
				taken, it now boosts her output by 50% at the expense of doubling *all*
				damage taken. This damage penalty is reduced by 1/128 for each point of
				stamina that Terra has, down to a minimum of 25% at 96 stamina.

				It's important to note that the 50% output boost from Morph applies to
				pretty much everything. The Morph bonus is added to damage calculation
				as a "multiplier", which in the original game are ignored by any attack
				that ignores defense. This is no longer true - defense-ignoring spells
				and abilities now respect multipliers*. This includes curative spells,
				which ignore defense as an obvious necessity. Because the game's code is
				weird, the Morph multiplier will also be applied to items that restore a
				set amount of HP/MP (i.e. Dried Meat), but not to items like Tonics or
				Ethers that restore fractional amounts - apparently, beef jerky is 50%
				more delicious when a naked pink lady is cramming it down your gob.

				(*Exception: the Flare spell is hard-coded to ignore damage multipliers)

				On the subject of healing, the above-mentioned damage penalty does not
				distinguish between incoming damage and incoming healing - everything
				will hit her for higher numbers (except for fixed or fractional values).
				This means that, although Terra will be more fragile in her esper state,
				she'll also be much easier to heal. Where things start to get confusing
				is sap and regen ticks, which receive the damage multiplier from Morph
				because the game considers those things to be Terra hitting herself. For
				that same reason, however, their numbers are also boosted by the penalty
				that doubles all incoming damage. This means that the same stat which
				raises the strength of her regen ticks in the first place will in fact
				*lower* the boost they get from Morph, making the whole mess a wash.

---------------------------------------------------------------------------------------------------------

	Atma & Omega		Due to the lower overall levels that everyone will achieve in this mod,
	------------		the special damage formula used by the Atma (and now Omega) Weapon ends
				up nerfing the ever-loving shit out of it since it assumes a "baseline"
				level of 64(!). To remedy this problem, its formula has been gutted:


						OLD ATMA WEAPON FORMULA
						-----------------------
					1. Normal attack (ignores defense)
					2. Dmg = Dmg * Lv
					3. Dmg = Dmg * ((HP / 256) + 1) / ((MaxHP / 256) + 1)
					4. Dmg = (Dmg / 64) + 1


						NEW ATMA WEAPON FORMULA
						-----------------------
					1. Normal attack (ignores defense) w/ stamina in place of vigor
					2. Dmg = Dmg * ((HP / 256) + 1) / ((MaxHP / 256) + 1)


	   Bserk ITD Boost	As mentioned in the above hack description, all defense-ignoring attacks
				now respect damage multipliers. Aside from Morph, the only other effect
				that change has is that defense-ignoring weapons are now boosted by the
				bserk status, where previously they were not(*). It's also worth noting
				that the Atma/Omega Weapon is still stripped of its special formula and
				treated like a normal weapon with 255 BatPwr if you use it with Mug or
				Jump, which may or may not be desirable depending on your situation.

				*There's an actually an exception (Setzer's Dice) since FF6 was coded by
				monkeys, but it's not really important and I don't think anyone cares

---------------------------------------------------------------------------------------------------------

	MP 4 Crits		Weapons that consume MP for automatic critical hits now cost an amount
	----------		equal to 1/2 the user's level rather than [12...19]. This is important
				primarily because auto-crits are now a standard feature on rods to take
				advantage of an oddity in the game's code that causes random spellcasts
				from them to also do critical damage - something that spells ordinarily
				cannot do. Combined with a new equipment feature which doubles the odds
				of a random spellcast occurring (from 25% to 50%), this allows rods to
				function as perfectly viable weapons for magically-inclined characters.

				A major caveat to the above, however, is that random spellcast damage is
				affected by row and 3/4 of BNW's rod users die in a gentle breeze. This
				can be bypassed with the Jump command, and random spellcast damage will
				receive the 50% damage boost from jumping, but the downside is that Jump
				also disables critical hits and critical hits have a higher damage boost
				(100%) than jumping with a rod does (Jump only provides the same damage
				boost as a critical hit when you do it with a spear).

				An astute reader may recognize the above bonuses as damage multipliers,
				and no doubt many of you are thinking (judging by the number of times I
				get asked this) that bserk would be the *perfect* way to boost your rod
				user's damage. Except it's not. Despite the fact that random spellcasts
				benefit from every *other* damage multiplier (MP-fueled criticals, Jump,
				Morph), BSERK DOES NOT AFFECT RANDOM SPELLCASTS. Blame Squaresoft.

	   Spoil The Rod	Speaking of poor coding practices, using a rod (or shield) as an item in
				the original game would cause the resulting spell to deal massive damage
				because all items are coded to ignore damage modifiers, namely defense.
				This has been fixed so that spells cast from rods used as items will do
				the same damage that they would have had the character cast it normally.

	   Quartr/Doom Crits	Because the random spellcasts on the Quartrstaff and Doomstick don't do
				"regular" damage, they are not affected by the bugs/"features" mentioned
				above. Thus, this hack allows Quartr to affect all enemies when randomly
				cast from an MP-fueled critical hit (it would normally only affect the
				target of the rod attack) while the Doomstick will instead cast X-Zone
				(rather than Doom) on a group of enemies under the same circumstances.

	   Sword Crits		Conversely to the above, the Holy and Flare spells are hard-coded *not*
				to deal critical damage when randomly cast from the Illumina/Apocalypse.
				More specifically, they are hard-coded to ignore damage multipliers to
				keep the Apocalypse/Illumina from being overwhelmingly OP; Flare not
				getting the Morph damage boost as a result is an unfortunate casualty.

	   Always Load MP	The game now always loads characters' MP at the start of battle, even if
				the Magic command is not present. This allows Gogo to use his MP for rod
				attacks without needing Magic (or Lore) set as a command. It also has an
				unintended side effect of doing the same for Banon and the rod-wielding
				moogles in the opening battle to save Terra from the guards, although
				none of them possess enough MP for more than one critical hit.

	   Always Halve MP	The "MP for crits" property now respects the "1/2 MP costs" flag on the
				Gem Box/Soul Box.

---------------------------------------------------------------------------------------------------------

	Random Number Good	FF6's notoriously streaky Random Number Generator has been replaced with
	------------------	a new one that wipes clean without leaving any streaks behind. Note that
				this is an updated version of the one that existed in previous versions
				of the mod (1.6 and prior) that adds in an extra layer of randomness to
				prevent/discourage RNG manipulation. As you could expect, this affects
				the game's entire combat system to some extent, as well as many of the
				other hacks on this list (i.e. the ones concerning the odds of things).

				For example...

	   Rage & Dance Odds	The two attacks on each rage are now common (2/3 odds of being used) and
				uncommon (1/3 odds) instead of it being an even 50/50 chance. Similarly,
				the 2nd and 3rd steps of each dance now have 5/16 and 3/16 odds instead
				of 6/16 and 2/16 (respectively). Both of these changes combine with an
				overhaul of the attacks involved, because diversity (it's a thing now).

	   Image Nerf		The image status (also known as "blink") now has a 1/3 chance of being
				dispelled each time it blocks a physical attack (instead of 1/4).

	   Formation Odds	The appearance probabilities of the last two enemy formations in a pack
				have been changed from 5/16 and 1/16 to 3/16 (each). This allows for a
				greater	variety of enemy encounters, particularly in larger areas.

	   Odds & Ends		Finally, see below for a list of all random weapon and ability procs:

					RANDOM EFFECT				ODDS
					-------------				----
					Randomly casts spell			25% (50% w/ boost)
					Randomly hits as Wind Slash/Aero	50%
					Randomly sets Stop/Slow (Kagenui)	50%
					Anti-Floating weapons*			50%
					Anti-Undead weapons*			50% (undead only)
					Randomly kills				25% (100% if undead)
					Randomly cleaves/crits* (Zantetsuken)	25%
					Randomly steals (Switchblade)		50%
					Randomly jumps twice (Dragon Helm)	25%
					Randomly sets "Stone" (Dragon bushido)	66%
					Randomly sets "Image" (Mirage)		50%

					*See "Random Weapon Effects" below for details

---------------------------------------------------------------------------------------------------------

	Random Weapon Effects	Several of the game's "random" weapon effects have been modified in some
	---------------------	form or fashion, including...

	   Zantetsuken		The random "cleave" proc on the Zantetsuken now deals a critical hit to
				anything that's immune to instant death, thus increasing its usefulness
				against enemies other than trash mobs. As an interesting side-note, this
				won't prevent ordinary critical attacks from occurring,	resulting in a
				1/128 chance of a *double* critical hit.

	   Chainsaw Massacre	Similar to the above, the random "hockey mask" proc on the Chainsaw was
				altered so that the instant death effect is in addition to damage dealt
				rather than instead of it. Note that this is referred to as "cleave" in
				the printme even though it doesn't have the "cut into pieces" animation
				like the Zantetsuken or Cyan's titular bushido do. This is in order to
				distinguish it from "randomly kills" property that heals undead enemies
				instead of killing them to (re)death.

	   Anti-Undead Weapons	Also distinct from "randomly kills" is the brand-new anti-undead feature
				on the Demonsbane shortsword and Setzer's Tarot cards, described in-game
				simply as "strong vs. undead foes". What you get here is a 50% chance of
				instant death similar to "randomly kills", except that it only works on
				the undead. If the target is an undead *boss*, then it will instead deal
				critical damage (similar to how the Zantetsuken now works).

	   Anti-Air Weapons	Weapons with the "randomly throws" property (renamed to "strong against
				floating enemies" to avoid confusion with weapons that can be used with
				the "Throw" command) originally received a damage boost of 50% against
				non-floating enemies and 200% (triple damage) on floating ones when they
				were randomly "thrown". This large discrepancy rendered them a bit *too*
				powerful in the situations where they were useful and a bit too useless
				otherwise, and so the damage boost for grounded enemies has been raised
				to 100% and their battle powers have been re-balanced accordingly.

---------------------------------------------------------------------------------------------------------

	The X-Fight Effect	The "Offering" effect, which is now on a Setzer-exclusive relic and a
	------------------	Shadow-exclusive weapon, is set to make "Fight" a 2x targetable attack
				with a 25% damage penalty instead of a 4x untargetable attack with a 50%
				damage penalty. This was edited because Setzer possesses several weapons
				that either ignore the penalty (Dice) or otherwise don't rely on direct
				damage to be effective (Tarot, Doom Darts). On Shadow's end, the damage
				penalty is ignored by the random Wind Slash/Aero procs of the Kazekiri
				and Mutsunokami, as well as the random spellcasts of the Sakura.

				Note that the new "X-Fight" also lacks three little-known properties of
				the original: it does not set attacks to "can't be dodged", it does not
				disable critical hits, and it no longer disables random spellcasts.

	   X-Magic Counter	The X-Magic command is now uninterrupted so that it's no longer possible
				to provoke two counter-attacks from the same target with it.

---------------------------------------------------------------------------------------------------------

	Throw Effects		Weapons now retain special properties when used with "Throw", namely the
	-------------		"2x damage to humans" property of the Butterfly and Man Eater knives.

				(For those of you who are curious how Throw determines its damage, it's
				basically a regular attack with the weapon being thrown that ignores the
				user's row, the target's defense, and is given a 100% damage boost.)

	   Gogo Throw		Gogo can now still use Throw even if Shadow is no longer available.

---------------------------------------------------------------------------------------------------------

	Bushido Blade		Physical-damage bushido techniques (Dispatch, Flurry, and Tempest) now
	-------------		rely exclusively on the power of the equipped sword to determine their
				strength; their power levels are set to a given fraction of the user's
				Battle Power (refer to the printme for specifics).

	   SwordTech Charger	Bushido (AKA "SwdTech") no longer takes a bloody lifetime to charge up
				(charge speed will increase as more techniques are learned).

---------------------------------------------------------------------------------------------------------

	Treasure Hunting	Steal/Mug no longer takes the level of the "treasure hunter" or victim
	----------------	into consideration and is now just a straight-up roll against the RNG
				that uses the "hunter"'s speed (% of success = (112 + Speed * 2) / 255).
				Speed also affects the likelihood of a rare steal (Speed / 256) instead
				of the flat 1/8 chance in the original game, making them more common in
				the later game with a little bit of investment in Locke's speed.

	   Quicksteal		Further to the above, successful steal attempts are now treated by the
				game as a "free" action and will immediately refill the ATB gauge of the
				character who performed it (note that this also applies to random steal
				attempts made by a certain knife). This allows the "Mug" command to act
				as a multi-attack rather than just a regular one plus a theft attempt.

	   Two Legs Good	Finally, as I mentioned earlier, treasure hunting has been standardized
				so that only humanoid enemies have items for the taking. This not only
				made it easier for me to balance stealables since I had far fewer foes
				to work with, but it should also make it much easier for players to
				figure out which enemies are worth the effort to 'hunt from.

---------------------------------------------------------------------------------------------------------

	Slot De-Rigging		The Slots command is no longer rigged to force certain outcomes based on
	---------------		how the RNG is feeling - it's now entirely timing-based, and the reels
				have been edited to group the symbols together, FF7-style:


					REEL 1		REEL 2		REEL 3
					------		------		------
					7		7		7
					Bar		Bar		Bar
					Chocobo		Blackjack	Diamond
					Chocobo		Blackjack	Diamond
					Chocobo		Blackjack	Diamond
					Bar		Bar		Bar
					Bar		Bar		Bar
					Diamond		Chocobo		Blackjack
					Diamond		Chocobo		Blackjack
					Diamond		Chocobo		Blackjack
					Bar		Bar		Bar
					Bar		Bar		Bar
					Blackjack	Diamond		Chocobo
					Blackjack	Diamond		Chocobo
					Blackjack	Diamond		Chocobo
					Bar		Bar		Bar


				The two other changes worthy of note are that the Bar-Bar-7 "fuck you"
				spin has been disabled and Bar-Bar-Bar no longer forcibly passes over
				Odin as a potential random esper to be summoned.

				A list of Slots results and their effects can be found in the printme.

---------------------------------------------------------------------------------------------------------

	Make It Rain		The formula for GP Toss (AKA "GP Rain") has been reworked to not only
	------------		make it an attack worth actually using, but to tempt an alternate build
				for your Setzer as the new formula quite strongly considers his stamina.


						OLD GP RAIN FORMULA
						-------------------
					GP Rained = Lv * 30
					Dmg = (GP Rained * 2) / # of foes


						NEW GP TOSS FORMULA
						-------------------
					GP Tossed = Stam * 10
					Dmg = (GP Tossed * Lv) / (2 * (# of targets + 1))


				Further, GP Toss has been designated as a "free targeting" attack (press
				L/R to target multiple foes) instead of being forcibly multi-targeted.
				This is a particularly important feature for GP Toss given its special
				damage split formula that penalizes damage output for every target hit
				rather than the flat 50% penalty used by all (most) other attacks.

---------------------------------------------------------------------------------------------------------

	Umaro Hit Hard		Umaro has four attacks: a regular "Fight" attack and three special ones,
	--------------		two of which are enabled by specific relics. If you count the fact that
				his base stats and the battle power of his Bone Club have been adjusted,
				all four of them have been tweaked and/or fixed by this mod:

				..."Tackle", which is always available, is basically just his regular
				fight command set to ignore defense. Because Umaro's base battle power
				combined with that of his weapon give his regular attacks a maxed-out
				battle power of 255, this is basically his equivalent of Bum Rush.

				..."Rage", the "character toss" ability that's enabled by the Rage Belt,
				was initially just Tackle (a regular attack that ignores defense) set to
				add the battle power of the character being tossed to Umaro's. However,
				since battle power is an 8-bit value (read: it caps at 255), this didn't
				end up being as significant as it was probably meant to be. It now has a
				set battle power of 255 (see above) with the "Gauntlet" bonus applied to
				it for an effective battle power of 382. Further, it now deals critical
				damage if the character thrown is Mog (as it was originally intended to
				do, but didn't due to a bug). As always, Umaro will prioritize throwing
				allies with the sleep or muddle statuses, as this attack removes them.

				..."Blizzard" (formerly "Storm"), which the Blizzard Orb relic enables,
				no longer does half damage (AKA "split loss") if more than one target is
				present. Its power has been lowered *slightly* (100 -> 90), but Umaro's
				stats more than make up for that. Note that this is the same "Blizzard"
				attack that appears in the Snowman Jazz dance (refer to the printme for
				details) with two notable distinctions. One, it uses Umaro's stamina to
				determine its damage rather than his (rather abysmal) magic power. Two,
				it bypasses the enemy stamina check to see whether or not it sets slow.

	   Attack Odds		The odds of each attack being used have also been adjusted. Previously,
				they varied depending on whether Umaro had one or both of his special
				relics equipped - having both on was often undesirable as the odds of
				Rage or Storm being used were higher if only their one special relic was
				equipped. To simplify things, all three of Umaro's special attacks now
				have a hard 76/255 (roughly 30%) chance of being used, otherwise Umaro
				will use his regular fight command. This gives fight a 179/255 chance
				(roughly 70%) of being used if neither special relic is present, 103/255
				odds (or 40%) if one is equipped, and 27/255 (10%) if both are.

	   Bare Naked Yeti	Finally, Umaro's equip menu is no longer locked down so that you can now
				(un)equip him just like a normal character. Of course, he still	has zero
				options aside from what he starts out with - this change was made purely
				to correct a bug in the original game wherein the "unequip all of your
				d00ds" dude wouldn't take Umaro's relics away since it would also remove
				his other equipment (that you'd then have no way to get back on him).

---------------------------------------------------------------------------------------------------------

	Defend Buff		The "defend" battle command now halves both physical and magical damage
	-----------		instead of just physical damage. This is a rather important hack for the
				crazies who are trying for a level one Gogo (and yes, it's been done).

---------------------------------------------------------------------------------------------------------

	Status Display		This is a collection of hacks that greatly improve how the game conveys
	--------------		the presence of status effects in battle to the player.

	   Status Auras		Removes the glowing auras from the safe, shell, and reflect statuses.
				Because only one aura can be displayed at a time, buffing your party to
				any significant degree otherwise quickly devolves into a confusing mass
				of bright colors wherein only the status with the highest priority will
				be displayed. The three statuses which are still represented with auras
				are either unable to coexist on the same target (haste and slow) or will
				otherwise completely override the other two for its duration (stop).

	   Targeting Panel	When choosing a friendly target for an item or spell in battle, a panel
				appears to display any status effect present on each character. Similar
				to the problem with auras, only one status could be displayed here at a
				time and the order in which the 25(!) possible results were prioritized
				was questionable at best. This panel now displays *only* the presence of
				any combination of the safe, shell, and reflect statuses.

	   Rerise On ATB	So, that list of 25 possible status effects I mentioned a second ago?
				Well, rerise (AKA "Life 3") is dead fucking last on the priority list -
				strange, given that it has absolutely no visual indication unlike, say,
				float, muddle, blink, imp... or literally everything else that will take
				precedence over it being shown. It's almost like this game was coded by
				idiots or something.

				The presence of the rerise status on a party member is now indicated by
				their ATB bar turning green while charging (it still turns yellow when
				full). Needless to say, the effects of this change are lost if the ATB
				gauge is disabled in the config menu.

	   Status Scan		Finally, since enemies aren't exactly as forthcoming about their current
				status as your characters are, the Scan spell will now display all of a
				target's status effects has in addition to its weaknesses. This can be
				useful, for example, for figuring out whether or not you remembered to
				put Slow on a boss (or for figuring out why Slow won't work it).

---------------------------------------------------------------------------------------------------------

	HP/MP Text Color	Text coloration in battle will now change to indicate MP damage (red) or
	----------------	healing (blue). A side effect of this patch is that it also alters the
				color of the "reflect" shield when attacks are bounced off of it due to
				the fact that the MP healing is piggybacking off of the same palette as
				reflect uses. This also means that the MP healing font is susceptible to
				the same little-known bug as reflect wherein the coloring gets fucked up
				for the duration of any fight in which Crusader is summoned.

	   Bad Decoration	This fixes the “Crusader redecorates reflect barriers” bug.

---------------------------------------------------------------------------------------------------------

	Original Graphics	Restores the following sprites to their original (uncensored) versions:
	-----------------
					• Siren
					• Goddess
					• Chadarnook
					• Critic
					• Barb-E/Madam/Dahling

				(Note that most of these have been renamed)

				This hack is omitted from the "clean" version of Brave New World.

---------------------------------------------------------------------------------------------------------

	New Window Style	Added a new window style as the default one, with the old default style
	----------------	replacing #8 (which was used only by assholes and mental patients).

---------------------------------------------------------------------------------------------------------

	Menu Item Sorting	Using the "arrange" command in the inventory now sorts item types in a
	-----------------	manner that actually makes some fucking sense:


					NEW ORDER:		OLD ORDER:
					--------------		--------------
					Tool			Dagger
					Throwing Star		Sword
					Ninja Scroll		Spear
					Dagger			Katana
					Sword			Rod
					Spear			Brush
					Claw			Throwing Star
					Katana			"Other" Weapon
					Casino Weapon		Casino Weapon
					Rod			Claw
					Brush			Shield
					"Other" Weapon		Helmet
					Shield			Armor
					Helmet			Tool
					Armor			Ninja Scroll
					Relic			Relic


	   Alphabetical Rage	In addition to all of the other changes we've made to make Rage the best
				skill it can be, we've also utilized a patch that sorts all of his rages
				alphabetically instead of by their order in the code. Another new patch
				condenses the list of rages in the skills submenu to use only the first
				64 slots (the total number of rages in BNW) instead of all 256.

	   Alphabetical Lore	Lores are also listed alphabetically now, as well as condensed in the
				menu. Neither of these are due to a hack, however - I just manually
				re-arranged them in the spell index.

	   Compact Spell List	Finally, the "magic" menu for each character is now condensed in battle
				to remove the empty spaces that previously existed due to the nature of
				how the code dynamically generated the lists of known spells.

---------------------------------------------------------------------------------------------------------

	Obscure Menu Hacks	This is a collection of lesser-visible edits to the menu screen.
	------------------

	   Overlay & MP Costs	This removes the small overlay which identifies the skill submenus (i.e.
				Espers, Spells, Bushido...) because it was unnecessary and it obscured
				the lower-right portion of the information panel above it (the mod makes
				use of this real estate whereas vanilla did not). The only useful piece
				of information that appeared in this overlay was the MP	cost of a chosen
				spell; spell costs are now visible by default in the main menu panel.

				(I say "by default" above because a little-known feature of the original
				game is that you can press "Y" in the spell menu to toggle MP costs in
				the main panel; what's shown by default is the spell percentage learned,
				which isn't exactly useful/relevant information in Brave New World.)

	   Esper Equip Screen	Speaking of little-known features in the original game, a summary of the
				party's equipment can be viewed by selecting the equip or relic menu
				options, pressing L/R to select the entire party, and then pressing left
				on the D-pad. This screen has been edited in our mod to also show your
				equipped espers, since they're now an important part of your load-out.

	   Y Equip Relics	Quickly switch between the equip and relic menus with the "Y" button.

	   Unequipium		This fixes a bug wherein characters' max HP/MP values would not update
				after removing equipment that boosts it until they were in active party,
				leading to incorrect values being shown on the party creation screen.

	   Blitz Screen		Blitz names are now displayed in the menu instead of just the inputs.

	   Yellow Streak Fix	This removes the small yellow line that appears in Gogo's command menu.

---------------------------------------------------------------------------------------------------------

	Optimize/Hotswap Ban	Because the "optimize" command only considers raw defense/battle power,
	--------------------	it's generally a poor judge of usefulness - especially given the many
				other benefits that most equipment now has. This is the *actual* reason
				for disabling the command, although our justification is that it didn't
				play nicely with the "dual wield" property on weapons.

				The other function that didn't jibe well with baking the "dual-wield"
				property into weapons was the ability to swap out them and/or shields in
				mid-battle. Unlike optimize, which we were all too glad to take out back
				and put down, we were actually kind of sad to see this one go. Not sad
				enough to try and fix it, mind, but still kind of sad nonetheless.

	   Optimize Fix		The only instances in Brave New World where the optimize code is still
				used are when Edgar and Terra are force-equipped when they re-join you
				immediately prior to boss battles, and we utilized an external patch to
				prevent it from doing shit like making Edgar wear a drill as a hat.

				(Also, it no longer ignores the Blood Sword and Soul Sabre.)

	   Shop Display		In the same spirit as axing optimize because weapons and armor are now
				much more than their primary stats, so too have we done away with the
				symbols that appear when buying equipment that compares it to what you
				already have equipped. Again, since only raw battle power/defense was
				considered, we felt that the partial information it provided was worse
				than none at all. Players are encouraged to use the printme to look up
				information about equipment or, failing that, the extended information
				panel in your inventory screen (double-click on a piece of equipment to
				display who can use it, then press left on your D-pad to see its stats).

---------------------------------------------------------------------------------------------------------

	Rewards Display		The Colosseum menu now displays the prize for any item wagered without
	---------------		having to commit to the wager beforehand.

				Note that the Colosseum has been completely reworked and standardized to
				make it more obvious/intuitive what items can be wagered to win fabulous
				prizes and what will simply earn you a date with Mr. Chupon. Simply put,
				any item with no resale value is considered rare and can be bet at the
				Colosseum - everything else is not rare and wins you literally nothing.

---------------------------------------------------------------------------------------------------------

	MP Party Restore	The "choose a party screen" now restores the MP of all characters to max
	----------------	instead of just HP. This was done primarily to act as a full party heal
				prior to the Battle of Narshe, though it's also a good convenience hack.
				Not only does it remove the need to visit an inn after swapping out your
				team, but it also affects picking a character to fight in the Colosseum.

---------------------------------------------------------------------------------------------------------

	NoGainz			There is now an option in the config menu to disable exp. gains (and, by
	-------			extension, spell point and EP gains) from battle. This feature is mostly
				intended for challenge gamers trying a low-level game, but can also be
				useful for someone who just wants to farm for GP without over-leveling.

				(NOTE: this option is NOT a challenge to the size of your penis. Anyone
				who leaves this option on and then bitches to us about how hard the mod
				is will be laughed at/ridiculed and then told to gain a fucking level.)

---------------------------------------------------------------------------------------------------------

	Get Back Here, Shadow!	Shadow won't randomly run off on you anymore at any point during Sabin's
	----------------------	scenario or if you hire him in Kohlingen. He's also kind enough now to
				leave all of his shit behind when he leaves you at Baren Falls.

	   Zozo Unequip		Further to the above, everyone is force-unequipped after the scene with
				Ramuh at Zozo so that nobody (Shadow >.>) runs off with your shit. Note
				that, with this change, THERE ARE NO MORE INSTANCES OF SOMEONE RUNNING
				OFF WITH ANY OF YOUR STUFF, so don't worry about it anymore, 'k?

	   Scenario Unequip	In a similar, though less severe case of the above, Locke and Celes are
				now unequipped at the end of their scenario. This removes the incentive
				to put it off until last since it no longer "locks" your best equipment
				into two characters you won't be seeing again for a little while.

	   Arvis Unequip	Finally, Arvis is now an unequip dude following the Battle of Narshe, so
				you don't have to go to the trouble of forming a party of everyone who's
				*not* going to Zozo just so you can take all of their shit off.

---------------------------------------------------------------------------------------------------------

	B Button Dash		Obsoletes Sprint Shoes by adding a dash button (B). Note that this patch
	-------------		has been modified from the original version to disallow dashing during
				the following points in the game where dashing was originally disabled:

					• The opening sequence (Magitek raid on Narshe)

					• Any *other* time you're wearing Magitek armor)

					• The "Save Terra" sequence (the moogle battle)

					• The Battle of Narshe

					• Celes's opera solo

					• Daryl's Tomb (the stair/flashback sequence)

				This patch has also been *further* modified to replace the now-useless
				optimize/empty slot in the config menu with the option to make running
				the default speed (where holding B will make you walk at normal speed).

	   Fancy Walking	Characters now continue taking poison damage whilst walking diagonally
				(i.e. up or down stairs), whereas they originally didn't.

---------------------------------------------------------------------------------------------------------

	Save & Restore		In response to the fact that the ability to save the game at any time is
	--------------		a feature of the software required to play this mod in the first place,
				we made the active decision to shift Brave New World's difficulty model
				away from save denial (which, frankly, died out with blast processing)
				and more toward	inventory management with the following changes:

					• Several save points have been added to key areas

					• Some save points are now also "full recovery" points

					• Tents and sleeping bags have been removed from the game

				In short, recovery items are now more important since you can't just pop
				a tent just before every boss fight, and saving the game is a tool meant
				to prevent you from losing huge amounts of time to fuckups. To that end,
				the time-honored advice of "save early and often" holds true becuase...

	   Game Over, Man!	Death in battle now kicks you back to the menu screen instead of to your
				last save. This was done because, while this would retain all experience
				gained, it would not retain any esper boosts (and that's bad).

---------------------------------------------------------------------------------------------------------




				5. BUGS & KNOWN ISSUES




---------------------------------------------------------------------------------------------------------

      •	During certain battles, most notably the Cranes, the menu cursor will become difficult to see or
	disappear entirely - this is an emulator issue and has absolutely nothing to do with the mod
	(ditto for off-screen characters appearing layered over the HUD during in-battle cutscenes)

      •	Another emulator-specific issue involves the battle interface randomly "flashing" whenever an
	action is about to take place; this seems related to using the SNES9x Next (AKA SNES9x 201) core
	with RetroArch and can be fixed be switching to standard SNES9x

      •	More so here than in the original game, renaming your characters (especially those with short
	names like Cyan, Gau, and Mog) can result in weird formatting in dialogue boxes; the ones that
	appear during battle cutscenes are notable offenders since they don't wrap normally and can
	potentially result in text overrunning the dialogue window

      •	Inherent statuses (i.e. regen from the Life Bell) will not initialize properly on characters who
	are dead at the beginning of the battle, and they will be immune to that status for the duration
	of it; further, the transitions during the Ifrit/Shiva and Chadarnook battles will trigger this
	bug for any character who is dead when they occur (or fix it if they are brought back to life)

      • When Gau (or Gogo) rages an enemy with a single-target move that affects friendlies (Soldier,
	Conjurer, Repo Man, Flan, Witch) during a side attack, he will never target his allies on the
	opposite side; this is due to the "one side only" targeting flag that such spells all have set

      • Physical Rage attacks that set sleep (Raven and Eye Goo) will reportedly always miss on enemies
	with large sprites; this one is particularly difficult to nail down due to its transient nature
	and tendency to randomly fix iteself in the process of troubleshooting it

      • Gau occasionally likes to slowly creep forward across the battlefield until he's all up in your
	enemies' shit; I'm fairly certain this is a carry-over from vanilla that's being exacerbated by
	something we've done, but I haven't the foggiest idea what and I don't care enough to find out

      •	A variant of the above bug can be seen by summoning Phoenix against enemies with large sprites;
	again, this is a vanilla bug and large enemy sprites seem to be a common denominator with them

      •	Another hold-over from vanilla: foes will retain the imp sprite if cured by anything other than
	the titular spell; only three enemies (Griffin/Osprey and Tumbleweed) are capable of doing this

      •	As was (again) the case in vanilla, floating, vanished targets will still be stripped of their
	"clear" status if a ground-based non-physical attack (i.e. Quake) misses them

      •	When the Quartrstaff multi-targets its spell proc on an MP-fueled autocrit, it will target *all*
	enemies - including ones who are already dead - due to the way that the targeting is hard-coded

      •	Treasure chests containing key items (such as the ones at Ebot's Rock) will close if you go into
	the menu screen and will be empty if you attempt to re-open them; this is another vanilla bug

      •	If the first battle with Ultros ends while Edgar in the air (Jump is available much earlier in
	Brave New World than in vanilla), the following cutscene will play out without him

      •	There have been occasional reports of the rich man's house at South Figaro experiencing slightly
	high load times during Locke's scenario; we have absolutely no fucking clue why

      •	This little gem: https://www.youtube.com/watch?v=4BaY8C_4TJM

---------------------------------------------------------------------------------------------------------




				6. VERSION HISTORY




---------------------------------------------------------------------------------------------------------

	Version 1.9.0 (January 06, 2018)

 • Added new hacks which allow stamina to influence counter-attacks and the possibility of "true knight"
   characters taking hits for healthy allies (critically-wounded characters are still always protected)

 • Fixed a bug where stamina would not protect against status ailments set by enemy "special" attacks

 • Added a hack to condense the in-battle spell menu (removes all empty spaces)

 • Fucked around with the spells that each character learns again (highlights: Relm gets Life and Stop,
   Mog picks up Haste, Celes learns Demi much earlier now, and Warp is again pushed back to the WoR)

 • The Life spell now revives to 250~500 HP instead of 1/4 maxHP; Phoenix Downs now revive to 1 HP

 • Raised Cyan's base stamina; lowered the power of the Dragon and Eclipse bushidos to compensate

 • Raised the chances for the Dragon bushido to set Stone from 50% to 66%

 • Raised the power of the Aurabolt blitz and swapped the levels at which it and Mantra are learned

 • Edited the GP Toss formula to do 50% more damage (note: edited Katanasoul's stats to compensate)

 • Lowered the power of the Blackjack and Solitaire slot spins

 • Lowered the cost of several spells, including Demi, Rasp, Dispel, and SleepX

 • Lowered the hitrate of several magical attacks to help make magic evasion more useful

 • Reworked & rebalanced swords to offer more (and better) choices for vigor-built characters

 • Swords that consume MP for critical hits now respect the "1/2 MP costs" effect of the Gem/Soul Box

 • Spears now inherently possess the "may guard allies" property instead of random counter-attacks

 • Adjusted the properties of the Wind Slash and Aero procs from the Kazekiri and Mutsunokami

 • Removed the Kagenui's speed boost and slightly adjusted the boosts on Shadow's other weapons

 • Changed Setzer's dice to boost stamina instead of magic and vise-versa for his other weapons

 • The Morning Star and Kusarigama now ignore defense instead of being anti-undead

 • The Demonsbane is now anti-undead in addition to holy-elemental

 • Raised the proc rate of anti-undead weapons from 25% to 50%

 • Fixed a bug where using items on undead characters would randomly kill them

 • Renamed the Diva Brush to Dali Brush and the Magic Brush to Monet Brush

 • Changed the animation of several weapons; also swapped the animations of the two "Blizzard" attacks

 • Corrected the Stormfang menu description

 • The BatPwr of the Soul Sabre and Omega Weapon now display correctly in the item menu

 • The Soul Sabre/Blood Sword are no longer ignored by the "Optimize" routine; the Omega Weapon now is

 • Switched the Colosseum opponents/prizes for the Masamune and Kagenui (and a few others)

 • Celes now starts with an Iron Cutlass instead of a Mythril Bolo

 • Gogo can now use Throw even if Shadow is dead

 • Interceptor now sets Sap

 • Lowered Golem's defense from 192 to 128

 • Made several changes to the Battle of Narshe

 • Made an important update to Atma Weapon's script

 • Fixed a bug in the Soul Fire script (Wrexsoul fight)

 • Enabled/disabled random encounters on a few maps for better consistency

 • Aquilas no longer have any MP as they do not use any attacks that use it

 • Phunbaba and Doom Gaze now give 10 spell points when defeated as other bosses do

 • Fixed a bug where it was not possible to run from all of the enemies in the New Mines

 • Rewrote Gau's tutorial to match how Leap now functions; also added a new line of dialogue for Gau

 • Added more screenshots, boxart with cart label, and enemy graphics to the unlockme image gallery

---------------------------------------------------------------------------------------------------------

	Older Versions

 • Release notes for older versions are located at: http://btb2.free.fr/mods/ff6/Version.txt

---------------------------------------------------------------------------------------------------------




				7. CREDITS & CLOSING




---------------------------------------------------------------------------------------------------------

	Many glorious thanks to...

	• The original authors of several of the patches/assembly hacks that our mod includes:

		ArmorVil	(SwordTech Charger)
		Assassin17	(Genji Glove Fix, Optimize Fix, Overcast Fix, Sketch Fix, Auto-Swordless
				 Runic, Brushless Sketch, Persistent Rage Fix, Yellow Streak, Throw Down
				 the Gauntlet, and an extra-special thanks for Alphabetical Rage)
		DN		(Status Display, Shop Display, Overlay & MP Costs, Esper Equip Screen,
				 Quartr/Doom Crits, help w/ Esper Junction, Esper Bank, Blind Accuracy,
				 the Life spell, and condensing/cleaning up the Rage/Equip/Config menus)
		GrayShadows	(Compact Spell List)
		HatZen08	(Reward Display)
		Imzogelmo	(HP/MP Text Color)
		Leet Sketcher	(Blitz Screen, Unequipium, Y Equip Relics)
		Lenophis	(Bad Decoration, Fancy Walking)
		Master ZED	(B-Button Dash)
		Nowea		(Esper Junction, Speed Tweak, Quicksteal, and the rare steal formula)
		Seibaby		(Esper Junction, First Strike/Speed Tweak, Tank & Spank/Smart Cover,
				 Quicksteal & the rare steal formula, Leap Anywhere, MP Party Restore,
				 and help w/ the Battle of Narshe, optimize stuff, Life, and Dice)
		Terii Senshi	(Evade Fix, Original GFX, Vanish/Doom Fix)
		Think		(nATB, Esper Junction, Random Number Good, Rage Status, Throw Effects,
				 X-Magic Counter, "Special" Death Fix, Always Load MP, Always Halve MP,
				 Gogo Throw, ITD weapons, and help fixing the physical damage formula)
		Zeemis		(New Window Style)

	• The authors of Synchysi's cipher for this game's tangled mess of spaghetti code:

		Assassin17
		Dragonsbretheren
		Imzogelmo
		Lenophis
		Novalia Spirit
		Terii Senshi

	• The creator(s) of Zone Doctor, a map editor used by both Synchysi and myself:

		Giangurgolo
		---
		Geiger
		Imzogelmo
		Lenophis
		Lord J
		Novalia Spirit
		Sleepydude
		Yousei

	• The creator(s) of the editor that I (BTB) used to make my changes to the mod:

		Lord J
		---
		Aquillion
		Assassin
		Cless
		Dennis Ouk
		Drakkhen
		Imzogelmo
		JCE3000GT
		Lenophis
		Master ZED
		Novalia Spirit
		Pat Buns
		Poco Loco
		Sleepy Sheepy
		Supernova
		Terii Senshi
		The Constable
		The Famous Sheep
		Yousei
		Warrax
		Zeemis

	• (A)Dummy, Dr. Letha, Lols, and Kain for providing screenshots for the gallery & boxart

	• Bauglir for the alternate/bonus Dadaluma sprite (and Madsiur for making the patches)

	• Gi Nattak and Jackimus, for y'all's help with adjusting the mod's audio settings

	• KingMike of RHDN, for your help with optimizing the esper restriction hack

	• Djibriel, whose in-depth FAQ provided me (BTB) with much-needed insight and inspiration

	• Master Zed (again), whose bug FAQ served as a handy checklist of things that needed fixing

	• Terii Senshi (again), whose algorithms FAQ confirms that (s?)he is, in fact, a wizard

	• Madsiur and everyone else of the FF6Hacking community for their continued support

	• Everyone of the Insane Difficulty/New Game+ community, including (but not limited to)...


		Abaddon
		-------

	Ah, Abaddon, my favorite floppy-headed Canadian. You're sort of like the Dave Murray of NG+ if
	Dave Murray was constantly giving his bandmates horrible ideas that they wish they'd never had.
	I just want you to know that you are solely responsible for every line in Clean New World that's
	actually dirtier than the ones they replace.


		Advent
		------

	I can't even begin to count the number of players that were turned on to Brave New World between
	you and Stann pimping it out to anyone looking for a fun mod to play. You help keep my forum...
	how should I say this... entertaining, and I'm really glad knowing that I always have someone to
	talk to if I need it. Thanks a lot, man. Seriously.


		Anima Zero
		----------

	It says a lot that whenever I'm looking for a quick opinion, you're one of the first people that
	I always think to ask. Your perspective as a challenge gamer that has somehow managed to retain
	your precious, precious sanity means a lot to me. You've taught me that real men take down Randy
	"Macho Man" Savage at level 3 and that Wrexsoul is a little bitch who needs to die before he can
	even move. You've taught me that Gogo is horribly broken and probably always will be (though at
	least a little less so than he was before). And most importantly, you've taught me that platonic
	love *can* exist between two grown men (no, wait, that was Wayne's World).

	So, just those first two things, then.


		Bishop
		------

	Thank you so much for lending your extensive knowledge of Ye Olde Broken English to our efforts
	in making Cyan actually speak like the developers intended. And beyond that, thank you just for
	being an awesome member of the community and a great friend to talk to about Buffy or just what
	ever happens to be bothering me at the moment. I hereby dub thee Pope Woolsey IX, because just
	"Pope Woolsey the First" doesn't really seem to command much authority.

	Also, we are no longer accepting bug reports from you. I don't know what you did to your ROM and
	I don't *want* to know.


		DN
		--

	Menu hacking is an absolute pain in the ass (or so I'm told), so it's greatly appreciated that
	you are practically pulling menu hacks out of your ass. You and Think have done so much for our
	mod at this point that you're practically unofficial members of the team. I sincerely hope that
	your work for us has in some way helped or inspired your work for your own mod, and I hope that
	you can pull through the trials life has sent your way and find your true calling one day.


		Funnyman
		--------

	Dude, I don't even know where to start. You've shown a degree of dedication to this mod that's
	exceeded only possibly by my own. I can't tell you how many nights I spent during development
	(and still even now) obsessing over the tiniest details of game balance and wondering if it all
	would ever end up making a difference, and you more than anyone else have made me feel like my
	efforts were not in vain. I really wish that we had more beta testers like you, because you're
	pretty much a game designer's dream (or, at least a *good* game designer's dream).


		Hart Hunt
		---------

	You may not have played Brave New World as much as much everyone else I'm mentioning has (except
	for Arch, I suppose), but you've given me just as much moral support - if not far more. You're
	like the Ma-Ti of ID if Ma-Ti was totally metal and not a huge pussy. Seriously, you're one of
	the kindest people I've ever met. Don't ever change \m/


		Lockirby
		--------

	You crazy, masochistic bastard. You were the first one to take a mod I thought was unbreakable
	and break it like a fucking Bethesda game. And since apparently even that wasn't enough for you,
	you did it all over again while blindfolded. If I've learned at all anything from you, it's that
	no matter how hard I try to keep people from breaking my mod, people will just keep trying to do
	it anyway. And honestly, watching them succeed is half the fun (the other half is the inevitable
	fan art of Celes committing suicide by smashing herself over the head with a morning star).


		Mishrak
		-------

	First and foremost, thanks for the Excel lessons. It's not often that I pick up skills with my
	hobby that are actually useful outside of it. Beyond that, thanks for that awesome character
	planner you made (and accepting my humble input with it), for one of the funniest moments I've
	ever seen on a non-GDQ stream, and for all the exposure Brave New World ended up getting as a
	result. Lastly, thanks just for being a great friend to us and a member of the community that
	we're always glad to have around; your attitude gives us all something to aspire to.


		Nakar
		-----

	I've read your build guide more times than I care to admit (also, I stole a lot of what I wrote
	in the character descriptions from it. Thanks for that >.>) You've helped me understand so much
	about my own mod and continue to provide me and the rest of the community with a great wealth of
	information that I know Brave New World is much better off for having.


		Nowea
		-----

	More and more these days, you've come in my eyes to represent the average player in a community
	full of insane challenge gamers and masochists. You're always willing to offer a humble opinion,
	and I'm thankful for all of the problems we've been able to address as a direct result of having
	seen you suffer through them. You're kind of like the Job of our community, really.


		Secondadvent (AKA "Revenge of the Advent")
		------------------------------------------

	You just love finding broken shit in our mod, don't you? I would've been perfectly happy never
	knowing that Quicksand worked on bosses since nobody except you would ever think to dance the
	Desert Aria against a fucking tonberry. Also, I think you're the only person to have actually
	legitimately found the WoB Refract backdoor, which only furthers my belief that you are a
	sorcerer and I thus now fear you. Please don't turn me into a toad :(


		Stann
		-----

	You're one of the first people I met at Insane Difficulty, and definitely one of the those who
	convinced me that it was a place worth sticking around. Your help with testing pretty much every
	major release thus far has been greatly appreciated, and your perspective as a smart player who
	actually knows what he's doing, yet just wants to have some fun while playing a game has been
	invaluable in helping us to fine-tune this thing and make it the very best that it can be.


		Think
		-----

	You went *way* above the call of duty on this, dude. At this point, you have easily contributed
	more work to this project than anyone who isn't named BTB or Synchysi. I can't think of anything
	else to say except thank you and I've got a fence that I think you'll have a blast painting.

---------------------------------------------------------------------------------------------------------

		...looking for the guys responsible for this mess?

			btb@abusemynipples.biz	(BTB)
			synchysi@yahoo.com	(Synchysi)

	Please feel free to contact us with your questions, feedback, comments, concerns, observations,
	complaints, insults, ridicule, screeds, japes, thrusts, death threats, and marriage proposals.

		Or better yet, visit any of our discussion forums...

			http://www.ngplus.net/index.php?/forums/forum/3-mods/
			http://www.ff6hacking.com/forums/showthread.php?tid=3298
			http://www.insanedifficulty.com/board/index.php?app=forums

			...or join us on Discord: https://discord.gg/eHVZ9xW

		Is liking things on Facebook your bag, baby? If so, then visit us at:

			http://www.facebook.com/FF6BNW/

	And finally, how would you like to own Brave New World on a legit SNES cart? Our friends over at
	Retro Circuits specialize in high-quality reproduction carts of both original games and fan-made
	hacks such as ours at competitive prices. I really suck at sales pitches, so here's a link:

		http://www.retrocircuits.com/product/final-fantasy-6-brave-new-world/

---------------------------------------------------------------------------------------------------------

	I'm afraid that's all we know, gentlemen.
