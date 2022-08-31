import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private uid:number=10000;
  private movieList=[]

  setUid(uid:number){
    this.uid=uid;
  }
  getUid():number{
    return this.uid;
  }

  setCart(uId:number,movieId:number,buyNum:number,movieName='',price=5,isChecked=false){ 
   
   let cart={};
   cart['uid']=uId;
   cart['movieid']=movieId;
   cart['buynum']=buyNum;
   cart['moviename']=movieName;
   cart['price']=price;
   cart['ischecked']=isChecked;

   
   let editStatus=false;
   this.movieList.forEach((cart:any)=>{
    // console.log(cart['movieid']);
    if (cart['uid']==uId && cart['movieid']==movieId) {
      cart['buynum']=cart['buynum'] + buyNum;
      editStatus=true;
      return;          
    }
          
   });

   if (!editStatus)  this.movieList=this.movieList.concat(cart);

  }

  getCart():any{
    return this.movieList;
  }

  removeCart(uId:number,movieId:number){

    let i=0;

    this.movieList.forEach((cart:any)=>{

       if (cart['uid']==uId && cart['movieid']==movieId) {
          this.movieList.splice(i,1);
          return;
       }
       i++;
    });    

  }

  removeCartByIndex(index:number){
    this.movieList.splice(index,1);
  }

  clearCart() {
    this.movieList=[];
  }


  constructor() { }
}
