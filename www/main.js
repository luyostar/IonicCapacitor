(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AppComponent = class AppComponent {
    constructor(platForm) {
        this.platForm = platForm;
        this.lastPresstime = 0;
        this.timeToExitApp = 1500;
        this.platForm.backButton.subscribe(() => {
            if (new Date().getTime() - this.lastPresstime < this.timeToExitApp) {
                navigator['app'].exitApp();
            }
            this.lastPresstime = new Date().getTime();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ 1643);
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies/movies.component */ 2287);
/* harmony import */ var _moviesdetail_moviesdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moviesdetail/moviesdetail.component */ 7927);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ 9099);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ 3957);
/* harmony import */ var _strings_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strings.pipe */ 4222);



// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'






// import { AppRoutingModule } from './app-routing.module';






const routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__.MoviesComponent },
    // {path:'moviesdetail/:id',component:MoviesdetailComponent},
    { path: 'moviesdetail', component: _moviesdetail_moviesdetail_component__WEBPACK_IMPORTED_MODULE_3__.MoviesdetailComponent },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__.UserComponent },
    { path: '**', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent },
];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent,
            _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__.MoviesComponent,
            _moviesdetail_moviesdetail_component__WEBPACK_IMPORTED_MODULE_3__.MoviesdetailComponent,
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent,
            _user_user_component__WEBPACK_IMPORTED_MODULE_5__.UserComponent,
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__.TabsComponent,
            _strings_pipe__WEBPACK_IMPORTED_MODULE_7__.StringsPipe
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientJsonpModule,
            // BrowserAnimationsModule  //启用动画模块
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component.html?ngResource */ 2866);
/* harmony import */ var _cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.component.scss?ngResource */ 3971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ 4719);





let CartComponent = class CartComponent {
    constructor(session) {
        this.session = session;
        this.cartList = [];
        this.totalMoney = 0;
    }
    ngOnInit() {
        // this.getCartList();
    }
    ngDoCheck() {
        this.getCartList();
    }
    getCartList() {
        this.cartList = this.session.getCart();
        // console.log(this.cartList);
        this.cartList.forEach((cart) => {
            this.uId = cart['uid'];
            this.movieId = cart['movieid'];
            this.buyNum = cart['buynum'];
        });
    }
    delList(i) {
        if (confirm('确定删除电影：' + this.cartList[i]['moviename'] + ' 吗?')) {
            // this.totalMoney=this.totalMoney-this.cartList[i]['buynum'] * 5;
            if (this.cartList[i]['ischecked']) {
                this.totalMoney = this.totalMoney - this.cartList[i]['buynum'] * this.cartList[i]['price'];
            }
            this.session.removeCartByIndex(i);
        }
    }
    calcMoney(i, event) {
        if (event.target.checked) {
            this.totalMoney = this.totalMoney + this.cartList[i]['buynum'] * this.cartList[i]['price'];
            this.cartList[i]['ischecked'] = true;
        }
        else {
            this.totalMoney = this.totalMoney - this.cartList[i]['buynum'] * this.cartList[i]['price'];
            this.cartList[i]['ischecked'] = false;
        }
    }
    clearList() {
        if (this.cartList.length <= 0)
            return;
        if (confirm('确定清除购物篮所有物品吗?')) {
            this.session.clearCart();
            this.totalMoney = 0;
        }
    }
    // 结算
    billCount() {
        if (this.totalMoney <= 0) {
            alert('没有选择需要结算的电影,请勾选...');
            return;
        }
        // 开始跳到结算页面 
    }
};
CartComponent.ctorParameters = () => [
    { type: _session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService }
];
CartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cart',
        template: _cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartComponent);



/***/ }),

/***/ 1643:
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _index_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component.html?ngResource */ 5769);
/* harmony import */ var _index_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.component.scss?ngResource */ 4509);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url.service */ 1630);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







// import  'rxjs/add/operator/retry';
let IndexComponent = class IndexComponent {
    constructor(http, url, platForm) {
        this.http = http;
        this.url = url;
        this.platForm = platForm;
        this.allData = [];
        this.start = 0;
        this.commentData = [];
        this.isShow = false;
    }
    ngOnInit() {
        this.isShow = true;
        if (this.platForm.is('hybrid')) {
            this.doGet();
        }
        else {
            this.doGet();
            // this.doGet();
        }
        // 影评数据
        this.doComment();
    }
    getOtherData() {
        return this.http.get((this.platForm.is('hybrid')) ? this.url.hotUrl : this.url.hotUrlB);
        // .retry(3);
    }
    doGet() {
        this.http.get(this.url.moviesUrl).subscribe((res) => {
            // console.log(res);
            this.allData.push(res);
            this.isShow = false;
        }, (err) => {
            alert(err.url + ' || ' + err.message + ' || ' + err.statusText + ' || ' + err.type);
        });
    }
    doJsonp() {
        this.http.jsonp(this.url.hotUrl, "callback").subscribe((res) => {
            this.allData.push(res.results.subjects);
            console.log(this.allData);
            this.isShow = false;
        }, (err) => {
            alert(err.url + ' || ' + err.message + ' || ' + err.statusText + ' || ' + err.type);
        });
    }
    doComment(start = this.start) {
        // 影评数据this.url.bestUrl+start.toString()
        this.http.get(this.url.commentUrl).subscribe((res) => {
            this.commentData.push(res);
            // console.log(res);
        });
        this.start = start;
    }
    showDetail(id) {
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
IndexComponent.propDecorators = {
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["spinner", { static: true },] }]
};
IndexComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-index',
        template: _index_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_index_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndexComponent);



/***/ }),

/***/ 2287:
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesComponent": () => (/* binding */ MoviesComponent)
/* harmony export */ });
/* harmony import */ var D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _movies_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.component.html?ngResource */ 5784);
/* harmony import */ var _movies_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.component.scss?ngResource */ 528);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../url.service */ 1630);










