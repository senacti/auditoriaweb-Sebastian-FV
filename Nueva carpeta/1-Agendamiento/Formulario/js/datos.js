function tienepunto() {
    tmp = forusuario.cor.value;

    cor = false;
    for (i = 0; i < tmp.length; i++){
        if (tmp.charAt(i) == ".") {
            cor = true;
            break;
        }
    }

    if (!cor) {
        alert("El correo electronico no es valido");
        forusuario.cor.focus();
        return false;
    }

    tmp = forusuario.pweb.value;

    pw = false;
    for (i = 0; i < tmp.length; i++) {
        if (tmp.charAt(i) == ".") {
            pw = true;
            break;
        }
    }


    if (!pw) {
        alert("La direccion de la Paguina Web no es valida");
        forusuario.pweb.focus();
        return false;
    }

    return true;
}