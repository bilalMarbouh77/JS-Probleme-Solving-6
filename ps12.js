function solution(str, ending){
    let check=false;
    if(str.endsWith(ending)){
        check=true;
    }
    return check;
}


// Question:
// Complete the solution so that it returns
// true if the first argument(string)
// passed in ends with the 2nd
// argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false