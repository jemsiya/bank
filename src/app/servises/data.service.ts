import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
 //current account numbr

 currentAcno="";
  constructor() { }
  //database
userDetails:any={
  1000:{acno:1000,username:'amal',password:1000,balance:1000,transaction:[]},
  1001:{acno:1001,username:'ajl',password:1001,balance:1020,transaction:[]},
  1002:{acno:1002,username:'athul',password:1002,balance:1400,transaction:[]},
}
register(acno:any,username:any,password:any){
  let userDetails=this.userDetails;
  if(acno in this.userDetails){
    return false;
  }
  else{
    userDetails[acno]={
      acno,
      username,
      password,
      balance:0,
      transaction:[]
    }
    console.log(userDetails);
    return true;
  }
}

login(acno:any,pswd:any){
let userDetails=this.userDetails;
if(acno in userDetails){
  if(pswd==userDetails[acno]['password'])
  {this.currentUser=userDetails[acno]['username']
  this.currentAcno=acno;
    return true;
}
else{
  return false;
}
}
else{
  return false;
}}

deposit(acno:any,pswd:any,amt:any){
   var amount=parseInt(amt)
  let userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
     userDetails[acno]['balance']+=amount;
     userDetails[acno]['transaction'].push({
      Type:'credit',
      amount:amount
     })
     console.log(userDetails);

     return userDetails[acno]['balance']
    }
    else{
      alert('password mismached')
      return false;
    }
  }
  else{
    alert('invalid data')
    return false;
  }
}

withdraw(acno:any,pswd:any,amt:any){
  var amount=parseInt(amt)
 let userDetails=this.userDetails;
 if(acno in userDetails){
   if(pswd==userDetails[acno]['password']){
    if(userDetails[acno]['balance']>amount){}
    userDetails[acno]['balance']-=amount;
    userDetails[acno]['transaction'].push({
      Type:'debit',
      amount:amount
    })
    console.log(userDetails);

    return userDetails[acno]['balance']
   }

   else{
    alert('transaction failed');
    return false
   }
 }
 else{
   alert('invalid data')
   return false;
 }
}
getTransaction(acno:any){
  return this.userDetails[acno]['transaction']//details of transaction
}
}




