// What is the output?

// distractions - nothing to do with a function because it is outside
var num = 4;

function outer() {
    // outside of a scope of inner 
    var num = 2
    function inner() {
        num ++;
        var num = 3;
        console.log(num)
    }
    inner();
}
outer();