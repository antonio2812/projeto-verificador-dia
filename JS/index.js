function verificarDia() {
    let button = document.getElementById("verificar");

    button = new Date().getDay();

    console.log(button);

    switch (button) {
        case 0: 
            document.getElementById("mensagem").innerHTML = "Hoje é Domingo!";
        break;

        case 1: 
            document.getElementById("mensagem").innerHTML = "Hoje é Segunda!";
        break;

        case 2: 
            document.getElementById("mensagem").innerHTML = "Hoje é Terça!";
        break;

        case 3: 
            document.getElementById("mensagem").innerHTML = "Hoje é Quarta!";
        break;

        case 4: 
            document.getElementById("mensagem").innerHTML = "Hoje é Quinta!";
        break;

        case 5: 
            document.getElementById("mensagem").innerHTML = "Hoje é Sexta!";
        break;

        case 6: 
            document.getElementById("mensagem").innerHTML = "Hoje é Sabádo!";
        break;
    };
};