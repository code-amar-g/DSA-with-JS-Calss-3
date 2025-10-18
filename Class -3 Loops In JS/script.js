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



// //Q4 --- Factor of number-- factor matlab jaise hamare  pass 12 hai to 12 jitne numbers se katega vo 12 ke factor honge jaise -- 1 , 2 , 3, 4, 6, 12 ye sab 12 ke factor hai.


// let user = prompt('Enter number to find factors');
// if (isNaN(user)) {
//     console.log('Invalid Input');
// }
// else {
//     let userVal = Number(user);
//     if (userVal > 0) {
//         for (let i = 1; i <= Math.floor(user/2); i++) {
//             if (user % i == 0) {
//                 console.log(i);
//             }
//         }
//         console.log(userVal);
//     }
//     else{
//         if(userVal < 0){
//             console.log('Nigtaive Value Not Allowd');
//         }
//         else {
//             console.log('Value is 0 plees enter positive number');
//         }
//     }
// }

//ab es loop ko 1 se n tak chala rhe hai mana user ne 12 diya to ham 1 se 12 tak loop ko chalynge lekin ham es code ko or achha kar sakte hai -- 12 number 1 2 3 4 6 or bhi khud se hi katega matlab ki agar ham 12/2 kare ko hame 6 milega ok matlab koe bhi sangya apne half tak hi katati hai uske bad khud se kategi jaise 12 ka aadha hota hai 6 -- to 12 kin numbers se kar rha hai 1 2 3 4 6 se yani apne half value se karega ab eske bad jitni bhi values aaygni unse 12 kabhi nhi katega jaise 7 8 9 10 11 ense 12 kabhi nhi katega last me 12 khud se hi katega lekin problem ye hai ki loop ko to 12 bar chalna pad rha hai matlab 12 to sirf 6 chalkar kat jayga uske bad jitna number aa rha hai vo faltu me time or memory le rha hai or hame ye bhi pata hai ki 12 6 se katne ke bad ab khud 12 se hi katega to ham 6 ke bad ki values ko kyu chalay jab hame unhe chalane ka koe fayda nhi hai to ham loop ko aadha hi chalynge uske bad ke numbers se to vo katega nhi last bas khud se hi katega to last me ham alag se usi number ko print kar denge. simple....

//bas seem kam ho rha hai lekin aadha time aadha memory speed fast sabkuchh mast -- Eska fayda hame tab dikhega jab ham 1lakh bar kam karenge tab kyuki 1lakh last time 50k se katega or fir khud se katega lekin beech me 50001 to 99999 tak faltu me hi n chalega.




// //Prime Number -- Jo number khud se or 1 se devide ho vo prime number hota hai.

// let num = prompt('Enter number to find prime number');
// if(isNaN(num)){
//     console.log('Invalid Input');
// }

// else {
//     let number = Number(num);
//     if(number > 0){
//         let primeHai = true;
//         for(let i = 2; i <= Math.floor(number/2); i++){
//             if(number%i === 0){
//                 primeHai = false;
//                 break;
//             }
//         }
//         console.log(primeHai);
//     }

//     else{
//         if(number < 0){
//             console.log('Positive number de bhai kya kar rha hai.');
//         }
//         else {
//             console.log('0 kyu dal rha hai yar number dal');
//         }
//     }
    
// }



// Esi ka ak or short tarika hai --- ham upar number /2 yani half time kam kar rhe hai n use ham or kam kar sakte hai 
// Jaise -- mana ahamre pass number hai 37 to eska sqrt hoga 6 and somthing ok agar ham dekhe 2 se 6 jo eska sqrt hai yaha tak ese koe devide kar rha hai nhi kar rha hai or agar sqrt tak bhi devide nhi kar rha hai to eske bad jitne numbers aaynge vo bhi nhi kar paynge. matlab hame ab half tiem bhi nhi chalana hai ab hame bas n ke sqrt tak hi chalana hai matlab ham code ko or fast kar denge.lekin ham ese or chhota kar saktehai lein pahale code par chalte hai vala samjhnege.

// let n = Number(prompt('Enter number'));

