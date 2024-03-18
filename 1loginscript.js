const database = [
    "Stefan.auticko123",
    "Pepa.kaktus7",
    "Tomas.profik1",
    "Ruda.csgopro2",
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const logindata = username + "." + password;

    let found = false;

    for (let i = 0; i < database.length; i++) {
        if (logindata === database[i]) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("logOutput").innerHTML = "Úspěšně přihlášeno";
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 1000);
    } else {
        alert("Nesprávně zadané údaje");
    }
}