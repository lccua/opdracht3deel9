var personen = [];
const setup = () => {

    let persoon1 = {voornaam : "Jan",familienaam : "Janssens", leeftijd: 29};
    let persoon2 = {voornaam : "Mieke",familienaam : "Mickelson", leeftijd: 31};
    let persoon3 = {voornaam : "Donald",familienaam : "duck", leeftijd: 86};
    let persoon4 = {voornaam : "Piet",familienaam : "Piraat", leeftijd: 54};

    personen = [persoon1, persoon2, persoon3, persoon4];
    addAllPersons();
    printPerson({ target: { selectedIndex: 0 } });
}

const addAllPersons = () => {
    let select = document.querySelector("#selectPerson");
    for (let i = 0; i < personen.length; i++) {
        let persoon = personen[i];
        let optionHtml = `<option id="persoon${i+1}">${persoon.voornaam} (${persoon.leeftijd})</option>`;
        select.insertAdjacentHTML('beforeend', optionHtml);
    }

    select.addEventListener("change", printPerson);
}

const printPerson = (event) => {
    let persoon = personen[event.target.selectedIndex];
    let voornaam = document.getElementsByClassName("firstname")[0];
    let achternaam = document.getElementsByClassName("lastname")[0];
    let leeftijd = document.getElementsByClassName("age")[0];

    voornaam.textContent = persoon.voornaam;
    achternaam.textContent = persoon.familienaam;
    leeftijd.textContent = persoon.leeftijd;
}

window.addEventListener("load", setup);
