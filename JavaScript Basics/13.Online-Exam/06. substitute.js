function substitute(k, l) {
    // k => [k..8]
    // l => [9..l]
    // m => [0..m]
    // n => [9..n]

    for (let i = k; i <= 8; i++) {
        for (let j = l; j <= 9; j++) {
            console.log(`${i}${j}`);
        }
    }

    // for (let a = m; a < 8; a++) {
    //     for (let b = n; b < 9; b++) {    
    //         console.log(`${a}${b}`);
    //     }
    // }

    // for (let a = m; a < 8; a++) {
    //     console.log(a);
    //     for (let b = n; b < 9; b++) {        
    //         console.log(b);
    //     }
    // }
}

substitute(7, 6);