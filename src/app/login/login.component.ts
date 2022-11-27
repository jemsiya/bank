import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
//class-collection of proprties and functions
//properties/variable
aim="your perfect banking partner"
account="enter your account here"
acno='';
pswd='';
 //database
// userDetails:any={
//   1000:{acno:1000,username:'amal',password:1000,balance:1000},
//   1001:{acno:1001,username:'ajl',password:1001,balance:1020},
//   1002:{acno:1002,username:'athul',password:1002,balance:1400},
// }
//function/methods-user defined functions
//dependency injection
  constructor(private ds:DataService,private router:Router) { }//first executed
  //it automatically invokes when the object is created
  //object initialization

  ngOnInit(): void {//2nd executed
    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorize
  }
   acnoChange(event:any){
     this.acno=event.target.value;
     console.log(this.acno);
   }
   pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
   }
  login(){
    // alert("login clicked");
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;
    const result=this.ds.login(acno,pswd);
    if(result){
      alert('login successful')
      this.router.navigateByUrl('dashbord')
    }
    else{
      alert('login failed');
    }
  }
}

//     if(acno in userDetails){
//       if(pswd==userDetails[acno]['password']){
//            alert('login successful');
//            this.router.navigateByUrl('dashbord')
//       }
//       else{
//         alert('invalid password');
//       }
//     }
//     else{
//       alert('invalid user');
//     }
//   }

// }
// login(a:any,p:any){
//   // alert("login clicked");
//   var acno=a.value;
//   var pswd=p.value;
//   var userDetails=this.userDetails;

//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//          alert('login successful')
//     }
//     else{
//       alert('invalid password')
//     }
//   }
//   else{
//     alert('invalid user')
//   }
// }
// }
