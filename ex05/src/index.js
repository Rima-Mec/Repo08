
// Write code below this line
var sum = 0;
function addThree() {
    sum = sum + 3;
    console.log(sum);
    }

    function addFive() {
        sum = sum + 5;
        console.log(sum);
    } 
// Write code above this line

console.log(addThree());
console.log(addFive());


module.exports = {
    addThree,
    addFive
};
