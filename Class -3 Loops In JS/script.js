console.log('jai shree ram');
//Loops In js 
//Loop ka use ham tab karte hai jab hame 1 hi kam ko bar bar repeat karna hota hai -- jaise agar hame 5 bar hello print karna pade to hame 5 bar console likhna padega lekin yaha par ham loop ka use kar sakte hai or 5 kya 5000 bar 1sec me hello print kar denge.
//Loop ka 3 part hota hai Insilizetoin , condition , increment/decrement;

// //Example -- 
// for(let i = 0; i < 60; i++){
//     console.log('hello');//(60)hello
// }


// //1 to 100 tak ginti --
// for(let i = 1; i <= 100; i++){
//     console.log(i);//1 2 3 4 ... 100
// }


// //20 to 40 tak --- 
// for(let i = 20; i <= 40; i++){
//     console.log(i);//20 21 22 ... 40
// }



// //reverse loop 200 to 100 tak ginti --- 
// for(let i = 200; i >= 100; i--){
//     console.log(i);//200 199 198 ... 100
// }


// //Loop ko 10 bar chalana lekin loop to 11 par jakar flase hoga to us 11 value ko print karna hai.
// let i = 1;
// for( ; i <= 10; i++){//1st me ; lagana jaruri kyuki ye 3 statemes leta  hai n esliye.
//     console.log(i);
// }
// //ab jaise hi i ki value 11 hogi ye loop false ho jayga or block nhi chalega to ham bahar i ki value ko print kar lenge to hame last value mil jaygi jiski vajaha se loop flase huaa hai.

// console.log('Last val ',i);//Last val  11

//esime Infinign loop bhi ban jata hai agar ham increment / decrement ka use nhi karenge to infinnight loop ban jayga or browser crash ho jayga ya ho sakta hai ham conditoin ko ulta likhde jisase condition hamesa ture rhe to bhi infinight loop ban jayga.

//Example -- 
// for(let i = 1; i<10;){//ye hai infinight loop kyuki i ki value 1 hi rhe gi or hamesa 10 se chhoti rhegi.
//     console.log(i);
// }

// // Example 2 --
// for(;;){//ye bhi infinight loop hai. or sahi syntax hai --  lekin agar ham ; hataynge to glat ho jayga.
//     console.log('hello');
// }

//ham loop me kuchh nhi likh rhe hai to bhi vo chal rha hai to ham loop ko 3 bar insilize condtion increment ye sab kyu kar rhe hai ? -- 
//Dekho loop ka kam hai bas chalna jitna bolo utna vo chalega -- insilize condtion increment ye sab loop ko ham de kyuki hame loop ko apne hisab se chalana hai jaise --- i jo hai vo batati hai ki loop bhaiya aapko 1 se chalna hai fir connditon batati  hai ki loop bhaiya aapko yaha par rukna hai or increement to bas i ko badata hai ya ghata deta hai bas.


//Q1 -- 
//Print of n Natural numbers
//natural numbers -- 1,2,3,4,5 etc......
//n hamne kyu lagaya hai ? -- hame 1 se number print karna hai lekin kaha tak ye hame nhi pata esliye hamne n lagaya hai ab number kaha tak print karna hai ye hame user batayga.

// let user = Number(prompt('Enter a natural number'));
// //hame n number print to kar rhe hai lekin ham error bhi handle kar rhe hai.

// if(user >= 1){
//     for(let i = 1; i <= user; i++){//user jo value dega vha tak ham chalenge.
//         console.log(i);
//     }
// }
// else {
//     alert('Wrong Input');
// }



// //Q2 -- Sum program banana hai jisme user n tak ki values ko sum kar sake lekin hame ye bhi chack karna hai ki value number hi ho , and positive bhi ho , 0 na ho.

// //Agar ham prompt ko casle karte hai to value aati hai null to ham ese bhi handle kar sakte hai.To uske liye hame prompt ko pahale hi handle karna hoga number me convert karne se pahale.
// let pr = prompt('Enter a number range to sum All Positive numbers')

// if (pr === null) {
//     console.log('Program Cancelled');
// }

// else {
//     let user2 = Number(pr);//Jab condition false hoti to fir hamara normal code chalega.

//     if (isNaN(user2)) {
//         alert('Invalid Input');
//     }
//     //yaha par else me sab kuchh esliye rakha hai taki projgram cancle hone ke bad kuchh bhi  na chale.
//     else {
//         if (user2 > 0) {
//             let Sum = 0;//sum variable ham yha par esliye bana rhe hai taki jab sab kuchh sahi ho tabhi variable bane or hamare variabl ki memory bhi bhach jaygi agar user nigative number ya invalid input de de.

//             for (let i = 1; i <= user2; i++) {
//                 Sum += i;
//             }
//             console.log(user2, 'Numbers sum calculation is : ', Sum);
//         }
//         else {
//             console.log('Value is nigative || 0 Plees enter Positive number');
//         }
//     }


// }




// //Q3 -- Factorial -- Jaise n taki value sum ho rhi thi sem vaise hi hame n tak ki value hame *multiply karni hai.

// let factInput = prompt('Enter a number to calculate factorial');
// if(factInput === null){
//     console.log('Program Calcelled');

// }
// else{
//     let factInputVal = Number(factInput);
//     if(isNaN(factInputVal)){
//         console.log('Invalid Input');
//     }
//     else {
//         if(factInputVal > 0){
//             let fact = 1;
//             for(let i = 1; i <= factInputVal; i++){
//                 fact *= i;
//             }
//             console.log(factInputVal + ' Factorial calculation is :',fact);
//         }
//         else{
//             if(factInputVal < 0){
//                 console.log('Value is nigative plees enter positive number');
//             }
//             else{
//                 console.log('Value is 0 Plees Enter Positive number');
//             }
//         }
//     }
// }















