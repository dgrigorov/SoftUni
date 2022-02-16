function passwordGuess(password) {
    switch (password) {
        case "s3cr3t!P@ssw0rd":
            console.log('Welcome');
            break;
        default:
            console.log('Wrong password!');
            break;
    }
}

passwordGuess("s3cr3t!P@ssw0rd");