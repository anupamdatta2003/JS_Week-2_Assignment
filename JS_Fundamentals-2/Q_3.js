const students = [
    {
        name : "Mithun",
        marks : 95,
    },
    {
        name : "Prabir",
        marks : 75,
    },
    {
        name : "Alka",
        marks : 92,
    },
    {
        name : "Shivam",
        marks : 70,
    },
    {
        name : "Farman",
        marks : 99,
    },
];

function checkResults(user){
    for (let student of students) {
        if(student.name === user){
            return student.marks > 90 ? console.log(`Congratulations ${user} ! You have cleared the exam.`) : console.log(`Sorry ! You have not cleared the exam.`);
        }
    }
    console.log("Invalid User !!!");
};

checkResults("Mithun");
checkResults("Prabir");
checkResults("Mithun S");