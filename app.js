const csvtoConvert = "21430,2201,370952527 28294,99,21060666 28334,99,17954769 6031,99,43739040 8423,99,51989230 9451,99,51046502 7949,99,13198530 9865,99,24531572 49719,99,13437849 64916,97,11087760 72173,99,13045235 61900,96,9969761 76925,99,13050764 27022,99,13188549 38831,91,6222121 65490,88,4592450 20538,99,13070859 29549,91,6163208 63205,91,6199304 72691,97,10744321 70535,99,13050785 40602,88,4719961 78752,85,3506557 37328,90,5382734 -1,-1 -1,-1 206899,2 318908,52 -1,-1 -1,-1 -1,-1 447548,5 183874,4 12607,43 38023,509 -1,-1 37487,365 81680,274 -1,-1 -1,-1 32061,667 3475,1274 2467,41 -1,-1 -1,-1 28013,210 23891,133 -1,-1 26133,531 35713,518 28879,494 -1,-1 59692,219 19525,462 18027,221 38750,47 14763,297 64044,245 93905,956 13075,377 -1,-1 -1,-1 3092,230 -1,-1 -1,-1 3519,430 61770,26 5072,52 5431,17 3034,629 44295,394 1969,3 25986,13 12107,300 -1,-1 42568,607 84685,442 -1,-1 49537,1041";

function conversion (){
    const preConversion = csvtoConvert.split(" ");
    let finalParse = [];
    for (i = 0; i < preConversion.length; i++){
        finalParse[i] = preConversion[i].split(",");
    }
    return finalParse;
}

//SKILLS
const userTotal = conversion()[0];
const userAttack = conversion()[1];
const userDefence = conversion()[2];
const userStrength = conversion()[3];
const userHitpoints = conversion()[4];
const userRanged = conversion()[5];
const userPrayer = conversion()[6];
const userMagic = conversion()[7];
const userCooking = conversion()[8];
const userWoodcutting = conversion()[9];
const userFletching = conversion()[10];
const userFishing = conversion()[11];
const userFiremaking = conversion()[12];
const userCrafting = conversion()[13];
const userSmithing = conversion()[14];
const userMining = conversion()[15];
const userHerblore = conversion()[16];
const userAgility = conversion()[17];
const userThieving = conversion()[18];
const userSlayer = conversion()[19];
const userFarming = conversion()[20];
const userRunecrafting = conversion()[21];
const userHunter = conversion()[22];
const userConstruction = conversion()[23];

const rank = 0;
const level = 1;
const xp = 2;

//KC's
const userAllClues = conversion()[27];
const userBeginnerClues = conversion()[28];
const userEasyClues = conversion()[29];
const userMediumClues = conversion()[30];
const userHardClues = conversion()[31];
const userEliteClues = conversion()[32];
const userMasterClues = conversion()[33];
const userAbyssalSire = conversion()[35];
const userAlchemicalHydra = conversion()[36];
const userBarrowsChest = conversion()[37];
const userBryophta = conversion()[38];
const userCallisto = conversion()[39];
const userCerberus = conversion()[40];
const userChambersOfXeric = conversion()[41];
const userChambersOfXericCM = conversion()[42];
const userChaosElemental = conversion()[43];
const userChaosFanatic = conversion()[44];
const userCommanderZyliana = conversion()[45];
const userCorporealBeast = conversion()[46];
const userCrazyArcheologist = conversion()[47];
const userDagannothPrime = conversion()[48];
const userDagannothRex = conversion()[49];
const userDagannothSupreme = conversion()[50];
const userDerangedArcheologist = conversion()[51];
const userGeneralGraardor = conversion()[52];
const userGiantMole = conversion()[53];
const userGrotesqueGaurdians = conversion()[54];
const userHespori = conversion()[55];
const userKalphiteQueen = conversion()[56];
const userKingBlackDragon = conversion()[57];
const userKraken = conversion()[58];
const userKreeArra = conversion()[59];
const userKrilTsutsaroth = conversion()[60];
const userMimic = conversion()[61];
const userNightmare = conversion()[62];
const userObor = conversion()[63];
const userSarachnis = conversion()[64];
const userScorpia = conversion()[65];
const userSkotizo = conversion()[66];
const userGauntlet = conversion()[67];
const userCorruptedGauntlet = conversion()[68];
const userTheatreOfBlood = conversion()[69];
const userThermonuclearSmokeDevil = conversion()[70];
const userZuk = conversion()[71];
const userJad = conversion()[72];
const userVenenatis = conversion()[73];
const userVetIon = conversion()[74];
const userVorkath = conversion()[75];
const userWintertodt = conversion()[76];
const userZalcano = conversion()[77];
const userZulrah = conversion()[78];


