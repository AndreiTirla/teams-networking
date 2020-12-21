function insertPersons(data) {
  const tbody = document.querySelector("#list tbody");
  tbody.innerHTML = personsHTML(data);
}
function personsHTML(persons) {
  return persons.map(getPersonHtml).join("");
}

function getPersonHtml(person) {
  const gitHub = person.github;
  return `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td><a target="_blank" href="https://github.com/${gitHub}">GitHub</a></td>
        </tr>`;
}

fetch("team.json")
  .then((r) => r.json())
  .then((data) => {
    insertPersons(data);
  });
