#! /usr/bin/env

// This is a small ATM machine software project:
import { log } from 'console';
import inquirer from 'inquirer'

let answers = await inquirer.prompt(
    [   
        {
            message:"\nEnter Your Name: ",
            type:'string',
            name:'userName',
        },
        {
            message:`\nEnter Your Pin Code To Varification.`,
            type:'number',
            name:'pin',
        },
] )


// These are all data to use 
 let accountDetails = {
    userName:answers.userName,
    faterName:"Azeem Qurashi",
    accountNo:5786,
    currentBalance:5000,
    CNIC_no:'134242-24424-138',
    phone:'0325-3478387',
    accountBranch:'Branch No-3 Shah Faisal Karachi.'
}


// These are all conditons
if(answers.pin == accountDetails.accountNo){

    console.log(`\n${answers.userName} your account has varified successfully.`);
     
 let differentOptions = await inquirer.prompt(
    [
        {
            message:"Now what do you want to do ?",
            type:'list',
            name:'options',
            choices:["Withdraw","Check Balance","Deposit","Account Details"]  
        }
    ]
 )
 if(differentOptions.options == "Withdraw" ){
    let withdrawOption = await inquirer.prompt(
        [
            {
                message:"\nHow much do you want to withdraw.",
                type:'number',
                name:'withdrawMoney',
            }
        ]
     )
     if(withdrawOption.withdrawMoney > accountDetails.currentBalance){
        console.log(`Your current Balace is less from your enter amount.`);
     }
     else{
        console.log(`\n${answers.userName} Now your current balance is ${accountDetails.currentBalance - withdrawOption.withdrawMoney}`);
     }
 }
 else if(differentOptions.options == "Deposit" ){
  let  depositOption = await inquirer.prompt(
        [
            {
                message:"\nHow much do you want to deposit.",
                type:'number',
                name:'depositMoney',
            }
        ]
     )
console.log(`\n${answers.userName} Now your current balance is ${accountDetails.currentBalance + depositOption.depositMoney}`);

 }
 else if(differentOptions.options == "Check Balance" ){
    console.log(`\n${answers.userName} your current balance is ${accountDetails.currentBalance}`);

 }
 else if(differentOptions.options == "Account Details"){
    console.log(`\n${answers.userName}, This is your account details:
                  UserName:${accountDetails.userName}
                  Father Name: ${accountDetails.faterName}
                  Account No: ${accountDetails.accountNo}
                  Current Balance: ${accountDetails.accountNo}
                  CNIC-No: ${accountDetails.CNIC_no}
                  Phone No: ${accountDetails.phone}
                  Bank Brance:'${accountDetails.accountBranch}`)
 }
}
else{
 console.log(`\n${answers.userName} your pin code is incorrect.
    Please try again.`)
}