let MoviesComponent = class MoviesComponent {
  constructor(http, url, router, menu, loading, platForm, toast) {
    this.http = http;
    this.url = url;
    this.router = router;
    this.menu = menu;
    this.loading = loading;
    this.platForm = platForm;
    this.toast = toast;
    this.allData = [];
    this.start = 1;
    this.onShow = false;
    this.items = []; // Array.from(document.querySelector('#box').children);
  }

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
    this.typeId = 2;
    this.tag = '%E6%9C%80%E6%96%B0';
    this.loadMore();
  }

  handleInput(event) {
    let query = event.target.value.toLowerCase();
    this.items = Array.from(document.querySelector('#box').children); // console.log(this.items[0].textContent);

    requestAnimationFrame(() => {
      this.items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style["display"] = shouldShow ? 'block' : 'none';
      });
    });
  }

  loadMore(start = this.start, status = 0) {
    var _this = this;

    return (0,D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (start == 1) _this.onShow = true;
      const loading = yield _this.loading.create({
        message: 'loading',
        duration: 3000
      });
      if (status == 0) loading.present();
      console.log('platform is hybrid:' + _this.platForm.is('hybrid')); // this.http.get((this.platForm.is('hybrid'))?this.url.newShortUrlB:this.url.newShortUrl + tag + '&page_limit=20&page_start=' +start).subscribe((res:any)=>{

      _this.http.get(_this.url.moviesUrl + '?pagesize=30&pagenumber=' + start + '&typeid=' + _this.typeId).subscribe(res => {
        _this.allData = _this.allData.concat(res); // console.log(this.allData);

        if (start == 1) _this.onShow = false;
        _this.itemCount = Math.ceil(_this.allData.length / 2);
      }, err => {
        alert(err.url + ' || ' + err.message + ' || ' + err.statusText + ' || ' + err.type);
      });

      if (status == 0) loading.duration = 1;
    })();
  }

  getMore(event) {
    // setTimeout(() => {
    //   this.start=this.start+20;
    //   this.http.get(this.url.newUrl+this.start).subscribe((res:any)=>{
    //     this.allData=this.allData.concat(res.subjects);
    //     console.log(this.allData);       
    //   })
    // }, 500);
    this.start = this.start + 1;
    this.loadMore(this.start, 1); // 设置一个延迟效果

    setTimeout(() => {
      // event.target.complete();
      this.myinfinite.complete();
    }, 500);

    if (this.start >= 12) {
      event.target.disabled = true;
    }
  }

  doMenu(type) {
    this.menu.close("first");
    this.typeId = type;
    if (this.typeId == 1) this.tag = '%E7%83%AD%E9%97%A8'; // 热门

    if (this.typeId == 2) this.tag = '%E6%9C%80%E6%96%B0'; // 最新

    if (this.typeId == 3) this.tag = '%E7%BB%8F%E5%85%B8'; // 经典

    if (this.typeId == 4) this.tag = '%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86'; // 豆瓣高分

    if (this.typeId == 5) this.tag = '%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87'; // 冷门佳片

    if (this.typeId == 6) this.tag = '%E5%8F%AF%E6%92%AD%E6%94%BE'; // 可播放

    this.start = 1;
    this.allData = [];
    this.loadMore(this.start);
    this.myinfinite.disabled = false;
  }

  doAlipay() {
    this.toast.create({
      header: '提 示：',
      message: '支付绑定设置正在开发中... <br/> 敬请期待!<br/> Thank you for your cooperation.',
      icon: 'information-circle',
      position: 'middle',
      duration: 2000
    }).then(t => t.present());
  }

  over(event) {
    event.target.style["background-color"] = "#00ff00";
  }

  out(event) {
    event.target.style["background-color"] = "#ffffff";
  }

};

MoviesComponent.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}];

MoviesComponent.propDecorators = {
  myinfinite: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ["infinite", {
      static: true
    }]
  }],
  searchbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ["searchbar", {
      static: true
    }]
  }]
};
MoviesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-movies',
  template: _movies_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_movies_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MoviesComponent);


/***/ }),

/***/ 7927:
/*!********************************************************!*\
  !*** ./src/app/moviesdetail/moviesdetail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesdetailComponent": () => (/* binding */ MoviesdetailComponent)
/* harmony export */ });
/* harmony import */ var D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _moviesdetail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moviesdetail.component.html?ngResource */ 1413);
/* harmony import */ var _moviesdetail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moviesdetail.component.scss?ngResource */ 1678);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ 4719);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../url.service */ 1630);










let MoviesdetailComponent = class MoviesdetailComponent {
  constructor(router, http, url, nav, toast, session, loading, platform) {
    this.router = router;
    this.http = http;
    this.url = url;
    this.nav = nav;
    this.toast = toast;
    this.session = session;
    this.loading = loading;
    this.platform = platform;
    this.allData = [];
    this.id2 = 0;
    this.src = '';
    this.isHidden = true;
    this.numBuy = 0;
  }

  ngOnInit() {
    // this.router.params.subscribe((data)=>{
    //   this.id=data["id"];
    //   // console.log(this.id);
    //   this.getDetail();
    // });
    this.getParams();
    console.log(this.id);
    this.getDetail();
    setInterval(() => {
      this.reCheck();
    }, 600);
  }

  reCheck() {
    this.getParams();

    if (this.id != this.id2) {
      this.id2 = this.id;
      this.numBuy = 0; // console.log('id2:',this.id2);

      this.getDetail();
    }

    ; //   this.platform.ready().then(() => {
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

  ngDoCheck() {// 轻易不要用DoCheck,会影响系统性能
    // this.getParams();
    // if (this.id!=this.id2) {
    //   this.id2=this.id;
    //   this.getDetail();
    // }
  }

  getParams() {
    let {
      mid,
      src
    } = this.router.snapshot.queryParams;
    this.id = mid;
    this.src = src;
  }

  getDetail() {
    var _this = this;

    return (0,D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loading.create({
        message: 'loading',
        duration: 3000
      });

      _this.http.get(_this.url.moviesUrl + '/' + _this.id).subscribe(res => {
        _this.allData = res; // console.log(this.allData);      
      });

      loading.duration = 1;
    })();
  }

  goBack() {
    this.nav.back();
  }

  doExpend(event) {
    // alert(event.target)
    if (this.isHidden) {
      event.target.style["overflow"] = 'visible';
      event.target.style["white-space"] = 'normal';
      this.isHidden = false;
    } else {
      event.target.style["overflow"] = 'hidden';
      event.target.style["white-space"] = 'nowrap';
      this.isHidden = true;
    }
  }

  doReduce() {
    this.numBuy--;
    if (this.numBuy < 0) this.numBuy = 0;
  }

  doAdd() {
    this.numBuy++;
  } // 加入购物车


  addCart() {
    if (this.numBuy <= 0) {
      alert('购买商品不能为0件');
      return;
    }

    if (confirm('确定将 ' + this.numBuy + ' 件商品加入购物车吗？')) {
      this.session.setCart(this.session.getUid(), this.id, this.numBuy, this.allData['title']);
      this.toast.create({
        header: '信息提示：',
        message: this.numBuy + '件商品已加入购物车！',
        icon: 'information-circle',
        position: 'middle',
        duration: 1500
      }).then(t => t.present());
    }
  }

};

MoviesdetailComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}];

MoviesdetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-moviesdetail',
  template: _moviesdetail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_moviesdetail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MoviesdetailComponent);


/***/ }),

/***/ 4719:
/*!************************************!*\
  !*** ./src/app/session.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SessionService = class SessionService {
    constructor() {
        this.uid = 10000;
        this.movieList = [];
    }
    setUid(uid) {
        this.uid = uid;
    }
    getUid() {
        return this.uid;
    }
    setCart(uId, movieId, buyNum, movieName = '', price = 5, isChecked = false) {
        let cart = {};
        cart['uid'] = uId;
        cart['movieid'] = movieId;
        cart['buynum'] = buyNum;
        cart['moviename'] = movieName;
        cart['price'] = price;
        cart['ischecked'] = isChecked;
        let editStatus = false;
        this.movieList.forEach((cart) => {
            // console.log(cart['movieid']);
            if (cart['uid'] == uId && cart['movieid'] == movieId) {
                cart['buynum'] = cart['buynum'] + buyNum;
                editStatus = true;
                return;
            }
        });
        if (!editStatus)
            this.movieList = this.movieList.concat(cart);
    }
    getCart() {
        return this.movieList;
    }
    removeCart(uId, movieId) {
        let i = 0;
        this.movieList.forEach((cart) => {
            if (cart['uid'] == uId && cart['movieid'] == movieId) {
                this.movieList.splice(i, 1);
                return;
            }
            i++;
        });
    }
    removeCartByIndex(index) {
        this.movieList.splice(index, 1);
    }
    clearCart() {
        this.movieList = [];
    }
};
SessionService.ctorParameters = () => [];
SessionService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SessionService);



/***/ }),

/***/ 4222:
/*!*********************************!*\
  !*** ./src/app/strings.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringsPipe": () => (/* binding */ StringsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let StringsPipe = class StringsPipe {
    transform(strValue) {
        if (strValue != undefined) {
            return strValue.join(" / ");
        }
    }
};
StringsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'strings'
    })
], StringsPipe);



/***/ }),

/***/ 3957:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 4872);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 2798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TabsComponent = class TabsComponent {
    constructor() { }
    ngOnInit() { }
};
TabsComponent.ctorParameters = () => [];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsComponent);



/***/ }),

/***/ 1630:
/*!********************************!*\
  !*** ./src/app/url.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let UrlService = class UrlService {
    constructor() {
        this.hotUrl = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0';
        this.hotUrlB = 'j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0';
        this.bestUrl = 'https://movie.douban.com/review/best/?start=';
        this.moiveUrl = 'https://movie.douban.com/j/subject_abstract?subject_id='; // '/subject/'; 
        this.moiveUrlB = 'j/subject_abstract?subject_id='; // '/subject/'; 
        this.newUrl = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=20&page_start=';
        this.newShortUrl = 'https://movie.douban.com/j/search_subjects?type=movie&tag=';
        this.newShortUrlB = 'j/search_subjects?type=movie&tag=';
        this.searchUrl = 'https://movie.douban.com/movie/subject_search?search_text=%E4%BA%BA%E7%94%9F1&cat=1002';
        // ****以下为正式环境
        this.moviesUrl = 'http://36.133.149.109:8008/api/movies';
        // public commentUrl='http://127.0.0.1:5000/api/comment';
        this.commentUrl = 'http://36.133.149.109:8008/api/comment';
        this.commentUrlB = 'api/comment';
        // public userUrl="http://127.0.0.1:5000/api/users/";
        this.userUrl = "http://36.133.149.109:8008/api/users/";
        this.userUrlB = "api/users/";
        // public userExistUrl="http://127.0.0.1:5000/api/users/exist/";
        this.userExistUrl = "http://36.133.149.109:8008/api/users/exist/";
        this.userExistUrlB = "api/users/exist/";
        // public userLoginUrl="http://127.0.0.1:5000/api/users/login/";
        this.userLoginUrl = "http://36.133.149.109:8008/api/users/login/";
        this.userLoginUrlB = "api/users/login/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            })
        };
    }
};
UrlService.ctorParameters = () => [];
UrlService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UrlService);



/***/ }),

/***/ 9099:
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component.html?ngResource */ 6383);
/* harmony import */ var _user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.scss?ngResource */ 4108);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ 4719);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../url.service */ 1630);








 // import {trigger, state, style, animate, transition} from '@angular/animations';


