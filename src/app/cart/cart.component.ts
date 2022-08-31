import { Component, OnInit,DoCheck } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit,DoCheck {

  public uId:number;
  public movieId:number;
  public buyNum:number;

  public cartList=[];


  public totalMoney=0;


  constructor(private session:SessionService,
              ) { }

  ngOnInit() {
    // this.getCartList();
  }

  ngDoCheck(){
    this.getCartList();


  }

  getCartList()
  {
    this.cartList=this.session.getCart();
    // console.log(this.cartList);

    this.cartList.forEach((cart:any) => {
      
      this.uId=cart['uid'];
      this.movieId=cart['movieid'];
      this.buyNum=cart['buynum'];

   
    });

    
  }

  delList(i:number){
    if (confirm('确定删除电影：' + this.cartList[i]['moviename'] +' 吗?'))
    {
      // this.totalMoney=this.totalMoney-this.cartList[i]['buynum'] * 5;
      if (this.cartList[i]['ischecked'])
      {
        this.totalMoney=this.totalMoney-this.cartList[i]['buynum'] * this.cartList[i]['price'];
      }
      this.session.removeCartByIndex(i);
      
    }
  }

  calcMoney(i:number,event:any){
    if (event.target.checked) {
      this.totalMoney=this.totalMoney+this.cartList[i]['buynum'] * this.cartList[i]['price'];
      this.cartList[i]['ischecked']=true;
      
    } else {
      this.totalMoney=this.totalMoney-this.cartList[i]['buynum'] * this.cartList[i]['price'];
      this.cartList[i]['ischecked']=false;
    }
  }

  clearList(){

    if (this.cartList.length<=0) return;

    if (confirm('确定清除购物篮所有物品吗?'))
    {
       this.session.clearCart();
       this.totalMoney=0;
      
    }

  }

  // 结算
  billCount(){
    if (this.totalMoney<=0)
    {
      alert('没有选择需要结算的电影,请勾选...');
      return;
    }
    // 开始跳到结算页面 

  }

}
