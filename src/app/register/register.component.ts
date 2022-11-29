import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../servises/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   acno="";
   pswd="";
   uname="";


  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }
   //registration model
   registerForm=this.fb.group({
    acno:[],
    uname:[],
    pswd:[]
   })
   //control pass to ts to html file
  ngOnInit(): void {
  }
register(){
  //alert(''register clicked)
  var uname=this.uname;
  var acno=this.acno;
  var pswd=this.pswd;

  const result=this.ds.register(acno,uname,pswd);
  if(result){
    alert('register successful');
    this.router.navigateByUrl('')
  }
  else{
    alert('user already exist');
    this.router.navigateByUrl('register')
  }
}
}
