const csvtoConvert = "104943,1983,122232847 170274,98,12088216 239584,90,5729042 124339,99,14266872 166629,99,16383718 293858,95,8909210 180679,80,1986872 342206,92,6566224 186988,95,8814355 174548,85,3284293 293889,82,2545366 134024,88,4693904 529605,70,761251 146773,82,2591263 125691,83,2675320 139622,81,2392439 114962,85,3258769 123129,80,2013008 150070,80,1986269 81609,96,9991196 237955,80,2047387 34880,90,5802616 343607,70,750620 153976,83,2694637 -1,-1 -1,-1 -1,-1 141630,162 -1,-1 321632,7 247540,17 88989,119 104791,13 68728,6 -1,-1 33036,251 53983,135 281010,51 -1,-1 -1,-1 56832,299 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 81040,134 77182,238 75737,154 -1,-1 58637,225 -1,-1 -1,-1 130141,12 -1,-1 70137,225 26805,2527 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 35667,36 -1,-1 -1,-1 -1,-1 51022,317 -1,-1 -1,-1 -1,-1 -1,-1 104229,208 -1,-1 -1,-1 -1,-1";

//convert CSV to Array
function conversion() {
    const preConversion = csvtoConvert.split(" ");
    let finalParse = [];
    for (i = 0; i < preConversion.length; i++) {
        finalParse[i] = preConversion[i].split(",");
    }
    return finalParse;
}

//Identifiers
const rank = 0,
    level = 1,
    xp = 2;

