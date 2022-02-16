function countTheWords(str) {
    str = str.toString();

    let strLenght;

    for (let i = 0; i < str.length; i++) {
        strLenght = str.split(' ').length;
    }

    if (strLenght > 10) {
        console.log(`The message is too long to be send! Has ${strLenght} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}

countTheWords("This message has exactly eleven words. One more as it's allowed!");
countTheWords("This message has ten words and you can send it!");