function singleNumber(a){
    let obj = {};
    for(let i=0; i<a.length; i++){
        if(obj[a[i]]){
          obj[a[i]]++; 
        }
        else{
            obj[a[i]]=1;
        }
    }
    for(let key in obj){
        if(obj[key] == 1) return key;
    }
}
console.log(singleNumber([4, 1, 2, 1, 2]))

function singleNumberXor(a){
    let xor=0;
    for(let i=0; i<a.length; i++){
        xor = xor^a[i];
    }
    return xor;
}
console.log(singleNumber([4, 1, 2, 1, 2]))