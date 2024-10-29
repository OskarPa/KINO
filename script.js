
let wybranyFilm = '';
let biletyNormalne = 0;
let biletyUlgowe = 0;

function Wybierzfilm(film) {
    wybranyFilm = film;
    document.getElementById('Wybrany_film').textContent = film;
    document.getElementById('wybieranie_filmu').style.display = 'none';
    document.getElementById('Panelbiletów').style.display = 'block';
}


function Pokażmiejsca() {

    biletyNormalne = parseInt(document.getElementById('Normalnybilet').value)
    biletyUlgowe = parseInt(document.getElementById('Ulgowybilet').value)


    const maxMiejsca = biletyNormalne + biletyUlgowe;
    
 
    if (maxMiejsca > 0) {
        document.getElementById('Panelbiletów').style.display = 'none';
        document.getElementById('Panelmiejsc').style.display = 'block';
    } else {
        alert("Wybierz przynajmniej jeden bilet, aby kontynuować.");
    }
}

function Podsumowanie() {

    const zaznaczoneMiejsca = [];
const wszystkieMiejsca = document.querySelectorAll('.miejsce');

for (let i = 0; i < wszystkieMiejsca.length; i++) {
    if (wszystkieMiejsca[i].checked) {
        zaznaczoneMiejsca.push(wszystkieMiejsca[i].value);
    }
}


   
    const maxMiejsca = biletyNormalne + biletyUlgowe;
    if (zaznaczoneMiejsca.length === maxMiejsca) {
 
        document.getElementById('iloscnormalnych').textContent = biletyNormalne;
        document.getElementById('ilosculgowych').textContent = biletyUlgowe;
        document.getElementById('jakiemiejsca').textContent = zaznaczoneMiejsca.join(', ');
        
    
        const koszt = (biletyNormalne * 35) + (biletyUlgowe * 20);
        document.getElementById('koszt').textContent = koszt;


        document.getElementById('Panelmiejsc').style.display = 'none';
        document.getElementById('Podsumowanie').style.display = 'block';
    } else {
        alert(`Wybierz dokładnie ${maxMiejsca} miejsc.`);
    }
}

