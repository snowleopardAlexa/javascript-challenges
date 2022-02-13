// How do you create a private variable in JS?

function secretVariable() {
    var private = "super secret code";
    return function() {
        return private
    }
}

var getPrivateVariable = secretVariable()

console.log(getPrivateVariable())