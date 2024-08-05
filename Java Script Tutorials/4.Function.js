//1.Function in js
function x(){
    console.log("Name is: Abisekh Dey");
}
x();
//2
const x={
    hello(){//I can not make this kind of function outside of the object
        console.log("Hello");
    }
}
x.hello()
//2.Function in js (Call by value)
function x(name){
    console.log("Name is:",name);
}
a="Abisekh Dey";
x(a);
//3a. Fuction to get sum of 2 numbers
function x(x,y){
    x=Number(x);
    y=Number(y);
    console.log("Sum is:",x+y);
}
a=prompt("Enter Number 1");
b=prompt("Enter Number 2");
x(a,b);
//3b. Fuction to get sum of 2 numbers
function x(x,y){
    x=Number(x);
    y=Number(y);
    return x+y;
}
a=prompt("Enter Number 1");
b=prompt("Enter Number 2");
console.log("Sum is:",x(a,b));
//4. Arraow => Function of 2 number addition
const Sum=(x,y)=>{
    x=Number(x);
    y=Number(y);
    return x+y;
};
a=prompt("Enter Number 1");
b=prompt("Enter Number 2");
console.log("Sum is:",Sum(a,b));
console.log(typeof(Sum));//This will show function
//5a. Multiplication of 2 numbers
function Mul(x,y){
    x=Number(x);
    y=Number(y);
    return x*y;
};
a=prompt("Enter Number 1");
b=prompt("Enter Number 2");
console.log("Multiplication is:",Mul(a,b));
//5b. Arrow => function multiplication
const mul=(x,y)=>{
    x=Number(x);
    y=Number(y);
    return x*y;
};
a=prompt("Enter Number 1");
b=prompt("Enter Number 2");
console.log("Multiplication is:",mul(a,b));
//6a. Function to find vowels in the string
function vowel(x){
    let count=0;
    vowels=["a","e","i","o","u"];
    x=x.toLowerCase();
    for(let i of x){
        for(let j of vowels){
            if(i==j){
                count++;
            }
        }
    }
    return count;
}
str=prompt("Enter The Sring");
console.log(vowel(str),"Number of Vowels Present in",str);
//6b. Function to find vowels in the string using arrow => function
const Vowel=(x)=>{
    let count=0;
    x=x.toLowerCase();
    for(let i of x){
        if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
            count++
        }
    }
    return count;
}
str=prompt("Enter The Sring");
console.log(Vowel(str),"Number of Vowels Present in",str);
//7a. Create an array and a funtion where the each elements of the array is passed into the function as parameter  
x=[1,2,3,4,5];
function a(b){//getting the parameter b from array x 
    console.log(b);
}
for(let i of x){
    a(i);//i is passed into the function a as argument; i is the element of array x 
}
//7b. Create an array and a funtion where the each elements of the array is passed into the function as parameter  
//(use forEach() loop which can only be used in array in js)
//forEach() function or forEach() methods can be said as higher order function or higher order methods; the function that uses another function as parameter is known as higher order function/methods; or we can say the functions which uses any call back function are known as higher order function/methods
x=[1,2,3,4,5];
x.forEach(function printval(val){//in forEach loop i can pass a function; in my case the function is printval(); the printval(val) function has a parameter val 
    //the parameter val is passed by forEach loop into function printval
    //forEach() is the method of array; in my case the forEach loop is the method of array x and forEach loop recieves element from array x and sends the element to the function printval() as parameter
    console.log(val)
})
//7c. Create an array and a funtion where the each elements of the array is passed into the function as parameter  
//(use forEach() loop which can only be used in array in js)
//forEach() function or forEach() methods can be said as higher order function or higher order methods; the function that uses another function as parameter is known as higher order function/methods; or we can say the functions which uses any call back function are known as higher order function/methods
//In JavaScript, when we use forEach() method, we're providing a function as an argument to forEach(). This function is a callback function, meaning it's a function that gets called by another function (in this case, forEach()).
//in this code i am doing the same operation as code 7b
x = [1, 2, 3, 4, 5];
function printvalue(val) {
    console.log(val);
}
x.forEach(printvalue);
//7d. Create an array and a funtion where the each elements of the array is passed into the function as parameter  
//(use forEach() loop which can only be used in array in js)
//forEach() function or forEach() methods can be said as higher order function or higher order methods; the function that uses another function as parameter is known as higher order function/methods; or we can say the functions which uses any call back function are known as higher order function/methods
x=[1,2,3,4,5];
x.forEach(function (val){// here i didn't mentioned the function name because I have directly passed the function in the forEach loop this will not generate any issue
    //because it's not compulsory to name the function because we're directly passing the function as an argument to forEach()
    console.log(val);
})
//7d. Create an array and a funtion where the each elements of the array is passed into the function as parameter  
//(use forEach() loop which can only be used in array in js)
//forEach() function or forEach() methods can be said as higher order function or higher order methods; the function that uses another function as parameter is known as higher order function/methods; or we can say the functions which uses any call back function are known as higher order function/methods
x=[1,2,3,4,5];
x.forEach((val)=>{//Here i have directly passed an arrow function and because of i am passing the function directly in the forEach loop so that it's not compulsory to name the function
    console.log(val);
})
//7e. Print the elements into uppercase
x=["red","green","blue","orange","white"];
x.forEach((ele)=>{console.log(ele.toUpperCase())});
//7f. Convert the elements into uppercase
x=["red","green","blue","orange","white"];
x.forEach((ele,index)=>{x[index]=ele.toUpperCase()});
console.log(x);
//8a. Parameters of forEach() loop (First is array element, second is array index and last is the array itself)
//forEach() function or forEach() methods can be said as higher order function or higher order methods; the function that uses another function as parameter is known as higher order function/methods; or we can say the functions which uses any call back function are known as higher order function/methods
x=[1,2,3,4,5];
x.forEach((element_of_array,array_index,x)=>{console.log(element_of_array,array_index,x)})
//8b. Parameters of forEach() loop (First is array element, second is array index and last is the array itself)
//This is also a way to write for each loop
x=[12,23,34,45,56];
const printnum=(ele,index,array)=>{
    console.log(ele,index,array);
}
x.forEach(printnum);
//8c. Parameters of forEach() loop (First is array element, second is array index and last is the array itself)
//This is also a way to write for each loop
x=[12,23,34,45,56];
function printNum(ele,index,array){
    console.log(ele,index,array);
}
x.forEach(printNum);
//9a. Print the square of array elements using forEach loop
x=[1,2,3,4,5];
x.forEach((ele)=>{console.log(`Square of ${ele} will be:`,ele**2);})
//9b. Print the square of array elements using for in loop
x=[1,2,3,4,5];
for(let i in x){
    console.log(`Square of ${x[i]} will be:`,x[i]**2);
}
//9c. Print the square of array elements using for of loop
x=[1,2,3,4,5];
for(let i of x){
    console.log(`Square of ${i} will be:`,i**2);
}
//9d. Print the square of array elements using for loop
x=[1,2,3,4,5];
for(let i=0;i<x.length;i++){
    console.log(`Square of ${x[i]} will be:`,x[i]**2);
}
//10a. using map() method in array 
//map() method is similar totaly as forEach() loop the only difference is this method returns a new array
x=[12,23,34,45,56];
x.map((ele)=>{console.log(ele)});//this will print the array elements only 
//10b. using map() method in array 
//map() method is similar totaly as forEach() loop the only difference is this method returns a new array
x=[12,23,34,45,56];
y=x.map((ele,index,array)=>{console.log(ele,index,array);return ele;});//This will print the array elements, array index and array itself also this will copy the elements of array x into array y
console.log(y);//This new array y is created by map method with the elements of array x
//11a. Print the square of array elements using map() method
x=[1,2,3,4,5];
y=x.map((ele)=>{return ele**2;});
console.log(y);//This new array y is created by map method with the elements of array x by squaring them
//11b. Predict output
x=[1,2,3,4,5];
y=x.map((ele)=>{return ele%2==0;});//This Condition is checking the element of array x is even or not but because of the == is a comparison operator and it returns true or false; in my case if the element is even then it will return true if odd it will return false;
//And that true or false will be copied into array y; so the elements of the array will be boolean type
console.log(y);
for(let i of y){
    console.log(typeof(i));//this will return boolean type; if we want to see the only the even numbers or only the odd numbers in the array y rather than only the true false we have to use filter method; which is shown in code 12 for storing only the even numbers
}
//12a. Use of Filter() Method Copy the even number of an array to another array
//filter method is used to copy elements from one array to another array based on some condition in this case the condition is if the elements of array x is even then it will be copied in array y
x=[1,2,3,4,5];
y=x.filter((ele)=>{return ele%2==0;});//The elemnts of array x will be copied in array y only if they are even numbers otherwise the odd numbers will not be copied in array y
console.log(y);
//12b. Copy the even number of an array to another array use for of loop
x=[1,2,3,4,5];
y=[];
for(let i of x){
    if(i%2==0){
        y.push(i);
    }
}
console.log(y);
//12c. Copy the even number of an array to another array use for in loop
x=[1,2,3,4,5];
y=[];
for(let i in x){
    if(x[i]%2==0){
        y.push(x[i]);
    }
}
console.log(y);
//12d. Copy the even number of an array to another array use for loop
x=[1,2,3,4,5];
y=[];
for(let i=0;i<x.length;i++){
    if(x[i]%2==0){
        y.push(x[i]);
    }
}
console.log(y);
//13. Use of Filter() Method Copy the number gretter than 3 of an array to another array and sort the elements in assending order if the new array is not sorted
//filter method is used to copy elements from one array to another array based 
x=[1,5,2,7,9,3,4];
y=x.filter((ele)=>{return ele>3;});
y=y.sort()
console.log(y);
//14. Calculate the sum of array elements using reduce method
x=[];
for(let i=0;i<=10;i++){
    x.push(i);
}
sum=x.reduce((previous,current)=>{return previous+current;});
console.log(sum);
//15. Find largest number in array using reduce method
x=[12,45,23,22,56,11];
lar=x.reduce((prev,curr)=>{if(prev>curr){return prev;}else{return curr;}});
console.log(lar);
//16. Find smallest number in array using reduce method
x=[12,23,34,45,56,1];
sml=x.reduce((prev,curr)=>{if(prev<curr){return prev;}else{return curr;}});
console.log(sml);
//17. find 90+ marks in the marks array
marks=[45,65,56,78,91,95];
x=marks.filter((val)=>{return val>90;});
console.log(x);
//18. print the sum of elements of an user defined array using reduce method
n=prompt("Enter The size of the array");
n=Number(n);
arr=[];
for(let i=0;i<=n;i++){
    arr.push(i);
}
summ=arr.reduce((prev,curr)=>{return prev+curr});
console.log(`Sum of ${n} numbers will be:`,summ);
//19a. print the product of elements of an user defined array (where the array containing first n numbers) using reduce method (this can be called as Factorial of n numbers)
n=prompt("Enter The size of the array");
n=Number(n);
arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
multiplication=arr.reduce((prev,curr)=>{return prev*curr});
console.log(`Product of ${n} numbers will be:`,multiplication);
//19b. Function To Find Factorial of Any Number
function fact(num){
    num=Number(num);
    f=1;
    for(let i=1;i<=num;i++){
        f=f*i;
    }
    return f;
}
x=prompt("Enter Number to Find Factorial");
console.log(`Factorial of ${x} numbers will be:`,fact(x));
//19c. Function To Find Factorial of Any Number using arrow function
const facto=(num)=>{
    num=Number(num);
    let f=1;
    for(let i=1;i<=num;i++){
        f=f*i;
    }
    return f;
}
x=prompt("Enter Number to Find Factorial");
console.log(`Factorial of ${x} numbers will be:`,facto(x));
//20. Find product of an user defined array
function func(){
    arr=[];
    n=prompt("Enter The Size of The Array");
    for(let i=0;i<n;i++){
        x=prompt(`Enter Element of array[${i}]`);
        x=Number(x);
        arr.push(x);
    }
    f=1;
    for(let i of arr){
        f=f*i
    }
    return f;
}
console.log("Multiplication of Array elements will be:",func());
//21. Find sum of an user defined array
function fun(){
    arr=[];
    n=prompt("Enter The Size of The Array");
    for(let i=0;i<n;i++){
        x=prompt(`Enter Element of array[${i}]`);
        x=Number(x);
        arr.push(x);
    }
    // let s=0
    // for(let i of arr){//This is also correct
    //     s=s+i;
    // }
    // return s;
    let s1=arr.reduce((prev,curr)=>{return prev+curr;});//I can do this also
    return s1;
}
console.log("Sum of Array elements will be:",fun());
//22. Find average of an user defined array using reduce method
function funt(){
    arr=[];
    n=prompt("Enter The Size of The Array");
    for(let i=0;i<n;i++){
        x=prompt(`Enter Element of array[${i}]`);
        x=Number(x);
        arr.push(x);
    }
    let s2=arr.reduce((prev,curr)=>{return prev+curr;});//I can do this also
    return s2/arr.length;
}
console.log("Average of Array elements will be:",funt());
//23.Add 3 dots if the length of name is greater than 5
arr=[];
let sort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>5){
            arr[i]=arr[i].slice(0,5)+"...";
        }
    }
}
for(let i=0;i<5;i++){
    n=prompt("Enter The Name: ");
    arr.push(n);
}
sort(arr);
console.log(arr);