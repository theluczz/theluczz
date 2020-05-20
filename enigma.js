function resposta1() {
    let re1 = prompt('Digite a resposta!')
    if (re1 == 'enigma') {
        location.replace('2.html')
    } else {
        alert('Resposta Incorreta!')
    }
}

function resposta2() {
    let re2 = prompt('Digite a resposta!')
    if (re2 == 'beethoven') {
        location.replace('3.html')
    } else {
        alert('Resposta Incorreta!')
    }
}


function resposta3() {
    let re3 = prompt('Digite a resposta!')
    if (re3 == 'estou aqui') {
        location.replace('4.html')
    } else {
        alert('Resposta Incorreta!')
    }
}

function resposta4() {
    let re4 = prompt('Digite a resposta!')
    if (re4 == 'com você') {
        location.replace('5.html')
    } else {
        alert('Resposta Incorreta!')
    }
}

function resposta5() {
    let re5 = prompt('Digite a resposta!')
    if (re5 == 'os humanos são tão interessantes') {
        location.replace('6.html')
    } else {
        alert('Resposta Incorreta!')
    }
}

function start() {
    location.replace('1.html')
}

function cred() {
    location.assign('cred.html')
}
