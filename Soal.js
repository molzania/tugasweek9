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
console.log("Warna: ", kucing.Warna[0], ",", kucing.Warna[1], ",", kucing.Warna[2]);
console.log("Makanan: ", kucing.Makanan[0], ",", kucing.Makanan[1]);
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

  console.log(data[0].name +  " ada di kelas " + data[0].class + " dia mengikuti " + data[0].club);
  console.log(data[1].name +  " ada di kelas " + data[1].class + " dia mengikuti " + data[1].club);

    //Jawaban Soal Nomor 3
    // let todos = [
    //   {id: 1, todo: "belajar coding"},
    //   {id: 2, todo: "nanti tidur"}
    // ]
    
    // Buatlah function CRUD sederhana pada data di atas
    
    let todos = [
        {id: 1, todo: "belajar coding"},
        {id: 2, todo: "nanti tidur"},
    ];

    function printAll() {
      for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
      };
    };

    printAll();

    function printByID(id) {
      return todos[id-1].todo;
    }

    console.log("Print by ID:", printByID(1));

    function add(newTodo) {
      todos.push({
        id: todos.length - 1,
        todo: newTodo,
      })
      return todos;
    }

    console.log("Add:", add("Ngerjain Tugas"));

    function deleteByID(id) {
      todos.splice(id - 1,1);
      return todos;
    }

    console.log("Delete:", deleteByID(2));


  //   function updateByID(newTodo){
  //     todos[0].todo = newTodo;
  //     return todos;
  //  }

  function updateByID(id, newTodo){
    for(var i in todos){
      if(todos[i].id == id){
        todos[i].desc = newTodo;
        break;
      }
    }
  }
  
 console.log("UpdateByID:", updateByID(1,"Belajar CRUD"));