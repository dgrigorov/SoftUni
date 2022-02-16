function exam(arr) {
    // Group 1 - >= 5.00
    // Group 2 - >= 4 && <= 4.99
    // Group 3 - >= 3 && <= 3.99
    // Group 4 - < 3

    let students = arr[0];
    let average = 0.00;

    let studentsInGroup1 = 0;
    let studentsInGroup2 = 0;
    let studentsInGroup3 = 0;
    let studentsInGroup4 = 0;

    for (let i = 1; i < arr.length; i++) {
        let grade = Number(arr[i]);

        if (grade >= 5) {
            studentsInGroup1++;
        } else if (grade >= 4 && grade <= 4.99) {
            studentsInGroup2++;
        } else if (grade >= 3 && grade <= 3.99) {
            studentsInGroup3++;
        } else {
            studentsInGroup4++;
        }

        average += grade;
    }
    
    let totalGroup1 = (studentsInGroup1 / students) * 100;
    let totalGroup2 = (studentsInGroup2 / students) * 100;
    let totalGroup3 = (studentsInGroup3 / students) * 100;
    let totalGroup4 = (studentsInGroup4 / students) * 100;
    let totalAverage = average / students;
    
    console.log(`Top students: ${totalGroup1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${totalGroup2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${totalGroup3.toFixed(2)}%`);
    console.log(`Fail: ${totalGroup4.toFixed(2)}%`);
    console.log(`Average: ${totalAverage.toFixed(2)}`);
}

exam([10, 
    3.00, 
    2.99, 
    5.68, 
    3.01, 
    4.00, 
    4.00, 
    6.00, 
    4.5, 
    2.44, 
    5]);
// exam([6, 2, 3, 4, 5, 6, 2.2]);