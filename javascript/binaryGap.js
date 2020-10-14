function binary(N) {
  return N.toString(2);
}

function binaryGap(N) {
  let str = N.toString(2), 
        zeroCount = 0,
        result = 0;
 
    for ( let digit of str ) {
        if ( digit === '0' ) {
            zeroCount += 1;
        }
    
        result = Math.max(result, zeroCount);
    }
 
    return result;
}

console.log(binary(9));
console.log(binaryGap(9));