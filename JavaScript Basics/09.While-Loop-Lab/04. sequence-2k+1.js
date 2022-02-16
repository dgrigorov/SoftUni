function sequence2kPlus1(input) {
    input = Number(input);
    let index = 1;

    while (input >= index) {
        console.log(index);
        index = 2 * index + 1;
    }
}

// sequence2kPlus1(["3"]);
// sequence2kPlus1(["8"]);
// sequence2kPlus1(["17"]);
sequence2kPlus1(["31"]);