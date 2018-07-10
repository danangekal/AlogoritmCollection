function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var agg = 0;
    
    for(var i=0; i<A.length; i++) {
        agg ^= A[i];
    }
    
    return agg;

}

console.log(solution([2, 2, 3, 3, 4]))