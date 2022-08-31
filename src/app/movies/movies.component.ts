import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, IonItem, IonList, IonSearchbar, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { UrlService } from '../url.service';
import { Platform } from '@ionic/angular'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})

export class MoviesComponent implements OnInit {

  public allData=[];
  public start=1;
  public onShow=false;
  public itemCount:number;

  public typeId:number;
  public tag:string;
  
  @ViewChild("infinite",{static:true})
  private myinfinite:IonInfiniteScroll;

  @ViewChild("searchbar",{static:true})
  private searchbar:IonSearchbar;


  private items =[] // Array.from(document.querySelector('#box').children);
  

  constructor(private http:HttpClient,
              private url:UrlService,
              private router:ActivatedRoute,
              private menu:MenuController,
              private loading:LoadingController,
              private platForm:Platform,
              private toast:ToastController,
              ) { }

   ngOnInit() {  
    
    // this.router.params.subscribe((data)=>{
    //   if (data==undefined)
    //   {
    //     this.typeId=1;
    //   } else {
    //     this.typeId=data["type"];
    //   }     
    //   console.log(this.typeId);
    // })
    this.typeId=2;
    this.tag='%E6%9C%80%E6%96%B0';

    

    this.loadMore();

    

    
  }

  handleInput(event:any){
    let query = event.target.value.toLowerCase();

    this.items=Array.from(document.querySelector('#box').children);

    // console.log(this.items[0].textContent);

    requestAnimationFrame(() => {
      this.items.forEach((item:any) => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style["display"] = shouldShow ? 'block' : 'none';
      });
    });

  }




  async loadMore(start=this.start,status=0){
    if (start==1) this.onShow=true;

    const loading=await this.loading.create({
      message:'loading',
      duration:3000
    });
    if (status==0) loading.present();

    console.log('platform is hybrid:' +this.platForm.is('hybrid'));

    // this.http.get((this.platForm.is('hybrid'))?this.url.newShortUrlB:this.url.newShortUrl + tag + '&page_limit=20&page_start=' +start).subscribe((res:any)=>{
    this.http.get(this.url.moviesUrl + '?pagesize=30&pagenumber=' +start +'&typeid=' +this.typeId).subscribe((res:any)=>{
      this.allData=this.allData.concat(res);
    
        // console.log(this.allData);
      if (start==1) this.onShow=false;

      this.itemCount=Math.ceil(this.allData.length/2);

    },(err:HttpErrorResponse)=>{
      alert(err.url +' || ' +err.message + ' || ' +err.statusText +' || ' +err.type);
    }
    );

    if (status==0) loading.duration=1;

  }

  getMore(event:any) {
    // setTimeout(() => {
    //   this.start=this.start+20;
    //   this.http.get(this.url.newUrl+this.start).subscribe((res:any)=>{
    //     this.allData=this.allData.concat(res.subjects);
      
    //     console.log(this.allData);       
  
    //   })
    // }, 500);

    this.start=this.start+1;
    this.loadMore(this.start,1);

    // 设置一个延迟效果
    setTimeout(() => {
      // event.target.complete();
       this.myinfinite.complete();
      
    }, 500);
    

    if (this.start>=12) {
      event.target.disabled=true;
    }
  }

  doMenu(type:number){
    this.menu.close("first");
    this.typeId=type;

    if (this.typeId==1) this.tag='%E7%83%AD%E9%97%A8'; // 热门
    if (this.typeId==2) this.tag='%E6%9C%80%E6%96%B0'; // 最新
    if (this.typeId==3) this.tag='%E7%BB%8F%E5%85%B8'; // 经典
    if (this.typeId==4) this.tag='%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86'; // 豆瓣高分
    if (this.typeId==5) this.tag='%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87'; // 冷门佳片
    if (this.typeId==6) this.tag='%E5%8F%AF%E6%92%AD%E6%94%BE'; // 可播放
    
    this.start=1;
    this.allData=[];

    this.loadMore(this.start);
    this.myinfinite.disabled=false;


   
  }

  doAlipay(){
    this.toast.create(
      {
        header: '提 示：',
        message: '支付绑定设置正在开发中... <br/> 敬请期待!<br/> Thank you for your cooperation.',
        icon: 'information-circle',
        position:'middle',
        duration:2000
      }
    ).then(t=>t.present());
    
  }

  over(event:any){
    event.target.style["background-color"]="#00ff00";
  }
  out(event:any){
    event.target.style["background-color"]="#ffffff";
  }

}
