import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'
import { IonicModule, LoadingController } from '@ionic/angular';
import { SessionService } from '../session.service';
import { UrlService } from '../url.service';
// import {trigger, state, style, animate, transition} from '@angular/animations';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  public userId?:number;
  public isLogin=false;
  public status=0; // 0:login;1:sign;2:loginned

  public errMsg="";

  public userName="";
  public userPwd="";

  public result={};
  


  constructor(private url:UrlService,
              private http:HttpClient,
              private session:SessionService,
              private loading:LoadingController,
              private platForm:Platform,
              ) { }

  ngOnInit() {
    this.isLogin=false;
  }

  // 登录
   async login(){
    if (!this.isLogin)
    {
      if (this.userId==undefined || this.userPwd.length<=0 || this.userId.toString().length<=0)
      {
        // console.log(this.userId +"," +this.userPwd)
        this.errMsg="错误：用户ID或用户密码不能为空！";
        return;
      } else 
      {
        this.errMsg="";
      }

      const loading=await this.loading.create({
        message:'登录中',
        duration:3000
      });
      loading.present();

      this.http.put(this.url.userLoginUrl+ this.userId,this.result,{params:{pwd:this.userPwd}}).subscribe((put:any)=>{
              console.log(put);
              this.result=put;

              if (this.result["isSuccess"]==true)
              { 
                this.isLogin=true;
                this.status=2;
                this.userId=this.result["uId"];
                this.userName=this.result["uName"];
                this.errMsg=""
              } else {
                this.errMsg="错误：用户ID或用户密码错误！";
                this.isLogin=false;
              }
              
            });
      loading.duration=1;     


      // this.http.get(this.url.userUrl +this.userId,{params:{pwd:this.userPwd}}).subscribe(
      //   (res:any)=>{
      //     console.log(res);
      //     this.result=res;
           
      //     if (this.result["isSuccess"]==true)
      //     { 
      //       this.isLogin=true;
      //       this.userId=this.result["uId"];
      //       this.userName=this.result["uName"];
      //       this.errMsg=""

      //       // this.result["loginTime"]=new Date();

      //       // console.log(this.result);

      //       this.http.put(this.url.userLoginUrl+ this.userId,this.result,{params:{pwd:this.userPwd}}).subscribe((put:any)=>{
      //         console.log(put);
              
      //       });
      //     } else {
      //       this.errMsg="错误：用户ID或用户密码错误！";
      //       this.isLogin=false;
      //     }
      //   }
      // );

    }
  }

  quit(){
    this.isLogin=false;
    this.status=0;
    this.userId=null;
    this.userName="";
    this.errMsg="";
    this.userPwd="";
    this.result={};
    this.f={};
    
  }

//  新用户注册
  
  f={};

  goSign(){
    this.status=1;
    this.errMsg="";

  }

  returnLogin(){ 
    this.status=0;
    this.errMsg="";
  }

  async formSubmit(f:NgForm){   
    this.f=f.value;
    console.log(this.f);
    if (this.f['uId'].toString().length<=0 || this.f['uName'].length<=0 || this.f['uPwd'].length<=0)
    {
      this.errMsg="错误：注册的信息不能为空！";
      return;
    } else {

      this.f["loginTime"]=null;

      const loading=await this.loading.create({
        message:'注册中',
        duration:3000
      });
      loading.present();
      
      this.http.post(this.url.userUrl,this.f).subscribe((res:any)=>{
          console.log(res)

          this.result=res;

          if (this.result["isSuccess"]==true)
          { 
            this.isLogin=true;
            this.status=2;
            this.userId=this.result["uId"];
            this.userName=this.result["uName"];
            this.errMsg=""
          } else {
            this.errMsg="错误：用户ID已经存在了，请输入个新的用户ID。";
            this.isLogin=false;
          }


      });

      loading.duration=1;

    }

  }
// 新用户注册end

exitApp(){
  if (confirm('确定退出APP应用？')){
      navigator['app'].exitApp();
    
  }
}


}