let UserComponent = class UserComponent {
  constructor(url, http, session, loading, platForm) {
    this.url = url;
    this.http = http;
    this.session = session;
    this.loading = loading;
    this.platForm = platForm;
    this.isLogin = false;
    this.status = 0; // 0:login;1:sign;2:loginned

    this.errMsg = "";
    this.userName = "";
    this.userPwd = "";
    this.result = {}; //  新用户注册

    this.f = {};
  }

  ngOnInit() {
    this.isLogin = false;
  } // 登录


  login() {
    var _this = this;

    return (0,D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.isLogin) {
        if (_this.userId == undefined || _this.userPwd.length <= 0 || _this.userId.toString().length <= 0) {
          // console.log(this.userId +"," +this.userPwd)
          _this.errMsg = "错误：用户ID或用户密码不能为空！";
          return;
        } else {
          _this.errMsg = "";
        }

        const loading = yield _this.loading.create({
          message: '登录中',
          duration: 3000
        });
        loading.present();

        _this.http.put(_this.url.userLoginUrl + _this.userId, _this.result, {
          params: {
            pwd: _this.userPwd
          }
        }).subscribe(put => {
          console.log(put);
          _this.result = put;

          if (_this.result["isSuccess"] == true) {
            _this.isLogin = true;
            _this.status = 2;
            _this.userId = _this.result["uId"];
            _this.userName = _this.result["uName"];
            _this.errMsg = "";
          } else {
            _this.errMsg = "错误：用户ID或用户密码错误！";
            _this.isLogin = false;
          }
        });

        loading.duration = 1; // this.http.get(this.url.userUrl +this.userId,{params:{pwd:this.userPwd}}).subscribe(
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
    })();
  }

  quit() {
    this.isLogin = false;
    this.status = 0;
    this.userId = null;
    this.userName = "";
    this.errMsg = "";
    this.userPwd = "";
    this.result = {};
    this.f = {};
  }

  goSign() {
    this.status = 1;
    this.errMsg = "";
  }

  returnLogin() {
    this.status = 0;
    this.errMsg = "";
  }

  formSubmit(f) {
    var _this2 = this;

    return (0,D_myionicapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.f = f.value;
      console.log(_this2.f);

      if (_this2.f['uId'].toString().length <= 0 || _this2.f['uName'].length <= 0 || _this2.f['uPwd'].length <= 0) {
        _this2.errMsg = "错误：注册的信息不能为空！";
        return;
      } else {
        _this2.f["loginTime"] = null;
        const loading = yield _this2.loading.create({
          message: '注册中',
          duration: 3000
        });
        loading.present();

        _this2.http.post(_this2.url.userUrl, _this2.f).subscribe(res => {
          console.log(res);
          _this2.result = res;

          if (_this2.result["isSuccess"] == true) {
            _this2.isLogin = true;
            _this2.status = 2;
            _this2.userId = _this2.result["uId"];
            _this2.userName = _this2.result["uName"];
            _this2.errMsg = "";
          } else {
            _this2.errMsg = "错误：用户ID已经存在了，请输入个新的用户ID。";
            _this2.isLogin = false;
          }
        });

        loading.duration = 1;
      }
    })();
  } // 新用户注册end


  exitApp() {
    if (confirm('确定退出APP应用？')) {
      navigator['app'].exitApp();
    }
  }

};

UserComponent.ctorParameters = () => [{
  type: _url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}];

UserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-user',
  template: _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UserComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3971:
/*!*****************************************************!*\
  !*** ./src/app/cart/cart.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".spanTitle {\n  font: 14px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n  color: blue;\n}\n\n.spanTitle1 {\n  font: 14px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n  color: black;\n}\n\n.round {\n  --width:10px;\n  --height:10px;\n  --border-radius: 25%;\n  --vertical-align: middle;\n  position: relative;\n  top: -10px;\n  text-align: left;\n}\n\n.round2 {\n  --width:10px;\n  --height:10px;\n  --border-radius: 10%;\n  --vertical-align: middle;\n  position: relative;\n  top: -7px;\n  text-align: left;\n}\n\n.itemStyle {\n  height: 50px;\n  border-bottom: 0.3px solid yellowgreen;\n  position: relative;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUZKIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhblRpdGxlIHtcclxuICAgIGZvbnQ6IDE0cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgXHJcbn1cclxuLnNwYW5UaXRsZTEge1xyXG4gICAgZm9udDogMTRweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgXHJcbn1cclxuXHJcbi5yb3VuZCB7XHJcbiAgICAtLXdpZHRoOjEwcHg7XHJcbiAgICAtLWhlaWdodDoxMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuIFxyXG59XHJcbi5yb3VuZDIge1xyXG4gICAgXHJcbiAgICAtLXdpZHRoOjEwcHg7XHJcbiAgICAtLWhlaWdodDoxMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gXHJcbn1cclxuXHJcbi5pdGVtU3R5bGUge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgeWVsbG93Z3JlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */";

/***/ }),

/***/ 4509:
/*!*******************************************************!*\
  !*** ./src/app/index/index.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".hotImg {\n  opacity: 1;\n  position: relative;\n  top: 3px;\n}\n\n.spanTitle {\n  font: 14px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n  color: #666666;\n}\n\n.labelSize {\n  font: 14px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3RJbWcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG59XHJcblxyXG4uc3BhblRpdGxlIHtcclxuICAgIGZvbnQ6IDE0cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuLmxhYmVsU2l6ZSB7XHJcbiAgICBmb250OiAxNHB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgIFxyXG59Il19 */";

/***/ }),

/***/ 528:
/*!*********************************************************!*\
  !*** ./src/app/movies/movies.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".hotImg {\n  opacity: 1;\n  position: relative;\n  top: 3px;\n}\n\n.spanTitle {\n  color: blue;\n}\n\n.spanRate {\n  color: #e0ac08;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJtb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90SW1nIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDNweDtcclxufVxyXG5cclxuLnNwYW5UaXRsZSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLnNwYW5SYXRlIHtcclxuICAgIGNvbG9yOiNlMGFjMDg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1678:
/*!*********************************************************************!*\
  !*** ./src/app/moviesdetail/moviesdetail.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".spanTitle {\n  font: 14px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n  color: #666666;\n}\n\n.spanTitle1 {\n  font: 24px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n  color: #666666;\n}\n\n.labelSize {\n  font: 14px Arial, Helvetica, sans-serif;\n  line-height: 150%;\n}\n\n.star {\n  top: 2px;\n}\n\n.isCollapsed {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllc2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUdBO0VBQ0ksUUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6Im1vdmllc2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFuVGl0bGUge1xyXG4gICAgZm9udDogMTRweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4uc3BhblRpdGxlMSB7XHJcbiAgICBmb250OiAyNHB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4ubGFiZWxTaXplIHtcclxuICAgIGZvbnQ6IDE0cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG5cclxufVxyXG5cclxuXHJcbi5zdGFyIHtcclxuICAgIHRvcDogMnB4O1xyXG59XHJcblxyXG4uaXNDb2xsYXBzZWR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 2798:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 4108:
/*!*****************************************************!*\
  !*** ./src/app/user/user.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  border-bottom: 1px solid yellow;\n}\n\ninput {\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  border-bottom: 0.5px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUFKIiwiZmlsZSI6InVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHllbGxvdztcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmVlbjtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTFweDtcclxufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <app-tabs></app-tabs>\n</ion-app>\n";

/***/ }),

