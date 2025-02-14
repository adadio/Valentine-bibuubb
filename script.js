// Password untuk masuk
function checkPassword() {
    let password = document.getElementById("password-input").value;
    if (password === "puta") { // Ganti password sesuai keinginan
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("valentine-content").style.display = "block";
        document.getElementById("bg-music").play(); // Play musik otomatis
    } else {
        alert("Password salah, coba lagi yaa! 💕");
    }
}

// Munculin pesan cinta
function showMessage() {
    document.getElementById("message").style.display = "block";
}

// Simpan surat cinta
function saveNote() {
    let note = document.getElementById("love-note").value;
    if (note) {
        alert("Surat kamu tersimpan! Aku bakal baca terus 💌");
        localStorage.setItem("loveNote", note);
    } else {
        alert("Ketik dulu dong, sayang! 😘");
    }
}

// Load surat cinta kalau ada
window.onload = function() {
    if (localStorage.getItem("loveNote")) {
        document.getElementById("love-note").value = localStorage.getItem("loveNote");
    }
};

// Animasi kelopak bunga jatuh
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let leaf = document.createElement("div");
        leaf.innerHTML = "🌸";
        leaf.style.position = "absolute";
        leaf.style.left = Math.random() * window.innerWidth + "px";
        leaf.style.top = "-50px";
        leaf.style.fontSize = Math.random() * 20 + 10 + "px";
        leaf.style.animation = "fall 5s linear infinite";
        document.body.appendChild(leaf);
        
        setTimeout(() => {
            leaf.remove();
        }, 5000);
    }, 300);
});
