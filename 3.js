function nomear() {
    let confirmar = confirm("Posso saber qual o seu nome?");
    if (confirmar) {
        let nome = prompt("Qual o seu nome?");
        if (nome) {
            alert("Seja bem-vindo(a) " + nome + "!");
        } else {
            alert("Você não digitou um nome.");
        }
    } else {
        alert("Você respondeu que não. Que pena! Bye bye!");
    }
}