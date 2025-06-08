// Very bad O((m+n)log(m+n)) complexity
// function mergeSortedArrays(a, m, b, n){
//     if(a.length <= 0 && b.length <= 0) return [];
//     if(a.length <= 0 && b.length > 0) return b;
//     if(b.length <= 0 && a.length > 0) return a;

//     let x = a.slice(0,m);
//     let y = b.slice(0,n);
//     let z = [...x, ...y];
//     z.sort();
//     return z;

// }
// console.log(mergeSortedArrays([1,2,3,0,0,0], 3, [2,5,6], 3));

// function mergeSortedArrays(nums1, m, nums2, n){
//     let nums1Copy = nums1.slice(0, m);
//     let p1 = 0;
//     let p2 = 0;
//     for(let i=0; i< m+n; i++){
//         if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
//             nums1[i] = nums1Copy[p1];
//             p1++;
//         }
//         else {
//             nums1[i] = nums2[p2];
//             p2++;
//         }
//     }
//     return nums1;
// } //TC - O(M+N) | SC - O(M)
// console.log(mergeSortedArrays([1,2,3,0,0,0], 3, [2,5,6], 3));

// function mergeSortedArrays(nums1, m, nums2, n){
//     let p1 = m - 1;
//     let p2 = n - 1;
  
//     for (let i = m + n - 1; i >= 0; i--) {
//       if (p2 < 0) break;
  
//       if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//         nums1[i] = nums1[p1--];
//       } else {
//         nums1[i] = nums2[p2--];
//       }
//     }
//     return nums1;
// } //TC - O(M+N) | SC - O(1)
// console.log(mergeSortedArrays([1,2,3,0,0,0], 3, [2,5,6], 3));


function mergeSortedArray(nums1, m, nums2, n){
  let p1 = m-1;
  let p2 = n-1;
  for(let i=m+n-1; i>=0; i--){
    if(p2<0) break;
    if(p1>=0 && nums1[p1] > nums2[p2]){
      nums1[i] = nums1[p1];
      p1--;
    }
    else{
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}
console.log(mergeSortedArray([2,3,6,0,0,0], 3, [1,1,1], 3));