const csvtoConvert = "104783,1983,122091452 170118,98,12088216 239335,90,5729042 124229,99,14266872 166426,99,16383718 293545,95,8909210 180484,80,1986872 341874,92,6566224 186833,95,8814355 174348,85,3284293 293676,82,2545366 133847,88,4693904 529108,70,761251 147032,82,2573703 125497,83,2675320 139880,81,2379215 114817,85,3258769 122986,80,2013008 149903,80,1986269 81539,96,9991196 237628,80,2047387 35124,90,5692005 343100,70,750620 153774,83,2694637 -1,-1 -1,-1 -1,-1 141500,162 -1,-1 321462,7 247324,17 88916,119 104701,13 68679,6 -1,-1 32968,251 53882,135 280568,51 -1,-1 -1,-1 56757,299 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 80922,134 77071,238 75648,154 -1,-1 58547,225 -1,-1 -1,-1 129807,12 -1,-1 70040,225 26776,2527 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 35627,36 -1,-1 -1,-1 -1,-1 50958,317 -1,-1 -1,-1 -1,-1 -1,-1 104024,208 -1,-1 -1,-1 -1,-1";

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
//Insert skills into table
insertSkills();

//Insert activity kc into table
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