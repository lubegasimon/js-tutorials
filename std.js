const data = [1, 2, 47, 10];

var mean = () => {
    var total = 0;
    for(var i = 0; i < data.length; i++){
        total+=data[i];
    }
    return total / data.length;
   
}
console.log('The mean is ' + mean());

var difference = () => {
    var u = mean();
    for(var i = 0; i < data.length; i++)
    return data.map(value => value - u);
}
console.log('The array for difference of items is ' + difference());

var sqrDifference = () => {
    var valDiffArray = difference();
    return valDiffArray.map(val => val * val);
}
console.log('The array for square of the difference of items is ' + sqrDifference());

var variance = () => {
    var total = 0;
    for( var i = 0; i < sqrDifference.length; i++){
        total+=sqrDifference[i];
    }
    return total;
}
console.log('The variance is ' + variance());

console.log('The standard deviation is ' +  Math.sqrt(variance()));
