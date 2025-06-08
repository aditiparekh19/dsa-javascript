function truncateText(a, maxLength){
    if(a.length < 9){
        return a;
    }
    else{
        let b = a.slice(0, maxLength);
        return `${b}...`;
    }
}
console.log(truncateText("Hello there", 9));