//misol if2
// let a =  40 ;
// let b =  -20 ;
// let c = 23 ; 

// if (a>b && b>c){
//     console.log(b);
// } else if(b>a && a>c){
//     console.log(a);
// }else{
//     console.log(c);
// }

//misol if3

// let a = 10;
// let b = 10;

// if (a==b) {
//     console.log(0);
// }else if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }


//misol if5

// let x = -5;
// if(x>0){
//     console.log(2*Math.sin(x));
// }else{
//     console.log(x-6);
// }

//misol if6

// let x = 1;
// if(x<-2 || x>2){
//     console.log(2*x);
// }else{
//     console.log(-3*x);
// }

//misol if8


// let a = 3;
// let b = 4;
// let c = 4;

// if ((a**2+b**2)==c**2) {
//     console.log('Yes');
// }else{
//     console.log('No');
// }


//misol if9

// let x = 0;
// if (x<=0) {
//     console.log('Freezing');
// }else if(1<x && x<10){
//     console.log('Very Cold');
// }else if(11<x && x<20){
//     console.log('Cold');
// }else if(21<x && x<30){
//     console.log('Normal');
// }else if(31<x && x<40){
//     console.log('Hot');
// }else if(x>40){
//     console.log('Very Hot');
// }


//misol if10

// let x = 0;

// if (x>0 && x%2!=0) {
//     console.log('Musbat toq son');
// }else if (x>0 && x%2==0) {
//     console.log('Musbat juft son');
// }else if (x<0 && x%2!=0) {
//     console.log('Manfiy toq son');
// }else if (x<0 && x%2==0){
//     console.log('Manfiy juft son');
// }else{
//     console.log('son 0 teng');
// }


//misol if11

// let x = 30;

// if (x>9 && x%2!=0) {
//     console.log('ikki xonali toq son');
// }else if (x>9 && x%2==0) {
//     console.log('ikki xonali  juft son');
// }else if (x>99 && x%2!=0) {
//     console.log('uch xonali toq son');
// }else if (x>99 && x%2==0){
//     console.log('uch xonali juft son');
// }else{
//     console.log('son bir xolani');
// }


// misol if12

// let x = 0;

// console.log(x**2);


//misol if13


// let x = 10;
// let y = true;
// let d = x>=20 && true ? true : false;
// console.log(d);


// misol if14

// let a = 27;
// let b =Math.floor(a/10%10);
// let c = a%10;
// let d = c+''+b;

// console.log(a>=d);




///----------------------------------------------------------------------------------------------------------






// misol if18
// let a = 84;
// let b = 24;
// let c = 102;
// let d = a>b && a>c ? a : b>a && b>c ? b : c;
// console.log(d);


//misol if19

// let a = 12345 ;

// let b = Math.floor(a/10000%10);
// let c = Math.floor(a/1000%10);
// let d = Math.floor(a/100%10);
// let e = Math.floor(a/10%10);
// let f =Math.floor(a%10);
// let j =  b>c && b>d && b>e && b>f ? b : c>b && c>d && c>e && c>f ? c : d>b && d>c && d>e && d>f ? d : e>b && e>c && e>d && e>f ? e : f;

// console.log(j);


//misol if20


//-----------------------------------------------------------------


//misol for1

// let k = 2;
// let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log(k);
// }

//misol for3

// let a = 21;
// let b = 11;
// for (let i = a-1; i > b ; i--) {
//     console.log(i);
// }
//misol for4

// let b = 12000;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} kg konfit narxi ${i * b}`);
// }


//misol for5

// let b = 1000;

// for (let i = 0.1; i <= 1; i+0.1) {
//     console.log(`${i} kg konfit narxi ${i * b}`);
// }


//misol for7

// let a = 5;
// let b = 17;
// let n = 1;

// for (let i = a; i <= b; i++) {
//   n += i
//   // console.log(i);
// }

// console.log(n);



//misol for8

// let a = 5;
// let b = 8;
// let n = 1;

// for (let i = a; i <= b; i++) {
//   n*= i
//   console.log(i);
// }

// console.log(n);



//misol for9

// let a = 5;
// let b = 8;
// let n = 0;

// for (let i = a; i <= b; i++) {
//   n+= Math.pow(i, 2)
//   console.log(i);
// }

// console.log(n);



//misol for10

// let n = 6;
// let j = 0;

// for (let i = 0; i <= n; i++) {
//   j+= (i + 1) / 2
// }

// console.log(j);



//misol for11

// let n = 2;
// let j = 0;

// for (let i = 0; i <= Math.pow((2 * n), 2); i++) {
//   j += Math.pow(n, 2) + Math.pow((n + 1), 2);
// }

// console.log(j);



//misol for12

// let n = 1.4;
// let j = 1;

// for (let i = 1; i <= n; i += .1) {
//   j *= i
// }

// console.log(j);


//------------------------------------------------------

//misol for14

// let n = 5;
// let j = 0;

// for (let i = 1; i <= (2 * n - 1); i += 2) {
//   j += i;
//   console.log("N ->", Math.pow(j, 2));
// }
// console.log(Math.pow(j, 2));



//misol for15

// let n = 5;
// let a = 2;
// let j = 1;

// for (let i = a; i <= n; i++) {
//   j += Math.pow(i, n) * i;
//   console.log(i);
// }

// console.log(j);



//misol for16

// let a = 5;
// let n = 3;
// let j = 0;

// for (let i = 1; i <= n; i++) {
//   j = Math.pow(a, i)
//   console.log(j);
// }



//misol for17

// let a = 5;
// let n = 3;
// let j = 0;

// for (let i = 1; i <= n; i++) {
//   j += Math.pow(a, i)
//   console.log(j);
// }



//misol for19

// let n = 5;
// let j = 1;

// for (let i = 1; i <= n; i++) {
//   j *= i;
//   console.log(j);
// }

