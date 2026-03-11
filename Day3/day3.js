// Calcuate No.of days in a month

function days(){
    const year = parseInt(document.getElementById("year").value);
    let month = document.getElementById("month").value.trim().toLowerCase();
    const result = document.getElementById('result');
    if (isNaN(year) || year <= 0) {
    result.innerText = "Please enter a valid year.";
    return;
  }
  const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
    jan: 1,
    feb: 2,
    aug: 8,
    sep: 9,
    october: 10,
    nov: 11,
    dec: 12,
  };

  let monthNum = parseInt(month);
  if (isNaN(monthNum)) {
    monthNum = months[month];
  }

  if (!monthNum || monthNum < 1 || monthNum > 12) {
    result.innerText = "Please enter a valid month (name or number 1–12).";
    return;
  }

  let days;

  if (monthNum === 2) {
    const isLeap =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    days = isLeap ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(monthNum)) {
    days = 30;
  } else {
    days = 31;
  }
  result.innerText = `Number of days in ${year} year & ${month} is ${days}`
}



//Body Mass Index

function calBMI(){
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const ShowBMIresult = document.getElementById('BMIresult');
    if(isNaN(height)||isNaN(weight)){
        ShowBMIresult.innerText = 'Please enter a number '
        return;  
    }
    else if((height<1||height>2.5)&&(weight<1||weight>300)){
        ShowBMIresult.innerText = 'Please enter a valid height and weight'
        return;
    }
    else if(weight<1||weight>300){
        ShowBMIresult.innerText = 'Please enter a valid weight'
        return;
    }
    else if(height<1||height>2.5){
        ShowBMIresult.innerText = 'Please enter a valid height'
        return;
    }

    const BmiResult = weight/(height ** 2);

  let category = '';

  switch (true) {
    case BmiResult < 18.5:
      category = 'Underweight';
      break;
    case BmiResult >= 18.5 && BmiResult < 25:
      category = 'Normal weight';
      break;
    case BmiResult >= 25 && BmiResult < 30:
      category = 'Overweight';
      break;
    default:
      category = 'Obese';
  }
  ShowBMIresult.innerText = `You are ${category}`;

    
}