// problem 6

// let a = 19;
// let b = 12;
// let c = 14;
// let d = a>b && a>c ? a : b>a && b>c ? b : c;
// console.log(d);

//problem 7

// let a = 6;
// let b = 5;
// let c = 10 ;

// let d = (a+b) > c && (b+a)  > c && (b+c)  > a && (c+a)  > b ? 'Yes' : 'No';

// console.log(d);

//problem 8

// let a = 8;
// let b = 5;
// let c = 7;
// if (a==c && a==b) {
//     console.log('Teng tomonli');
// }else if ((a==b || a==c ||b==c ) && (a!=c || a!=b || b!=c )) {
//     console.log('Teng yonli');
// }else{
//     console.log('Turli tomonli');
// }

//problem 9
// let a = 5;
// let b = 5;
// let c = 5;
// let d = (a*a + b*b == c*c) || (a*a + c*c == b*b) || (b*b + c*c == a*a) ? 'Yes' : 'No';
// console.log(d);


//problem 10

// let n = 1;
// let g = n==1 ? 'Bosh barmoq' : n==2 ? "Kor'satkich barmoq" : n==3 ? "O'rta barmoq" : n==4 ? 'Nomsiz barmoq' : n==5 ? 'Kichik Barmoq':"Noto'g'ri ma'lumot kiritildi" 
// console.log(g);

//problem 11

// let a = 4126;
// let j = 0;
// let b = 0;
// while(a > 0){
//     b = (a % 10);
//     a = a / 10;
//     a = Math.floor(a)
//     j += b;
// }
// console.log(j);

//problem 12

// let n = 5;
// let j = 0;
// for(let i = 1; i <= n; i++){
//   j += i;
// }
// console.log(j);

//problem 13

// let  n = 10;
// let j = 0;
// for(let i = 1; i <= n; i++){
//   if(i % 2 == 0){
//     j += i; 
// }
// }
// console.log(j);


//problem 15

// let n = 11111121211;
// let b = 0;
// let c = 0;
// while( n > 0){
//   let a = n % 10;
//   if(a == 1){
//     b++;
//   } else {
//     c++;
//   }
//   n /= 10;
//   n = Math.floor(n);
// }
// if(b < c){
//   console.log(b);
// } else{
//   console.log(c);
// }

//problem 16

// let n = 150;
// let c = 0;
// while( n > 0){
//   let a = n % 10;
//   if(c < a){
//     c = a;
//   }
//   n /= 10;
//   Math.floor(n);
// }
// console.log(Math.floor(c));

//problem 17

// let a = 102;
// let b = 2;
// let c = 0;
// while( a > 0){
//   let n = a % 10;
//   if(n < b){
//     c++;
//   }
//   a /= 10;
//   a = Math.floor(a);
// }
// console.log(c);



//Misol For36


// let n = 4;
// let k = 2;
// let count = 0;  
// for(let i = 1; i <= n; i++){
//   count += i**k;
//   console.log(i);
// }
// console.log(count , k);


//Misol For37


// let n = 4;  
// let count = 0;
// for(let i = 1; i <= n; i++){
//   count += (i**i);
// }
// console.log(count);


//Misol For39


// let a = 2;
// let b = 5;
// for(let i = a; i <= b; i++){
//   for(let j = 1; j <= i; j++){
//     console.log(i);
//   }
// }


// For40

// let a = 2;
// let b = 6;
// for(let i = a; i <= b; i++){
//   for(let j = a; j <= i; j++){
//     console.log(i);
//   }
// }