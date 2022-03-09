//problem 153 ------------------------------------
// let arr =  [5,2,1,5,8,9,10];
// let count = 0;
// for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i]%2==0) {
//         console.log(i);
//         count++;
//     }
// }
// console.log(`c:${count}`);

//problem 154 ------------------------------------
// let arr  = [7,10,5,3,2];
// let k = 2;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j%k==0; j++) {
//         console.log(arr[j]);
//     }
// }
//problem 155 ------------------------------------

// let arr  = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j%2==0; j++) {
//         console.log(arr[j]);
//     }
// }
//problem 156 ------------------------------------

// let arr  = [1,2,9,4,5,7,3];
// for (let i = arr.length-1; i > 0; i--) {
//     for (let j = i; j%2!=0; j++) {
//         console.log(arr[j]);
//     }
// }

//problem 157 ------------------------------------

// let arr = [10,2,5,13,-7,8,-2];
// let c = []
// let b = []
// for (let i = 0; i < arr.length; i++) {
//     if (i%2==0) {
//         c[c.length]=arr[i]
//     }else{
//         b[b.length]=arr[i]

//     }
// }
// for (let i = 0; i < b.length; i++) {
//         c[c.length]=b[i]

// }

// console.log(c);

//problem 158 ------------------------------------
// let arr = [1,2,3,10,-4,true];
// let firstArr = [];
// let secondArr = [];
// for (let i = 0; i < arr.length/2; i++) {
//     firstArr[firstArr.length]=arr[i]
// }
// for (let i = arr.length-1; i>0; i--) {
//     secondArr[secondArr.length]=arr[i]
    
// }
// let a = 0;
// let b = 0;
// for (let k = 0; k < arr.length; k++) {
//     if(k%2==0){
//         arr[k]=firstArr[a]
//         a++;
//     }else{
//         arr[k]=secondArr[b]
//         b++;
//     }
// }
// console.log(arr);
//problem 159 -------------------------------------
// let arr = [7,10,8,4,5,5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<arr[arr.length-1]) {
//         console.log(arr[i]);
//         break
//     }
    
// }
//problem 160 -------------------------------------
// let arr = [10,12,5,11,13,15];
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>arr[0] && arr[i]<arr[arr.length-1]) {
//         newArr[newArr.length]=arr[i]
//     }
   
// }
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i]>newArr[0]) {
//         newArr[0]=newArr[i]
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (newArr[0]==arr[i]) {
//         console.log(i);
//     }
// }
//problem 161 -------------------------------------
//  let arr = [ 5,10,3,7,10,12,4];
//  let l = 0;
//  let k = 2;
//  let count = 0;
//  for (let i = 0; i < arr.length; i++) {
//     if (l<i && k>i) {
//         count+=arr[i]
//     }     
//  } 
// console.log(count);
//problem 162 -------------------------------------
//  let arr = [ 5,10,3,7,10,12,4];
//  let l = 0;
//  let k = 4;
//  let count = 0;
//  let add = 0;
//  for (let i = 0; i < arr.length; i++) {
//     if (l<i && k>i) {
//         count+=arr[i]
//         add++;
//     }     
//  } 
// console.log(count/add);
//problem 163 -------------------------------------
//  let arr = [ 5,10,3,7,10,12,4];
//  let l = 0;
//  let k = 4;
//  let count = 0;
//  for (let i = 0; i < arr.length; i++) {
//     if (l<i && k>i) {
//     }else{
//         count+=arr[i]
//     }     
//  } 
// console.log(count);
//problem 166 -------------------------------------
