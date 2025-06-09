let n = 1
function print(num){
    if(num < 1) return;
    console.log(num-num+n);
    n++;
    print(num-1);
}
print(15);