function percToMax () {
    let percentage = ((userTotal[1] / 2277)*100).toFixed(2);
    return parseInt(percentage)+'%';
}

function decimalSeperation(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
//Insert Skills into Table
attack.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Attack</th>
            <td class="tc-level">${userAttack[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAttack[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userAttack[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
defence.innerHTML = `
            <th><img src="img/skillIcons/defence.png" class="float-left">Defence</th>
            <td class="tc-level">${userDefence[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userDefence[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userDefence[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
strength.innerHTML = `
            <th><img src="img/skillIcons/strength.png" class="float-left">Strength</th>
            <td class="tc-level">${userStrength[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userStrength[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userStrength[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
hitpoints.innerHTML = `
            <th><img src="img/skillIcons/hitpoints.png" class="float-left">Hitpoints</th>
            <td class="tc-level">${userHitpoints[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHitpoints[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userHitpoints[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
ranged.innerHTML = `
            <th><img src="img/skillIcons/ranged.png" class="float-left">Ranged</th>
            <td class="tc-level">${userRanged[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userRanged[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userRanged[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
prayer.innerHTML = `
            <th><img src="img/skillIcons/prayer.png" class="float-left">Prayer</th>
            <td class="tc-level">${userPrayer[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userPrayer[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userPrayer[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
magic.innerHTML = `
            <th><img src="img/skillIcons/magic.png" class="float-left">Magic</th>
            <td class="tc-level">${userMagic[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMagic[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userMagic[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
cooking.innerHTML = `
            <th><img src="img/skillIcons/cooking.png" class="float-left">Cooking</th>
            <td class="tc-level">${userCooking[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCooking[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userCooking[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
woodcutting.innerHTML = `
            <th><img src="img/skillIcons/woodcutting.png" class="float-left">Woodcutting</th>
            <td class="tc-level">${userWoodcutting[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userWoodcutting[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userWoodcutting[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
fletching.innerHTML = `
            <th><img src="img/skillIcons/fletching.png" class="float-left">Fletching</th>
            <td class="tc-level">${userFletching[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFletching[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFletching[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
fishing.innerHTML = `
            <th><img src="img/skillIcons/fishing.png" class="float-left">Fishing</th>
            <td class="tc-level">${userFishing[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFishing[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFishing[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
firemaking.innerHTML = `
            <th><img src="img/skillIcons/firemaking.png" class="float-left">Firemaking</th>
            <td class="tc-level">${userFiremaking[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFiremaking[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFiremaking[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
document.getElementById('crafting').innerHTML = `
            <th><img src="img/skillIcons/crafting.png" class="float-left">Crafting</th>
            <td class="tc-level">${userCrafting[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCrafting[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userCrafting[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
smithing.innerHTML = `
            <th><img src="img/skillIcons/smithing.png" class="float-left">Smithing</th>
            <td class="tc-level">${userSmithing[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userSmithing[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userSmithing[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
mining.innerHTML = `
            <th><img src="img/skillIcons/mining.png" class="float-left">Mining</th>
            <td class="tc-level">${userMining[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMining[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userMining[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
herblore.innerHTML = `
            <th><img src="img/skillIcons/herblore.png" class="float-left">Herblore</th>
            <td class="tc-level">${userHerblore[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHerblore[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userHerblore[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
agility.innerHTML = `
            <th><img src="img/skillIcons/agility.png" class="float-left">Agility</th>
            <td class="tc-level">${userAgility[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAgility[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userAgility[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
thieving.innerHTML = `
            <th><img src="img/skillIcons/thieving.png" class="float-left">Thieving</th>
            <td class="tc-level">${userThieving[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userThieving[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userThieving[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
slayer.innerHTML = `
            <th><img src="img/skillIcons/slayer.png" class="float-left">Slayer</th>
            <td class="tc-level">${userSlayer[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userSlayer[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userSlayer[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
farming.innerHTML = `
            <th><img src="img/skillIcons/farming.png" class="float-left">Farming</th>
            <td class="tc-level">${userFarming[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFarming[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFarming[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
runecrafting.innerHTML = `
            <th><img src="img/skillIcons/runecrafting.png" class="float-left">Runecrafting</th>
            <td class="tc-level">${userRunecrafting[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userRunecrafting[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userRunecrafting[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
hunter.innerHTML = `
            <th><img src="img/skillIcons/hunter.png" class="float-left">Hunter</th>
            <td class="tc-level">${userHunter[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHunter[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userHunter[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
construction.innerHTML = `
            <th><img src="img/skillIcons/construction.png" class="float-left">Construction</th>
            <td class="tc-level">${userConstruction[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userConstruction[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userConstruction[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
total.innerHTML = `
            <th><img src="img/skillIcons/overall.png" class="float-left">Total</th>
            <td class="tc-level">${decimalSeperation(userTotal[level]).replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userTotal[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userTotal[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;

//Insert activity kc in table
allClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">All Clue Scrolls</th>
            <td class="tc-level">${userAllClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAllClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
beginnerClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Beginner Clue Scrolls</th>
            <td class="tc-level">${userBeginnerClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userBeginnerClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
easyClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Easy Clue Scrolls</th>
            <td class="tc-level">${userEasyClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userEasyClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
mediumClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Medium Clue Scrolls</th>
            <td class="tc-level">${userMediumClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMediumClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
hardClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Hard Clue Scrolls</th>
            <td class="tc-level">${userHardClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHardClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
eliteClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Elite Clue Scrolls</th>
            <td class="tc-level">${userEliteClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userEliteClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
masterClues.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Master Clue Scrolls</th>
            <td class="tc-level">${userMasterClues[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMasterClues[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
abyssalSire.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Abyssal Sire</th>
            <td class="tc-level">${userAbyssalSire[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAbyssalSire[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
alchemicalHydra.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Alchemical Hydra</th>
            <td class="tc-level">${userAlchemicalHydra[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAlchemicalHydra[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
barrowsChest.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Barrows Chest</th>
            <td class="tc-level">${userBarrowsChest[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userBarrowsChest[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
bryophta.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Bryoptha</th>
            <td class="tc-level">${userBryophta[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userBryophta[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
callisto.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Callisto</th>
            <td class="tc-level">${userCallisto[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCallisto[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
cerberus.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Cerberus</th>
            <td class="tc-level">${userCerberus[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCerberus[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
chambersOfXeric.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Chambers of Xeric</th>
            <td class="tc-level">${userChambersOfXeric[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userChambersOfXeric[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
chambersOfXericCM.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Chambers of Xeric (CM)</th>
            <td class="tc-level">${userChambersOfXericCM[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userChambersOfXericCM[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
chaosElemental.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Chaos Elemental</th>
            <td class="tc-level">${userChaosElemental[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userChaosElemental[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
chaosFanatic.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Chaos Fanatic</th>
            <td class="tc-level">${userChaosFanatic[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userChaosFanatic[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
commanderZyliana.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Commander Zyliana (Saradomin)</th>
            <td class="tc-level">${userCommanderZyliana[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCommanderZyliana[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
corporealBeast.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Corporeal Beast</th>
            <td class="tc-level">${userCorporealBeast[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCorporealBeast[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
crazyArcheologist.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Crazy Archeologist</th>
            <td class="tc-level">${userCrazyArcheologist[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCrazyArcheologist[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
dagannothPrime.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Dagannoth Prime</th>
            <td class="tc-level">${userDagannothPrime[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userDagannothPrime[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
dagannothRex.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Dagannoth Rex</th>
            <td class="tc-level">${userDagannothRex[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userDagannothRex[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
dagannothSupreme.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Dagannoth Supreme</th>
            <td class="tc-level">${userDagannothSupreme[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userDagannothSupreme[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
derangedArcheologist.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Deranged Archeologist</th>
            <td class="tc-level">${userDerangedArcheologist[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userDerangedArcheologist[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
generalGraardor.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">General Graardor (Bandos)</th>
            <td class="tc-level">${userGeneralGraardor[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userGeneralGraardor[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
giantMole.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Giant Mole</th>
            <td class="tc-level">${userGiantMole[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userGiantMole[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
grotesqueGaurdians.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Grotesque Gaurdians</th>
            <td class="tc-level">${userGrotesqueGaurdians[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userGrotesqueGaurdians[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
hespori.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Hespori</th>
            <td class="tc-level">${userHespori[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHespori[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
kalphiteQueen.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Kalphite Queen</th>
            <td class="tc-level">${userGiantMole[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userGiantMole[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
kingBlackDragon.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">King Black Dragon</th>
            <td class="tc-level">${userKingBlackDragon[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userKingBlackDragon[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
kraken.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Kraken</th>
            <td class="tc-level">${userKraken[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userKraken[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
kreeArra.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Kree'Arra (Armadyl)</th>
            <td class="tc-level">${userGiantMole[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userGiantMole[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
krilTsutsaroth.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">K'ril Tsutsaroth (Zamorak)</th>
            <td class="tc-level">${userKrilTsutsaroth[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userKrilTsutsaroth[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
mimic.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Mimic Chest</th>
            <td class="tc-level">${userMimic[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMimic[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
nightmare.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Nightmare</th>
            <td class="tc-level">${userNightmare[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userNightmare[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
obor.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Obor</th>
            <td class="tc-level">${userObor[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userObor[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
sarachnis.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Sarachnis</th>
            <td class="tc-level">${userSarachnis[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userSarachnis[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
scorpia.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Scorpia</th>
            <td class="tc-level">${userScorpia[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userScorpia[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
skotizo.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Skotizo</th>
            <td class="tc-level">${userSkotizo[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userSkotizo[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
gauntlet.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">The Gauntlet</th>
            <td class="tc-level">${userGauntlet[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userGauntlet[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
corruptedGauntlet.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">The Corrupted Gauntlet</th>
            <td class="tc-level">${userCorruptedGauntlet[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCorruptedGauntlet[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
theatreOfBlood.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Theatre of Blood</th>
            <td class="tc-level">${userTheatreOfBlood[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userTheatreOfBlood[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
thermonuclearSmokeDevil.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Thermonuclear Smoke Devil</th>
            <td class="tc-level">${userThermonuclearSmokeDevil[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userThermonuclearSmokeDevil[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
zuk.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">TzKal-Zuk</th>
            <td class="tc-level">${userZuk[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userZuk[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
jad.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">TzTok-Jad</th>
            <td class="tc-level">${userJad[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userJad[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
venenatis.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Venenatis</th>
            <td class="tc-level">${userVenenatis[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userVenenatis[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
vetIon.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Vet'ion</th>
            <td class="tc-level">${userVetIon[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userVetIon[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
vorkath.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Vorkath</th>
            <td class="tc-level">${userVorkath[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userVorkath[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
wintertodt.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Wintertodt</th>
            <td class="tc-level">${userWintertodt[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userWintertodt[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
zalcano.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Zalcano</th>
            <td class="tc-level">${userZalcano[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userZalcano[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
zulrah.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Zulrah</th>
            <td class="tc-level">${userZulrah[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userZulrah[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
//Tut Island to Max Percentage tracker
const barFiller = document.querySelector('.barFiller');
barFiller.style.width = percToMax();
barFiller.textContent = percToMax();