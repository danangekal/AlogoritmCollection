function solve(a, b) {
    // Set counters to '0'
    var alice = 0, bob = 0;
    
    // Test each array and award a point to the array with the great value
    for (var i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            alice += 1;
        } else if (a[i] < b[i]){
            bob += 1;
        }
    }
    
    console.log(alice + ' ' + bob);

}

const a = [5, 6, 7];
const b = [3, 6, 10];

let result = solve(a, b);