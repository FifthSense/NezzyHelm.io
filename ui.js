function insertSkills() {
    //Attack
    if (parseInt(userAttack[level]) === 99) {
        attack.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left"><b>Attack</th>
            <td class="tc-level max"><b>${userAttack[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userAttack[xp])}</td>
            <td class="tc-r">${decimalSeperation(userAttack[rank])}</td>
`;
    } else {
        attack.innerHTML = `
            <th><img src="img/skillIcons/attack.png" class="float-left">Attack</th>
            <td class="tc-level">${userAttack[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAttack[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userAttack[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Defence
    if (parseInt(userDefence[level]) === 99) {
        defence.innerHTML = `
            <th><img src="img/skillIcons/defence.png" class="float-left">Defence</th>
            <td class="tc-level max">$<b>{userDefence[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userDefence[xp])}</td>
            <td class="tc-r">${decimalSeperation(userDefence[rank])}</td>
`;
    } else {
        defence.innerHTML = `
            <th><img src="img/skillIcons/defence.png" class="float-left">Defence</th>
            <td class="tc-level">${userDefence[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userDefence[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userDefence[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Strength
    if (parseInt(userStrength[level]) === 99) {
        strength.innerHTML = `
            <th><img src="img/skillIcons/strength.png" class="float-left">Strength</th>
            <td class="tc-level max"><b>${userStrength[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userStrength[xp])}</td>
            <td class="tc-r">${decimalSeperation(userStrength[rank])}</td>
`;
    } else {
        strength.innerHTML = `
            <th><img src="img/skillIcons/strength.png" class="float-left">Strength</th>
            <td class="tc-level">${userStrength[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userStrength[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userStrength[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Hitpoints
    if (parseInt(userHitpoints[level]) === 99) {
        hitpoints.innerHTML = `
            <th><img src="img/skillIcons/hitpoints.png" class="float-left">Hitpoints</th>
            <td class="tc-level max"><b>${userHitpoints[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userHitpoints[xp])}</td>
            <td class="tc-r">${decimalSeperation(userHitpoints[rank])}</td>
`;
    } else {
        hitpoints.innerHTML = `
            <th><img src="img/skillIcons/hitpoints.png" class="float-left">Hitpoints</th>
            <td class="tc-level">${userHitpoints[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHitpoints[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userHitpoints[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Ranged
    if (parseInt(userRanged[level]) === 99) {
        ranged.innerHTML = `
            <th><img src="img/skillIcons/ranged.png" class="float-left">Ranged</th>
            <td class="tc-level max"><b>${userRanged[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userRanged[xp])}</td>
            <td class="tc-r">${decimalSeperation(userRanged[rank])}</td>
`;
    } else {
        ranged.innerHTML = `
            <th><img src="img/skillIcons/ranged.png" class="float-left">Ranged</th>
            <td class="tc-level">${userRanged[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userRanged[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userRanged[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Prayer
    if (parseInt(userPrayer[level]) === 99) {
        prayer.innerHTML = `
            <th><img src="img/skillIcons/prayer.png" class="float-left">Prayer</th>
            <td class="tc-level max"><b>${userPrayer[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userPrayer[xp])}</td>
            <td class="tc-r">${decimalSeperation(userPrayer[rank])}</td>
`;
    } else {
        prayer.innerHTML = `
            <th><img src="img/skillIcons/prayer.png" class="float-left">Prayer</th>
            <td class="tc-level">${userPrayer[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userPrayer[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userPrayer[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Magic
    if (parseInt(userMagic[level]) === 99) {
        magic.innerHTML = `
            <th><img src="img/skillIcons/magic.png" class="float-left">Magic</th>
            <td class="tc-level max"><b>${userMagic[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userMagic[xp])}</td>
            <td class="tc-r">${decimalSeperation(userMagic[rank])}</td>
`;
    } else {
        magic.innerHTML = `
            <th><img src="img/skillIcons/magic.png" class="float-left">Magic</th>
            <td class="tc-level">${userMagic[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMagic[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userMagic[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Cooking
    if (parseInt(userCooking[level]) === 99) {
        cooking.innerHTML = `
            <th><img src="img/skillIcons/cooking.png" class="float-left">Cooking</th>
            <td class="tc-level max"><b>${userCooking[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userCooking[xp])}</td>
            <td class="tc-r">${decimalSeperation(userCooking[rank])}</td>
`;
    } else {
        cooking.innerHTML = `
            <th><img src="img/skillIcons/cooking.png" class="float-left">Cooking</th>
            <td class="tc-level">${userCooking[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCooking[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userCooking[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Woodcutting
    if (parseInt(userWoodcutting[level]) === 99) {
        woodcutting.innerHTML = `
            <th><img src="img/skillIcons/woodcutting.png" class="float-left">Woodcutting</th>
            <td class="tc-level max"><b>${userWoodcutting[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userWoodcutting[xp])}</td>
            <td class="tc-r">${decimalSeperation(userWoodcutting[rank])}</td>
`;
    } else {
        woodcutting.innerHTML = `
            <th><img src="img/skillIcons/woodcutting.png" class="float-left">Woodcutting</th>
            <td class="tc-level">${userWoodcutting[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userWoodcutting[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userWoodcutting[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Fletching
    if (parseInt(userFletching[level]) === 99) {
        fletching.innerHTML = `
            <th><img src="img/skillIcons/fletching.png" class="float-left">Fletching</th>
            <td class="tc-level max"><b>${userFletching[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userFletching[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFletching[rank])}</td>
`;
    } else {
        fletching.innerHTML = `
            <th><img src="img/skillIcons/fletching.png" class="float-left">Fletching</th>
            <td class="tc-level">${userFletching[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFletching[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFletching[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Fishing
    if (parseInt(userFishing[level]) === 99) {
        fishing.innerHTML = `
            <th><img src="img/skillIcons/fishing.png" class="float-left">Fishing</th>
            <td class="tc-level max"><b>${userFishing[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userFishing[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFishing[rank])}</td>
`;
    } else {
        fishing.innerHTML = `
            <th><img src="img/skillIcons/fishing.png" class="float-left">Fishing</th>
            <td class="tc-level">${userFishing[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFishing[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFishing[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Firemaking
    if (parseInt(userFiremaking[level]) === 99) {
        firemaking.innerHTML = `
            <th><img src="img/skillIcons/firemaking.png" class="float-left">Firemaking</th>
            <td class="tc-level max"><b>${userFiremaking[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userFiremaking[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFiremaking[rank])}</td>
`;
    } else {
        firemaking.innerHTML = `
            <th><img src="img/skillIcons/firemaking.png" class="float-left">Firemaking</th>
            <td class="tc-level">${userFiremaking[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFiremaking[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFiremaking[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Crafting
    if (parseInt(userCrafting[level]) === 99) {
        crafting.innerHTML = `
            <th><img src="img/skillIcons/crafting.png" class="float-left">Crafting</th>
            <td class="tc-level max"><b>${userCrafting[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userCrafting[xp])}</td>
            <td class="tc-r">${decimalSeperation(userCrafting[rank])}</td>
`;
    } else {
        crafting.innerHTML = `
            <th><img src="img/skillIcons/crafting.png" class="float-left">Crafting</th>
            <td class="tc-level">${userCrafting[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userCrafting[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userCrafting[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Smithing
    if (parseInt(userSmithing[level]) === 99) {
        smithing.innerHTML = `
            <th><img src="img/skillIcons/smithing.png" class="float-left">Smithing</th>
            <td class="tc-level max"><b>${userSmithing[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userSmithing[xp])}</td>
            <td class="tc-r">${decimalSeperation(userSmithing[rank])}</td>
`;
    } else {
        smithing.innerHTML = `
            <th><img src="img/skillIcons/smithing.png" class="float-left">Smithing</th>
            <td class="tc-level">${userSmithing[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userSmithing[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userSmithing[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Mining
    if (parseInt(userMining[level]) === 99) {
        mining.innerHTML = `
            <th><img src="img/skillIcons/mining.png" class="float-left">Mining</th>
            <td class="tc-level max"><b>${userMining[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userMining[xp])}</td>
            <td class="tc-r">${decimalSeperation(userMining[rank])}</td>
`;
    } else {
        mining.innerHTML = `
            <th><img src="img/skillIcons/mining.png" class="float-left">Mining</th>
            <td class="tc-level">${userMining[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userMining[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userMining[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Herblore
    if (parseInt(userHerblore[level]) === 99) {
        herblore.innerHTML = `
            <th><img src="img/skillIcons/herblore.png" class="float-left">Herblore</th>
            <td class="tc-level max"><b>${userHerblore[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userHerblore[xp])}</td>
            <td class="tc-r">${decimalSeperation(userHerblore[rank])}</td>
`;
    } else {
        herblore.innerHTML = `
            <th><img src="img/skillIcons/herblore.png" class="float-left">Herblore</th>
            <td class="tc-level">${userHerblore[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHerblore[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userHerblore[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Agility
    if (parseInt(userAgility[level]) === 99) {
        agility.innerHTML = `
            <th><img src="img/skillIcons/agility.png" class="float-left">Agility</th>
            <td class="tc-level max"><b>${userAgility[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userAgility[xp])}</td>
            <td class="tc-r">${decimalSeperation(userAgility[rank])}</td>
`;
    } else {
        agility.innerHTML = `
            <th><img src="img/skillIcons/agility.png" class="float-left">Agility</th>
            <td class="tc-level">${userAgility[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userAgility[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userAgility[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Thieving
    if (parseInt(userThieving[level]) === 99) {
        thieving.innerHTML = `
            <th><img src="img/skillIcons/thieving.png" class="float-left">Thieving</th>
            <td class="tc-level max"><b>${userThieving[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userThieving[xp])}</td>
            <td class="tc-r">${decimalSeperation(userThieving[rank])}</td>
`;
    } else {
        thieving.innerHTML = `
            <th><img src="img/skillIcons/thieving.png" class="float-left">Thieving</th>
            <td class="tc-level">${userThieving[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userThieving[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userThieving[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Slayer
    if (parseInt(userSlayer[level]) === 99) {
        slayer.innerHTML = `
            <th><img src="img/skillIcons/slayer.png" class="float-left">Slayer</th>
            <td class="tc-level max"><b>${userSlayer[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userSlayer[xp])}</td>
            <td class="tc-r">${decimalSeperation(userSlayer[rank])}</td>
`;
    } else {
        slayer.innerHTML = `
            <th><img src="img/skillIcons/slayer.png" class="float-left">Slayer</th>
            <td class="tc-level">${userSlayer[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userSlayer[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userSlayer[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Farming
    if (parseInt(userFarming[level]) === 99) {
        farming.innerHTML = `
            <th><img src="img/skillIcons/farming.png" class="float-left">Farming</th>
            <td class="tc-level max"><b>${userFarming[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userFarming[xp])}</td>
            <td class="tc-r">${decimalSeperation(userFarming[rank])}</td>
`;
    } else {
        farming.innerHTML = `
            <th><img src="img/skillIcons/farming.png" class="float-left">Farming</th>
            <td class="tc-level">${userFarming[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userFarming[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userFarming[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Runecrafting
    if (parseInt(userRunecrafting[level]) === 99) {
        runecrafting.innerHTML = `
            <th><img src="img/skillIcons/runecrafting.png" class="float-left">Runecrafting</th>
            <td class="tc-level max"><b>${userRunecrafting[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userRunecrafting[xp])}</td>
            <td class="tc-r">${decimalSeperation(userRunecrafting[rank])}</td>
`;
    } else {
        runecrafting.innerHTML = `
            <th><img src="img/skillIcons/runecrafting.png" class="float-left">Runecrafting</th>
            <td class="tc-level">${userRunecrafting[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userRunecrafting[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userRunecrafting[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Hunter
    if (parseInt(userHunter[level]) === 99) {
        hunter.innerHTML = `
            <th><img src="img/skillIcons/hunter.png" class="float-left">Hunter</th>
            <td class="tc-level max"><b>${userHunter[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userHunter[xp])}</td>
            <td class="tc-r">${decimalSeperation(userHunter[rank])}</td>
`;
    } else {
        hunter.innerHTML = `
            <th><img src="img/skillIcons/hunter.png" class="float-left">Hunter</th>
            <td class="tc-level">${userHunter[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userHunter[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userHunter[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Construction
    if (parseInt(userConstruction[level]) === 99) {
        construction.innerHTML = `
            <th><img src="img/skillIcons/construction.png" class="float-left">Construction</th>
            <td class="tc-level max"><b>${userConstruction[level]}</b></td>
            <td class="tc-xp">${decimalSeperation(userConstruction[xp])}</td>
            <td class="tc-r">${decimalSeperation(userConstruction[rank])}</td>
`;
    } else {
        construction.innerHTML = `
            <th><img src="img/skillIcons/construction.png" class="float-left">Construction</th>
            <td class="tc-level">${userConstruction[level].replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userConstruction[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userConstruction[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
    //Total
        if (parseInt(userConstruction[level]) === 2277) {
        total.innerHTML = `
            <th><img src="img/skillIcons/overall.png" class="float-left">Total</th>
            <td class="tc-level max"><b>${decimalSeperation(userTotal[level])}</b></td>
            <td class="tc-xp">${decimalSeperation(userTotal[xp])}</td>
            <td class="tc-r">${decimalSeperation(userTotal[rank])}</td>
`;
    } else {
        total.innerHTML = `
            <th><img src="img/skillIcons/overall.png" class="float-left">Total</th>
            <td class="tc-level">${decimalSeperation(userTotal[level]).replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(userTotal[xp]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(userTotal[rank]).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }
}
