import { Component } from '@angular/core';
import { IonicModule, Platform }  from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {

  lastPresstime=0;
  timeToExitApp=1500;

  constructor(private platForm:Platform) {

    this.platForm.backButton.subscribe(()=>{
       if (new Date().getTime()-this.lastPresstime<this.timeToExitApp)
       {
         navigator['app'].exitApp();  
                
       }
       this.lastPresstime=new Date().getTime();
    });

  }
}
