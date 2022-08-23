function twoArrays(k, A, B) {
    // start off with the smallest value being added
    // to the largest value in both arrays. 
    // if those two values are not able to create
    

    if (Math.min(...A) + Math.max(...B) >= k || Math.max(...A) + Math.min(...B) >= k){
        return ("YES")
    }
    return ("NO")
    

}

console.log(twoArrays(10, [2,1,3], [7,8,9]))
console.log(twoArrays(5, [1, 2, 2, 1], ))