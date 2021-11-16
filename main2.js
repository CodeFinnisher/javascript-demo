let persons;

async function readPersonsFromJson() {
  persons = await $.getJSON('MOCK_DATA.json');
  renderPersonsToScreen();
}

function renderPersonsToScreen() {
  for (let person of persons) {
    $('body').append(`
    <div class="person">
    <h3>${person.first_name} ${person.last_name}</h3>
    <p>gender: ${person.gender}</p>
    <p>job: ${person.job}</p>
    <p>email: ${person.email}</p>
    <p>country: ${person.country}</p>
    </div>
    `);
  }
}


readPersonsFromJson();