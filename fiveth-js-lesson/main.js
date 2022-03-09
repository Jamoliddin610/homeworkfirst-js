// Mustaqil yechish uchun masalalar
//Ex 1 ---------------------------------------
// let n = 5;
// for (let i = 0; i <=n; i++) {
//     if (n%i==0) {
//         console.log(i);
//     }
// }
//Ex 2 ---------------------------------------
// let n = 15;
// let j = 0
// for (let i = 0; i <=n; i++) {
//     if (n%i==0) {
//         j+=i
//     }
// }
// console.log(j);
//Ex 3 ---------------------------------------
// let n = 6;
// let j = 0
// for (let i = 0; i <n; i++) {
//     if (n%i==0) {
//         j+=i
//     }
// }
// if (j==n) {
//     console.log('Mukammal son');
// }else{
//     console.log('Mukammal emas');
// }
//Ex 4 ---------------------------------------
// let n = 50;
// for (let i = 1; i <n; i++) {
//     let j = 0;
//     for (let k = 1; k <i; k++) {
//         if (i%k==0) {
//             j+=k;
//         }
//     }
//     if(i==j){
//         console.log(j);
//     }
// }

//Ex 5 ---------------------------------------
// let n = 30;
// for (let i = 0; i <= n; i++) {
//     if (i%3==0 && i%5!=0) {
//         console.log(i);
//     }
// }
//Ex 6 ---------------------------------------
// let n = 6;
// let j = 1;
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         j = 0;
//         break;
//     }
// }
// if (j==1) {
//     console.log(`${n} soni toq`);
// } else {
//     console.log(`${n} soni toq emas`);
// }
//Ex 7 ---------------------------------------
// let a = 1;
// let b = 10;
// for (let i = a; i <= b; i++) {
//     let n = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             n = 1;
//             break;
//         }
//     }
//     if (i > 1 && n == 0) {
//         console.log(i);
//     }
// }


// Boolean 11 ----------------------------------------------------
// let a = 8;
// let b = 4;
// let d = a%2==0 && b%2!=0 || a%2!=0 && b%2==0 || a%2!=0 && b%2!=0 ? "True" : "False"
// console.log(d);
// Boolean 12  ----------------------------------------------------
// let n = 8;
// console.log(n>9);
// Boolean 13  ----------------------------------------------------
// let n = 100;
// console.log(n>99);
// Boolean 15  ----------------------------------------------------
// let n = 82;
// let a =  n/10%10;
// let b = n%10;
// console.log(Math.floor(a)==b);
// Boolean 16  ----------------------------------------------------
// let n = 72;
// let a =  n/10%10;
// let b = n%10;
// let d = Math.floor(a)+b
// console.log(d%2==0);
// Boolean 17  ----------------------------------------------------
// let n = 72;
// let a =  n/10%10;
// let b = n%10;
// let d = Math.floor(a)+b
// console.log(d%2!=0);
// Boolean 18  ----------------------------------------------------
// let n = 101;
// let c = n/100%10
// let a =  n/10%10;
// let b = n%10;
// let d = Math.floor(c)+Math.floor(a)+b
// console.log(d%2!=0);
// Boolean 18  ----------------------------------------------------
// let n = 200;
// console.log(n>9999);
// Boolean 19  ----------------------------------------------------
// let n = 57851;
// let a = n/10000%10;
// let b = n/1000%10;
// let c = n/100%10;
// let d = n/10%10;
// let f = n%10;
// let g = Math.floor(a)>Math.floor(b)&&Math.floor(b)>Math.floor(c)&&Math.floor(c)>Math.floor(d)&& Math.floor(d)>f
// console.log(g);
// Boolean 20 ----------------------------------------------------
// let n = 54321;
// let a = n/10000%10;
// let b = n/1000%10;
// let c = n/100%10;
// let d = n/10%10;
// let f = n%10;
// let g = Math.floor(a)<Math.floor(b)&&Math.floor(b)<Math.floor(c)&&Math.floor(c)<Math.floor(d)&& Math.floor(d)<f
// console.log(g);
// Boolean 21 ----------------------------------------------------
// let n = -5;
// if (n<0) {
//     console.log(n);
// }else{
//     console.log(n+1);
// }
// Boolean 22 ----------------------------------------------------
// let n = 5;
// if (n<0) {
//     console.log(n-2);
// }else{
//     console.log(n+1);
// }
// Boolean 23 ----------------------------------------------------
// let n = 0;
// if (n<0) {
//     console.log(n-2);
// }else if(n>0) {
//     console.log(n+1);
// }else{
//     console.log(10);
// }
// Boolean 24 ----------------------------------------------------
// let a = 2;
// let b = -2;
// let c = -3;
// let d = 0;
// if(a>0){
//     d++
// }
// if(b>0){
//     d++
// }
// if (c>0) {
//     d++
// }
// console.log(d);
// Boolean 25 ----------------------------------------------------
// let a = 2;
// let b = 2;
// let c = 3;
// let d = 0;
// let e = 0;
// if(a>0){
//     d++
// }else{
//     e++
// }
// if(b>0){
//     d++
// }else{
//     e++
// }
// if (c>0) {
//     d++
// }else{
//     e++
// }
// console.log(d,e);
// Boolean 26 ----------------------------------------------------
// let a = -1;
// let b = 10;
// if(a>b){
//     console.log(a,b);
// }else{
//     console.log(b,a);
// }



