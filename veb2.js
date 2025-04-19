<script>
function addExperience() {
  const company = prompt("Enter company name:");
  const position = prompt("Enter position:");
  const description = prompt("Enter a short description:");

  if (company && position && description) {
    const container = document.getElementById("work-experience");
    const newItem = document.createElement("div");
    newItem.innerHTML = `
      <h4>${company}</h4>
      <h6>${position}</h6>
      <p>${description}</p>
    `;
    container.appendChild(newItem);
  }
}

function addEducation() {
  const year = prompt("Enter year (e.g., 2025-2029):");
  const school = prompt("Enter university name:");
  const degree = prompt("Enter degree or field:");

  if (year && school && degree) {
    const container = document.getElementById("education");
    const newItem = document.createElement("div");
    newItem.innerHTML = `
      <h5>
        <div>${year}</div>
        <div>${school}</div>
        <ul><li>${degree}</li></ul>
      </h5>
    `;
    container.appendChild(newItem);
  }
}

function addSkill() {
  const skill = prompt("Enter new skill:");
  if (skill) {
    const list = document.getElementById("skills");
    const newItem = document.createElement("li");
    newItem.textContent = skill;
    list.appendChild(newItem);
  }
}
</script>