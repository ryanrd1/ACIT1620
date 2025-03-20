// let dogname ="Bobo"
// let dogweight =23;
// if (dogweight > 20){
// console.log(dogname+ "says WOOF WOOF");
// }

// else{
//     console.log (dogname + "says WOOF WOOF")
// }

//  dogname ="Toto"
//  dogweight =13;
// if (dogweight > 20){
// console.log(dogname+ "says WOOF WOOF");
// }

// else{
//     console.log (dogname + "says WOOF WOOF")
// }




// let x = 32;
// let y = 44;

// let radius = 10;

// var centerX=10;
// let centerY=0;
// let width = 600;
// let height= 400;

// function setup(width,height) {
//     centerX = width/2;
//     centerY = height /2;
// }

// function computeDistanc(x1, y1, x2, y2){
//     let dx =x1- x2 ;
//     let dy =y1- y2 ;
//     let d2= (dx*dx)+(dy*dy);
//     let d = Math.sqrt(d2);


//     return d;
// }

// function circleArea(r) {
//     let area = Math.PI * r * r;
//     return area;

// }  

//     setup(width, height);
//         let area = circleArea(radius);
//         let distance = computeDistanc(x, y , centerX, centerY);
       
//         alert("Area: " + area);
//         alert("Distance: " + distance);



//   3)
// let scores = [60, 50 , 60, 58, 54 , 
//     54, 58, 50 ,52 ,54, 48,69,34,55,
//     51,52,44,51,69,64,66,55,52,61,46,
//     31,57,52,44,18,41,53,55,61,51,44];




//     let i = 0;
//     let highscore = 0


//             // while (i < scores.length){
//             // console.log("Bubble solution #" + i + " score" + scores[i]);
//             //     if (scores[i] > highscore) {
//             //         highscore-scores[i];
//             //     }

//             //     i++;
//             // }
//     console.log("Bubbles tests: " +scores.length);
//     console.log("Highest bubble score: " + highscore);

//     let bestSolutions = [];
//     for (let i = 0; i< scores.length; i++){
//         if (scores[i] == highscore) {
//             bestSolutions.push(i);
//         }
//     }

//     console.log("Solutiona with highest score: " + bestSolutions);



// 4)


let numbers= new Array (1, 2, 3, 4, 5);
console.log(numbers);

let nums= new Array(5);
console.log(nums);

let arr = Array.of(5);
console.log(arr); //[5]

arr.push(4);
console.log(arr);//[1,2,3,4]

arr.pop();
console.log(arr); // remove top element [1,2,3]

arr.unshift(0);
console.log(arr); //[0,1,2,3]

arr.shift();
console.log(arr); //remove from the beginning [1,2,3])

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(7)); //-1

console.log(arr.lastIndexOf(2)); //1

console.log(arr.includes(3)) //true (if it is present)

arr.splice(2,0,10,20); //[1,2,10,20]
console.log(arr); //[1,2,10,20,3]

let sliced =arr.slice(1,4);
console.log(sliced); //[2,20,20]

let arr1 = [1,2,3];
let arr2= [4,5,6];

let combined = arr1.concat(arr2);
console.log(combined); //[1,2,3,4,5,6]

let words = ["Hello", "world!"];
console.log(words.join(" "));
let sentence = "JavaScript is fun";
let wordsArray = sentence.split(" ");
console.log(wordsArray);

let letters= ["d", "a" , "c", "b"];
letters.sort();
console.log(letters); //["a", "b", "c", "d"]

letters.reverse();
console.log(letters);

// 5)
// function add(a, b){
//     return a+b;
    
// }

// console.log(add(2,3));

// const add = (a,b) => a+b;

// const multiply = (a,b)=>{
//     console.log('Multiplying ${a} and ${b} ');
//     return a+b
// }

// console.log(multiply(5,6));

// const sqauare = x => x*x;
// console.log(swuare(6));

// const greet = () => "Hello World";
// console.log(greet());

// let access= document.getElementById("code9");
// let code = access.innerHTML;
// code=code+'midnight';

// alert(code);