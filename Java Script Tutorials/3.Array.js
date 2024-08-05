//1. Array in js
x=[12,23,34,45,56];
console.log(x,typeof(x));//Type will be Object
x=Array(12,23,34,45,56);//I can mention array like this also
console.log(x,typeof(x));//Type will be Object
//2. Array in js can contain different datatypes in js also any sub array inside it
x=["Red","Green",12,2.3,[1,2,3]];
console.log(x)
//3. Printing the array elements using for in loop and convetional for loop
x=["Red","Green",12,2.3,[1,2,3]];
for(let i of x){
    console.log(i);
}
for(let i in x){
    console.log(x[i]);
}
for(let i=0;i<x.length;i++){
    console.log(x[i]);
}
//4.
x=["Red","Green",12,2.3,[1,2,3]];
console.log(x[0]);
console.log(x[4]);
x[4]=[12,23,34,45,56];
console.log(x)
//5a.
x=["Red","Green",12,2.3,1,2,3];
if(x.includes("Green")){
    console.log("Hello")
}
//5b.
x=["Red","Green",12,2.3,[1,2,3]];
if(x[4].includes(1)){
    console.log("Hello")
}
//6.
x=["Red","Green",12,2.3,1,2,3];
y=prompt(`Array: [${x}]\nEnter The Element to Find`)
for(let i in x){
    if(typeof(x[i])=="number"){
        x[i]=String(x[i]);
    }    
}
if(x.includes(y)){
    console.log(`${y} is Present in The Array`)
}
//7. Find Average of array elements
let x1=[85,97,44,37,76,60]
let s1=0;
for(let i of x1){
    s1=s1+i;
}
let avg=s1/x1.length
console.log("Average is:",avg);
//8a.
let p=[250,645,300,900,50];
console.log("Initial Price:",p);
for(let i in p){
    p[i]=p[i]-(p[i]*10/100);
}
console.log("After 10 % Discount Price:",p);
//8b.
let p1=[250,645,300,900,50];
for(let i in p1){
    console.log("Initial Price of Item: ",Number(i)+1,p1[i]);
    p1[i]=p1[i]-(p1[i]*10/100);
    console.log("After 10 % Discount Price of Item:",Number(i)+1,p1[i]);
}
//9a. Convert The names into Upper Case using for of loop 
let student1=[
    {Student: "Abisekh",roll:1},
    {Student: "Pallabi",roll:2},
    {Student: "Subham",roll:3},
    {Student: "Raktim",roll:4},
];
for(let i of student1){
        i.Student=i.Student.toUpperCase();
}
console.log(student1);
//9b. Convert The names into Upper Case using for in loop 
let student2=[
    {Student: "Abisekh",roll:1},
    {Student: "Pallabi",roll:2},
    {Student: "Subham",roll:3},
    {Student: "Raktim",roll:4},
];
for(let i in student2){
        student2[i].Student=student2[i].Student.toUpperCase();
}
console.log(student2);
//9c. Convert The names into Upper Case using forEach loop
let student3=[
    {Student: "Abisekh",roll:1},
    {Student: "Pallabi",roll:2},
    {Student: "Subham",roll:3},
    {Student: "Raktim",roll:4},
];
student3.forEach((val)=>{val.Student=val.Student.toUpperCase()})
console.log(student3);
//9d. Convert The names into Upper Case using map() method
let student4=[
    {Student: "Abisekh",roll:1},
    {Student: "Pallabi",roll:2},
    {Student: "Subham",roll:3},
    {Student: "Raktim",roll:4},
];
y=student4.map((ele)=>{return{Student: ele.Student.toUpperCase(),roll: ele.roll};})
console.log(y);
//10a. Use of push function in array in js; it pushes element to the last of the array
x=[12,23,34,45,56];
x.push(67);
console.log(x);
//10b. Use of push function in array in js; it pushes element to the last of the array
x=[12,23,34,45,56];
x.push(67,78,89);
console.log(x);
//10c. Use of push function in array in js; it pushes element to the last of the array
x=[12,23,34,45,56];
x.push([67,78,89]);//Pushing an array inside of an array
console.log(x);
//10d. Push elements in an empty array
x=[];
y=prompt("Enter The Size of Thhe Array");
for(let i=0;i<y;i++){
    x.push(i);
}
console.log(x);
//11. Use of pop function in js; it removes the last item of the array
x=[12,23,34,45,56];
deleted_item=x.pop();
console.log(x);//This will print the updated array after deleting
console.log(deleted_item);//This will show the deleted item
//12. Converting an array to a string using tostring() method
x=[12,23,34,45,56];
console.log(x);//This will print the array
console.log(x.toString());//This will print the array as string; this will not typecast the array to string and also it will not do any changes in the array the original array will remain same
console.log(typeof(x));
x=String(x);//Now i am doing typecasting array to string 
console.log(x);//This will print string
console.log(typeof(x));//this will be string
//13a. Sorting Array in Assending order using sort() & toSorted() function this function doesn't returns new array
x=[1,5,3,2,7,4,9,5,8,6];
console.log(x.sort());
console.log(x.toSorted());
//13b. Sort an array in reversed order
x=[1,5,3,2,7,4,9,5,8,6];
x.sort();//sorted in assending order
x.reverse()//sorted in reversed order
console.log(x);
//14a. Reverse an Array using toReversed() function
x=[12,23,34,45,56];
console.log(x.toReversed());
//14b. Reverse an Array using reverse() function
x=[12,23,34,45,56];
console.log(x.reverse());
//15. Concatination of 2 Arrays using concat() function
x=[12,23,34,45,56];
y=[67,78];
x=x.concat(y,89,99);//This function returns a new array, concatinating array y and 89 with array x
console.log(x);
//16. Sorting an array using only loop
x=[1,5,3,2,7,4,9,5,8,6];
for(let i=0;i<x.length;i++){
    for(let j=i+1;j<x.length;j++)
    if(x[i]>x[j]){
        let temp;
        temp=x[j];
        x[j]=x[i];
        x[i]=temp;
    }
}
console.log(x);
//17a. use of unshift() function in the array (opposite of push() function) 
x=["Red","Blue","Green","Black"];
x.unshift("White");//unshift function is used to add elements in the starting of the array
console.log(x);
//17b. use of unshift() function in the array (opposite of push() function)
x=["Red","Blue","Green","Black"];
x.unshift("White","Orange");//Here 2 elements will be added in the starting of the array
console.log(x);
//17c. use of unshift() function in the array (opposite of push() function)
x=["Red","Blue","Green","Black"];
x.unshift(12,23);//Here 2 number datatype elements are added in the starting of the array
console.log(x);
//18. Use of shift() function in the array (opposite of pop() function)
x=["Red","Blue","Green","Black"];
deleted_item=x.shift()//shift function is used to delete the elements from the starting of the array
console.log(x);
console.log(deleted_item);
//19. Use of slice() Function
x=[12,23,34,45,56];
console.log(x.slice(0,));
console.log(x.slice(0,3));
console.log(x.slice(2,4));
//20. Use of slice() function in string using negetive indexing 
x=[12,23,34,45,56];
console.log(x.slice(-5,));//this will slice from -11 index to last index -1
console.log(x.slice(-5,-1));
console.log(x.slice(0,-1));
//21a. Use of splice() function in the case of Replace
//This function can be used to delete elements from the array also add elements in the array
x=[12,23,34,45,56];
x.splice(1,2,"Red","Green");//First argument is the index, second argument is the number of elements to delete from the index I mentioned before, then the rest are the elements to add in the array at the place from where the elements were deleted
//simply I mentioned From the index 1 delete 2 elements from the array and add these 2 elements "Red","Green" at the deleted place; Here I am just replacing the element of index 1 and index 2 with "Red","Green"
console.log(x);
//21b. Deleting 3 elements from the array
x=[12,23,34,45,56];
x.splice(1,3);//deleted 3 elements from index 1 but no elements are added
console.log(x);
//21c. Adding 3 elements from the array
x=[12,23,34,45,56];
x.splice(1,0,"Red","Green","White");//In this case no elements will be deleted thatswhy the second argument is 0 but 3 elements "Red","Green","White" will be added from index 1 in the array
console.log(x);
//21d. 
x=[12,23,34,45,56];
y=x.splice(2);//If I enter only one argument this will be the index which is here 2 and it will delete all elements of the array from the mentioned index 2
console.log(x);//This will print the array after deleting the elements
console.log(y);//This will show the deleted elements
//22.
x=["Apple","Samsung","Microsoft","Uber","Google","IBM","Netflix"];
//Remove the first company from the index
x.shift();//after this array will be this ["Samsung","Microsoft","Uber","Google","IBM","Netflix"]
//Replace Uber with Ola 
x.splice(2,1,"Ola");
//Add Amazon at the end
x.push("Amazon");
console.log(x);
//23a. User Defined array using for loop
x=[];
n=prompt("Enter The Size of The Array");
for(let i=0;i<n;i++){
    ele=prompt(`Enter The Element ${i+1}`);
    x.push(ele);
}
console.log(x);
//23b. User Defined array using while loop
x=[];
n=prompt("Enter The Size of The Array");
let i=0;
while(i<n){
    ele=prompt(`Enter The Element ${i+1}`);
    x.push(ele);
    i++;
}
console.log(x);
//23c. User Defined array using do-while loop
x=[];
n=prompt("Enter The Size of The Array");
let j=0;
do{
    ele=prompt(`Enter The Element ${j+1}`);
    x.push(ele);
    j++;
}
while(j<n);
console.log(x);
//24. Print the elements using for in loop
x=[
    [1,2,3],
    [4,5,6],
    [6,7,8]
];
for(let i in x){
    for(let j in x[i]){
        console.log(x[i][j]);
    }
}
//25. Print the elements using for of loop
x=[
    [1,2,3],
    [4,5,6],
    [6,7,8]
];
for(let i of x){
    for(let j of i){
        console.log(j);
    }
}
//26a. Find largest number in array
x=[12,45,23,22,56,11];
max=x[0];
for(let i=1;i<x.length;i++){
    if(x[i]>max){
        max=x[i];
        console.log(max);
    }
}
console.log(max);
//26b. Find largest number in array using reduce method
x=[12,45,23,22,56,11];
lar=x.reduce((prev,curr)=>{if(prev>curr){return prev;}else{return curr;}});
console.log(lar);
//27a. Find smallest number in array
x=[12,23,34,45,56,1];
small=x[0];
for(let i=1;i<x.length;i++){
    if(x[i]<small){
        small=x[i];
    }
}
//27b. Find smallest number in array using reduce method
x=[12,23,34,45,56,1];
sml=x.reduce((prev,curr)=>{if(prev<curr){return prev;}else{return curr;}});
console.log(sml);
//28a. Calculate the sum of array elements
x=[];
sum=0;
for(let i=0;i<=10;i++){
    x.push(i);
}
for(let j of x){
    sum=sum+j;
}
console.log(sum);
//28b. Calculate the sum of array elements using reduce method
x=[];
for(let i=0;i<=10;i++){
    x.push(i);
}
sum=x.reduce((previous,current)=>{return previous+current;});
console.log(sum);