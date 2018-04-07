// for(var i = 0; i < 3; i++){
//     console.log(i);
// } 

repeat = (n, action) => {
    for( var i = 1; i <= n; i++){
        action(i);
    }
}
repeat(5, console.log);