let yearOfBirth = prompt('What is your year of birth')
let currentSalary = prompt('What is your current salary')

if(yearOfBirth >= 2001 && yearOfBirth < 2004 ){
    alert('Hello your bonus is ' + (currentSalary)* 5/100)
} else if(yearOfBirth >= 1991 && yearOfBirth <= 2000 ){
    alert('Hello your bonus is ' + (currentSalary)* 10/100)
}else if(yearOfBirth >= 1971 && yearOfBirth <= 1990 ){
    alert('Hello your bonus is ' + (currentSalary)* 20/100)
}else if(yearOfBirth >1971){
    alert('Sorry but you do not seem to be part of us')
}else if(!(yearOfBirth && currentSalary)){
    alert('You did not assign a varible')
}else{ 
    alert('Sorry but you do not seem to be part of us')
}
