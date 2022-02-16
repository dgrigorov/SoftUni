function password(str) {
    let username = str[0];
    let password = str[1];
    let data = str[2];
    let index = 3;

    while (data != password) {
        data = str[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);