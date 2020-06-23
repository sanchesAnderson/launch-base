const studentsClassA = [
    {
        name: 'Pedro',
        exam: 9.8
    },
    {
        name: 'Mary',
        exam: 10
    },
    {
        name: 'John',
        exam: 2
    }
]

const studentsClassB = [
    {
        name: 'Cleiton',
        exam: 3
    },
    {
        name: 'Robson',
        exam: 5
    },
    {
        name: 'Paulo',
        exam: 1
    },
    {
        name: 'New student',
        exam: 10
    }
]

function calculateAverage(studentsClass) {
    exams = 0

    for (let i = 0; i < studentsClass.length; i++) {
        exams += studentsClass[i].exam
    }

    return exams / studentsClass.length
}

function sendMessage(average, nameClass) {
    if (average > 5) {
        console.log(`${nameClass} average: ${average}. Congrat`)
    } else {
        console.log(`${nameClass} average is smaller 5`)
    }
}

function setDisapproved(student) {
    student.disapproved = false
    
    if (student.exam < 5) {
        student.disapproved = true
    }
}

function sendMessageResult(student) {
    if (student.disapproved) {
        console.log(`Student ${student.name} flunked!`)
    } else {
        console.log(`Student ${student.name} its okay!`)
    }
}

function studentDisapproveds(students) {
    
    for (let student of students) {
        setDisapproved(student)
        sendMessageResult(student)
    }
}

const average1 = calculateAverage(studentsClassA)
const average2 = calculateAverage(studentsClassB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentDisapproveds(studentsClassB)