//Stats Object
const stats = [
    attack = {
        "name": 'attack',
        "level": conversion()[1][level],
        "xp": conversion()[1][xp],
        "rank": conversion()[1][rank],
        "tableOutput": document.getElementById('attack')
    },
    defence = {
        "name": 'defence',
        "level": conversion()[2][level],
        "xp": conversion()[2][xp],
        "rank": conversion()[2][rank],
        "tableOutput": document.getElementById('defence')
    },
    strength = {
        "name": 'strength',
        "level": conversion()[3][level],
        "xp": conversion()[3][xp],
        "rank": conversion()[3][rank],
        "tableOutput": document.getElementById('strength')
    },
    hitpoints = {
        "name": 'hitpoints',
        "level": conversion()[4][level],
        "xp": conversion()[4][xp],
        "rank": conversion()[4][rank],
        "tableOutput": document.getElementById('hitpoints')
    },
    ranged = {
        "name": 'ranged',
        "level": conversion()[5][level],
        "xp": conversion()[5][xp],
        "rank": conversion()[5][rank],
        "tableOutput": document.getElementById('ranged')
    },
    prayer = {
        "name": 'prayer',
        "level": conversion()[6][level],
        "xp": conversion()[6][xp],
        "rank": conversion()[6][rank],
        "tableOutput": document.getElementById('prayer')
    },
    magic = {
        "name": 'magic',
        "level": conversion()[7][level],
        "xp": conversion()[7][xp],
        "rank": conversion()[7][rank],
        "tableOutput": document.getElementById('magic')
    },
    cooking = {
        "name": 'cooking',
        "level": conversion()[8][level],
        "xp": conversion()[8][xp],
        "rank": conversion()[8][rank],
        "tableOutput": document.getElementById('cooking')
    },
    woodcutting = {
        "name": 'woodcutting',
        "level": conversion()[9][level],
        "xp": conversion()[9][xp],
        "rank": conversion()[9][rank],
        "tableOutput": document.getElementById('woodcutting')
    },
    fletching = {
        "name": 'fletching',
        "level": conversion()[10][level],
        "xp": conversion()[10][xp],
        "rank": conversion()[10][rank],
        "tableOutput": document.getElementById('fletching')
    },
    fishing = {
        "name": 'fishing',
        "level": conversion()[11][level],
        "xp": conversion()[11][xp],
        "rank": conversion()[11][rank],
        "tableOutput": document.getElementById('fishing')
    },
    firemaking = {
        "name": 'firemaking',
        "level": conversion()[12][level],
        "xp": conversion()[12][xp],
        "rank": conversion()[12][rank],
        "tableOutput": document.getElementById('firemaking')
    },
    crafting = {
        "name": 'crafting',
        "level": conversion()[13][level],
        "xp": conversion()[13][xp],
        "rank": conversion()[13][rank],
        "tableOutput": document.getElementById('crafting')
    },
    smithing = {
        "name": 'smithing',
        "level": conversion()[14][level],
        "xp": conversion()[14][xp],
        "rank": conversion()[14][rank],
        "tableOutput": document.getElementById('smithing')
    },
    mining = {
        "name": 'mining',
        "level": conversion()[15][level],
        "xp": conversion()[15][xp],
        "rank": conversion()[15][rank],
        "tableOutput": document.getElementById('mining')
    },
    herblore = {
        "name": 'herblore',
        "level": conversion()[16][level],
        "xp": conversion()[16][xp],
        "rank": conversion()[16][rank],
        "tableOutput": document.getElementById('herblore')
    },
    agility = {
        "name": 'agility',
        "level": conversion()[17][level],
        "xp": conversion()[17][xp],
        "rank": conversion()[17][rank],
        "tableOutput": document.getElementById('agility')
    },
    thieving = {
        "name": 'thieving',
        "level": conversion()[18][level],
        "xp": conversion()[18][xp],
        "rank": conversion()[18][rank],
        "tableOutput": document.getElementById('thieving')
    },
    slayer = {
        "name": 'slayer',
        "level": conversion()[19][level],
        "xp": conversion()[19][xp],
        "rank": conversion()[19][rank],
        "tableOutput": document.getElementById('slayer')
    },
    farming = {
        "name": 'farming',
        "level": conversion()[20][level],
        "xp": conversion()[20][xp],
        "rank": conversion()[20][rank],
        "tableOutput": document.getElementById('farming')
    },
    runecrafting = {
        "name": 'runecrafting',
        "level": conversion()[21][level],
        "xp": conversion()[21][xp],
        "rank": conversion()[21][rank],
        "tableOutput": document.getElementById('runecrafting')
    },
    hunter = {
        "name": 'hunter',
        "level": conversion()[22][level],
        "xp": conversion()[22][xp],
        "rank": conversion()[22][rank],
        "tableOutput": document.getElementById('hunter')
    },
    construction = {
        "name": 'construction',
        "level": conversion()[23][level],
        "xp": conversion()[23][xp],
        "rank": conversion()[23][rank],
        "tableOutput": document.getElementById('construction')
    },
    total = {
        "name": 'overall',
        "level": conversion()[0][level],
        "xp": conversion()[0][xp],
        "rank": conversion()[0][rank],
        "tableOutput": document.getElementById('total')
    }
];

