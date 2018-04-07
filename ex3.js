const arr = [{name: 'sl', age: 15}, {name: 'allan', age: 35}, {age: 16, name: 'simon'}];

// mulytiply age for each student by 2

const ageBy2 = arr.map(obj => {
    return {name: obj.name, age: obj.age * 2 };
});
//const ageBy2 = arr.map(arr => arr.age * 2);
console.log(ageBy2);


// use filter method to return students whose age is below 20
    const filterAge = arr.filter(obj => obj.age < 20);
    console.log(filterAge);

//return the student object with the shortest name
const sortByName = arr.sort(function(a, b){
    return a.name.length - b.name.length;
} );
console.log(sortByName);

 var shortestName = () =>{
    for(var i = 0; i < sortByName.length; i++)
    return sortByName[0];
}
console.log(shortestName());  //console.log('The shortest name is ' + shortestName());

//find the average of ages
var average = () =>{
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum+=arr[i].age;
    }
    return sum / arr.length;
}
console.log('The average age of all students is ' + average());
 //ALLAN: you are returning a variable assignment instead of a value
    // should be: return  sum / arr.length;  or
    // var average = sum / arr.length; 
    // return average
    
