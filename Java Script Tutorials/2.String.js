//Strings are not mutable in js
//1. String Can be written in "" or in '' or ``in js 
//String inside of `` are known as string interpolation in js 
x="Abisekh";
y='Dey';
console.log(x,y);
console.log(`${x}${y}`)//String can be written like this also it is similar like f string in python where I can print Value of any variable inside of the string; it returns a string
//2. Printing Length of string
x="Abisekh";
console.log(x.length);//in python i can do len(x)
//3. Print first any 3 indexes of a given string
x="Abisekh";
console.log(x[0],x[3],x[6],x[7]);//the iteration occurs in string from 0 to (lenth of the string -1); here length of the string is 7 ;so the string will iterate over 0 index to 6 index if I Try to print any element out of that index it will print undefined thatswhy x[7] will print undefined
//4.
let obj={
    item:"Mobile",
    price:20000
};
console.log(`Item is ${obj.item} & Price is ${obj.price}`);
//5. Use of \n,\t and \r(Carriage return) These Are all escape characters
console.log("Abisekh\nDey");
console.log("Abisekh\tDey");
console.log("Abisekh\rDey");
console.log(("Abisekh\nDey").length);
console.log(("Abisekh\tDey").length);
console.log(("Abisekh\rDey").length);
//6. Convert lower case to upper case character using toUpperCase() function; this function creates a new string
x="abisekh";
console.log(x.toUpperCase());
y="Abisekh";
console.log(y.toUpperCase());
//7. Convert lower case to lower case character using toLowerCase() function; this function creates a new string
x="ABISEKH";
console.log(x.toLowerCase());
y="Abisekh";
console.log(y.toLowerCase());
//8. Use of trim() function to remove trailing whitespace part of any string
x="     Abisekh     ";
console.log(x);
console.log(x.trim());
//9. Use of slice() function in string
x="Abisekh Dey";
console.log(x.slice(0,));//this will slice from 0 index to last index
console.log(x.slice(0,11));
console.log(x.slice(2,8));
//10. Use of slice() function in string using negetive indexing 
x="Abisekh Dey";
console.log(x.slice(-11,));//this will slice from -11 index to last index -1
console.log(x.slice(-11,-1));
console.log(x.slice(0,-1));
//11a. Concatination in Js str1.concat(str2)
x="Abisekh";
y="Dey";
x=x.concat(" ");//added an empty string to add a space before surname
x=x.concat(y);
console.log(x);
//11b. Concatination only using +
x="Abisekh";
y="Dey";
console.log(x+" "+y);
//12. Replace function in js string.replace("old string","new string")
x="Abisekh Dey Abisekh";
x=x.replace("Abisekh","Pallabi");//This will replace Abisekh Which is comming at first in order not all the Abisekh
console.log(x);
x=x.replaceAll("Abisekh","Pallabi");//To Replace All Abisekh With the Pallabi we use replaceAll() function
console.log(x);
//13. Check any Desired Character in present in the string or not; if present returns true; false otherwie
x="Abisekh";
console.log(x.includes("e"));
console.log(x.includes("sek"));
console.log(x.includes("eh"));
//14. Use of charAt function str.charAt(index); it finds the character at the given index
x="Abisekh";
console.log(x.charAt(3));
//15. Predict Output
x="Abisekh";
y=123;
console.log(x+y);//Here both x and y is different datatype but in js when we concatinate a number datatype with a string it convers the number datatype into string first then it concatinates both strings; so it will not generate any error but in python it is not applicable and it will raise type error
//16a. Use of Split function
x="I am Abisekh";
x=x.split(" ");
console.log(x);
//16b. Use of Split function with maxsplit 2
x="I-live-in-India";
y=x.split("-",2);
console.log(y);//Here the separator is "-" and Maxsplit is 2; after 2 spliting the rest part will be omitted
//16c. Assignment afetr Split
x="Abisekh Dey";
[a,b]=x.split(" ");//Assigning the value after spliting
console.log(a,b);
//17. Converting the first character of name in upper case
let x = "abisekh Dey";
let y = x.charAt(0).toUpperCase() + x.slice(1,);//x.slice(1,) it will slice the string x from 1 index and then concatinate it
console.log(y);
// z=x[0].toUpperCase()+x.slice(1,);//This is also correct
// console.log(z);
//18. Creation of an user name
let n=prompt("Enter Full Name");
n=n.toLowerCase();
[a,b]=n.split(" ");
n=a+b;
let user_name="@"+n+n.length;
console.log(user_name);
//19. Use of startsWith() function
x="Abisekh";
if (x.startsWith("A")){
    console.log("Hello");
}
//20. Use of endsWith() function
x="Abisekh";
if (x.endsWith("h")){
    console.log("Hello");
}
//21. Use of indexOf() function
x="Abisekh Dey";
console.log(x.indexOf("i"));
console.log(x.indexOf("sek"));
console.log(x.indexOf(" "));
console.log(x.indexOf("D"));
//22. According to Ascii Table finding the order of a given Character
let c = "a";
let code = c.charCodeAt(0);//In this example, charCodeAt(0) returns the Unicode code point of the character at index 0 in the string c, which corresponds to the character "a". The Unicode code point for "a" is 97, so code will be 97.
console.log(code);
//23. According to Ascii Table finding the Character of a given order
let d = 97;
let character = String.fromCharCode(d);//In this example, String.fromCharCode(c) converts the Unicode code point 97 into its corresponding character, which is "a", and stores it in the variable character. Then, it logs "a" to the console.
console.log(character);
//24a. Create a code where user will enter an alphabet but he can see the very next alphabet from the alphabet he entered
ele=prompt("Enter The Alphabet");
if(ele.length==1 && typeof(ele)=="string"){
    ele=ele.toLowerCase();
    if(ele=="z"){
        ele="a";
        console.log(`You Have Entered: ${ele}`);
    }
    else{
        ele=ele.charCodeAt(0)+1;
        ele=String.fromCharCode(ele);
        console.log(`You Have Entered: ${ele}`);
    }
}
//24b. Create a code where user will enter an alphabet but he can see the very next alphabet from the alphabet he entered
ele=prompt("Enter The Alphabet");
ele=ele.toLowerCase();
l=[];
for(let i=97;i<=122;i++){
    l.push(String.fromCharCode(i));
}
for(let i in l){
    i=Number(i);
    if(l[i]==ele){
        console.log("You Have Entered:",l[i+1]);
        break;
    }
    else if(ele=="z"){
        console.log("You Have Entered:",l[0]);
        break;  
    }
    else if(l.includes(ele)==false){
        console.log("Invalid input. Please enter a valid alphabet.");
        break;
    }
}