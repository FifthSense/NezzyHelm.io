const csvtoConvert = "104613,1983,122091452 169935,98,12088216 239091,90,5729042 124101,99,14266872 166221,99,16383718 293188,95,8909210 180229,80,1986872 341539,92,6566224 186638,95,8814355 174167,85,3284293 293510,82,2545366 133654,88,4693904 528597,70,761251 146822,82,2573703 125314,83,2675320 139884,81,2379215 114652,85,3258769 122942,80,2013008 149688,80,1986269 81447,96,9991196 237274,80,2047387 35050,90,5692005 342721,70,750620 153507,83,2694637 -1,-1 -1,-1 -1,-1 141325,162 -1,-1 321261,7 247112,17 88844,119 104593,13 68615,6 -1,-1 32895,251 53772,135 280054,51 -1,-1 -1,-1 56645,299 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 80785,134 76940,238 75507,154 -1,-1 58469,225 -1,-1 -1,-1 129411,12 -1,-1 69935,225 26715,2527 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 35564,36 -1,-1 -1,-1 -1,-1 50868,317 -1,-1 -1,-1 -1,-1 -1,-1 103754,208 -1,-1 -1,-1 -1,-1";

function conversion (){
    const preConversion = csvtoConvert.split(" ");
    let finalParse = [];
    for (i = 0; i < preConversion.length; i++){
        finalParse[i] = preConversion[i].split(",");
    }
    return finalParse;
}
/*
SKILLS
*/
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

function decimalSeperation(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

attack.innerHTML = `
            <th>Attack</th>
            <td class="tc-level">${userAttack[level]}</td>
            <td class="tc-xp">${decimalSeperation(userAttack[xp])}</td>
            <td class="tc-r">${decimalSeperation(userAttack[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
defence.innerHTML = `
            <th>Defence</th>
            <td class="tc-level">${userDefence[level]}</td>
            <td class="tc-xp">${decimalSeperation(userDefence[xp])}</td>
            <td class="tc-r">${decimalSeperation(userDefence[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
strength.innerHTML = `
            <th>Strength</th>
            <td class="tc-level">${userStrength[level]}</td>
            <td class="tc-xp">${decimalSeperation(userStrength[xp])}</td>
            <td class="tc-r">${decimalSeperation(userStrength[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
hitpoints.innerHTML = `
            <th>Hitpoints</th>
            <td class="tc-level">${userHitpoints[level]}</td>
            <td class="tc-xp">${decimalSeperation(userHitpoints[xp])}</td>
            <td class="tc-r">${decimalSeperation(userHitpoints[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
ranged.innerHTML = `
            <th>Ranged</th>
            <td class="tc-level">${userRanged[level]}</td>
            <td class="tc-xp">${decimalSeperation(userRanged[xp])}</td>
            <td class="tc-r">${decimalSeperation(userRanged[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
prayer.innerHTML = `
            <th>Prayer</th>
            <td class="tc-level">${userPrayer[level]}</td>
            <td class="tc-xp">${decimalSeperation(userPrayer[xp])}</td>
            <td class="tc-r">${decimalSeperation(userPrayer[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
magic.innerHTML = `
            <th>Magic</th>
            <td class="tc-level">${userMagic[level]}</td>
            <td class="tc-xp">${decimalSeperation(userMagic[xp])}</td>
            <td class="tc-r">${decimalSeperation(userMagic[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
cooking.innerHTML = `
            <th>Cooking</th>
            <td class="tc-level">${userCooking[level]}</td>
            <td class="tc-xp">${decimalSeperation(userCooking[xp])}</td>
            <td class="tc-r">${decimalSeperation(userCooking[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
woodcutting.innerHTML = `
            <th>Woodcutting</th>
            <td class="tc-level">${userWoodcutting[level]}</td>
            <td class="tc-xp">${decimalSeperation(userWoodcutting[xp])}</td>
            <td class="tc-r">${decimalSeperation(userWoodcutting[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
fletching.innerHTML = `
            <th>Fletching</th>
            <td class="tc-level">${userFletching[level]}</td>
            <td class="tc-xp">${decimalSeperation(userFletching[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFletching[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
fishing.innerHTML = `
            <th>Fishing</th>
            <td class="tc-level">${userFishing[level]}</td>
            <td class="tc-xp">${decimalSeperation(userFishing[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFishing[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
firemaking.innerHTML = `
            <th>Firemaking</th>
            <td class="tc-level">${userFiremaking[level]}</td>
            <td class="tc-xp">${decimalSeperation(userFiremaking[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFiremaking[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('crafting').innerHTML = `
            <th>Crafting</th>
            <td class="tc-level">${userCrafting[level]}</td>
            <td class="tc-xp">${decimalSeperation(userCrafting[xp])}</td>
            <td class="tc-r">${decimalSeperation(userCrafting[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
smithing.innerHTML = `
            <th>Smithing</th>
            <td class="tc-level">${userSmithing[level]}</td>
            <td class="tc-xp">${decimalSeperation(userSmithing[xp])}</td>
            <td class="tc-r">${decimalSeperation(userSmithing[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
mining.innerHTML = `
            <th>Mining</th>
            <td class="tc-level">${userMining[level]}</td>
            <td class="tc-xp">${decimalSeperation(userMining[xp])}</td>
            <td class="tc-r">${decimalSeperation(userMining[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
herblore.innerHTML = `
            <th>Herblore</th>
            <td class="tc-level">${userHerblore[level]}</td>
            <td class="tc-xp">${decimalSeperation(userHerblore[xp])}</td>
            <td class="tc-r">${decimalSeperation(userHerblore[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
agility.innerHTML = `
            <th>Agility</th>
            <td class="tc-level">${userAgility[level]}</td>
            <td class="tc-xp">${decimalSeperation(userAgility[xp])}</td>
            <td class="tc-r">${decimalSeperation(userAgility[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
thieving.innerHTML = `
            <th>Thieving</th>
            <td class="tc-level">${userThieving[level]}</td>
            <td class="tc-xp">${decimalSeperation(userThieving[xp])}</td>
            <td class="tc-r">${decimalSeperation(userThieving[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
slayer.innerHTML = `
            <th>Slayer</th>
            <td class="tc-level">${userSlayer[level]}</td>
            <td class="tc-xp">${decimalSeperation(userSlayer[xp])}</td>
            <td class="tc-r">${decimalSeperation(userSlayer[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
farming.innerHTML = `
            <th>Farming</th>
            <td class="tc-level">${userFarming[level]}</td>
            <td class="tc-xp">${decimalSeperation(userFarming[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFarming[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
runecrafting.innerHTML = `
            <th>Runecrafting</th>
            <td class="tc-level">${userRunecrafting[level]}</td>
            <td class="tc-xp">${decimalSeperation(userRunecrafting[xp])}</td>
            <td class="tc-r">${decimalSeperation(userRunecrafting[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
hunter.innerHTML = `
            <th>Hunter</th>
            <td class="tc-level">${userHunter[level]}</td>
            <td class="tc-xp">${decimalSeperation(userHunter[xp])}</td>
            <td class="tc-r">${decimalSeperation(userHunter[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
construction.innerHTML = `
            <th>Construction</th>
            <td class="tc-level">${userConstruction[level]}</td>
            <td class="tc-xp">${decimalSeperation(userConstruction[xp])}</td>
            <td class="tc-r">${decimalSeperation(userConstruction[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;