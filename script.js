// Function untuk menghitung (luas)
function hitungLuas() {
    var sisiLuas = parseFloat(document.getElementById("sisi-luas").value);
    var luas = sisiLuas * sisiLuas;
    document.getElementById("output_luas").innerHTML = "Luas: " + luas;
  }
  
  // Function untuk menghitung (keliling)
  function hitungKeliling() {
    var sisiKeliling = parseFloat(document.getElementById("sisi-keliling").value);
    var keliling = 4 * sisiKeliling;
    document.getElementById("output_keliling").innerHTML = "Keliling: " + keliling;
  }
  
  // Function untuk mereset form
  function resetFormp() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
  }

  function resetFormk() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("output_keliling").innerHTML = "";
  }