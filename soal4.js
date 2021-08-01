let buah = [
    {
        Pic: './img/apple.png',
        Name: 'Apple',
        Color: 'Red',
        Latin: 'Malus Mill',
        Seed: 'Single Seed'
    },
    {
        Pic: './img/banana.png',
        Name: 'Banana',
        Color: 'Yellow',
        Latin: 'Musa',
        Seed: 'Double Seed'
    },
    {
        Pic: './img/blueberry.png',
        Name: 'Blueberry',
        Color: 'Purple',
        Latin: 'Cyanococcus',
        Seed: 'Single Seed'
    },
    {
        Pic: './img/cherry.png',
        Name: 'Cherry',
        Color: 'Dark Red',
        Latin: 'Prunus Cerasus',
        Seed: 'Double Seed'
    },
    {
        Pic: './img/lemon.png',
        Name: 'Lemon',
        Color: 'Yellow',
        Latin: 'Citrus Limun',
        Seed: 'Single Seed'
    },
    {
        Pic: './img/mango.png',
        Name: 'Mango',
        Color: 'Orange',
        Latin: 'Mangifera indica',
        Seed: 'Double Seed'
    },
    {
        Pic: './img/orange.png',
        Name: 'Orange',
        Color: 'Orange',
        Latin: 'Citrus',
        Seed: 'Single Seed'
    },
    {
        Pic: './img/pear.png',
        Name: 'Pear',
        Color: 'Green',
        Latin: 'Pyrus',
        Seed: 'Double Seed'
    }
]

let listBuah = document.getElementById("list-buah");

for(let i = 0; i <= buah.length; i++){
    listBuah.innerHTML += `
    <div id="buah"> 
    <img src='${buah[i].Pic}'/>
    <h3>${buah[i].Name}</h3>
    <p>Color: ${buah[i].Color}</p>
    <p>Latin Name: ${buah[i].Latin}</p>
    <p>Seed Type: ${buah[i].Seed}</p>
     </div>` 
}