/***/ 2866:
/*!*****************************************************!*\
  !*** ./src/app/cart/cart.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <div >\n      <ion-title color=\"light\"><h1 style=\"position: relative;top: -5px;\">购物车 ({{cartList.length}})</h1></ion-title>\n     </div>\n     <ion-buttons slot=\"start\">\n     <ion-button><ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon></ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-button (click)=\"getCartList()\"></ion-button> -->\n  <ion-list>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\" ><ion-label class=\"spanTitle\" style=\"position:relative;top: 8px;\">✔</ion-label></ion-col>\n          <ion-col size=\"6\" ><ion-label class=\"spanTitle\" style=\"position:relative;top: 8px;\">电影名称</ion-label></ion-col>\n          <ion-col size=\"2\" >\n            <ion-label class=\"spanTitle\"><span style=\"color: red;\">数量</span></ion-label>\n            <ion-label class=\"spanTitle\">单价</ion-label>\n          </ion-col>\n          \n          <ion-col size=\"2\" ><ion-label class=\"spanTitle\" style=\"position:relative;top: 8px;\">金额</ion-label></ion-col>\n          <ion-col size=\"1\" pull=\"0.5\" style=\"text-align: right;\"><ion-label class=\"spanTitle\" title=\"删除当前项目\" style=\"position:relative;top: 8px;text-align: right;\">删</ion-label></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n    <ion-item  lines=\"none\" *ngFor=\"let item of cartList,index as i\" class=\"itemStyle\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\" >\n           <ion-checkbox  class=\"round\" style=\"top: -10px;\" (ionChange)=\"calcMoney(i,$event)\"></ion-checkbox>\n            </ion-col>\n          <ion-col size=\"6\" title=\"{{item['moviename']}}\">\n            <ion-label class=\"spanTitle1\" style=\"position:relative;top: 8px;white-space: normal;overflow: visible;\">{{item['moviename']}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" >\n            <ion-label class=\"spanTitle1\"><span style=\"color: red;\">{{item['buynum']}} </span></ion-label>\n            <ion-label class=\"spanTitle1\">{{ item['price'] | currency:'¥'}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" ><ion-label class=\"spanTitle1\" style=\"position:relative;top: 8px;\">{{ item['buynum'] * item['price'] | currency:'¥'}}</ion-label></ion-col>\n          <ion-col size=\"1\" pull=\"0.5\" >\n              <ion-button fill=\"clear\" class=\"round\" (click)=\"delList(i)\" style=\"position:relative;top: 2px;\">✖</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n    <ion-item lines=\"none\">\n    \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\" ><ion-label class=\"spanTitle\">结算总额：</ion-label></ion-col>  \n          <ion-col size=\"6\" ><ion-label class=\"spanTitle\">{{totalMoney | currency:'¥ '}}</ion-label></ion-col>        \n          \n          \n        </ion-row>\n           \n        <ion-row>\n          <ion-col size=\"4\" >\n            <ion-button  class=\"round2\" (click)=\"billCount()\"><ion-icon name=\"home\" slot=\"start\"></ion-icon>去结算</ion-button>\n          </ion-col>\n          \n           <ion-col size=\"6\" >\n            <ion-button  class=\"round2\" color=\"danger\" (click)=\"clearList()\" ><ion-icon name=\"bus\" slot=\"start\"></ion-icon>清空购物</ion-button>\n          </ion-col>       \n\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n\n\n  </ion-list>\n\n</ion-content>\n";

/***/ }),

/***/ 5769:
/*!*******************************************************!*\
  !*** ./src/app/index/index.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n <ion-toolbar color=\"primary\" >\n  <div >\n   <ion-title color=\"light\"><h1 style=\"position: relative;top: -5px;\">天涯电影</h1></ion-title>\n  </div>\n  <ion-buttons slot=\"start\">\n    <ion-button ><ion-icon name=\"home\" slot=\"icon-only\"></ion-icon></ion-button>\n  </ion-buttons>\n </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-icon name=\"thermometer-outline\" color=\"danger\" ></ion-icon>\n    <span style=\"padding-left: 10px;\"><ion-label>最近热门电影</ion-label></span>\n  </ion-item>\n  \n  \n  <ion-card>\n    <ion-card-content>\n      <ion-spinner name=\"lines\" *ngIf=\"isShow\"  color=\"primary\" style=\"position:relative;left: 50%;display: inline-block;\" #spinner></ion-spinner>\n      \n      <ion-grid>\n        <ion-row>\n          \n          <ion-col size=\"6\" *ngFor=\"let item of allData[0]\">\n            <div  >\n            <img [src]=\"item['cover']\" style=\"cursor: pointer;\" referrerpolicy=\"no-referrer\" width=\"115px\" height=\"164px\" routerLink=\"/moviesdetail/\" [queryParams]=\"{mid:item['mid'],src:item['cover']}\">\n            <br> \n            <span *ngIf=\"item['is_new']=='True'\">          \n            <img src=\"../../assets/icon/new.png\"  width=\"16px\" height=\"16px\" class=\"hotImg\">\n            </span>\n            <ion-label color=\"primary\">  {{item[\"title\"]}}</ion-label>\n            <ion-label color=\"warning\">  {{item[\"rate\"]}}</ion-label>\n           </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- 影评 -->\n  <ion-item>\n    <ion-icon name=\"happy-outline\" color=\"danger\" ></ion-icon>\n    <span style=\"padding-left: 10px;\"><ion-label color=\"dark\">最受欢迎的影评</ion-label></span>\n  </ion-item>\n  <ion-grid>\n    \n    <ion-row *ngFor=\"let obj of commentData[0]\">       \n      <ion-col size=\"3\">\n        <img [src]=\"obj['subjectUrl']\" referrerpolicy=\"no-referrer\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <img [src]=\"obj['avatorUrl']\" referrerpolicy=\"no-referrer\" width=\"18px\" height=\"18px\" class=\"hotImg\">        \n        <ion-label color=\"primary\" class=\"labelSize\">  {{obj[\"uName\"]}}</ion-label>\n        <ion-label color=\"primary\" class=\"labelSize\">  ({{obj[\"uId\"]}})</ion-label>\n        <div>\n          <ion-label color=\"primary\"><span class=\"spanTitle\">{{obj[\"subTitle\"]}}</span></ion-label>\n          \n        </div>\n        <div>\n          <ion-label color=\"primary\"><span class=\"spanTitle\">{{obj[\"subContent\"]}}</span></ion-label>\n          \n        </div>\n      </ion-col>      \n    </ion-row>\n\n    <ion-item><span class=\"spanTitle\" style=\"font-weight: bold;color: blue;\">已经到底部</span></ion-item>\n   \n  </ion-grid>\n\n</ion-content>\n";

/***/ }),

