//1. Printing Statement in Js
console.log("Abisekh Dey\nIt's My first javascript code");
//2. Addition of 2 numbers in js
x=2;
y=8;
console.log("Sum is:",x+y);
//3. Operators in js:
//lenth function can be used only in string or arrays etc if we use this in any number,boolean datatype it will show undefined
//in js both "integer" and "float" variables are considered as "number" datatype
a=5;//int
console.log(a,typeof a,a.length);
b=5.3;//float
console.log(b,typeof b,b.length);
c=true;//boolian
console.log(c,typeof c,c.length);
d="Abisekh";//string
console.log(d,typeof d,d.length);
e="a";//string 
console.log(e,typeof e,e.length);
f=BigInt(1);//bigint datatype
console.log(f,typeof f,f.length);
g=Symbol("abisekh");//symbol datatype
console.log(g,typeof g,g.length);
let h;//undefined datatype
console.log(h,typeof h);
i=null;//null datatype
console.log(i,typeof i);//in this case the typeof function will show only object
//4. Variable type in js 
//use of var (in this case the variable can be updated and can be re asssigned re-declaration can be done here)
var x=5;
console.log(x);
var x=6;
console.log(x);//in this case it will take the most recent value of x
x=7;
console.log(x);//in this case it will take the most recent value of x
//use of let (in this case the variable can be re-assigned but re-declaration is not allowed here)
let x=5;
console.log(x);
x=6;//re-assigned the value of x
console.log(x);
let x=7;
console.log(x); //this will give error because of re-declaration
//use of const (in this case the variable can not be re-assigned and re-declared; it only takes the constant value)
const x=5;
console.log(x);
x=6;//re-assigned the value of x
console.log(x);//this will give error because of re-assignment
let x=7;
console.log(x); //this will give error because of re-declaration
//5. Type casting in js
var a=5;
a=String(a);
console.log(a,typeof a);
let b="5.0";
b=Number(b);
console.log(b,typeof b);
const c=5;
c=String(c);
console.log(c);//this will give error because of re-assignment in previous line
let d="Red";
d=Number(d);
console.log(d,typeof(d));//This will not generate any number 
//6.
x = 4;
console.log(`x is: ${x}`);
//7a. Object datatype similar as dicttionary in python
const student=X={//Storing the X object into student
    name:"Abisekh",
    roll:17632322013,
    stream:"ECE",
}
console.log(student,typeof student,Object.keys(student),Object.values(student),X.name,student.roll,student.stream,student["name"],student["roll"],student["stream"])
const len1 =Object.keys(student)
console.log(len1.length)
//7b. Object datatype
const number={
    "Abisekh Dey" : 8617244589,
    "Pallabi Mondal" : 6289731215,
    "Amita Dey" : 9748188514,
}
number["Babla Dey"]=7003105772//adding new key
number["Abisekh Dey"]=123;
number["Pallabi Mondal"]=456;
number["Amita Dey"]=789;
console.log(number,typeof number,Object.keys(number),Object.values(number),number["Abisekh Dey"],number["Pallabi Mondal"],number["Amita Dey"])
const len2=Object.keys(number)
console.log(len2.length)
const moreNumbers = {//adding new object
    "a": 123,
    "b": "abc",
    "c": true
};
// Merge the two objects
Object.assign(number, moreNumbers);//when we merge objects using Object.assign(), the keys are not implicitly converted to strings.thatswhy the keys of the moreNumber object will not be shown in string

console.log(number,typeof number["a"],typeof number["b"],typeof number["c"]);
//8. Operator in js just same as python
a=50;
b=2;
console.log("a+b",a+b);// addition + 
console.log("a-b",a-b);// Subtraction -
console.log("a*b",a*b);// Multiplication *
console.log("a/b",a/b);// Division /
console.log("a**b",a**b);// Exponent **
console.log("a%b",a%b);// Reminder %
//9a. post increment
a=2;
console.log("a++",a++);//Post increment
console.log("a",a);
//9b. Pre increment
a=2;
console.log("++a",++a);
console.log("a",a);
//9c. post increment
a=2;
console.log("a--",a--);//Post increment
console.log("a",a);
//9d. Pre increment
a=2;
console.log("--a",--a);
console.log("a",a);
//10a.
a=2;
console.log("a+=",a+=2);
//10b.
a=2;
console.log("a-=",a-=2);
//10c.
a=2;
console.log("a*=",a*=2);
//10d.
a=2;
console.log("a/=",a/=2);
//11. Floor division
a=5;
b=Math.floor(a/2)//It only takes the integer part and omits the floating point part
console.log("Floor Division",b)
//12. Predict Output
a=2
b="2"
console.log(a==b)//it will be true because in js when i am comparing 2 values are equal or not if one of the value is in string then js compiler make the string into a number(int) first then it compares both if both values are same then return true else false
//13. Predict Output
a=2
b="2"
console.log(a===b)//This will return false because both are in different datatypes
console.log(a!==b)//This will return True because both are in different datatypes
//14. Logical Operator in js
a=20;
b=30;
c=41;
console.log(a%2==0 && b%2==0)//Logical And
console.log(a%2==0 || c%2==0)//Logical Or
console.log(!(a%2==0))//LOgical Not
//15a. Conditional Statement in js
let a=2;
if (a==2){
    console.log("Hello");
}
else{
    console.log("Bye");
}
//15b. Conditional Statement in js
let a="2";
if (a==="2"){
    console.log("Hello");
}
else{
    console.log("Bye");
}
//15c. Conditional Statement in js
let a=2;
if (a==2){
    console.log("Hello");
}
else if(a==5){
    console.log("Hii");
}
else{
    console.log("Bye");
}
//15d. Conditional Statement in js
let a=2;
if (a==2) console.log("Hello");

