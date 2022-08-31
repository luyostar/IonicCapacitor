import { HttpClient } from '@angular/common/http';
import { Component, OnInit,DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { SessionService } from '../session.service';
import { UrlService } from '../url.service';



@Component({
  selector: 'app-moviesdetail',
  templateUrl: './moviesdetail.component.html',
  styleUrls: ['./moviesdetail.component.scss'],
})
export class MoviesdetailComponent implements OnInit,DoCheck {


  public allData=[];
  public id:number;
  public id2=0;
  public src='';
  
  private isHidden=true;
  public numBuy=0;



  constructor(private router:ActivatedRoute,
              private http:HttpClient,
              private url:UrlService,
              private nav:NavController,
              private toast:ToastController,
              private session:SessionService,
              private loading:LoadingController,
              private platform:Platform,
              // private geolocation:Geolocation
              ) { }

  

  ngOnInit() {
    // this.router.params.subscribe((data)=>{
    //   this.id=data["id"];
    //   // console.log(this.id);

    //   this.getDetail();
    // });

    this.getParams();
    console.log(this.id);

    this.getDetail();

    setInterval(()=>{
      this.reCheck();

    },600);

    

  }

   
  reCheck(){
    this.getParams();
    if (this.id!=this.id2) {
      this.id2=this.id;
      this.numBuy=0;
      // console.log('id2:',this.id2);
      this.getDetail();
    };

    //   this.platform.ready().then(() => {

    //   // get current position
    //   this.geolocation.getCurrentPosition()).then(pos => {
    //     alert('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //   });

    //   const watch = this.geolocation.watchPosition().subscribe(pos => {
    //     alert('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //   });

    //   // to stop watching
    //   watch.unsubscribe();

    // });

    

  }

  ngDoCheck(){
    // 轻易不要用DoCheck,会影响系统性能
    // this.getParams();
    // if (this.id!=this.id2) {
    //   this.id2=this.id;
    //   this.getDetail();
    // }
  }

  getParams(){
    let {mid,src} = this.router.snapshot.queryParams;

    this.id=mid;
    this.src=src;
  }

 async  getDetail(){
    const loading=await this.loading.create({
      message:'loading',
      duration:3000
    });
    this.http.get(this.url.moviesUrl +'/' + this.id).subscribe((res:any)=>{
      
      this.allData =res;
    
      // console.log(this.allData);      
    });
    loading.duration=1;  
  }

  goBack(){
    this.nav.back();
  }

  doExpend(event:any){
    // alert(event.target)
    if (this.isHidden) 
    {
      event.target.style["overflow"]='visible';
      event.target.style["white-space"]='normal';
      this.isHidden=false;
    } else {
      event.target.style["overflow"]='hidden';
      event.target.style["white-space"]='nowrap';
      this.isHidden=true;
    }
  }

  doReduce(){
    this.numBuy--;
    if (this.numBuy<0) this.numBuy=0;

  }
  doAdd(){
    this.numBuy++;
  }

  // 加入购物车
  addCart(){
    if (this.numBuy<=0)
    {
      alert('购买商品不能为0件');
      return;
    }
    if (confirm('确定将 '+this.numBuy +' 件商品加入购物车吗？'))
    {

      this.session.setCart(this.session.getUid(),this.id,this.numBuy,this.allData['title']);
      
      this.toast.create(
        {
          header: '信息提示：',
          message:this.numBuy +'件商品已加入购物车！',
          icon: 'information-circle',
          position:'middle',
          duration:1500
        }
      ).then(t=>t.present());
    }

  }

}
