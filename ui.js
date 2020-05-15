function pushSkillsToTable(skill) {
        if (parseInt(skill.level) === 99) {
            skill.tableOutput.innerHTML = `
            <th><img src="img/skillIcons/${skill.name}.png" class="float-left"><b>${skill.name}</th>
            <td class="tc-level max"><b>${skill.level}</b></td>
            <td class="tc-xp">${decimalSeperation(skill.xp)}</td>
            <td class="tc-r">${decimalSeperation(skill.rank)}</td>
`;
        } else {
            skill.tableOutput.innerHTML = `
            <th><img src="img/skillIcons/${skill.name}.png" class="float-left">${skill.name}</th>
            <td class="tc-level">${skill.level.replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(skill.xp).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-r">${decimalSeperation(skill.rank).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
        }
    }
    function pushActivitiesToTable(activity){
        activity.tableOutput.innerHTML = `
            <th><img src="img/skillIcons/${activity.name}.png" class="float-left">${activity.title}</th>
            <td class="tc-level">${activity.amount.replace(/-1|^1$/, "<span class='text-danger'>Rank too low</span>")}</td>
            <td class="tc-xp">${decimalSeperation(activity.rank).replace(/-1/, "<span class='text-danger'>Rank too low</span>")}</td>
`;
    }

function insertSkills() {
    activities.forEach(x => pushActivitiesToTable(x));
    stats.forEach(x => pushSkillsToTable(x));
}

function t2max() {
    const barFiller = document.querySelector('.barFiller');
    barFiller.style.width = percToMax();
    barFiller.textContent = percToMax();
}
