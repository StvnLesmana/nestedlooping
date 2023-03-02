//4. Perualangan Foreach
//Perulangan FOREACH biasanya digunakaan untuk mencetak array didalam array
// Perulangan ini termasuk dalam perulangan counted loop, Karena jumlah perulangannya akan di tentukan oleh panjang dari array
// Ada 2 cara untuk menggunakan perulangan foreach
//1. Menggunakan for dengan operator in
//2. Menggunakan method foreach()

//Contoh
// let bahasa = ["JAVA SCRIPT" , "Java Aja" , "Objective" , "Phython"];
// for(let i=0; i < bahasa.length; i++){
//     document.write(`${i + 1}.${bahasa[i]}<br/>`);
// }

// let bahasaPemrograman = ["JavaScript" , "Java" , "Phython" , " Objective"];
// for (let i in bahasaPemrograman){
//     document.write(`${i}.${bahasaPemrograman[i]}<br/>`);
// }

//Contoh Perulangan Foreach();
// let hari = ["Senin" , "Selasa" , "Rabu" , "Kamis" , "Jumat" , "Sabtu" , "Minggu"];
// hari.forEach((hari) => {
//     document.write(`<h1> ${hari} </h1>`);
// });

// let angka = 10;
// angka = 3;
// console.log(angka);

//Perubahan dengan method repeat()
// perulangan dengan menggunakan method atau fungsi repeat()
// termasuk dalam perulangan counted loop

// fungsi ini khusus digunakan untuk mengulang sebuah text (string);

// //Contoh
// for (let i = 0; i < 10; i++){
//     document.write(`Jangan ulangi kalimat ini <br>`.repeat(0));
// }

//Perulangan nested(Bersarang)
//Nested loop adalah perulangan bersarang (Perulangan di dalam perulangan)

//Contoh
// for (let i = 0; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         document.write(`<p>Perulangan ke ${i},${j} </p>`)
//     }
// }

//TUGAS DIBAWAH INI
// var ulang = confirm(" Apakah anda ingin mengulang ");
// var counter = 0;

// do{
//     counter++
//     ulang = confirm(" Apakah anda ingin mengulang ? ");
// }while (ulang);

// document.write(" Perulangan ini sudah dilakukan sebanyak " + counter + " kali ");

// var ulangi = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// while (ulangi) {
//     counter++;
//     var bintang = "*".repeat(counter) + "<br>";
//     document.write(counter + ": " + bintang);
//     ulangi = confirm("apakah anda ingin mengulang?");
// 
var ulang = confirm("Apakah anda mau mengulang?");
var counter = 0;

while (ulang){
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    ulang = confirm ("Apakah anda mau mengulang?")
}