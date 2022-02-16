function calculateProjectHours(name, numProjects) {
    let projects = numProjects;
    let hours = projects * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}

calculateProjectHours("Sanya", 9);