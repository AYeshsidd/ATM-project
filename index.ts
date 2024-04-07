#! usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;

let pin = 7070;

let pincode = await inquirer.prompt([
  { name: "ayesh",
     message: "Enter your PIN", 
     type: "number" } 
   
    ]);
if (pincode.ayesh === pin) {console.log("Account sucessfully login");

  
    let operator = await inquirer.prompt([
      {name: "action",
      message: "please select one of operator",
      type: "list",
      choices: ["checking Balance", "withdraw", "deposit"] }
    
  ]);

  if (operator.action === "withdraw") {
    let amountW = await inquirer.prompt([
      { name: "withdrawnAmount",
        message: "Enter the withdrawn amount",
        type: "number"}
     ]);
if (amountW.withdrawnAmount < myBalance) {
      myBalance -= amountW.withdrawnAmount;
      
      console.log("your reamining balance is" + " " + myBalance);}
    
      else {console.log("insufficnt Fudns");}

    } 
  
  
  else if (operator.action === "checking Balance") 
  {console.log(myBalance);}
   
  
  else if (operator.action === "deposit") {
    let amountD = await inquirer.prompt([
      { name: "depositAmount",
        message: "amount to deposit is ?",
        type: "number" }
    
    ]);

    myBalance += amountD.depositAmount;

    console.log("now your balance is" + " " + myBalance);
 
} // Last else-if closed here 

} // very First if closed here

    else {console.log("incorrect pin code");}
