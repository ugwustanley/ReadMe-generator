#!/usr/bin/env node

//The above line is called shebang and is used on linux and UNIX to inform the system what type of script is being called

//RUN THE COMMAND 'npm install -g' and then 'rmg' ON THE TERMINAL TO GET STARTED!!!

// Import modules

 const chalk = require("chalk");
 const boxen = require("boxen");
 const fs = require("fs");
 const readline = require("readline");

 // Declared variables for intro and end messages

 const introtext = chalk.green.bold("This is the beginning of this CLI application");
 const endtext = chalk.green.bold("Congratulation, your README.md file is ready");
 const styling = {
    margin: 1,
    padding:1,
    borderStyle: "round",
    borderColor : "white",
    backgroundColor: "gray",
    textAlign: "center"
}
const mainTxt = boxen(introtext , styling);

// Intro message log

console.log(`${mainTxt}`);
console.log(chalk.yellow("This will walk you through the process of creating a README.md file \n"))

// Prompt for user input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Questions

rl.question(chalk.blue("Project Title: \n") , (one) => {
    rl.question(chalk.blue("Prerequisites: \n" ), (two) => {
        rl.question(chalk.blue("Installing: \n") , (three) =>{
            rl.question(chalk.blue("Running the tests: \n") , (four) =>{
                rl.question(chalk.blue("Deployment: \n") , (five)=>{
                    rl.question(chalk.blue("Contributing: \n") , (six)=>{
                        rl.question(chalk.blue("Versioning: \n") , (seven)=>{
                            rl.question(chalk.blue("License: \n") , (eight)=>{

                                // ReadMe.md content variable

                                const content = `## Project Title \n ${one} 
                                \n### Prerequisitie \n ${two} 
                                \n## Installing \n ${three} 
                                \n## Running the tests \n ${four} 
                                \n## Deployment \n ${five} 
                                \n## Contributing \n ${six}
                                \n## Versioning \n ${seven}
                                \n### License \n ${eight}` 
                                ;

                                // Creation of the README.md file and appending it's content

                                  fs.writeFileSync('README.md',content,(err) =>{
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

    //Ending message log

    console.log(boxen(endtext , styling))
    process.exit(0)
})
