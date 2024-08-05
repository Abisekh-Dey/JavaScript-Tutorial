//Code to read from .txt file using js code
const fs=require("fs");//fs=file system
fs.readFile("1.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
//Code to write in .txt file using js code
const fs=require("fs");
const dataToWrite="My Name Is Abisekh Dey"
fs.writeFile("2.txt",dataToWrite,"utf8",(err)=>{
    if(err){
        console.log(err);
        return;
    }
});
//Code to append data in .txt file using js code
const fs = require("fs");
const data = "\nMy Name Is Abisekh Dey";

fs.appendFile("1.txt", data, "utf8", (err) => {
    if (err) {
        console.log(err);
        return;
    }
});