/***/ 5784:
/*!*********************************************************!*\
  !*** ./src/app/movies/movies.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-header >    \n    <ion-toolbar  color=\"primary\">\n       \n      <ion-buttons slot=\"start\" id=\"main\" >\n        <ion-menu-button title=\"选电影\"></ion-menu-button>\n      </ion-buttons>\n      \n      <ion-buttons >\n        <ion-searchbar placeholder=\"搜电影、影人...\" (ionInput)=\"handleInput($event)\" animated=\"true\" color=\"light\" #searchbar></ion-searchbar>\n     </ion-buttons>\n     <ion-buttons slot=\"end\">\n       <ion-button fill=\"clear\" (click)=\"doAlipay()\">  <ion-icon name=\"logo-alipay\" slot=\"icon-only\"></ion-icon></ion-button>\n     </ion-buttons>\n    \n     </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <!-- 拉取内容 -->\n    <div *ngIf=\"allData.length>0\" id=\"box\">\n    \n    <ion-item  *ngFor=\"let in of [].constructor(itemCount),let i=index\">\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\">\n                \n                    <img [src]=\"allData[i*2]['cover']\" style=\"cursor: pointer;\" referrerpolicy=\"no-referrer\" routerLink=\"/moviesdetail/\" [queryParams]=\"{mid:allData[i*2]['mid'],src:allData[i*2]['cover']}\"  width=\"115px\" height=\"164px\">\n                    <br>\n                    <span *ngIf=\"allData[i*2]['is_new']=='True'\">          \n                    <img src=\"../../assets/icon/new.png\"  width=\"16px\" height=\"16px\" class=\"hotImg\">\n                    </span>\n                    <span class=\"spanTitle\">  {{allData[i*2][\"title\"]}}</span>\n                    <span class=\"spanRate\">  {{allData[i*2][\"rate\"]}}</span>\n                   \n            </ion-col>\n            <ion-col size=\"6\">\n                <div  style=\"cursor: hand;\">\n                    <img [src]=\"allData[i*2+1]['cover']\" style=\"cursor: pointer;\" referrerpolicy=\"no-referrer\" routerLink=\"/moviesdetail/\" [queryParams]=\"{mid:allData[i*2+1]['mid'],src:allData[i*2+1]['cover']}\" width=\"115px\" height=\"164px\">\n                    <br> \n                    <span *ngIf=\"allData[i*2+1]['is_new']\">          \n                    <img src=\"../../assets/icon/new.png\"  width=\"16px\" height=\"16px\" class=\"hotImg\">\n                    </span>\n                    <span class=\"spanTitle\">  {{allData[i*2+1][\"title\"]}}</span>\n                    <span class=\"spanRate\">  {{allData[i*2+1][\"rate\"]}}</span>\n                   </div>\n\n            </ion-col>\n           \n        </ion-row>\n    </ion-grid>\n    </ion-item>\n   \n    </div>\n\n    <!-- <ion-card>\n        <ion-card-content>\n          <ion-spinner name=\"lines\" *ngIf=\"onShow\"  color=\"primary\" style=\"position:relative;left: 50%;display: inline-block;\" ></ion-spinner>\n          \n          <ion-grid>\n            <ion-row>\n              \n              <ion-col size=\"6\" *ngFor=\"let item of allData\">\n                <div  style=\"cursor: hand;\">\n                <img [src]=\"item['cover']\" referrerpolicy=\"no-referrer\" width=\"115px\" height=\"164px\">\n                <br> \n                <span *ngIf=\"item['is_new']\">          \n                <img src=\"../../assets/icon/new.png\"  width=\"16px\" height=\"16px\" class=\"hotImg\">\n                </span>\n                <ion-label color=\"primary\">  {{item[\"title\"]}}</ion-label>\n                <ion-label color=\"warning\">  {{item[\"rate\"]}}</ion-label>\n               </div>\n              </ion-col>\n              <ion-item></ion-item>\n            </ion-row>\n            \n          </ion-grid>\n        </ion-card-content>\n    </ion-card> -->\n\n    \n    \n    <ion-button fill=\"clear\" expand=\"full\" *ngIf=\"start>=12\"><h5>没有更多了</h5></ion-button>\n    \n    <ion-infinite-scroll threshold=\"50px\"  #infinite (ionInfinite)=\"getMore($event)\" >\n        <ion-infinite-scroll-content loadingSpinner=\"lines\" loadingText=\"加载更多...\">             \n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>   \n    \n      \n\n\n    <!-- 侧边栏菜单 -->\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n        <ion-header>\n          <ion-toolbar color=\"primary\">\n            <ion-title>选电影</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <ion-list>\n   \n            <ion-item button (click)=\"doMenu(1)\" >              \n              <ion-icon name=\"mail\" slot=\"start\" ></ion-icon>\n              <ion-label >热门</ion-label>\n             \n              <ion-icon name=\"checkmark\" slot=\"end\"  *ngIf=\"typeId==1\"></ion-icon>            \n              \n            </ion-item>\n            <ion-item  button (click)=\"doMenu(2)\" >\n              <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\n              <ion-label>最新</ion-label>\n              <ion-icon name=\"checkmark\" slot=\"end\"  *ngIf=\"typeId==2\"></ion-icon> \n            </ion-item>\n            <ion-item  button (click)=\"doMenu(3)\">\n              <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n              <ion-label>经典</ion-label>\n              <ion-icon name=\"checkmark\" slot=\"end\"  *ngIf=\"typeId==3\"></ion-icon> \n            </ion-item>\n            <ion-item  button (click)=\"doMenu(4)\">\n              <ion-icon name=\"archive\" slot=\"start\"></ion-icon>\n              <ion-label>天涯高分</ion-label>\n              <ion-icon name=\"checkmark\" slot=\"end\"  *ngIf=\"typeId==4\"></ion-icon> \n            </ion-item>\n            <ion-item button (click)=\"doMenu(5)\">\n              <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n              <ion-label>冷门佳片</ion-label>\n              <ion-icon name=\"checkmark\" slot=\"end\"  *ngIf=\"typeId==5\"></ion-icon> \n            </ion-item>\n            <ion-item  button (click)=\"doMenu(6)\">\n              <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n              <ion-label>可播放</ion-label>\n              <ion-icon name=\"checkmark\" slot=\"end\"  *ngIf=\"typeId==6\"></ion-icon> \n            </ion-item>\n          </ion-list>\n        \n</ion-content>";

/***/ }),

