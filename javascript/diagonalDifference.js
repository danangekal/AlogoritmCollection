function diagonalDifference(N) {
    var n = N.length;
    var diag1 = 0;
    var diag2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += N[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += N[i][j];
            }
        }
    }

    return Math.abs(diag1 - diag2);
}

var N = [
    [ 11, 2, 4],
    [ 4, 5, 6],
    [ 10, 8, -12]
];

console.log(diagonalDifference(N));