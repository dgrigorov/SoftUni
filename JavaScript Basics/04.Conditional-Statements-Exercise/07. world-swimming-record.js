function worldSwimmingRecord(record, distance, swimmingTimePerMeter) {
    let totalTimeNeeded = distance * swimmingTimePerMeter;
    // every 15 meters he got delayed by 12.5 sec
    let delay = (parseInt)(distance / 15) * 12.5;
    let total = (totalTimeNeeded + delay).toFixed(2);

    if (record < total) {
        let secondsNeeded = (total - record).toFixed(2);
        console.log(`No, he failed! He was ${secondsNeeded} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${total} seconds.`)
    }
}

worldSwimmingRecord(55555.67, 3017, 5.03);