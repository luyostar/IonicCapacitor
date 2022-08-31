import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams,HttpClientJsonpModule} from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSpinner } from '@ionic/angular';
import { UrlService } from '../url.service';
import { Platform} from '@ionic/angular';
import { Observable } from "rxjs";
// import  'rxjs/add/operator/retry';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  @ViewChild("spinner",{static:true})
  private spinner:IonSpinner;

  constructor(private http:HttpClient,
              private url:UrlService,
              private platForm:Platform,
             ) { }

  public allData=[]
  public start=0
  public commentData=[]
  
  public  isShow=false;

  ngOnInit() {
    this.isShow=true;
   
    
    if (this.platForm.is('hybrid')) {
      this.doGet();
    } else {
      this.doGet();
      // this.doGet();

    }
    
    // 影评数据
    this.doComment();
  }

  getOtherData(): Observable<any> {
    return this.http.get<any>((this.platForm.is('hybrid'))?this.url.hotUrl:this.url.hotUrlB)
    // .retry(3);
  }

  doGet() {
    this.http.get(this.url.moviesUrl).subscribe((res:any)=>{
        // console.log(res);
        this.allData.push(res);      
        this.isShow=false;        
  
      },(err:HttpErrorResponse)=>{
        alert(err.url +' || ' +err.message + ' || ' +err.statusText +' || ' +err.type);
      });
  }

  doJsonp() {

    this.http.jsonp<any>(this.url.hotUrl,"callback").subscribe((res:any)=>{
        this.allData.push(res.results.subjects);      
         console.log(this.allData);
        this.isShow=false;        
  
      },(err:HttpErrorResponse)=>{
        alert(err.url +' || ' +err.message + ' || ' +err.statusText +' || ' +err.type);
      });

  }

  doComment(start=this.start){
    // 影评数据this.url.bestUrl+start.toString()
    this.http.get(this.url.commentUrl).subscribe((res:any)=>{
      this.commentData.push(res);    
      // console.log(res);

    });
    this.start=start;
  
  }

  showDetail(id:number){

  }

}
