function maxConsecutiveOnes(a){
    let count=0;
    let maxCount=0;
    for(let i=0; i<a.length; i++){
        if(a[i] == 1) count++;
        else{
            maxCount = Math.max(maxCount, count);
            count=0;
        }
    }
    return Math.max(maxCount, count);
}
console.log(maxConsecutiveOnes([1,0,1,1,0,1]))