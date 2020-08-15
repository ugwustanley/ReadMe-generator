#!/usr/bin/env node

//the above line is called shebang and is used on linux to inform the system what type of script is being called
 const chalk = require("chalk");
 const boxen = require("boxen");
 const prompt = require("prompt")
 const fs = require("fs")
 const formatedTxt = chalk.green.bold(`hello, please fill out the inputs accordingly`);
 const styling = {
     margin: 1,
     padding:1,
     fontSize:'50px',
     borderStyle: "round",
     borderColor : "white",
     backgroundColor: "gray"
 }
 const mainTxt = boxen( formatedTxt , styling);
console.log(`${mainTxt}`);


// this code requests for a user input with prompt modules 
const username = [chalk.green.bold(`username`)];
const passward = [chalk.green.bold(`passward`)];
const email = [chalk.green.bold(`email`)];
console.log(email.value)
const questions = [
    {
    name :'username'
},
{
    name:'passward',
    hidden: true
},
{
    name:'email',
    hidden:false,
}
];
prompt.start();
prompt.get(questions, function(err,result){
    if(err){
        console.log(err);
        return 1;
    }else{
        console.log(`data recieved: \n username:${result.username} \n passward:${result.passward} \n email:${result.email}`);

        fs.writeFile('Readme.md',`#data recieved: \n #username:${result.username} \n #passward:${result.passward} \n email:${result.email}`,(err) =>{
            if(err){
                console.log(err)
            }
          } )
    }

})
