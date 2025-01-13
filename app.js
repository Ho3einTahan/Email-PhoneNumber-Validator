function emailValidator(email) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        return { valid: false, message: 'Email could not be empty' };
    }

    if (!regex.test(email)) {
        return { valid: false, message: 'Email is not valid' };
    }

    if (email.length > 255) {
        return { valid: false, message: 'Email could not be more than 255 character' };
    }

    return { valid: true, message: 'Email is valid' };

}

module.exports = { emailValidator };

const validator = emailValidator('email');

if (validator.valid == true) {
    console.log(validator.message);
}
else {
    console.log(validator.message);
}