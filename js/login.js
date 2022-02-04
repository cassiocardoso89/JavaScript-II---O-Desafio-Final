const username = document.querySelector('.userName');
const password = document.querySelector('.password');

username.value = "";
password.value = "";
username.placeholder = "Usuário";
password.placeholder = "Senha";

username.onfocus = function () {username.placeholder = "";}
username.onblur = function () {username.placeholder = "Usuário";}

password.onfocus = function () {password.placeholder = "";}
password.onblur = function () {password.placeholder = "Senha";}

const esqueciPwd = document.querySelector('.esqueciPwd');
esqueciPwd.onclick = function () {
    alert("Funcionalidade ainda não implementada!");
}

const submitBtn = document.querySelector('.submitBtn');
var userData = [
    {
        "id": "1",
        "name": "cassio",
        "password": "123"
    },
    {
        "id": "2",
        "name": "gustavo",
        "password": "123"
    }
];


submitBtn.onclick = function () {
    logar();
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        logar();
    }
});


function logar() {
    var user = {
        "name": username.value.toLowerCase(),
        "password": password.value.toLowerCase()
    }
    if (user.name == "" || user.password == "") {
        alert("Preencha todos os campos!");
    } else {
        var userFound = false;
        for (var i = 0; i < userData.length; i++) {
            if (user.name == userData[i].name && user.password == userData[i].password) {
                userFound = true;
                break;
            }
        }
        if (userFound) {
            window.location.href = "../home/";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    }
};