// function isPrime(n) {
//     if(n <= 1) return false;//1 se chhoti value hogi to uska prime number nhi gota hai.
//     if(n === 2) return true;//pure math me 2 hi ak aisi sankhya hai jo even hai lekin prime number hai.
//     if(n%2 == 0) return false;//ab value 1 se kam bhi nhi ahai 2 ke barabar bhi nhi hai to 2 se badi hi hogi or agar value 2 badi or 2 se kat ke 0  aa jati hai to false aa jayga.
    

//     //hamne loop me kuchh changes kiye hai or chhota karne ke liye hame loop ko 3 se start kar rhe hai kyuki even number to hamne upar hi chack kar liya hai -- or hame pata hai ki n apne sqrt tak ke numbers se nhi kata to uske aage bhi nhi katega esliye ham n ko uske sqrt tak hi katenge or loop bhi vahi tak chalega ok -- esko or chhota karne ke liye hamne i+=2 kar diya hai yani i me har bar 2 + hoga 1 nhi aisa hamne kyu kiya kyuki ham yaha par odd number par loop chala rhe hai even to hamne upar hi chack kar liya hai n --Jaise mana n = 37 hai ok to loop loop chalega uske sqrt tak yani 6 tak jaise - 3 4 5 6 aise chalega loop lekin i me hamne +2 kar diya hai to 3 ke bad sidha 5 ke liye loop chalega beech ka 4 bhi skip ho jayga kyuki vo even hai or even hamne upar chack kar liya tha to ab hamara code or fast ho chuka hai.
//     for(let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2){
//         if(n%i === 0) return false // ab loop sqrt tak chalega or us beech me kisi bhi sankhya se n kat kar 0 aata hai to false aajayaga.
//     }
//     //ab sari mulkilo par karke agar vo number bahar nikal jata hai tab jakar vo prime number nana jayga.
//     return true
// }
// //ye ban gya hamara prime number ab hame ese jaha call karege prime number nikal jayga.
// //ab ham upar ka code hatakar ham bas vaha par es funtion ko call kar denge.


// console.log(isPrime(n));





//break & continue --- break keword code ko break kar deta hai jaise hamne prime number ka program banaya hai uapr usme hamne break keword ka use kiya hai kyuki mana agar hame 12 ko chack karna hai to ham loop ko 2 se 12 bar chala hei or hamne break keword ka use nhi kiya vha par to jaise hi loop chalega 12 to 2 se hi kat jayga matlab jab loop 1st time chala tabhi pata chal gaya ki ye prime num nhi hai lekin ye rukega nhi kyuki ese hamne break nhi lagaya ye 3 4 5 .... 12 tak chack karega kyuki loop 12 tak chal rha hai esliye ham break lagate hai taki jab kaam ho jay to vapa aajao uske aage nane ki jarurat nhi hai.

//conitnue --- ye value ko skip kar deta hai jaise agar hamne condition lagaya ki n === 3 yani n jaise hi barabar ho 3 ke to jaise hi n 3 ke barabar hoga to conitnue 3 ko skip kar dega or aage bad jayga . 

// Example -- 

// for(let i = 1; i <= 20; i++){
//     if(i === 11) break;
//     else console.log(i);//1 2 3 4 5 6 7 8 9 10
// }
// //yaha par ham loop ko 1 se 20 tak chala rhe hai or condition de rhe hai ki jaise hi loop 11 tak bahuch jay vaise hi vapas aajao uske aage mat jao or i ki sari values ko print karo.
// //to jabtak loop 11 tak jayga tabtak i ki value print hogi.Or ye loop 10 tak chalega kyuki jab i ki value 11 hogi to condition true ho jaygi or turant loop break ho jayga or else nhi chalega matlab 11 print nhi hoga.

// //or agar yhi par ham continue ka use kare to i jaise hi 11 par jayga 11 skip ho jayga or 12 se value aage bad jaygi.

// for(let i = 1; i <= 20; i++){
//     if(i === 11) continue;
//     else console.log(i);//1 2 3 4 5 6 7 8 9 10 12 13 14 15 16 17 18 19 20
// }





