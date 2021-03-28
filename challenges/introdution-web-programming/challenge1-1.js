
//Calculate BMI
    const name0 = 'Anderson';
    const weight  = 89;
    const height = 1.75;

    // bmi = Body Mass Index
    bmi = weight / (height * height);

    if (bmi >= 30) {
        console.log(`${name0}, you are overweight`);
    } else {
        console.log(`${name0}, you are not overweight`);
    }

//Retirement calculation
    const name1 = 'Anderson';
    const gender = 'M';
    const age = 35;
    const yearsWorked = 15;
    const calculationFactor = age + yearsWorked;
    
    if (gender == 'M' && calculationFactor >= 95) {
        console.log(`${name1}, you can retire!`);
    } else if (gender == 'F' && calculationFactor >= 85) {
        console.log(`${name1}, you can retire!`);
    } else {
        console.log(`${name1}, you still can't retire!`)
    }
