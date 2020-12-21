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

let allPersons = [];

fetch("team.json")
  .then((r) => r.json())
  .then((data) => {
    allPersons = data;
    insertPersons(data);
  });

function searchPersons(text) {
  console.warn("search", text);
  return allPersons.filter((person) => {
    console.info({ person });
    return person.firstName.indexOf(text) > -1;
  });
}

const search = document.getElementById("search");
search.addEventListener("input", (e) => {
  const text = e.target.value;
  const filtrate = searchPersons(text);

  insertPersons(filtrate);
});
