import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
 
  public parseResult=null;

  public stringResult=null;

  public JsonParse(){
    const a='[{"name":"Jack","age":30},{"name":"Bill","age":null}]';

    this.parseResult=JSON.parse(a);
    console.log(this.parseResult);
  }

  public JsonStringify(){
    const b=[{'id':123,'name':'jack'},{'id':456,'name':undefined}];
    this.stringResult=JSON.stringify(b,(key,val)=>val==undefined?"":val);
    console.log(this.stringResult)
  }

  public doExtend()
  {
    const [a,...b]=[1,2,9,8,7];
    console.log(a);
    console.log(b);
    console.log(b.sort());

    var show=this.show(2,8,7,4,9);
    console.log(show);
  } 
  
  public show(...p):any{
    console.log("显示：" + p);
    return p.sort();
  }
}