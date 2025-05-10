document.querySelectorAll('.section-header').forEach(header => {
    const content = [];
    let next = header.nextElementSibling;

    while (next && !next.classList.contains('section-header')) {
        if (!next.matches('button')) content.push(next);
        next = next.nextElementSibling;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'dropdown-wrapper';

    content.forEach(el => wrapper.appendChild(el));
    header.after(wrapper);

    header.dataset.wrapperId = crypto.randomUUID();
    wrapper.dataset.wrapperId = header.dataset.wrapperId;

    wrapper.style.display = 'block';

    header.addEventListener('click', () => {
        wrapper.style.display = wrapper.style.display === 'none' ? 'block' : 'none';
    });
});

function getWrapperByHeaderText(text) {
    const header = Array.from(document.querySelectorAll('.section-header'))
        .find(h => h.textContent.trim() === text);
    if (!header) return null;

    return document.querySelector(`.dropdown-wrapper[data-wrapper-id="${header.dataset.wrapperId}"]`);
}

function addExperience() {
    const wrapper = getWrapperByHeaderText("Work Experience");
    if (!wrapper) return;

    const company = prompt("Company name:");
    if (!company) return;

    const position = prompt("Position:");
    if (!position) return;

    const responsibilities = [];
    while (true) {
        const resp = prompt("Responsibility (leave empty to finish):");
        if (!resp) break;
        responsibilities.push(resp);
    }

    if (!responsibilities.length) {
        alert("At least one responsibility required");
        return;
    }

    const newExp = document.createElement('div');
    newExp.className = 'work-item';
    newExp.innerHTML = `
        <div class="company-name">${company}</div>
        <div class="job-title">${position}</div>
        <div class="job-description">
            <ul>${responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
    `;
    wrapper.appendChild(newExp);
}

function addEducation() {
    const wrapper = getWrapperByHeaderText("Education");
    if (!wrapper) return;

    const years = prompt("Years (e.g., 2025-2029):");
    const school = prompt("School:");
    const degree = prompt("Degree:");
    if (!years || !school || !degree) return;

    const gpa = prompt("GPA (optional):");

    const newEdu = document.createElement('div');
    newEdu.className = 'education-item';
    newEdu.innerHTML = `
        <div class="education-date">${years}</div>
        <div class="education-school">${school}</div>
        <div class="education-degree">${degree}</div>
        ${gpa ? `<div class="education-degree">GPA: ${gpa}</div>` : ''}
    `;
    wrapper.appendChild(newEdu);
}

function addSkill() {
    const newSkill = prompt("New skill:");
    if (!newSkill) return;

    const skill = document.createElement('div');
    skill.className = 'skill';
    skill.textContent = newSkill;

    const skillsList = document.querySelector('.skills-list');
    skillsList.appendChild(skill);
}
