const csvtoConvert = "1437256,829,17151072 -1,40,40528 -1,38,31249 -1,46,72821 -1,44,57598 -1,1,28 -1,31,15194 1439205,59,264675 1715314,44,58717 285436,80,1986201 654694,69,676086 627719,69,673510 74730,99,13052174 1893633,33,19986 -1,1,31 -1,15,2530 1504507,16,2965 988104,53,145579 1129509,41,41198 -1,1,0 1097366,18,3872 1341448,10,1310 -1,1,0 1194455,20,4820 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 1035153,1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 71414,508 -1,-1 -1,-1";

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

document.getElementById('attack').innerHTML = `
            <th>Attack</th>
            <td>${userAttack[level]}</td>
            <td>${decimalSeperation(userAttack[xp])}</td>
            <td>${decimalSeperation(userAttack[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('defence').innerHTML = `
            <th>Defence</th>
            <td>${userDefence[level]}</td>
            <td>${decimalSeperation(userDefence[xp])}</td>
            <td>${decimalSeperation(userDefence[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('strength').innerHTML = `
            <th>Strength</th>
            <td>${userStrength[level]}</td>
            <td>${decimalSeperation(userStrength[xp])}</td>
            <td>${decimalSeperation(userStrength[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('hitpoints').innerHTML = `
            <th>Hitpoints</th>
            <td>${userHitpoints[level]}</td>
            <td>${decimalSeperation(userHitpoints[xp])}</td>
            <td>${decimalSeperation(userHitpoints[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('ranged').innerHTML = `
            <th>Ranged</th>
            <td>${userRanged[level]}</td>
            <td>${decimalSeperation(userRanged[xp])}</td>
            <td>${decimalSeperation(userRanged[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('prayer').innerHTML = `
            <th>Prayer</th>
            <td>${userPrayer[level]}</td>
            <td>${decimalSeperation(userPrayer[xp])}</td>
            <td>${decimalSeperation(userPrayer[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('magic').innerHTML = `
            <th>Magic</th>
            <td>${userMagic[level]}</td>
            <td>${decimalSeperation(userMagic[xp])}</td>
            <td>${decimalSeperation(userMagic[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('cooking').innerHTML = `
            <th>Cooking</th>
            <td>${userCooking[level]}</td>
            <td>${decimalSeperation(userCooking[xp])}</td>
            <td>${decimalSeperation(userCooking[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('woodcutting').innerHTML = `
            <th>Woodcutting</th>
            <td>${userWoodcutting[level]}</td>
            <td>${decimalSeperation(userWoodcutting[xp])}</td>
            <td>${decimalSeperation(userWoodcutting[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('fletching').innerHTML = `
            <th>Fletching</th>
            <td>${userFletching[level]}</td>
            <td>${decimalSeperation(userFletching[xp])}</td>
            <td>${decimalSeperation(userFletching[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('fishing').innerHTML = `
            <th>Fishing</th>
            <td>${userFishing[level]}</td>
            <td>${decimalSeperation(userFishing[xp])}</td>
            <td>${decimalSeperation(userFishing[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('firemaking').innerHTML = `
            <th>Firemaking</th>
            <td>${userFiremaking[level]}</td>
            <td>${decimalSeperation(userFiremaking[xp])}</td>
            <td>${decimalSeperation(userFiremaking[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('crafting').innerHTML = `
            <th>Crafting</th>
            <td>${userCrafting[level]}</td>
            <td>${decimalSeperation(userCrafting[xp])}</td>
            <td>${decimalSeperation(userCrafting[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('smithing').innerHTML = `
            <th>Smithing</th>
            <td>${userSmithing[level]}</td>
            <td>${decimalSeperation(userSmithing[xp])}</td>
            <td>${decimalSeperation(userSmithing[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('mining').innerHTML = `
            <th>Mining</th>
            <td>${userMining[level]}</td>
            <td>${decimalSeperation(userMining[xp])}</td>
            <td>${decimalSeperation(userMining[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('herblore').innerHTML = `
            <th>Herblore</th>
            <td>${userHerblore[level]}</td>
            <td>${decimalSeperation(userHerblore[xp])}</td>
            <td>${decimalSeperation(userHerblore[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('agility').innerHTML = `
            <th>Agility</th>
            <td>${userAgility[level]}</td>
            <td>${decimalSeperation(userAgility[xp])}</td>
            <td>${decimalSeperation(userAgility[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('thieving').innerHTML = `
            <th>Thieving</th>
            <td>${userThieving[level]}</td>
            <td>${decimalSeperation(userThieving[xp])}</td>
            <td>${decimalSeperation(userThieving[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('slayer').innerHTML = `
            <th>Slayer</th>
            <td>${userSlayer[level]}</td>
            <td>${decimalSeperation(userSlayer[xp])}</td>
            <td>${decimalSeperation(userSlayer[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('farming').innerHTML = `
            <th>Farming</th>
            <td>${userFarming[level]}</td>
            <td>${decimalSeperation(userFarming[xp])}</td>
            <td>${decimalSeperation(userFarming[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('runecrafting').innerHTML = `
            <th>Runecrafting</th>
            <td>${userRunecrafting[level]}</td>
            <td>${decimalSeperation(userRunecrafting[xp])}</td>
            <td>${decimalSeperation(userRunecrafting[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('hunter').innerHTML = `
            <th>Hunter</th>
            <td>${userHunter[level]}</td>
            <td>${decimalSeperation(userHunter[xp])}</td>
            <td>${decimalSeperation(userHunter[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;
document.getElementById('construction').innerHTML = `
            <th>Construction</th>
            <td>${userConstruction[level]}</td>
            <td>${decimalSeperation(userConstruction[xp])}</td>
            <td>${decimalSeperation(userConstruction[rank].replace(/-1/, "<span class='text-danger'>Rank too low</span>"))}</td>
`;