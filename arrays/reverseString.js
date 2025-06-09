//hello => olleh

// function ReverseStringRecursion(str){
//     if(str === "") return "";
//     else return ReverseStringRecursion(str.substr(1)) + str.charAt(1);
// }
// console.log(ReverseStringRecursion("hello"));

// // ReverseStringRecursion("hello") - ReverseStringRecursion("ello") + h => olleh
// // ReverseStringRecursion("ello") - ReverseStringRecursion("llo") + e => olle
// // ReverseStringRecursion("llo") - ReverseStringRecursion("lo") + l => oll
// // ReverseStringRecursion("lo") - ReverseStringRecursion("o") + l => ol
// // ReverseStringRecursion("o") - ReverseStringRecursion("") + o => o 
// // ReverseStringRecursion("") - ""

// function ReverseString(str){
//     let res = "";
//     for(let i=str.length-1; i>0; i--){
//         res += str[i]
//     }
//     return res;
// }
// console.log(ReverseString("hello"));

function ReverseString_2(s){
    let i=0;
    let j=s.length-1; //4
    let temp="";
    while(i<j){ //0>=4 1>=3
        temp=s[i]; //h e
        s[i]=s[j];//o l
        s[j]=temp;//h e
        i++; j--; //1,3  2,2
    }
    return s;
}
console.log(ReverseString_2(["h", "e", "l", "l", "o"]));

//Optimised 

function ReverseString_3(s){
    let i=0;
    let n = Math.floor(s.length);
    let temp="";
    for (let i=0; i<n/2; i++){
        temp=s[i]; 
        s[i]=s[n-1-i];
        s[n-1-i]=temp;
    }
    return s;
}
console.log(ReverseString_3(["h", "e", "l", "l", "o"]));