function sum(n){ //5 //4 //3 //2 //1 //0
 if(n==0) return 0; //5<=0 //4<=0 //3<=0 //2<=0 //1<=0 //0<=0 
 return n + sum(n-1); //5+sum(4)+sum(3)+sum(2)+sum(1)+sum(0)
}
console.log(sum(5));