//Menampilkan atau mendapatkan button:
mybutton = document.getElementById("myBtn");

// Ketika pengguna scroll kebawah sebesar 20px dari atas pada dokumen atau website, maka akan muncul buttonnya.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Ketika pengguna mengklik button, maka akan mengscroll ke atas
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE and Opera
}