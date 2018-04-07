var myClass = [
    {math: 80, english: 10, name: 'Alex'},
    {math: 90, english: 60, name: 'Bettina'},
   {math: 70, english: 50, name: 'Simon'}
]
//.........................................................................................................................................
// Qn.1;---write function that returns best overall student  by marks total
var total = () => {
    var arr1 = [];
    for ( var i = 0; i < myClass.length; i++){
        var totalScore = myClass[i].math + myClass[i].english;
        var obj = {name: myClass[i].name, total: totalScore}
        arr1.push(obj);
    }
return arr1;
}

console.log('student totals', total());
//........................................................................................................................------------------


// Qn.2---create a grading system & assign grades to various marks such that some student x has such an object {math: A, english B, name: 'Alex}
var grade = (mark) => {
    if( mark > 90){
        return 'A';
    }
    else if(mark  < 90 && mark > 60){
        return 'B';
    }
    else if ( mark < 60 && mark >40){
        return 'C';
    }
    else{
        return 'D';
    }
}

var assignGrade =() => {
    var arr2 = [];
    for( var j = 0; j < myClass.length; j++){
        var mathGrade = grade(myClass[j].math);
        var engGrade = grade(myClass[j].english);
        var obj2 = {name: myClass[j].name, math: mathGrade, english: engGrade};
        arr2.push(obj2);
    }
    return arr2;
}
console.log(assignGrade());
//...................................................................................................................................

//qn.3---write a function that computes standard deviation and use it to find the standard deviations in each subject.
/*var mean = (mark) => {
    var total = 0;
    var a = myClass[i].math;
    var b =  myClass[i].english;
    for( var i = 0;  i < myClass.length; i++){
        total+= (a + b);
    }
    return avg1 = total / (a.length + b.length);
}
console.log('The mean1 is' + mean());*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Qn.9  create a function that assign a random age thats is less than 100 and greater than zero to student.


