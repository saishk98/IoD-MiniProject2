// Game data stored in a single array for efficiency
const games = [
  {
    id: 1,
    name: "DC: DARK LEGION (2025)",
    year: "2020+",
    image: "assets/Games/DarkLegionDC(2025).jpg",
    classification: "Other",
    description: [
      "Welcome to DC: Dark Legion! Experience unprecedented adventures in the DC Universe in this mobile game.",
      "Recruit and upgrade over 50 iconic DC Super Heroes and epic Super-Villains to build a powerful team of champions and save Gotham City from the Dark Multiverse!\n\n",
      "Forces from an evil universe invade Earth and make Gotham City their base for the conquest of the entire world.",
      "Super Heroes and Super-Villains unite to fight back. But they need you to guide them in the battle for hope!\n\n",
      "DC: Dark Legion is a free-to-play mobile strategy game with PvP battles and multiplayer functionality. In this game, you can recruit and upgrade iconic DC Super Heroes from the Justice League such as Batman, Superman, Wonder Woman and Aquaman. ",
      "Additionally, you have the opportunity to assemble a team of powerful Super-Villains including the Joker, Lex Luthor, Harley Quinn, the Batman Who Laughs with his Dark Knights and many others.",
      "Engage in epic PvP battles and strategically plan your moves to emerge victorious.  Build your own team of heroes or villains and save Gotham City from the Dark Multiverse!"
    ]
  },
  {
    id: 2,
    name: "DC HEROES UNITED (2024)",
    year: "2020+",
    image: "assets/Games/HeroesUnitedDC(2024).jpg",
    classification: "Other",
    description: [
      "Welcome to DC Heroes United, where you hold the power to shape heroic destinies!\n\n", 
      "Immerse yourself in an all-new Genvid Interactive Series and join a global community of Justice League fans to influence the story of DC's Earth-212 forever.\n\n",
      "As the Tower of Fate threatens reality, guide iconic characters like Superman, Wonder Woman and Batman on a quest to save Earth-212 from a malevolent force.\n\n",
      "In this thrilling adventure, every fan decision matters. New episodes air live and you'll have chances to participate in the choices of the upcoming episode throughout the week. Will Superman embrace his humanity? Can Wonder Woman forge her own path? And will Batman confront his inner demons?\n\n",
      "Collaborate with fellow fans to deliberate the best course of action as you navigate character alliances and inner struggles. With each episode, the fate of this DC world hangs in the balance.\n\n",
      "Every day, leading up to an episode, the choices will be unveiled and you'll have only a few days to participate. The choices that win will air in the resulting episode, becoming the story's canon. There is no reset button.\n\n",
      "Participating in choices takes Story Tokens. You can earn Story Tokens free by volunteering with LexCorp and joining the EveryHero Project, a roguelite experience also included in the app that's simple to play, but difficult to clear.\n\n",
      "In the EveryHero Project, Lex Luthor has created a simulation blending the powers of Super Heroes and Villains. Here, you'll test your mettle by facing off against hordes of enemies numbering in the thousands, including the likes of Bane, Poison Ivy and many more across Gotham, Metropolis and other new locations added weekly.\n\n",
      "LexCorp's simulation is directly integrated into the series, with the show and game influencing each other. By participating in the simulation, you're a part of history. And by unlocking more Heroes and abilities, you'll help the Justice League in the weekly series.\n\n",
      "Join us in DC Heroes United and shape the course of legends. Are you ready to answer the call to heroism and shape the future of your favorite characters?"
    ]
  },
  { 
    id: 3, 
    name: "BATMAN: ARKHAM SHADOW (2024)", 
    year: "2020+",
    image: "assets/Games/BatmanArkhamShadow(2024).jpg",
    classification: "Arkham",
    description: [
      "Become The Knight in this groundbreaking entry into the famed Arkham series. It’s the Fourth of July, and Gotham City is under attack by a new threat: the mysterious Rat King and his cultish devotees.\n\n",
      "As widespread rioting engulfs the city, Batman races to prevent this so-called “Day of Wrath” before it all goes wrong.\n\n",
      "Experience the World of Batman Like Never Before: Immerse yourself in all the grit of Gotham City with the power of VR, and take down its most notorious criminals.\n\n",
      "Hard-hitting Arkham Combat: Made exclusively for VR - choose from fan favourite gadgets and bold fighting styles.\n\n",
      "Friends, Foes and Other Familiar Faces: Meet Dr. Quinzel and Dr. Crane before they became Harley Quinn and the Scarecrow, as well as other iconic characters including Harvey Dent, Ratcatcher and Jim Gordon."
    ]
  },
  { 
    id: 4, 
    name: "SUICIDE SQUAD: KILL THE JUSTICE LEAGUE (2024)", 
    year: "2020+",
    image: "assets/Games/SuicideSquadKillTheJusticeLeague(2024).jpg",
    classification: "Other",
    description: [
      "From Rocksteady Studios, the creators of the Batman: Arkham series, Suicide Squad: Kill the Justice League is a genre-defying third-person action shooter where the ultimate band of misfits must do the impossible to save the world: Kill the Justice League.\n\n",
      "Join the newly “recruited” members of Amanda Waller’s infamous Task Force X (aka the Suicide Squad), Harley Quinn, Deadshot, Captain Boomerang and King Shark, as they set out on an impossible mission to Kill the Justice League.",
      "Drop into an expansive and dynamic open-world Metropolis ravaged by Brainiac’s invasion and terrorized by the heroes who once protected it.\n\n",
      "Each Squad member brings their own traversal mechanics to help them navigate a sprawling and battle-torn Metropolis, combining free-roaming exploration and combat verticality for an unforgettable experience.",
      "Players are free to experiment with a variety of different play styles to unleash maximum damage on their enemies. Whether in single player or online with up to three of your friends, players can take on this suicide mission their own way."
    ]
  },
  { 
    id: 5, 
    name: "DC HEROES & VILLAINS (2022)",
    year: "2020+",
    image: "assets/Games/HeroesVillainsDC(2022).jpg",
    classification: "Other",
    description: [
      "A mysterious pulse has stripped away all superpowers throughout the world. Heroes and Villains are forced to team up in a shaky alliance to fight for their survival against the Quintessence of Evil in this all-new Puzzle RPG game! ",
      "Assemble your team of fan-favorite DC Universe Super Heroes and Super-Villains to battle across iconic landmark locations like Gotham City, Metropolis, and Themyscira. Strengthen your team and unite with others to survive extinction!"
    ]
  },
  { 
    id: 6, 
    name: "GOTHAM KNIGHTS (2022)",
    year: "2020+",
    image: "assets/Games/GothamKnights(2022).jpg",
    classification: "Other",
    description: [
      "Batman is dead. A new expansive, criminal underworld has swept the streets of Gotham City. It is now up to the Batman Family—Batgirl, Nightwing, Red Hood, and Robin—to protect Gotham, bring hope to its citizens, discipline to its cops, and fear to its criminals. ",
      "From solving mysteries that connect the darkest chapters in the city’s history to defeating notorious villains in epic confrontations, you must evolve into the new Dark Knight and save the streets from descent into chaos.\n\n",
      "Gotham Knights is an open-world, action RPG set in the most dynamic and interactive Gotham City yet. In either solo-play or with one other hero, patrol Gotham’s five distinct boroughs and drop in on criminal activity wherever you find it."
    ],
    subheading_six: "YOUR LEGACY BEGINS NOW. STEP INTO THE KNIGHT."
  },
  { 
    id: 7, 
    name: "LEGO DC SUPER-VILLAINS (2018)",
    year: "2010-2019",
    image: "assets/Games/LegoSuperVillainsDC(2018).jpg",
    classification: "Lego",
    description: [
      "The Justice League has disappeared, leaving Earth’s protection to a newcomer group of heroes from a parallel universe, proclaiming themselves as the \"Justice Syndicate.\" ",
      "Renowned DC Super-Villains from the Legion Of Doom discover Earth’s newest heroes may not be the heroes they claim to be. ",
      "With each player’s completely customizable Super-Villain character in command, this team of misfits must join forces to discover and foil the evil plans the incognito newcomers have in store. ",
      "Players will set out on a journey to determine their character’s purpose within the story and cause mischief throughout well-known DC locations including Gotham, Metropolis, Smallville, and more."
    ]
  },
  { 
    id: 8, 
    name: "INJUSTICE 2 (2017)",
    year: "2010-2019",
    image: "assets/Games/Injustice2(2017).jpg",
    classification: "Other",
    description: [
      "Who’s in your Justice League? Join your favorite DC Super Heroes and Super-Villains in this action-packed, free fighting game! Assemble a team of Super Hero legends like Batman, Superman, Supergirl, The Flash and Wonder Woman to combat the forces against you. Master new combos and crush opponents in dynamic 3v3 battles. ",
      "Upgrade your Super Heroes with special powers as you fight your way through the game. Become a champion by collecting gear for your characters and dominating your foes in PvP contests. Every epic battle in this CCG fighting game will define you—join the fight and become the ultimate DC champion!"
    ]
  },
  { 
    id: 9, 
    name: "DC LEGENDS (2016)",
    year: "2010-2019",
    image: "assets/Games/LegendsDC(2016).jpg",
    classification: "Other",
    description: [
      "As the shadow of the Blackest Night prophecy falls on every world, sheer will alone cannot save the shattered DC Universe. It’s up to you to lead a team of DC’s greatest champions to victory, but know this: peace can only be restored with a strategic mind. ",
      "Experience the ultimate role-playing game packed with all of your favorite DC Super Heroes and Super-Villains. Join Superman, Batman, The Joker and more in a battle against Nekron. How will your choices affect the fate of the DC Universe?"
    ]
  },
  { 
    id: 10, 
    name: "BATMAN - THE TELLTALE SERIES (2016)",
    year: "2010-2019",
    image: "assets/Games/BatmanTheTelltaleSeries(2016).jpg",
    classification: "Other",
    description: [
      "Enter the fractured psyche of Bruce Wayne and discover the powerful and far-reaching consequences of your choices as the Dark Knight.\n\n",
      "In this gritty and violent new story from the award-winning creators of The Walking Dead – A Telltale Games Series, you'll make discoveries that will shatter Bruce Wayne's world, and the already fragile stability of a corrupt Gotham City.\n\n",
      "Decide the fate of Gotham. Determine the fate of Bruce Wayne and his dark persona, Batman. Your choices write a fascinating new chapter in the complex and dangerous lives of the playboy industrialist and the vigilante detective."
    ]
  },
  { 
    id: 11, 
    name: "BATMAN: ARKHAM UNDERWORLD (2016)",
    year: "2010-2019",
    image: "assets/Games/BatmanArkhamUnderworld(2016).jpg",
    classification: "Arkham",
    description: [
      "Become the city’s next criminal mastermind as you fight your way to the top in Batman: Arkham Underworld! \n\n",
      "Recruit DC Comics super-villains to do your dirty work, then train an army of thugs to attack your rivals. Grow your criminal empire and crush your enemies to earn loot and respect. Create the ultimate hideout full of traps, security forces and hidden dangers to defend your turf from other aspiring crime lords.\n\n",
      "Earn enough respect on the streets? Get ready to take on Batman to secure your status as Gotham City’s ultimate threat!"
    ]
  },
  { 
    id: 12, 
    name: "LEGO DIMENSIONS (2015)",
    year: "2010-2019",
    image: "assets/Games/LegoDimensions(2015).jpg",
    classification: "Lego",
    description: [
      "When a mysterious and powerful vortex suddenly appears in various LEGO® worlds, different characters from DC Comics™, The Lord of the Rings™ and The LEGO® Movie are swept away.   To save their friends, Batman™, Gandalf™ and Wyldstyle™ bravely jump into the vortex and quickly find themselves fighting to save all of LEGO humanity. \n\n",
      "Let creativity be the guide to a building and gaming adventure – journey through unexpected worlds and team-up with unlikely allies on the quest to defeat the evil Lord Vortech.  Play with different minifigures from different worlds together in one LEGO videogame, and use each other’s vehicles and gadgets in a way never before possible. ",
      "LEGO Bad Cop™ driving the DeLorean Time Machine…why not?!  The LEGO® Ninjago™ Masters of Spinjitsu fighting alongside Wonder Woman™...yes, please!  Get ready to break the rules, because the only rule with LEGO Dimensions is that there are no rules.\n\n",
      "The LEGO Dimensions Starter Pack is all players need to begin – build the base and embark on a fantastic quest."
    ]
  },
  { 
    id: 13, 
    name: "BATMAN: ARKHAM KNIGHT (2015)",
    year: "2010-2019",
    image: "assets/Games/BatmanArkhamKnight(2015).jpg",
    classification: "Arkham",
    description: [
      "In the explosive finale to the Arkham series, Batman faces the ultimate threat against the city he is sworn to protect. The Scarecrow returns to unite an impressive roster of super villains, including Penguin, Two-Face and Harley Quinn, to destroy The Dark Knight forever. ",
      "Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile, which is drivable for the first time in the franchise. The addition of this legendary vehicle, combined with the acclaimed gameplay of the Batman Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. Be The Batman."
    ]
  },
  { 
    id: 14, 
    name: "LEGO BATMAN 3: BEYOND GOTHAM (2014)",
    year: "2010-2019",
    image: "assets/Games/LegoBatman3BeyondGotham(2014).jpg",
    classification: "Lego",
    description: [
      "The best-selling LEGO Batman videogame franchise returns in an out-of-this-world, action-packed adventure!  In LEGO Batman™ 3: Beyond Gotham, the Caped Crusader joins forces with the super heroes of the DC Comics universe and blasts off to outer space to stop the evil Brainiac from destroying Earth. ",
      "Using the power of the Lantern Rings, Brainiac shrinks worlds to add to his twisted collection of miniature cities from across the universe.  Now the greatest super heroes and the most cunning villains must unite and journey to different Lantern Worlds to collect the Lantern Rings and stop Brainiac before it’s too late."
    ]
  },
  { 
    id: 15, 
    name: "BATMAN: ARKHAM ORIGINS (2013)",
    year: "2010-2019",
    image: "assets/Games/BatmanArkhamOrigins(2013).jpg",
    classification: "Arkham",
    description: [
      "Batman: Arkham Origins™ is the next installment in the blockbuster Batman: Arkham videogame franchise.  Developed by WB Games Montréal, the game features an expanded Gotham City and introduces an original prequel storyline set several years before the events of Batman: Arkham Asylum and Batman: Arkham City, the first two critically acclaimed games of the franchise. ",
      "Taking place before the rise of Gotham City’s most dangerous criminals, the game showcases a young and unrefined Batman as he faces a defining moment in his early career as a crime fighter that sets his path to becoming the Dark Knight. As the story unfolds, players will meet many important characters for the first time and forge key relationships."
    ]
  },
  { 
    id: 16, 
    name: "BATMAN: ARKHAM ORIGINS BLACKGATE (2013)",
    year: "2010-2019",
    image: "assets/Games/BatmanArkhamOriginsBlackgate(2013).jpg",
    classification: "Arkham",
    description: [
      "Batman: Arkham Origins Blackgate is a 2.5-D game developed by Armature Studios that brings the Batman Arkham experience for the first time to Nintendo and Sony handheld systems.  A companion game to Batman: Arkham Origins, players can continue the storyline of the console version and discover more details of the Dark Knight’s past.\n\n",
      "Batman: Arkham Origins Blackgate brings the core Arkham pillars to a handheld format for the first time. Featuring stealth gameplay, free-flow combat, and Batman’s infamous gadgets, Batman: Arkham Origins Blackgate captures the genuine Arkham feel players have come to appreciate.\n\n",
      "After gang-fueled uprisings occur within the walls of Blackgate Prison, Batman is called in to restore order and put an end to the rebellion before the chaos implodes. With gripping 2.5-D graphics, fully voiced narrative, and a captivating storyline, players will explore deep inside the bowels of this remote island penitentiary that plays an important role in the Arkham universe."
    ]
  },
  { 
    id: 17, 
    name: "INJUSTICE: GODS AMONG US (2013)",
    year: "2010-2019",
    image: "assets/Games/InjusticeGodsAmongUs(2013).jpg",
    classification: "Other",
    description: [
      "What if our greatest heroes became our greatest threat? Injustice: Gods Among Us introduces a bold new franchise to the fighting game genre from NetherRealm Studios, creators of the definitive fighting game Mortal Kombat. ",
      "Featuring DC Comics icons such Batman, Cyborg, The Flash, Harley Quinn, Nightwing, Solomon Grundy, Superman and Wonder Woman, the latest title from the award-winning studio presents a deep original story. ",
      "Heroes and villains will engage in epic battles on a massive scale in a world where the line between good and evil has been blurred."
    ]
  },
  { 
    id: 18, 
    name: "LEGO BATMAN 2: DC SUPER HEROES (2012)",
    year: "2010-2019",
    image: "assets/Games/LegoBatman2SuperHeroesDC(2012).jpg",
    classification: "Lego",
    description: [
      "Batman and Robin return in LEGO® Batman™ 2: DC Super Heroes, the highly-anticipated sequel to LEGO® Batman™: The Videogame, the best-selling LEGO® videogame of all time. ",
      "This time the Dynamic Duo join forces with other famous DC super heroes including Superman, Wonder Woman and Green Lantern to stop the notorious villains Lex Luthor and The Joker from destroying Gotham City. ",
      "Batman fans of all ages will enjoy a new and original story filled with classic LEGO videogame action and humor as players fight to put the bad guys back behind bars."
    ]
  },
  { 
    id: 19, 
    name: "GOTHAM CITY IMPOSTERS (2012)",
    year: "2010-2019",
    image: "assets/Games/GothamCityImposters(2012).jpg",
    classification: "Other",
    description: [
      "A 6 vs 6 first person shooter, Gotham City Impostors is a multiplayer game unlike any other, giving players the opportunity to rebel against conformity as they customize their own characters. ",
      "Posing as amateur vigilantes or villains, gamers will create their very own Bats and Jokerz characters using unprecedented customization options including insane costumes, homebrewed gadgets and a wide range of traditional and imagined weapons."
    ]
  },
  { 
    id: 20, 
    name: "BATMAN: ARKHAM CITY LOCKDOWN (2011)",
    year: "2010-2019",
    image: "assets/Games/BatmanArkhamCityLockdown(2011).jpg",
    classification: "Arkham",
    description: [
      "The inmates have escaped and Batman has his hands full defeating an army of henchmen and some of his most iconic villains. ",
      "Scour the rooftops and the seedy underbelly of Gotham City through a series of one-on-one battles with the Joker, Two-Face and more, as well as the Batman: Arkham City Lockdown exclusive - Deathstroke. ",
      "Choose from several Batman skins and power-ups as you punch, kick and combo your way to cleaning up Gotham City."
    ]
  },
  { 
    id: 21, 
    name: "BATMAN: ARKHAM CITY (2012)",
    year: "2010-2019",
    image: "assets/Games/BatmanArkhamCity(2012).jpg",
    classification: "Arkham",
    description: [
      "The inmates have escaped and Batman has his hands full defeating an army of henchmen and some of his most iconic villains. ", 
      "Scour the rooftops and the seedy underbelly of Gotham City through a series of one-on-one battles with the Joker, Two-Face and more, as well as the Batman: Arkham City Lockdown exclusive - Deathstroke. ",
      "Choose from several Batman skins and power-ups as you punch, kick and combo your way to cleaning up Gotham City."
    ]
  },
  { 
    id: 22, 
    name: "DC UNIVERSE ONLINE (2011)",
    year: "2010-2019",
    image: "assets/Games/UniverseOnlineDC(2011).jpg",
    classification: "Other",
    description: [
      "DC Universe Online is a Free-to-Play, massive multiplayer online action game for the PC, PlayStation4, Xbox One and Nintendo Switch. ", 
      "Become one of a new breed of powerful Heroes and Villains and wield incredible abilities as you go to war with legendary characters such as Batman, Superman, Lex Luthor and the Joker."
    ]
  },
  { 
    id: 23, 
    name: "BATMAN: ARKHAM ASYLUM (2009)",
    year: "2000-2009",
    image: "assets/Games/BatmanArkhamAsylum(2009).jpg",
    classification: "Arkham"
  },
  { 
    id: 24, 
    name: "LEGO BATMAN: THE VIDEOGAME (2008)",
    year: "2000-2009",
    image: "assets/Games/LegoBatmanTheVideoGame(2008).jpg",
    classification: "Lego",
    description: [
      "A stampede of notorious criminals have busted out of Arkham Asylum, where Gotham City houses only the shadiest of characters. It's up to the famed Caped Crusader to sweep Gotham clean of criminal activity using everything at his disposal, including crime-fighting vehicles as well as severalbaddie-bashing bat gadgets."
    ]
  }
];

// Get all games
export const getAllGames = (req, res) => {
  res.json(games);
};

// Get a game by ID with error handling
export const getGameById = (req, res) => {
  const game = games.find((g) => g.id === parseInt(req.params.id));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  res.json(game);
};
