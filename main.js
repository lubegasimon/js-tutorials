
// compute mean from an array
var arr = [1,3,4,10, 19,10]

var mean = (list) => {
    var total = 0;
    var listLength = list.length;
    for (var i = 0; i < listLength; i ++) {
        total = list[i] + total;
    }
    return total / listLength;
}

var result = mean (arr);

console.log('mean of', arr, ' is ', result);

var studentA = {name: 'Allan', age: 13, class: '10'}

var kampala = {population: 15e6, councils: 5, streets: ['ben kiwanuka', 'market street']};

// assume all students to be in class 10
var dummy = [{name: 'Alex'}, {name: 'Brian'}, {name: 'Simon'}]

var fixed = (dummyData, age, grade) => {
    var newData = [];
    for(var i = 0; i < dummyData.length ; i ++) {
        var dummyObj = dummyData[i];
        var obj = { name: dummyObj.name, age: age, class: grade};
        newData.push(obj);
    }
    return newData;
}

var fData = fixed(dummy, 13, 'p4');
console.log('fixed data:  ', fData)


// special array methods & propeties to know

// push -- add an item to an array eg [].push('a') --> ['a']
// length -- property
// exercise -- read about map, foreach, reverse


// objects
// can have an object whose properties are any value i.e string or function or anything
// eg 
var obj = { push : (val, arr) => arr.push(val), name: 'special object' }

// access values using a dot (dot notation)

var name = obj.name;

// you cam acces object keys using
var keys = Object.keys(obj)


console.log('key', keys)

/**
 * grade a class and find best student
 */

 var obj =   {math: 80, english: 10, name: 'Alex'};
 var name = obj.name;

 var myClass = [
     {math: 80, english: 10, name: 'Alex'},
     {math: 90, english: 60, name: 'Bettina'},
    {math: 70, english: 50, name: 'Simon'}
]
var obj2 = myClass[2].english; // {math: 70, english: 50, name: 'Simon'}
// write function that returns best overall student  by marks total
//create name array

// create a grading system & assign grades to various marks such that some student x has such an object {math: A, english B, name: 'Alex}

var grade = (mark) =>{
if(mark > 90){
    return 'A';
}    
else if  (mark < 90 &&  mark > 70){
    return 'B';
}
else if(mark < 70 && mark > 40){
    return 'c';
}
else{
    return 'D';
}
}
 var gradeStudent = () => {
     var arr2 = [];
     for( var j = 0; j < myClass.length; j ++){
         var math = myClass[j].math;
         var mathGrade = grade(math);
         var english = myClass[j].english;
         var engGrade = grade(english);
         var obj = {math: mathGrade, english: engGrade, name: myClass[j].name};
         arr2.push(obj);
     }
     return arr2;
 }
 var graded = gradeStudent();
 console.log('graded student', graded)
// write a function that computes standard deviation and use it to find the standard deviations in each subje

// for (var i = o; i < myClass.length; i++) {
//     console.log(myClass[i])
// }
/*engArr = []
var alexTotal =(x,y) =>{
    */
    var alex = myClass[0];
    var alexMath = alex.math;
    var alexEnglish = alex.english;
    var total1 = alex.math + alex.english;

// {name: 'alex', total: 39}

var totals = () => {
    var arr = [];
    for (var i = 0; i < myClass.length; i ++){
        var totalScore = myClass[i].math + myClass[i].english;
        var obj = {total: totalScore, name: myClass[i].name};
        arr.push(obj);
    }
    return arr;
};

const studentTotals = totals();


// var x = [10, 89, 1, 0,78, 10];

studentTotals.sort((a, b) => b.total - a.total);

console.log('student totals', studentTotals[0].name);