else if(a==5) console.log("Hii");

else console.log("Bye");
//Ternary Operator
let a=2;
a==2? console.log("Hello"):console.log("Bye");
//16. Taking Input from the user This only work in the browser not in node js environment
let x=prompt("Enter Your Name");
console.log(x);
//17. Take a number from the user and check if the number is divisible by 5 or not
let x=prompt("Enter The Number");
if(x%5==0){
    console.log(x,"is Divisible by 5");
}
else{
    console.log(x,"is not Divisible by 5");
}
//18. Generating Grade based on Number
let num=prompt("Enter Your Number:");
let grade;
if(num>=90 && num<=100){
    grade="O";
}
else if(num>=80 && num<=89){
    grade="E";
}
else if(num>=70 && num<=79){
    grade="A";
}
else if(num>=60 && num<=69){
    grade="B";
}
else if(num>=50 && num<=59){
    grade="C";
}
else if(num>=40 && num<=49){
    grade="D";
}
else{
    grade="F";
}
console.log("According to Your Number Your Grade is:",grade);
//19. Implementaion of for Loop in js
for(let i=0;i<5;i++){
    console.log("Abisekh Dey");
}
//20. Implementaion of While Loop in Js
let i=0;
while(i<5){
    console.log("Abisekh Dey");
    i++;
}
//21. Implementaion of do-While Loop in Js
let j=0;
do{
    console.log("Abisekh Dey");
    j++;
}
while(j<5);
//22a. Sum of first n numbers in js using for loop
let n=prompt("Enter The Number:");
let sum=0;
for(let i=0;i<=n;i++){
    sum=sum+i;
}
console.log(`Sum of first ${n} numbers will be`,sum);
//22b. Sum of first n numbers in js using while loop
let n1=prompt("Enter The Number:");
let sum1=0;
let x=0;
while(x<=n1){
    sum1=sum1+x;
    x++;
}
console.log(`Sum of first ${n1} numbers will be`,sum1);
//23a. Predict Output
for(i=0;i<5;i++){
    console.log(i);
}
console.log(i);//it will print 5 beacuse when the value of i will be 4 inside of the loop due to the condition i<5 so in the next iteration the value of i can't be equal to 5 then the loop will end and then it will print the final value of i which is now 5
//23b. Predict Output
for(let i=0;i<5;i++){
    console.log(i);
}
console.log(i);//this will generate error because I didn't defined the variable i outside the loop
//23c. Predict Output
let k;
for(k=0;k<5;k++){
    console.log(k);
}
console.log(k);//now it will not generate any error because i have defined the variable i outside of the loop
//23c. Predict Output
let l=0;
for(l;l<5;l++){
    console.log(l);
}
console.log(l);
//24. Use of (for of loop) same as Python code no:101 in 1.py
let x="Abisekh";
for (let i of x){
    console.log(i);
}
if(x.includes("A")){//it will check if A is present in the string or not
    console.log("Present")
}
//25. Print Length of any string using loop and using length function in js
let x="Abisekh";
let len=0;
for (let i of x){
    console.log(i);
    len+=1;
}
console.log(len)
console.log(x.length);
//26a. Use of (for in loop)
let stu={
    name:"Abisekh",
    roll:17632322013,
    stream:"ECE"
};
for (let i in stu){
    console.log(i);//This will print the keys
    console.log(stu[i]);//This will print the values
}
if (stu.hasOwnProperty("name")){//This will check if name key is Present in the object or not
    console.log("Present")
}
//26b. Use of (for in loop)
let stu1={
    name:"Abisekh",
    roll:17632322013,
    stream:"ECE"
};
for (let i in stu1){
    console.log("Key:",i,"Value:",stu1[i]);
}
//27. Print the even numbers from 0 to 100
let count=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
        count++;
    }
}
console.log(`${count} Even Numbers Present between 0 to 100`);
//28a. Number Guessing Game (correct number is 25) code will excecute until the user gusses correct value
let val=25;
let userin=prompt("Guess The Number");
if (userin!=val){
    for(let i=0;userin!=val;i++){
        userin=prompt("Sorry Wrong Guess! Guess The Number Again");
        if(userin!=val){
            continue;
        }
        else{
            console.log("Congratulations You Gussed The Correct Number",val);
            break;
        }
    }
}
else{
    console.log("Congratulations You Gussed The Correct Number",val);
}
//28b. Number Guessing Game (correct number is 25) code will excecute until the user gusses correct value
let value=25;
let uin=prompt("Guess The Number");
while(uin!=value){
    uin=prompt("Sorry Wrong Guess! Guess The Number Again");
}
console.log("Congratulations You Gussed The Correct Number",val);
//29. Infinite loop
for(let i=0;i>=0;i++){//This will never stop
    console.log(i)
}