/***/ 1413:
/*!*********************************************************************!*\
  !*** ./src/app/moviesdetail/moviesdetail.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n <ion-toolbar color=\"primary\">\n  \n   <ion-buttons slot=\"start\">\n     <ion-button (click)=\"goBack()\" title=\"回上页\"><ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon></ion-button>\n     <!-- <ion-back-button  text=\"\" icon=\"arrow-back\" color=\"danger\"></ion-back-button> -->\n   </ion-buttons>\n   <ion-label ><h1>电影详情</h1></ion-label>\n  \n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item><ion-label color=\"dark\"><h1 style=\"font-weight: bold;\">{{allData[\"subTitle\"]}}</h1></ion-label></ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"5\">\n        <img [src]=\"src\" width=\"115px\" height=\"164px\" title=\"贴了个貌似图片...\">\n\n      </ion-col>\n      <ion-col size=\"7\">\n        <div><ion-label color=\"primary\" class=\"labelSize\"><span class=\"spanTitle\">导演：</span>{{allData[\"directors\"]}}</ion-label></div>\n        <div><ion-label color=\"primary\" class=\"labelSize\"><div class=\"isCollapsed\" title=\"点击可看所有角色\" (click)=\"doExpend($event)\" ><span class=\"spanTitle\">主演：</span>{{allData[\"actors\"]}}</div></ion-label></div>\n        <div><ion-label color=\"primary\" class=\"labelSize\"><span class=\"spanTitle\">类型：</span>{{allData[\"types\"]}}</ion-label></div>\n        <div><ion-label color=\"primary\" class=\"labelSize\"><span class=\"spanTitle\">制片国家/地区：</span>{{allData[\"region\"]}}</ion-label></div>\n        <div><ion-label color=\"primary\" class=\"labelSize\"><span class=\"spanTitle\">上映日期：</span>{{allData[\"release_year\"]}}</ion-label></div>\n        <div><ion-label color=\"primary\" class=\"labelSize\"><span class=\"spanTitle\">片长：</span>{{allData[\"duration\"]}}</ion-label></div>\n        <div><ion-label color=\"primary\"  class=\"labelSize\"><span class=\"spanTitle\">评分：</span>{{allData[\"rate\"]}}</ion-label>\n          &nbsp;&nbsp;<span style=\"position:relative;top: 2px;\" title=\"{{allData['star']}} 星\">\n           <ion-icon name=\"{{(allData['star']>0)?((allData['star']<1)?'star-half':'star'):'star-outline'}}\" class=\"star\" color=\"warning\"></ion-icon>\n           <ion-icon name=\"{{(allData['star']>1)?((allData['star']<2)?'star-half':'star'):'star-outline'}}\" class=\"star\" color=\"warning\"></ion-icon>\n           <ion-icon name=\"{{(allData['star']>2)?((allData['star']<3)?'star-half':'star'):'star-outline'}}\" class=\"star\" color=\"warning\"></ion-icon>\n           <ion-icon name=\"{{(allData['star']>3)?((allData['star']<4)?'star-half':'star'):'star-outline'}}\" class=\"star\" color=\"warning\"></ion-icon>\n           <ion-icon name=\"{{(allData['star']>4)?((allData['star']<5)?'star-half':'star'):'star-outline'}}\" class=\"star\" color=\"warning\"></ion-icon>\n           \n           </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\"><span class=\"spanTitle\" style=\"position:relative;top:8px;color: blue;\">购买数：</span></ion-col>\n      <ion-col size=\"2\">\n          <ion-button fill=\"outline\" size=\"small\" shape=\"round\" (click)=\"doReduce()\"><ion-icon name=\"remove\"></ion-icon></ion-button>     \n      </ion-col >\n      <ion-col size=\"1\" style=\"text-align: center;\"> \n        <span class=\"spanTitle1\" style=\"color:black;text-align: center;font-weight: bold;\">{{numBuy}}</span>\n      </ion-col >\n      <ion-col size=\"2\"> \n        <ion-button fill=\"outline\" size=\"small\" shape=\"round\" (click)=\"doAdd()\" ><ion-icon name=\"add\" color=\"danger\"></ion-icon></ion-button>      \n      </ion-col >\n      <ion-col size=\"4\">\n        <ion-button shape=\"round\" (click)=\"addCart()\">加购物车</ion-button>     \n      </ion-col >\n     </ion-row>\n  </ion-grid>\n </ion-item>\n\n <!-- 用户评论 -->\n  <ion-item  lines=\"none\">\n    <div><ion-label >\n      <span class=\"spanTitle\" *ngIf=\"allData['short_Comment_Content']!=undefined\">用户评论 :</span>\n    </ion-label></div>\n  </ion-item>\n  <ion-item lines=\"none\">\n  <div><ion-label class=\"ion-text-wrap\">\n    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n    <span class=\"spanTitle\" *ngIf=\"allData['short_Comment_Content']!=undefined\">{{allData['short_Comment_Content']}}</span>\n  </ion-label></div>\n  </ion-item>\n\n\n</ion-content>";

/***/ }),

