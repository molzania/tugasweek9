//Jawaban Soal No. 1
// Buatlah sebuah object hewan yang berisikan:
// ciri-ciri (atribute) :
//  nama: String
// kaki: Number
// warna: Array
// spesies: String (mamalia/unggas/dll)
// makanan: Array
// keahliannya (method) :
// terbang / loncat / berburu / dll

// Tampilkan dengan console.log seperti ini, Contoh :
// Nama: Kucing
// Kaki :  4
// Spesies: Mamalia
// Warna: oren, putih, item
// Makanan : Ikan, Ayam
// Suara: Miaaaaw

let kucing = {
    Nama: 'Kucing',
    Kaki: 4,
    Spesies: 'Mamalia',
    Warna: ['oren', 'putih', 'item'],
    Makanan: ['Ikan', 'Ayam'],
    Suara: 'Miaaaaw',
    Keahlian: () => {
        return "Menangkap tikus";
    }
};

console.log("Nama: ", kucing.Nama);
console.log("Jumlah Kaki: ", kucing.Kaki);
console.log("Spesies: ", kucing.Spesies);
console.log("Warna: ", kucing.Warna);
console.log("Makanan: ", kucing.Makanan);
console.log("Suara: ", kucing.Suara);
console.log("Keahlian: ", kucing.Keahlian());

//Jawaban Soal No. 2
// const data = 
// [
//   {
//     name: ‘Alpha’,
//     class: ‘Dragon’,
//     club: ['Bola', 'Bulutangkis']
//   },
//   {
//     name: Beta,
//     class: ‘Lizard’,
//     club: ['Membaca', 'Bulutangkis']
//   },
// ]

// Tampilkanlah seperti ini
// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis 
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis

// ${data.name} ada di kelas ${data.class}, dia mengikuti club {data.club}

const data = [
   {
     name: 'Alpha',
     class: 'Dragon',
     club: ['Bola', 'Bulutangkis'],
  },
   {
     name: 'Beta',
     class: 'Lizard',
     club: ['Membaca', 'Bulutangkis'],
   },
];