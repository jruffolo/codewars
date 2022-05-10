function bmi(weight, height) {
    const bmi = weight / (height ** 2);
    let eval = 'Underweight';
    
    if (bmi > 18.5) eval = 'Normal';
    if (bmi > 25) eval = 'Overweight';
    if (bmi > 30) eval = 'Obese';
    
    return eval;
  }