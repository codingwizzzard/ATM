const users = [
    {
        name: 'Harsh',
        pin: '1234',
        bal: 1000000
    },
    {
        name: 'Yash',
        pin: '5678',
        bal: 90000
    },
    {
        name: 'Tushar',
        pin: '1312',
        bal: 85000
    },
    {
        name: 'Niraj',
        pin: '1001',
        bal: 54000
    },
    {
        name: 'Samarth',
        pin: '1100',
        bal: 50000
    }
];

function login() {
    var user = document.getElementById('username').value
    var pin = document.getElementById('pin').value
    var Info = false
    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin) {
            document.getElementById('form').style.display = "none"
            document.getElementById("inner").style.display = "block"
            document.getElementById("name").style.display = "none"
            Info = true
            break
        }
    } if (!Info) {
        alert('Error! Please enter correct USERNAME and PIN')
    }
}

function checkbal() {
    var user = document.getElementById("username").value;
    var pin = document.getElementById("pin").value;
    var found = false;

    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin) {
            document.getElementById("out").innerHTML = `Your balance is $${users[i].bal}`;
            found = true;
            break;
        }
    } if (!found) {
        document.getElementById("out").innerHTML = `INVALID !`;
    }
}

function deposit() {
    var user = document.getElementById("username").value;
    var pin = document.getElementById("pin").value;
    let amount = Number(prompt("Enter the deposit amount:"));

    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin && amount > 0 && !isNaN(amount)) {
            users[i].bal += amount;
            document.getElementById("out").innerHTML = `$${amount} deposited successfully. Your new balance is $${users[i].bal}`;
            break;
        } else {
            document.getElementById("out").innerHTML = `Enter a valid deposit amount!`;
        }
    }
}

function withdraw() {
    var user = document.getElementById("username").value;
    var pin = document.getElementById("pin").value;
    let amount = Number(prompt("Enter the withdrawal amount:"));

    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin && amount > 0 && amount <= users[i].bal && !isNaN(amount)) {
            users[i].bal -= amount;
            document.getElementById("out").textContent = `$${amount} Withdrawal successfully. Your new balance is $${users[i].bal}`;
            break;
        } else {
            document.getElementById("out").textContent = `Enter a valid withdrawal amount!`;
        }
    }
}

function exit() {
    document.getElementById("form").style.display = "block";
    document.getElementById("name").style.display = "block";
    document.getElementById("inner").style.display = "none";
}