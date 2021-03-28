//Contruction and printing of objects
    const company = {
        name: 'Rocketseat',
        color: 'purple',
        focus: 'Programming',
        Address: {
            street: 'Guilherme Gembala',
            number: 260
        }
    }

    console.log(`The company ${company.name} is location in address ${company.Address.street}, ${company.Address.number}.`)

//Vectors and objects
    const developer = {
        name: 'Anderson',
        age: 35,
        skills: [
            { 
                name: 'C++', 
                specialty: 'Desktop'
            },
            {
                name: 'Python',
                specialty: 'Data Science'
            },
            {
                name: 'JavaScript',
                specialty: 'Web/Mobile'
            }
        ]
    }

    console.log(`The developer ${developer.name} is years old and has ${developer.skils[0].name} skills with a specialty in ${developer.skils[0].specialty}.`)