/***/ 4872:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"index\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>首 页</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"movies\">\n      <ion-icon name=\"videocam\"></ion-icon>\n      <ion-label>电 影</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"cart\"></ion-icon>\n      <ion-label>购物车</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"user\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>用 户</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>";

/***/ }),

/***/ 6383:
/*!*****************************************************!*\
  !*** ./src/app/user/user.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <div >\n      <ion-title color=\"light\"><h1 style=\"position: relative;top: -5px;\">用户信息 ({{(isLogin==true)?userName:\"未登录\"}})</h1></ion-title>\n     </div>\n     <ion-buttons slot=\"start\">\n     <ion-button (click)=\"exitApp()\"><ion-icon name=\"people\" slot=\"icon-only\"></ion-icon></ion-button>\n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"isLogin\">\n      <ion-button fill=\"clear\" title=\"退出登录\" (click)=\"quit()\">  <ion-icon name=\"exit\" slot=\"icon-only\" color=\"dark\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n<br>\n<br>\n<form *ngIf=\"(!isLogin && status==0)\">\n   <ion-card>\n    <ion-card-header  style=\"height: 40px;background-color:#4854e0;\"><span style=\"position:relative ;top:-8px ;color: white;\">用户登录</span></ion-card-header>\n   \n   <ion-card-content>\n       <ion-item style=\"text-align: center;\" lines=\"none\"><ion-label color=\"primary\" >账 号：  </ion-label>\n        <!-- <input name=\"userid\" [(ngModel)]=\"userId\"> -->\n        <ion-input name=\"userid\" [(ngModel)]=\"userId\" maxlength=\"10\"></ion-input>\n      </ion-item>\n       <ion-item style=\"text-align: center;\" lines=\"none\"><ion-label color=\"primary\">密 码：  </ion-label>\n        <!-- <input name=\"userpwd\"  [(ngModel)]=\"userPwd\" type=\"password\"> -->\n        <ion-input name=\"userpwd\"  [(ngModel)]=\"userPwd\" type=\"password\"></ion-input>\n      </ion-item>\n        \n       <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\" push=\"2\">\n            <ion-button (click)=\"login()\" size=\"small\"><ion-icon name=\"log-in\" slot=\"start\"></ion-icon>用户登陆</ion-button>\n          </ion-col>\n          <ion-col size=\"4\" push=\"4\">\n            <ion-button size=\"small\" (click)=\"goSign()\" color=\"success\"><ion-icon name=\"checkmark\" slot=\"start\" ></ion-icon>去注册</ion-button>\n          </ion-col>\n        </ion-row>\n       </ion-grid>\n       <ion-label color=\"danger\" *ngIf=\"isLogin==false\">{{errMsg}}</ion-label>\n   </ion-card-content>\n\n  </ion-card>\n</form>\n\n<!-- 新用户注册 -->\n<form #f=\"ngForm\" (ngSubmit)=\"formSubmit(f)\" novalidate *ngIf=\"status==1\">\n  <ion-card>\n    <ion-card-header  style=\"height: 40px;background-color: #28ba62;\"><span style=\"position:relative ;top:-8px ;color: white;\">新用户注册</span></ion-card-header>\n    <ion-card-content>\n      <ion-item style=\"text-align: center; \"><ion-label color=\"primary\" >账 号：  </ion-label>\n        <!-- <input name=\"uId\" ngModel required > -->\n        <ion-input name=\"uId\" ngModel required maxlength=\"10\"></ion-input>\n      </ion-item>\n      <ion-item style=\"text-align: center;\"><ion-label color=\"primary\" >名 称： </ion-label> \n        <!-- <input name=\"uName\" ngModel required> -->\n        <ion-input name=\"uName\" ngModel required=\"\" maxlength=\"50\"></ion-input>\n      </ion-item>\n      <ion-item style=\"text-align: center;\"><ion-label color=\"primary\">密 码：  </ion-label>\n        <!-- <input name=\"uPwd\" ngModel required type=\"password\"> -->\n        <ion-input name=\"uPwd\" ngModel required type=\"password\"></ion-input>\n      </ion-item>\n      <div style=\"text-align: right;\">\n        <ion-button size=\"small\" type=\"ngSubmit\" color=\"success\"><ion-icon name=\"checkmark\" slot=\"start\" ></ion-icon>新人注册 </ion-button>\n          &nbsp;&nbsp;<ion-button (click)=\"returnLogin()\" size=\"small\" ><ion-icon name=\"log-in\" slot=\"start\"></ion-icon>返回登陆</ion-button> \n       </div>\n    </ion-card-content>\n   \n    <ion-label color=\"danger\" *ngIf=\"isLogin==false\">{{errMsg}}</ion-label>\n  </ion-card>\n</form>\n\n<!-- 显示已登录信息 -->\n<ion-list *ngIf=\"status==2\">\n    <ion-item><ion-icon slot=\"start\" name=\"people\" color=\"primary\"></ion-icon><span style=\"color: blue;\">用户名称：{{userName}}</span></ion-item>\n    <ion-item><ion-icon slot=\"start\" name=\"bus\" color=\"primary\"></ion-icon><span style=\"color: blue;\">用户账号：{{userId}}</span></ion-item>\n    <ion-item>登录时间：{{result[\"loginTime\"] | date:\"YYYY-MM-dd HH:mm:ss\"}}</ion-item>\n</ion-list>\n\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map