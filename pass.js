function CheckPassword(inputtxt) {
    var passw = /^(?=.*[a-z]) (?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&]).{8,32}$/
    if (inputtxt.value.match(passw)) {
        alert('Correct, try another...')
        return true;
    }
    else {
        alert('Wrong...!')
        return false;
    }
}