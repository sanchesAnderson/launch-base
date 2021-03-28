// Developer and skills
    const developers = [
        {
            name: 'Carlos',
            skills: [
                'HTML',
                'CSS'
            ]
        },
        {
            name: 'Jasmine',
            skills: [
                'JavaScript',
                'CSS'
            ]
        },
        {
            name: 'Tuane',
            skills: [
                'HTML',
                'Node.js'
            ]
        }
    ];

    
    for (let i = 0; i < developers.length; i++) {
        console.log(`${developers[i].name} works with ${developers[i].skills}.`)
    }

//Search for technology
    function searchSkill(developer, skill) {
        for (let s = 0; s < developer.skills.length; s++) {
            if (developer.skills[s] == skill) {
                return true;
                }
            }
            return false;
        }

    const skill = 'HTML'

    for (let i = 0; i < developers.length; i++) {
        const worksSkill = searchSkill( developers[i], skill);

        if (worksSkill) {
            console.log(`The developer ${developers[i].name} works with ${skill}`)
        }
    }

//Sum of expenses and revenues
    const users = [
        {
            name: 'Salvio',
            revenues: [115, 3, 48, 7, 98.3, 14.5],
            expenses: [85, 3, 13.5, 19.9]
        },
        {
            name: 'Marcio',
            revenues: [24.6, 214.3, 45.3],
            expenses: [185.3, 12.1, 120]
        },
        {
            name: 'Lucia',
            revenues: [9.8, 120.3, 340.2, 45.3],
            expenses: [450.2, 29.9]
        }
    ];

    function calculateMovement(movements) {
        let amount = 0;
        for (let i = 0; i < movements.length; i++) {
            amount += movements[i];
        }
        return amount;
    }

    for (let i = 0; i < users.length; i++) {
        const balance = (calculateMovement(users[i].revenues) - calculateMovement(users[i].expenses))
        if (balance > 0) {
            console.log(`${users[i].name} has POSITIVE balance of ${balance}.`);
        } else if (balance < 0) {
            console.log(`${users[i].name} has NEGATIVE balance of ${balance}.`);
        } else {
            console.log(`${users[i].name} has 0 balance.`)
        }
    }