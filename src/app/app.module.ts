import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { IndexComponent} from './index/index.component';
// import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent} from './movies/movies.component';
import { MoviesdetailComponent} from './moviesdetail/moviesdetail.component';
import { CartComponent} from './cart/cart.component';
import { UserComponent} from './user/user.component';
import { TabsComponent} from './tabs/tabs.component';
import { StringsPipe } from './strings.pipe';



const routes=[
  {path:'',component:IndexComponent},
  {path:'index',component:IndexComponent},
  {path:'movies',component:MoviesComponent},
  // {path:'moviesdetail/:id',component:MoviesdetailComponent},
  {path:'moviesdetail',component:MoviesdetailComponent},
  {path:'cart',component:CartComponent},
  {path:'user',component:UserComponent},
  {path:'**',component:IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MoviesComponent,
    MoviesdetailComponent,
    CartComponent,
    UserComponent,
    TabsComponent,
    StringsPipe    
  ],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            RouterModule.forRoot(routes),
            FormsModule,
            HttpClientModule,
            HttpClientJsonpModule,
            // BrowserAnimationsModule  //启用动画模块
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


export class AppModule {}