// Funksiya 1 --------------------------------
// let x ;
// let y ;
// function minMax(a,b,c,d) {
//     x = a>b && a>c &&a>d ? a : b>a && b>c && b>d ? b : c>a && c>b && c>d ? c : d>a && d>b && d>c ? d : "Hammasi teng"
//     y = a<b && a<c &&a<d ? a : b<a && b<c && b<d ? b : c<a && c<b && c<d ? c : d<a && d<b && d<c ? d : "Hammasi teng"

//     console.log(x,y);
// }
// minMax(100,100,100,100)

// arrow funksiaya
// let person  = 'roboto'
// let welcome = 
//     person == 'man'?
//     () => console.log('Siz odamsiz'):
//     () => console.log('Siz odam emasiz');
// welcome()

// Funksiya 2 --------------------------------
//  let newArray = [15,20,17,20,19,20,21,20,23,20]
// for (let i = 0; i < newArray.length; i++) {
//     let count = 0;
//     for (let j = 2; j < newArray[i]; j++) {
//         if (newArray[i]%j==0) {
//             count++;
//         }
//     }
//     if(count == 0){
//         console.log(newArray[i]);
//     }
// }
// Funksiya 3 --------------------------------
// let newArray = [12,13,1,5,1,6,1,4,5];
// let juftArray = [];
// for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i]%2==0) {
//         juftArray[juftArray.length]=newArray[i]
//     }
// }
// console.log(juftArray);



// Array 1 ------------------------------------
// let  n = 42;
// let toqSon = []
// for (let i = 0; i <= n*2; i++) {
//     if (i%2!=0) {
//         toqSon.push(i)
//     }
// }
// console.log(toqSon);

// Array2

/*
let n = 5;
let newArray = [];
for(let i = 0; i <= n; i++){
  newArray[newArray.length] = 2**i;
}
console.log(newArray);
*/

// Array3

/*
let n = 5;
let a = 3;
let d = 10;
let newArray = [];
for(let i = 1; i <= n; i++){
  newArray[newArray.length] = a;
  a += d;
}
console.log(newArray);
*/

// Array4

/*
let n = 5;
let a = 3;
let d = 3;
let newArray = [];
for(let i = 1; i <= 5; i++){
  newArray[newArray.length] = a;
  a *= d;
}
console.log(newArray);
*/

// Array5

// let n = 3;
// let a = 0;
// let b = 1;
// let c = 0;
// let newArray = [];
// for(let i = 1; i <= n; i++){
//   c = a + b;
//   a = b;
//   b = c;
//   newArray[newArray.length] = c;
// }
// console.log(newArray);

// Array7

