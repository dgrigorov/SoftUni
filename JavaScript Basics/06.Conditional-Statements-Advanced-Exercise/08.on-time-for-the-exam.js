function onTimeForExam(examHour, examMinutes, arivalHour, arivalMinutes) {
    examHour = Number(examHour);
    examMinutes = Number(examMinutes);
    arivalHour = Number(arivalHour);
    arivalMinutes = Number(arivalMinutes);

    // Convert the hours to minutes and sum them
    let totalExamMinutes = (examHour * 60) + examMinutes;
    let totalArrivalMinutes = (arivalHour * 60) + arivalMinutes;

    let diff = totalExamMinutes - totalArrivalMinutes;

    if (diff > 30) {
        console.log('Early');
        if (diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            console.log(`${hours}:${minutes} hours before the start`);
        } else {
            console.log(`${diff} minutes before the start`)
        }
    } else if(diff >= 0) {
        console.log('On time');
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log('Late');
        diff = Math.abs(diff);

        if (diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            console.log(`${hours}:${minutes} hours after the start`);
        } else {
            console.log(`${diff} minutes after the start`)
        }
    }
    
}

onTimeForExam();