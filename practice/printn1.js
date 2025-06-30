function printn1(n){
    if(n==0) return;
    console.log(n); //5, 4, 3, 2, 1
    printn1(n-1);

}
printn1(5);