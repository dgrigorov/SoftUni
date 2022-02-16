function readText(text) {
    let index = 0;
    
    while(true) {
        if (text[index] == "Stop") {
            break;
        } else {
            console.log(text[index]);
            index++;
        }
    }
}

readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);