const csvtoConvert = "104739,1983,122091452 170047,98,12088216 239250,90,5729042 124178,99,14266872 166365,99,16383718 293442,95,8909210 180424,80,1986872 341765,92,6566224 186775,95,8814355 174271,85,3284293 293600,82,2545366 133773,88,4693904 528946,70,761251 146955,82,2573703 125428,83,2675320 139801,81,2379215 114763,85,3258769 122930,80,2013008 149831,80,1986269 81510,96,9991196 237521,80,2047387 35107,90,5692005 342902,70,750620 153685,83,2694637 -1,-1 -1,-1 -1,-1 141444,162 -1,-1 321400,7 247265,17 88894,119 104670,13 68660,6 -1,-1 32944,251 53855,135 280395,51 -1,-1 -1,-1 56721,299 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 80880,134 77032,238 75608,154 -1,-1 58518,225 -1,-1 -1,-1 129678,12 -1,-1 70001,225 26760,2527 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 35607,36 -1,-1 -1,-1 -1,-1 50930,317 -1,-1 -1,-1 -1,-1 -1,-1 103940,208 -1,-1 -1,-1 -1,-1";

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

function percToMax () {
    let percentage = ((userTotal[1] / 2277)*100).toFixed(2);
    return parseInt(percentage)+'%';
}

function decimalSeperation(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
//Insert Skill Data into Table
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

//Tut Island to Max Percentage tracker
const barFiller = document.querySelector('.barFiller');
barFiller.style.width = percToMax();
barFiller.textContent = percToMax();