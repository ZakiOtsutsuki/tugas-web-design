showlogin();
function showlogin() {
    var loginDiv = document.querySelector('.login');
    var daftarDiv = document.querySelector('.daftar');
    loginDiv.style.display = 'block';
    daftarDiv.style.display = 'none';
}

function showdaftar() {
    var loginDiv = document.querySelector('.login');
    var daftarDiv = document.querySelector('.daftar');
    loginDiv.style.display = 'none';
    daftarDiv.style.display = 'block';
}