/*
let newArray = [2, 3, 4, 5, 6, 7, 8, 10];
let reverseArray = [];
let j = 0;
for(let i = newArray.length - 1, j = 0; i >= 0; i--, j ++){
  reverseArray[j] = newArray[i];
}
console.log(reverseArray);
*/

// Array8

/*
let newArray = [4, 5, 7, 8, 6, 9];
let oddRiseArray = [];
let count = 0;
for(let i = 0; i < newArray.length; i++){
  if(newArray[i] % 2 != 0){
    oddRiseArray[oddRiseArray.length] = newArray[i];
    count++;
  }
}
console.log(oddRiseArray, count);
*/

// Array9

/*
let newArray = [4, 5, 7, 8, 6, 9];
let evenDecreaseArray = [];
let count = 0;
for(let i = newArray.length - 1; i >= 0; i--){
  if(newArray[i] % 2 == 0){
    evenDecreaseArray[evenDecreaseArray.length] = newArray[i];
    count++;
  }
}
console.log(evenDecreaseArray, count);
*/

// Array10

/*
let newArray = [4, 5, 7, 8, 6, 9];
let evenRiseArray = [];
let oddDecreaseArray = [];
let j = 0;
for(let i = 0, j = newArray.length - 1; i < newArray.length; i++, j--){
  if(newArray[i] % 2 == 0){
    evenRiseArray[evenRiseArray.length] = newArray[i];
  } 
  if(newArray[j] % 2 != 0){
    oddDecreaseArray[oddDecreaseArray.length] = newArray[j];
  }
}
console.log(evenRiseArray, oddDecreaseArray);
*/

// Array18

/*
let newArray = [18, 2, 11, 14, 10];
for(let i = 0; i < newArray.length; i++){
  if(newArray[i] < newArray[newArray.length - 1]){
    console.log(newArray[i]);
    break;
  }
  if(i == newArray.length -1){
    console.log(0);
  }
}
*/

// Array19

/*
let newArray = [2, 4, 3, 6, 8, 9, 7];
for(let i = newArray.length - 1; i >= 0; i--){
  if(newArray[i] < newArray[newArray.length - 1] && newArray[i] > newArray[0]){
    console.log(i);
    break;
  } 
  if(i == newArray[0]){
    console.log(0);
  }
}
*/

// Array20

/*
let newArray = [2, 3, 4, 7, 4, 2, 9, 12];
let k = 2;
let l = 6;
let count = 0;
for(let i = k; i < l; i++){
  count += newArray[i];
}
console.log(count);
*/

// Array21

/*
let newArray = [1, 2, 10, 4, 5, 6];
let k = 2;
let l = 5;
let count = 0;
let check = 0;
for(let i = k; i < l; i++){
  count += newArray[i]; 
  check++;
}
console.log(count / check);
*/

// Array22

/*
let newArray = [1, 2, 3, 4, 5, 1, 2];
let k = 2;
let l = 4;
let count = 0;
for(let i = 0; i < newArray.length; i++){
  if(i < k || i > l){
    count += newArray[i];
  }
}
console.log(count);
*/

// Array23

/*
let newArray = [1, 2, 10, 4, 5, 6, 2];
let k = 2;
let l = 3;
let count = 0;
let check = 0;
for(let i = 0; i < newArray.length; i++){
  if(i < k || i > l){
    count += newArray[i];
    check++;
  }
}
console.log(count / check);
*/

// Array24

/*
let newArray = [3, 6, 9, 12, 13];
let a = newArray[1] - newArray[0];
let count = 0;
for(let i = 1; i < newArray.length; i++){
  if(newArray[i] == newArray[i - 1] + a){
    count += 0;
  } else{
    count++;
    break;
  }
}
if(count == 0){
  console.log(a);
} else{
  console.log(0);
}
*/

// Array25

/*
let newArray = [3, 9, 27, 81, 243];
let a = Math.floor(newArray[1] / newArray[0]);
let count = 0;
for(let i = 1; i < newArray.length; i++){
  if(newArray[i] == newArray[i - 1] * a){
    count += 0;
  } else{
    count++;
    break;
  }
}
if(count == 0){
  console.log(a);
} else{
  console.log(0);
}
*/

