function print(num){
    if(num < 1) return;
    console.log(num);
    print(num-1);
}
print(5);