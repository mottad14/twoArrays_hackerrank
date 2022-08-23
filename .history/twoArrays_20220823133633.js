function twoArrays(k, A, B) {
    // start off with the smallest value being added
    // to the largest value in both arrays. 
    // if those two values are not able to create
    
    let minA = Math.min(...A)
    let maxA = Math.max(...A)
    let minB = Math.min(...B)
    let maxB = Math.max(...B)

    while (A.length > 0 && B.length > 0){
        
    if ( minA + maxB > k){
        let indexA = A.indexOf(minA)
        let indexB = B.indexOf(maxB)
        A.splice(indexA, 1)
        B.splice(indexB,1)
        console.log(A, B)
    }
    else if (minB + maxA ) {
        
    }
    // return ("NO")
    
    }
    // return ("YES")

}

console.log(twoArrays(10, [2,1,3], [7,8,9]))
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]))