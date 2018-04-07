const x = [189, 90, 49, 10]

const incFive = x.map(x => x + 5);
console.log(incFive);

var avg =(value) => {
    var total = 0;
    for(i = 0; i < incFive.length; i++){
        total+=incFive[i];
    }
    return avg = total / incFive.length;
}
console.log('the average is ' + avg());

var student = {
    name: 'allan',
    surname: 'lukwago'
};


var stdNameUpperCase = student.name.toUpperCase();
var stdSurnameUpperCase =student.surname.toUpperCase();
var newObject ={ name: stdNameUpperCase, surname: stdSurnameUpperCase };
console.log(newObject);

var studentFullName = student.name.concat(' ' + student.surname);
var newObject2 ={name: student.name, surname: student.surname, fullname: studentFullName};
console.log(newObject2);