// Array26

/*
let newArray = [2, 1, 2, 1, 2, 1];
let count = 0;
let i = 0;
if(newArray[0] % 2 == 0){
  for(let j = 0, i = 1; j < newArray.length; j += 2, i += 2){
    if(newArray[j] % 2 == 0){
      count += 0;
    } else{
      count = j;
      break;
    }
    if(newArray[i] % 2 != 0){
      count += 0;
    } else{
      count = i;
      break;
    }
  }
} else{
  for(let j = 0, i = 1; j < newArray.length; j += 2, i += 2){
    if(newArray[j] % 2 != 0){
      count += 0;
    } else{
      count = j;
      break;
    }
    if(newArray[i] % 2 == 0){
      count += 0;
    } else{
      count = i;
      break;
    }
  }
}
if(count == 0){
  console.log(0);
} else{
  console.log(count);
}
*/

// Array27

/*
let newArray = [-1, 2, -2, 3, -3, 4];
let count = 0;
let j = 0;
if(newArray[0] < 0){
  for(let i = 0, j = 1; i < newArray.length; i += 2, j += 2){
    if(newArray[i] < 0){
      count += 0;
    } else{
      count = i;
      break;
    }
    if(newArray[j] > 0){
      count += 0;
    } else{
      count = j;
      break;
    }
  }
} else{
  for(let i = 0, j = 1; i < newArray.length; i += 2, j += 2){
    if(newArray[i] > 0){
      count += 0;
    } else{
      count = i;
      break;
    }
    if(newArray[j] < 0){
      count += 0;
    } else{
      count = j;
      break;
    }
  }
}
if(count == 0){
  console.log(0);
} else{
  console.log(count);
}
*/

// Array28

/*
let newArray = [22, 4, 11, 5, 6, 7, 11, 3, 12];
let smallArray = [];
 
for(let i = 0; i < newArray.length; i++){
  if(i % 2 == 0){
    smallArray[smallArray.length] = newArray[i];
  }
}
console.log(Math.min(...smallArray));
*/

// Array29

/*
let newArray = [22, 43, 11, 5, 6, 7, 11, 31, 12];
let smallArray = [];
 
for(let i = 0; i < newArray.length; i++){
  if(i % 2 != 0){
    smallArray[smallArray.length] = newArray[i];
  }
}
console.log(Math.max(...smallArray));

*/


// let newArray = [10,2,3,1,-100,78];
// for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i]<newArray[0]) {
//         newArray[0]=newArray[i]
//     } 
// }
// console.log(newArray[0]);


// let newArray = [10,2,3,1,-100,8];
// for (let i = 0; i < newArray.length; i++) {
//     for (let j = 0; j < newArray.length; j++) {
//         if (newArray[j]<newArray[j+1]) {
//             let a = newArray[j+1]
//             newArray[j+1]=newArray[j]
//             newArray[j]=a
//         }
//     }
// }
// console.log(newArray);

let arr = [10,15,14,17,56,83,100]
let juftArr = []
let toqArr = []
let allArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        juftArr[juftArr.length]=arr[i]
    }else{
        toqArr[toqArr.length]=arr[i]
}
}
for (let i = 0; i < juftArr.length; i++) {
    for (let j = 0; j < juftArr.length; j++) {
        if (juftArr[j]<juftArr[j+1]) {
            let a = juftArr[j+1]
            juftArr[j+1]=juftArr[j]
            juftArr[j]=a
            
        }
    }
}

for (let i = 0; i < toqArr.length; i++) {
    for (let j = 0; j < toqArr.length; j++) {
        if (toqArr[j]<toqArr[j+1]) {
            let a = toqArr[j+1]
            toqArr[j+1]=toqArr[j]
            toqArr[j]=a
            
        }
    }
}
let a = 0;
let b = 0;

for (let k = 0; k < arr.length; k++) {
    if(k%2==0){
        arr[k]=juftArr[a]
        a++;
    }else{
        arr[k]=toqArr[b]
        b++;
    }
}
console.log(arr);