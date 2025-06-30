function stocks(a){
    let min = a[0];
    let prof = 0;
    for(let i=1; i<a.length; i++){
        min = a[i]<min ? a[i] : min;
        prof = a[i]-min > prof ? a[i]-min : prof;
    }
    return prof;
}
console.log(stocks([7,1,5,3,6,4]));