// Array antrian awal
const antrian = ["Kucing", "Anjing", "Kelinci", "Burung"];
console.log("Antrian Awal : " + antrian);

// Nambah antrian
antrian.push("Hamster");
console.log("Setelah Hamster datang: " + antrian);

antrian.push("Ikan", "Ular");
console.log("Setelah Ikan dan Ular datang: " + antrian);

// Ular pulang (hewan terakhir keluar dari antrian)
antrian.pop();
console.log("Setelah Ular pulang: " + antrian);

// Hewan pertama dan kedua dilayani
antrian.shift();
console.log("Setelah Kucing dilayani: " + antrian);

antrian.shift();
console.log("Setelah Anjing dilayani: " + antrian);

// Kuda nyerobot antrian
antrian.unshift("Kuda");
console.log("Setelah Kuda nyerobot di depan: " + antrian);
