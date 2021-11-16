let persons;

async function readPersonsFromJson() {
  persons = await $.getJSON('persons.json');
  renderPersonsToScreen();
}

function renderPersonsToScreen() {
  for (let person of persons) {
    $('body').append(`
    <div class="person">
    <h3>${person.firstName} ${person.lastName}</h3>
    <p>${person.firstName} is ${person.age} years old.</p>
    </div>
    `);
  }
}


readPersonsFromJson();





/*
let items;

async function readItemsFromJson() {
  items = await $.getJSON('items.json');
  // items = await (await fetch('items.json')).json;


}

readItemsFromJson();

function renderItemsToScreen() {
  for (let item of items) {
    $('myData').append(`
       <div class="items">
        <h3>Vår produkt: ${items.name} | ${items.description}.
        </br>Can be yours for only: ${item.price} </h3>
      </div>
      `
    )
  }
}
*/