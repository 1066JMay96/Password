alert("Hello this is a Password generator. please enter the length you would like to make your password.")























(var index = 0; index < length; index++) {
    var character = Math.floor(Math.random() * all.length);
    password += all.substring(character, character + 1);
}

return password;



