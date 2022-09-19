fuction tienepunto(){
    tmp = formusuario.cor.value;

    cor = false;

    for (i = 0; i < tmp.length; i++) {
        if (tmp.charAt(i) == '.') {
            cor = true;
            break;
        }
    }

    if (tmp.includes('.')) pw = true

    if (!cor) {
        alert("El correo Electronico no es valido");
        formusuario.cor.focus();
        return false;
    }

}