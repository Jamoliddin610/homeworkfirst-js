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
//problem 164 ----------------------------------------------
// let arr = [11,14,7,20,23];
// let n = Math.abs(arr[0]-arr[1]);
// let count = arr[1]
// for (let i = 2; i <arr.length; i++) {
//    if(count+n == arr[i]){
//    count=arr[i]
//    }
//    else{
//    n = false
//    }
// }
// console.log(n);
//problem 165 ----------------------------------------------
// let arr = [-2,4,-8,16,-32];
// let n = arr[1]/arr[0];
// let count = arr[1]
// for (let i = 2; i <arr.length; i++) {
//    if(count*n == arr[i]){
//    count=arr[i]

//    }
//    else{
//    n = false
//    }
// }
// console.log(n);
//problem 166 -------------------------------------
// let arr = [2, -2, 4, -8, 16, -32,-12, 7];
// let n = true;
// if (arr[0] < 0) {.
//    for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0 && arr[i] > 0) {
//          n = i;
//          break;
//       }
//       else if (i % 2 == 1 && arr[i] < 0) {
//          n = i;
//          break;
//       }
//    }
// }else {
//    for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0 && arr[i] < 0) {
//          n = i;
//          break;
//       }
//       else if (i % 2 == 1 && arr[i] > 0) {
//          n = i;
//          break;
//       }
//    }
// }
// console.log(n);
//problem 167 -------------------------------------
// let arr  = [1,-3,12,-1,3,-4,-2,1,-7];
// let count  =  0 ;
// for (let i = 0; i < arr.length; i++) {
//    if (i%2==0) {
//       count+=arr[i]
//    }
// }
// console.log(count);
//problem 168 -------------------------------------
// let arr = [-2,5,-10,12,3,-4,-5];
// let n = [];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > arr[i+1]) {
//       console.log(i);
//       count++
//    }
// }
// console.log(`c:${count}`);
//problem 169 -------------------------------------
// let arr = [-2,5,-10,12,3,-4,-5];
// let n = [];
// let count = 0;
// for (let i = arr.length-1; i > 0; i--) {
//    if (arr[i] > arr[i+1]) {
//       console.log(arr[i]);
//       count++
//    }
// }
// console.log(`c:${count}`);
// //problem 170 -------------------------------------
// let arr = [-2, 43, -8, 16, -32, 8, 5, 5000, 6];
// let newArr = []
// let r = 4500;
// let n = Math.max(...arr);
// if (r <= n) {
//    for (let i = 0; i < arr.length; i++) {
//       if (r <= arr[i]) {
//          newArr[newArr.length] = arr[i]
//       }
//    }
//    for (let i = 0; i < newArr.length; i++) {
//       for (let j = 0; j < newArr.length; j++) {
//          if (newArr[j] > newArr[j + 1]) {
//             let a = newArr[j + 1]
//             newArr[j + 1] = newArr[j]
//             newArr[j] = a
//          }
//       }
//    }
// }
// else {
//    for (let i = 0; i < arr.length; i++) {
//       if (r >= arr[i]) {
//          newArr[newArr.length] = arr[i]
//       }
//    }
//    for (let i = 0; i < newArr.length; i++) {
//       for (let j = 0; j < newArr.length; j++) {
//          if (newArr[j] < newArr[j + 1]) {
//             let a = newArr[j + 1]
//             newArr[j + 1] = newArr[j]
//             newArr[j] = a
//          }
//       }
//    }
// }
// console.log(newArr[0]);
// //problem 171 -------------------------------------
// let arr = [1,-10,2,1,2,5,2,2];
// let n = [];
// let count = [];
// for (let i = 0; i <arr.length; i++) {
//     let d = arr[i];
//     if (n[d] != 0) {
//         n[d] = 0;
//         count[count.length] = d;
//     }
// }
// console.log(count);
//problem 172  -------------------------------------
// let arr = [true,-5];
// let antArr = [2,null];
// let a = arr;
// arr = antArr;
// antArr = a;
// console.log(arr,antArr);
//problem 173  -------------------------------------
// let arr = [2,5,6,4,4];
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<5) {
//         newArr[newArr.length]=2*arr[i]
//     }else{
//         newArr[newArr.length] = arr[i]/2
//     }
// }
// console.log(newArr);
//problem 174  -------------------------------------
// let arr = [10,-8]
// let antArr = [5,1];
// let newArr = []
// for (let i = 0, j = 0; i < arr.length, j < antArr.length; i++, j++) {
//     if (arr[i]>antArr[j]) {
//         newArr[newArr.length]=arr[i]
//     }else{
//         newArr[newArr.length] = antArr[j]
//     }
// }
// console.log(newArr);
//problem 175  -------------------------------------
// let arr = [ 1,2,3,4,5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//         newArr[newArr.length]=arr[i]
//     }
// }
// console.log(newArr);
//problem 176  ---------------------------------------
// let arr = [2,10,5,8,12];
// let newArr = []
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//        count+=arr[i]
//        newArr[newArr.length]=count
// }
// console.log(newArr);
//problem 177  ---------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let newArr = []
// let count = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     count += arr[i]
//     newArr.unshift(count)
// }
// console.log(newArr);
//problem 178  ---------------------------------------
// let arr = [2,10,5,8,12];
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<arr[i+1]) {
//         newArr.push(arr[i])----------------------------------------------------------???????????????????????????????????????
//     }
//     else{
//         break
//     }
// }
// console.log(newArr);
//problem 179  ---------------------------------------
// let n = 6;
// let arr = []
// let a = 1, b = 1, count;
// for (let i = 1; i <= n; i++) {
//     arr.push(a);
//     count = a + b;
//     a = b;
//     b = count;
// }
// console.log(arr);
//problem 180  ---------------------------------------
// let arr = [9,-14,3,2,1];
// let a = arr[0];
// let b = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (a<arr[i]) {
//         a = arr[i]
//     }
//     else if(b > arr[i]) {
//         b = arr[i]
//     }
// }
// console.log(`min: ${b}, max: ${a}`);
//problem 181  ---------------------------------------
// let arr = [1,'t',15,'t']
// let b = [2,4]
// let n = [];
// let count = [];
// for (let i = 0; i < b.length; i++) {
//     arr[arr.length]=b[i]
// }
// for (let i = 0; i <arr.length; i++) {
//     let d = arr[i];
//     if (n[d] != 0) {
//         n[d] = 0;
//         count[count.length] = d;
//     }
// }
// console.log(count);
//problem 182  ---------------------------------------
// let arr = [7,4,5,0,2];
// let n = 3;
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (n==arr[i]) {
//         count = i
//         break
//     }else{
//         count = -1
//     }
// }
// console.log(count);