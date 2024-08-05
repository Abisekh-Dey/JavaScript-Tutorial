//1. Window object or browser object (All this can be done in browser only)
console.log("Abisekh Dey"); //This is a window object to print any thing in the console
window.console.log("Abisekh Dey"); //It's because console.log() is a method of window object so that I can write like this window.console.log() this will do the same thing
alert("This is an Alert!"); //This is a window object to create an alert
window.alert("This is an Alert!"); //I can write the alert like this also because it is a method of window object
x=prompt("Enter Name"); //This is a window object to take input from the user and the input will be stored in the variable x in string datatype for further use
console.log(x);
x=window.prompt("Enter Name"); //I can write the prompt like this also because it is a method of window object
window.console.log(x);
//We can check all window object by using below command
console.log(window);
window.console.log(window);
// We can see the HTML file by which my java script file is attached by using below command
//console.log(document) is used to print the HTML file only or the HTML code 
console.log(window.document);//document is a method of window to see the HTML file which is attached with js file in the console window 
console.log(document);//document is a method of window to see the HTML file which is attached with js file in the console window
console.log(document.body);//This will print the body of the HTML file which is attached with js file
console.log(document.head);//This will print the head of the HTML file which is attached with js file
//console.dir(document) is used to print the property of HTML file
console.dir(window.document);//console.dir is used to show the property of document object/method
console.dir(document);//console.dir is used to show the property of document object/method
console.dir(document.body);//To access the property of body of HTML file which is attached with js file
console.dir(document.head);//To access the property of head of HTML file which is attached with js file