//while loop --- jo kam for kar sakta hai vo while bhi kar sakta hai. lekin kuch kuch conditions me while ka use jada hota hai. -- while ka hindi matlab hota hai (jabtak) -- jaise agar ham 1 to 10 ke beech me guese the number game bana de to jabtak game number nhi mil jata tabtak loop chalega.

//kab for or kab while loop ka use karege --- for ka use tab karege jab hame pata ho ki kaha se kaha tak jana hai - jaise mummy ne 10 saman likh kar diya to 10 saman hi lana hai . ye for loop kam krega kyuki pata hai kah atak jana hai.

//while loop tab use karege jab kisi condition tak jana ho -- jaise agar mummy 5000  rs detihai or bolti hai ki jabtak 5000 khatam na ho jay tabtak chalna hai to es condition me while ka use hoga.

//syntax -- 

//1.insilisesion let i = 1;
//while(2.condition i <= 10){
    //code 
    //3.Last me aayga increment / decrement i++
    
// }

// //Example --- 
// let i = 1;
// while(i <= 10){
//     console.log(i);//1 2 3 4 5 6 7 8 9 10
//     i++;
// }



// //while example -- Example to --- hame user se khuchh bhi lena input lena hai prompt me or jabtak user exit nhi likhta tabtak ham use prompt dete rhenge kuchh likhne ke liye -- lekin ya par ye bhi ho sakta hai ki user pahale hi exit de to ese handle karne ke liye hame loop ko ulta chak karna hoga;
// // jaise -- 

// let user = prompt('Kuchh bhi de do (exit for close)');

// while(user !== 'exit'){//yha ulta condition hai ki agar user exit ke barabar nhi hai to condition true hogi. agar user pahale hi exit deta hai to loop chalega hi nhi.
//     user = prompt('Kuchh bhi de do (exit for close)');
//     console.log(user);
// }

// //Yaha par hame nhi pata hai ki kab rukna user jab chahega to exit dalega or ruke lekin kab rukega ye nhi pata aisi conditon ham while ka use karte hai.--while me hame kaha se kaha tak nhi batana hai bas ye batana hai ki kab rukna hai bas ...




// //Q1 -- sum of n degits.

// let num = prompt('Enter number to calculate sum');
// let SumVal = 0;

// if(isNaN(num)){
//     console.log('Invalid Input');
// }
// else{
//     let numVal = Number(num);
//     if(numVal > 0){

//         let num = 1;
//         while(num <= numVal){
//             SumVal += num;
//             num++;
//         }
//     }
//     else{
//         if(numVal < 0 ) console.log("Enter Positive Number");
        
//         else console.log('0 value not allowd');
//     }
// }
// console.log(SumVal)



//ye to normal sum ho gya esme 10 denge to 10 tak ki values sum ho jaygi lekin kya ho agar mai karu ki agar mai inpout do 2345 to mujhe output me chahiye 2+3+4+5 = 14 ye chahiye. 
//ye nikalne ke liye ham 2345%10 se to last value 5 mil jaygi fir 2345/10 kar denge or math.floor kar denge to last value hat jaygi. ab jab loop dusri bar chalega tab bhi sem kam hoga or last me 0 bachega. to bas jo last value nikal rhi hai usi ko hame sum karna hai kam ho jayga.

let userInput = Number(prompt('Enter numebrs'));
let Sum = 0;

while(userInput>0){//Yaha ham condition laga rhe hai ki user jabtak se bada hai tabtak chalo kyuki last me user 0 ho jayga.
    let rem = userInput%10;//yah par ham mod karke last vlaue nikal rhe hai.
    Sum += rem;//last value jo nikali hai use sum me sum kar rhe hai.
    userInput = Math.floor(userInput/10);//user ne jo input diya hai use ham /10 kar rhe hai to jo last value bachegi use devide karne ke liye . me vlaue chali jaygi to use hatane ke liye ham floor kar de rhe hai to es vajaha se last value hat jaygi. or ye loop jabtak > hai 0  se tabtak chalega to hame nhi pata ki kabtak chalega.
}
console.log(Sum);//2345 = 14
