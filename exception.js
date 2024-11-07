// Fungsi untuk menampilkan waktu saat ini setiap detik
function updateTime() {
  document.getElementById("header").textContent = new Date().toString();
}
setInterval(updateTime, 1000); // Memperbarui waktu setiap detik
console.log("Program Started");

// Fungsi untuk melakukan pembagian dengan error handling
function divideNumbers(a, b) {
  try {
    // Validasi input
    if (a === undefined || b === undefined) throw new Error("Inputs cannot be empty.");
    if (isNaN(a) || isNaN(b)) throw new Error("Both inputs must be numbers.");
    if (b === 0) throw new Error("Cannot divide by zero.");

    // Jika valid, lakukan pembagian
    let result = a / b;
    console.log(`Result: ${a} / ${b} = ${result}`);
    return result;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Fungsi untuk menangani input pengguna dan memanggil divideNumbers
function performDivision() {
  const numA = parseFloat(document.getElementById("inputA").value) || undefined;
  const numB = parseFloat(document.getElementById("inputB").value) || undefined;

  // Panggil fungsi pembagian
  divideNumbers(numA, numB);
}