//Activities Object
const activities = [
    allClues = {
        "name": 'allClues',
        "title": 'All Clue Scrolls',
        "amount": conversion()[27][level],
        "rank": conversion()[27][rank],
        "tableOutput": document.getElementById('allClues')
    },
    beginnerClues = {
        "name": 'beginnerClues',
        "title": 'Beginner Clue Scrolls',
        "amount": conversion()[28][level],
        "rank": conversion()[28][rank],
        "tableOutput": document.getElementById('beginnerClues')
    },
    easyClues = {
        "name": 'easyClues',
        "title": 'Easy Clue Scrolls',
        "amount": conversion()[29][level],
        "rank": conversion()[29][rank],
        "tableOutput": document.getElementById('easyClues')
    },
    mediumClues = {
        "name": 'mediumClues',
        "title": 'Medium Clue Scrolls',
        "amount": conversion()[30][level],
        "rank": conversion()[30][rank],
        "tableOutput": document.getElementById('mediumClues')
    },
    hardClues = {
        "name": 'hardClues',
        "title": 'Hard Clue Scrolls',
        "amount": conversion()[31][level],
        "rank": conversion()[31][rank],
        "tableOutput": document.getElementById('hardClues')
    },
    eliteClues = {
        "name": 'eliteClues',
        "title": 'Elite Clue Scrolls',
        "amount": conversion()[32][level],
        "rank": conversion()[32][rank],
        "tableOutput": document.getElementById('eliteClues')
    },
    masterClues = {
        "name": 'masterClues',
        "title": 'Master Clue Scrolls',
        "amount": conversion()[33][level],
        "rank": conversion()[33][rank],
        "tableOutput": document.getElementById('masterClues')
    },
    abyssalSire = {
        "name": 'abyssalSire',
        "title": 'Abyssal Sire',
        "amount": conversion()[35][level],
        "rank": conversion()[35][rank],
        "tableOutput": document.getElementById('abyssalSire')
    },
    alchemicalHydra = {
        "name": 'alchemicalHydra',
        "title": 'Alchemical Hydra',
        "amount": conversion()[36][level],
        "rank": conversion()[36][rank],
        "tableOutput": document.getElementById('alchemicalHydra')
    },
    barrowsChest = {
        "name": 'barrowsChest',
        "title": 'Barrow\'s Chest',
        "amount": conversion()[37][level],
        "rank": conversion()[37][rank],
        "tableOutput": document.getElementById('barrowsChest')
    },
    bryophta = {
        "name": 'bryophta',
        "title": 'Bryophyta',
        "amount": conversion()[38][level],
        "rank": conversion()[38][rank],
        "tableOutput": document.getElementById('bryophta')
    },
    callisto = {
        "name": 'callisto',
        "title": 'Callisto',
        "amount": conversion()[39][level],
        "rank": conversion()[39][rank],
        "tableOutput": document.getElementById('callisto')
    },
    cerberus = {
        "name": 'cerberus',
        "title": 'Cerberus',
        "amount": conversion()[40][level],
        "rank": conversion()[40][rank],
        "tableOutput": document.getElementById('cerberus')
    },
    chambersOfXeric = {
        "name": 'chambersOfXeric',
        "title": 'Chambers of Xeric',
        "amount": conversion()[41][level],
        "rank": conversion()[41][rank],
        "tableOutput": document.getElementById('chambersOfXeric')
    },
    chambersOfXericCM = {
        "name": 'chambersOfXericCM',
        "title": 'Chambers of Xeric (CM)',
        "amount": conversion()[42][level],
        "rank": conversion()[42][rank],
        "tableOutput": document.getElementById('chambersOfXericCM')
    },
    chaosElemental = {
        "name": 'chaosElemental',
        "title": 'Chaos Elemental',
        "amount": conversion()[43][level],
        "rank": conversion()[43][rank],
        "tableOutput": document.getElementById('chaosElemental')
    },
    chaosFanatic = {
        "name": 'chaosFanatic',
        "title": 'Chaos Fanatic',
        "amount": conversion()[44][level],
        "rank": conversion()[44][rank],
        "tableOutput": document.getElementById('chaosFanatic')
    },
    commanderZyliana = {
        "name": 'commanderZyliana',
        "title": 'Commander Zyliana',
        "amount": conversion()[45][level],
        "rank": conversion()[45][rank],
        "tableOutput": document.getElementById('commanderZyliana')
    },
    corporealBeast = {
        "name": 'corporealBeast',
        "title": 'Corporeal Beast',
        "amount": conversion()[46][level],
        "rank": conversion()[46][rank],
        "tableOutput": document.getElementById('corporealBeast')
    },
    crazyArcheologist = {
        "name": 'crazyArcheologist',
        "title": 'Crazy Archeologist',
        "amount": conversion()[47][level],
        "rank": conversion()[47][rank],
        "tableOutput": document.getElementById('crazyArcheologist')
    },
    dagannothPrime = {
        "name": 'dagannothPrime',
        "title": 'Dagannoth Prime',
        "amount": conversion()[48][level],
        "rank": conversion()[48][rank],
        "tableOutput": document.getElementById('dagannothPrime')
    },
    dagannothRex = {
        "name": 'dagannothRex',
        "title": 'Dagannoth Rex',
        "amount": conversion()[49][level],
        "rank": conversion()[49][rank],
        "tableOutput": document.getElementById('dagannothRex')
    },
    dagannothSupreme = {
        "name": 'dagannothSupreme',
        "title": 'Dagannoth Supreme',
        "amount": conversion()[50][level],
        "rank": conversion()[50][rank],
        "tableOutput": document.getElementById('dagannothSupreme')
    },
    derangedArcheologist = {
        "name": 'derangedArcheologist',
        "title": 'Deranged Archeologist',
        "amount": conversion()[51][level],
        "rank": conversion()[51][rank],
        "tableOutput": document.getElementById('derangedArcheologist')
    },
    generalGraardor = {
        "name": 'generalGraardor',
        "title": 'General Graardor',
        "amount": conversion()[52][level],
        "rank": conversion()[52][rank],
        "tableOutput": document.getElementById('generalGraardor')
    },
    giantMole = {
        "name": 'giantMole',
        "title": 'Giant Mole',
        "amount": conversion()[53][level],
        "rank": conversion()[53][rank],
        "tableOutput": document.getElementById('giantMole')
    },
    grotesqueGaurdians = {
        "name": 'grotesqueGaurdians',
        "title": 'Grotesque Guardians',
        "amount": conversion()[54][level],
        "rank": conversion()[54][rank],
        "tableOutput": document.getElementById('grotesqueGaurdians')
    },
    hespori = {
        "name": 'hespori',
        "title": 'Hespori',
        "amount": conversion()[55][level],
        "rank": conversion()[55][rank],
        "tableOutput": document.getElementById('hespori')
    },
    kalphiteQueen = {
        "name": 'kalphiteQueen',
        "title": 'Kalphite Queen',
        "amount": conversion()[56][level],
        "rank": conversion()[56][rank],
        "tableOutput": document.getElementById('kalphiteQueen')
    },
    kingBlackDragon = {
        "name": 'kingBlackDragon',
        "title": 'King Black Dragon',
        "amount": conversion()[57][level],
        "rank": conversion()[57][rank],
        "tableOutput": document.getElementById('kingBlackDragon')
    },
    kraken = {
        "name": 'kraken',
        "title": 'Kraken',
        "amount": conversion()[58][level],
        "rank": conversion()[58][rank],
        "tableOutput": document.getElementById('kraken')
    },
    kreeArra = {
        "name": 'kreeArra',
        "title": 'Kree\'Arra',
        "amount": conversion()[59][level],
        "rank": conversion()[59][rank],
        "tableOutput": document.getElementById('kreeArra')
    },
    krilTsutsaroth = {
        "name": 'krilTsutsaroth',
        "title": 'K\'ril Tsutsaroth',
        "amount": conversion()[60][level],
        "rank": conversion()[60][rank],
        "tableOutput": document.getElementById('krilTsutsaroth')
    },
    mimic = {
        "name": 'mimic',
        "title": 'Mimic Chest',
        "amount": conversion()[61][level],
        "rank": conversion()[61][rank],
        "tableOutput": document.getElementById('mimic')
    },
    nightmare = {
        "name": 'nightmare',
        "title": 'The Nightmare',
        "amount": conversion()[62][level],
        "rank": conversion()[62][rank],
        "tableOutput": document.getElementById('nightmare')
    },
    obor = {
        "name": 'obor',
        "title": 'Obor',
        "amount": conversion()[63][level],
        "rank": conversion()[63][rank],
        "tableOutput": document.getElementById('obor')
    },
    sarachnis = {
        "name": 'sarachnis',
        "title": 'Sarachnis',
        "amount": conversion()[64][level],
        "rank": conversion()[64][rank],
        "tableOutput": document.getElementById('sarachnis')
    },
    scorpia = {
        "name": 'scorpia',
        "title": 'Scorpia',
        "amount": conversion()[65][level],
        "rank": conversion()[65][rank],
        "tableOutput": document.getElementById('scorpia')
    },
    skotizo = {
        "name": 'skotizo',
        "title": 'Skotizo',
        "amount": conversion()[66][level],
        "rank": conversion()[66][rank],
        "tableOutput": document.getElementById('skotizo')
    },
    gauntlet = {
        "name": 'gauntlet',
        "title": 'The Gauntlet',
        "amount": conversion()[67][level],
        "rank": conversion()[67][rank],
        "tableOutput": document.getElementById('gauntlet')
    },
    corruptedGauntlet = {
        "name": 'corruptedGauntlet',
        "title": 'The Corrupted Gauntlet',
        "amount": conversion()[68][level],
        "rank": conversion()[68][rank],
        "tableOutput": document.getElementById('corruptedGauntlet')
    },
    theatreOfBlood = {
        "name": 'theatreOfBlood',
        "title": 'Theatre of Blood',
        "amount": conversion()[69][level],
        "rank": conversion()[69][rank],
        "tableOutput": document.getElementById('theatreOfBlood')
    },
    thermonuclearSmokeDevil = {
        "name": 'thermonuclearSmokeDevil',
        "title": 'Thermonuclear Smoke Devil',
        "amount": conversion()[70][level],
        "rank": conversion()[70][rank],
        "tableOutput": document.getElementById('thermonuclearSmokeDevil')
    },
    zuk = {
        "name": 'zuk',
        "title": 'TzKal-Zuk',
        "amount": conversion()[71][level],
        "rank": conversion()[71][rank],
        "tableOutput": document.getElementById('zuk')
    },
    jad = {
        "name": 'jad',
        "title": 'TzTok-Jad',
        "amount": conversion()[72][level],
        "rank": conversion()[72][rank],
        "tableOutput": document.getElementById('jad')
    },
    venenatis = {
        "name": 'venenatis',
        "title": 'Venenatis',
        "amount": conversion()[73][level],
        "rank": conversion()[73][rank],
        "tableOutput": document.getElementById('venenatis')
    },
    vetIon = {
        "name": 'vetIon',
        "title": 'Vet\'ion',
        "amount": conversion()[74][level],
        "rank": conversion()[74][rank],
        "tableOutput": document.getElementById('vetIon')
    },
    vorkath = {
        "name": 'vorkath',
        "title": 'Vorkath',
        "amount": conversion()[75][level],
        "rank": conversion()[75][rank],
        "tableOutput": document.getElementById('vorkath')
    },
    wintertodt = {
        "name": 'wintertodt',
        "title": 'Wintertodt',
        "amount": conversion()[76][level],
        "rank": conversion()[76][rank],
        "tableOutput": document.getElementById('wintertodt')
    },
    zalcano = {
        "name": 'zalcano',
        "title": 'Zalcano',
        "amount": conversion()[77][level],
        "rank": conversion()[77][rank],
        "tableOutput": document.getElementById('zalcano')
    },
    zulrah = {
        "name": 'zulrah',
        "title": 'Zulrah',
        "amount": conversion()[78][level],
        "rank": conversion()[78][rank],
        "tableOutput": document.getElementById('zulrah')
    },

];

//Calculate 0->Max percentage
function percToMax() {
    let percentage = ((total.level / 2277) * 100).toFixed(2);
    return parseInt(percentage) + '%';
}

//Decimal Separator
function decimalSeperation(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//Insert skills into table
insertSkills();

//Tutorial Island to Max Percentage Based Tracker
t2max();