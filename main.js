

function abrir() {
    var menu = document.getElementById('aside-menu');
    var abrir = document.getElementById('btn-menu-abrir');
    var cerrar = document.getElementById('btn-menu-cerrar');
    menu.style.left='0px';
    abrir.style.display='none';
    cerrar.style.display='block';
}

function cerrar() {
    var menu = document.getElementById('aside-menu');
    var abrir = document.getElementById('btn-menu-abrir');
    var cerrar = document.getElementById('btn-menu-cerrar');
    menu.style.left='-310px';
    abrir.style.display='block';
    cerrar.style.display='none';
}




