function emailValidator(email) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        return { valid: false, message: 'Email could not be empty' };
    }

    if (email.length > 255) {
        return { valid: false, message: 'Email could not be more than 255 character' };
    }

    if (!regex.test(email)) {
        return { valid: false, message: 'Email is not valid' };
    }

    return { valid: true, message: 'Email is valid' };

}


function phoneNumberValidator(phoneNumber) {

    const regex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!phoneNumber) {
        return { valid: false, message: 'phone number could not be empty' };
    }
    
    if (phoneNumber.length > 10) {
        return { valid: false, message: 'phone number could not be more than 10 character' };
    }

    if (!regex.test(phoneNumber)) {
        return { valid: false, message: 'phone number is not valid' };
    }

    return { valid: true, message: 'phoneNumber is valid' };

}


module.exports = { emailValidator,phoneNumberValidator};

const emValidator = emailValidator('email');

if (emValidator.valid == true) {
    console.log(emValidator.message);
}
else {
    console.log(emValidator.message);
}

const phValidator = phoneNumberValidator('9905891724');

if (phValidator.valid == true) {
    console.log(phValidator.message);
}
else {
    console.log(phValidator.message);
}