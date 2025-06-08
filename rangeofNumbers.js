//start=0, end=5 => Output [0, 1, 2, 3, 4, 5]

function StartEndArray(s, e){
    let arr = [];
    if(s>=e) return [];
    for (let i=s; i<=e; i++){
        arr.push(i);
    }
    return arr;
}
console.log(StartEndArray(50, 75));

function StartEndArrayRecursion(s, e){
    if(s>e) return []; 
    else{
        const numbers = StartEndArrayRecursion(s, e-1); 
        numbers.push(e);
        return numbers;
    }
}
console.log(StartEndArrayRecursion(1, 5));

//StartEndArrayRecursion(1, 5) => [1,2,3,4,5]
//StartEndArrayRecursion(1, 4) => [1,2,3,4]
//StartEndArrayRecursion(1, 3) => [1,2,3]
//StartEndArrayRecursion(1, 2) => [1,2]
//StartEndArrayRecursion(1, 1) => [1]
//StartEndArrayRecursion(1, 0) => [] 
//BOTTOM UP APPROACH

