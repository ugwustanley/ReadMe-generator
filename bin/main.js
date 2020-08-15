#!/usr/bin/env node

//the above line is called shebang and is used on linux to inform the system what type of script is being called

//RUN THE COMMAND 'rmg' ON THE TERMINAL TO GET STARTED!!!

// import modules
 const chalk = require("chalk");
 const boxen = require("boxen");
 const fs = require("fs");
 const readline = require("readline");

 // declared variables for intro and end messages
 const introtext = chalk.green.bold("This is the beginning of this CLI application");
 const endtext = chalk.green.bold("Congratulation your ReadMe.md file has been successfully created");
 const styling = {
    margin: 1,
    padding:1,
    borderStyle: "round",
    borderColor : "white",
    backgroundColor: "gray",
    textAlign: "center"
}
const mainTxt = boxen(introtext , styling);

// intro message log
console.log(`${mainTxt}`);
console.log(chalk.yellow("This will lead you through the process of creating a ReadMe.md file \n"))

// prompt for user input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// questions

rl.question(chalk.blue("Project Title: \n") , (one) => {
    rl.question(chalk.blue("Prerequisites: \n" ), (two) => {
        rl.question(chalk.blue("Installing: \n") , (three) =>{
            rl.question(chalk.blue("Running the tests: \n") , (four) =>{
                rl.question(chalk.blue("Deployment: \n") , (five)=>{
                    rl.question(chalk.blue("Contributing: \n") , (six)=>{
                        rl.question(chalk.blue("Versioning: \n") , (seven)=>{
                            rl.question(chalk.blue("License: \n") , (eight)=>{

                                // this is the readMe content variable
                                const content = `**#Project Title** \n ${one} 
                                \n**#Prerequisitie** \n ${two} 
                                \n**#Installing** \n ${three} 
                                \n**#Running the tests** \n ${four} 
                                \n**#Deployment** \n ${five} 
                                \n**#Contributing** \n ${six}
                                \n**#Versioning** \n ${seven}
                                \n**#License** \n ${eight}` 
                                ;

                                  fs.writeFileSync('ReadMe.md',content,(err) =>{
                                      if(err){
                                            console.log(err)
                                             }
                                       } )
                                  rl.close();
                            })
                        })
                    })
                })
            })
        })
    })
})

rl.on("close" , function(){
    //end message log
    console.log(boxen(endtext , styling))
    process.exit(0)
})
