function validatePassword(password) {
    let checkNiceLength = (pass) => pass.length > 6 && pass.length < 20 ? true : false;
    let checkLettersAndNumbers = (pass) => {
        let letters = 0;
        let numbers = 0;
        for (let i = 0; i < pass.length; i++) {
            if (pass[i].toLowerCase() != pass[i].toUpperCase()) {
                letters++;
            } else if (isNaN(pass[i].value)) {
                numbers++;
            }
        }
        if (letters > 0 && numbers > 0) {
            return true
        } else {
            return false;
        }
    }
    let checkSymbols = (pass) => {
        const arrayOfSp = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];
        for (let i = 0; i < pass.length; i++) {
            if (arrayOfSp.includes(pass[i])) {
                return false;
            }
        }
        return true;
    }
    if (checkNiceLength(password) && checkLettersAndNumbers(password) && checkSymbols(password)) {
        console.log('VALID')
    } else {
        console.log('INVALID')
    }
}
validatePassword('pass');
validatePassword('TcSf12y');

