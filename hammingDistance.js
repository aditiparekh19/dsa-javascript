function HammingDistance(s1, s2){
    let count = 0;
    if (s1.length != s2.length){
        throw new Error("Length not same");
    }
    for (let i=0; i<s1.length; i++){
        if(s1[i] != s2[i]){
            count+=1;
        }
    }
    return count;
}

console.log(HammingDistance('hello', 'hwllr'));
console.log(HammingDistance('1011', '1000'));


var hammingDistanceString = function(x, y) {
    x=x.toString(2);
    y=y.toString(2);
    let dist = 0;

    if(x.length < y.length)
        while(x.length !== y.length)  x = "0" + x;
    else 
         while(x.length !== y.length) y = "0" + y;

    for(let i=0; i<x.length; i++){
        if(x[i] != y[i]){
            dist = dist + 1;
        }
    }
    return dist;
};

console.log(hammingDistanceString(2, 9));