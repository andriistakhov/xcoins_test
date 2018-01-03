webpackJsonp([0],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_module__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MainPage } from '../main/main';
// import { ListPage } from '../list/list';
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__login_login_module__["LoginPageModule"]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_accounts__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exchange_exchange__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__balances_balances__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ScreenOrientation } from '@ionic-native/screen-orientation';
// import { Component, ViewChild } from '@angular/core';
// import { , Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';







var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */];
        this.pages = [
            { title: 'Home', component: HomePage_1 },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */] },
            { title: 'Accounts', component: __WEBPACK_IMPORTED_MODULE_4__accounts_accounts__["a" /* AccountsPage */] }
        ];
    }
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.switchPage = function (page) {
        console.log(page);
        switch (page) {
            case 'accounts': {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__accounts_accounts__["a" /* AccountsPage */]);
                break;
            }
            case 'dashboard': {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                break;
            }
            case 'balances': {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__balances_balances__["a" /* BalancesPage */]);
                break;
            }
            case 'exchange': {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__exchange_exchange__["a" /* ExchangePage */]);
                break;
            }
            case 'tutorial': {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial__["a" /* TutorialPage */]);
                break;
            }
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], HomePage.prototype, "nav", void 0);
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/home/home.html"*/'<ion-menu [content]="content" side="left" type="push" id="main-menu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-icon name="menu"></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list> -->\n    <div class="contentscr">\n    <div class="m_cat">NAVIGATE</div>\n    <button class="m_item" (click)="switchPage(\'accounts\')" menuClose>\n      <div class="it_ico ico_acc"></div>\n      <div class="it_text">Accounts</div>\n      <div class="arrow-left"></div>\n    </button>\n    <button class="m_item" (click)="switchPage(\'dashboard\')" menuClose>\n      <div class="it_ico ico_dash"></div>\n      <div class="it_text">Dashboard</div>\n      <div class="arrow-left"></div>\n    </button>\n    <button class="m_item" (click)="switchPage(\'exchange\')" menuClose>\n      <div class="it_ico ico_exch"></div>\n      <div class="it_text">Exchange</div>\n      <div class="arrow-left"></div>\n    </button>\n    <button class="m_item" (click)="switchPage(\'balances\')" menuClose>\n      <div class="it_ico ico_bal"></div>\n      <div class="it_text">Balances</div>\n      <div class="arrow-left"></div>\n    </button>\n    <div class="m_cat">TUTORIAL</div>\n    <button class="m_item" (click)="switchPage(\'tutorial\')" menuClose>\n      <div class="it_ico ico_tut"></div>\n      <div class="it_text">Tutorial</div>\n      <div class="arrow-left"></div>\n    </button>\n    </div>\n    <div class="terms">\n      <div class="term_i">Privacy policy</div>\n      <div class="term_i">Terms of use</div>\n      <div class="term_i">© 2017 Bitior</div>\n    </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map