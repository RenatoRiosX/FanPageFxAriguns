//mostrar u ocultar el botón para subir
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("btnSubir").style.display = "block";
    } else {
        document.getElementById("btnSubir").style.display = "none";
    }
};