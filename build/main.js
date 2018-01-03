webpackJsonp([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_input_floating_input_floating__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_custom_icons__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {TranslateModule,TranslateLoader} from '@ngx-translate/core';


function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/login/", ".json");
}
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_0__components_input_floating_input_floating__["a" /* InputFloatingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_5_ionic2_custom_icons__["a" /* CustomIconsModule */] // Add this!
            // TranslateModule.forChild({
            //   loader: {
            //     provide: TranslateLoader,
            //     useFactory: createTranslateLoader,
            //     deps: [HttpClient]
            // }
            // })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__components_input_floating_input_floating__["a" /* InputFloatingComponent */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return language; });
/* unused harmony export setLanguage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_custom_icons__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nicky_lenaers_ngx_scroll_to__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_data__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_screen_orientation__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_main_main__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_list_list__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_accounts_accounts__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_dashboard_dashboard__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_exchange_exchange__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_balances_balances__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { Keyboard } from '@ionic-native/keyboard'; need discuss
// for live site removes # from URL 
//also needs a line in nginx.conf = location / { try_files $uri /index.html; }
//import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';


















// import { AccountsPage } from '../pages/accounts/accounts';
// import { List } from 'ionic-angular/components/list/list';
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var language = 'en_US';
function setLanguage(lang) {
    language = lang;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* xCoinsApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_accounts_accounts__["a" /* AccountsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_exchange_exchange__["a" /* ExchangePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_balances_balances__["a" /* BalancesPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* xCoinsApp */], {
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ionic2_custom_icons__["a" /* CustomIconsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* xCoinsApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_accounts_accounts__["a" /* AccountsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_exchange_exchange__["a" /* ExchangePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_balances_balances__["a" /* BalancesPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__providers_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* Content */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorType; });
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["NotAuthorized"] = 0] = "NotAuthorized";
    ErrorType[ErrorType["ServerError"] = 1] = "ServerError";
    ErrorType[ErrorType["Unknown"] = 2] = "Unknown";
})(ErrorType || (ErrorType = {}));
//# sourceMappingURL=api-model.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		345,
		0
	],
	"../pages/login/login.module": [
		117
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 179;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, apiService, storage, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.storage = storage;
        this.accCode = "";
        this.progressDisplayNone = 'none';
        this.customeLogin = 'Account name';
        this.token = "";
        this.accountsList = [];
        this.addAccountVisibility = 'invisible';
        this.stepTransaction = 'invisible';
        this.listVisibility = 'visible';
        this.items = [];
        // private rootPage: string = '';
        // private array: Array<> = []
        this.searchTerm = '';
        this.accCreate = formBuilder.group({
            accName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])]
        });
        this.accCreate.valueChanges.subscribe(function (_value) { return _this.clearForm(); });
        // this.items.push('btc');
        // this.items.push('eth');
        // this.items.push('usd');
        // this.items.push('igrc')
        this.initItems();
    }
    MainPage.prototype.initItems = function () {
        this.items = [];
        this.items.push('btc');
        this.items.push('eth');
        this.items.push('usd');
        this.items.push('igrc');
    };
    MainPage.prototype.getItems = function (event) {
        console.log(event);
        this.items.filter(function (event) {
        });
    };
    MainPage.prototype.clearForm = function () {
    };
    // .mergeMap((_account: Account)=> this.apiService.getUserAccounts(this.token))
    MainPage.prototype.createAccountForUser = function (accname) {
        var _this = this;
        console.log(accname);
        this.apiService.createAccount(accname, this.accCode, this.token)
            .subscribe(function (account) {
            console.log(account);
            _this.stepTransaction = 'invisible';
            // this.accountsList = accounts
            // console.log("new list", this.accountsList);
            // this.addAccountVisibility = 'invisible';
            // this.listVisibility = 'visible';
        }, function (error) {
            console.log(error);
        });
    };
    MainPage.prototype.ngOnInit = function () {
        // .mergeMap((_result: Boolean) => this.apiService.login(login, password))
        var _this = this;
        var token;
        this.storage.get("USER_TOKEN")
            .then(function (_token) {
            token = _token;
            _this.token = _token;
            console.log("token ", _token);
            _this.apiService.getUserAccounts(_token)
                .subscribe(function (accounts) {
                console.log(accounts);
                _this.accountsList = accounts;
            }, function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MainPage.prototype.addAccount = function () {
        this.addAccountVisibility = 'visible';
        this.listVisibility = 'invisible';
    };
    MainPage.prototype.onCancel = function () {
        this.accCreate.controls.accName.setValue('');
        this.stepTransaction = 'invisible';
        // this.listVisibility = 'visible';
    };
    MainPage.prototype.getUserAccounts = function () {
        var _this = this;
        this.apiService.getUserAccounts(this.token)
            .subscribe(function (accounts) {
            console.log(accounts);
            _this.accountsList = accounts;
        }, function (error) {
            console.log(error);
        });
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.goToSecondStep = function (code) {
        this.accCode = code;
        console.log(this.accCode);
        this.stepTransaction = 'visible';
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/main/main.html"*/'<ion-menu id="sub-menu" side="right" [content]="subContent">\n  <div class="right-menu">\n\n    <div class="user-info-container">\n      <div class="user-info-container-logo">\n        <custom-icon set="main" name="user-icon" class="user-toolbar"></custom-icon>\n        <!-- <div class="logoxx"></div> -->\n      </div>\n      <div class="user-info-container-data">\n        <p>{{username}}</p>\n        <p>{{email}}</p>\n      </div>\n    </div>\n    <div>\n\n    </div>\n    <div>\n\n    </div>\n    <div>\n\n    </div>\n  </div>\n  <!-- <p>hello sub menu</p>\n  <button>sadas</button> -->\n</ion-menu>\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="menu_b">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Home</ion-title> -->\n    <div class="logo-container">\n      <!-- <custom-icon center set="main" name="logo" class="logo-toolbar"></custom-icon> -->\n      <img class="log_m" alt="" src="assets/img/Logo_Copy_3@3x.png">\n    </div>\n    <!-- <custom-icon set="main" name="user-icon" class="user-toolbar"></custom-icon> -->\n    <button menuToggle="sub-menu" class="user_m" right>\n      <custom-icon set="main" name="user-icon" class="user-toolbar user_l"></custom-icon>\n      <div class="user_b">Username</div>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #subContent>\n  <button ion-button class="btn-add-account" clear (click)="addAccount()">Light Clear</button>\n\n\n  <div [@addAccountTrigger]="addAccountVisibility" class="form-container">\n    <form class="form" [formGroup]="accCreate" (ngSubmit)="createAccountForUser(accCreate.value.accName)">\n      <div class="add-acc-container">\n        <div class="add-acc-name">\n          <input-floating formControlName="accName" [(ngModel)]="login" [type]="text" [border]="borderL" [hint]="customeLogin" [progressDisplay]="progressDisplayNone"\n            [backgroundColorOverlay]="backgroundColorOverlayWhite"></input-floating>\n        </div>\n      </div>\n      <button ion-button class="blue-button" large>CREATE ACCOUNT</button>\n    </form>\n    <button ion-button class="clear-button" color="dark" outline large (click)="onCancel()">CANCEL</button>\n  </div>\n\n  <div [@stepTriggerOne]="stepTransaction" class="first-step">\n    <div>\n      <div class="add-acc-name">\n        <!-- [(ngModel)]="myInput"\n        [showCancelButton]="shouldShowCancel"\n        (ionInput)="onInput($event)"\n        (ionCancel)="onCancel($event)" -->\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="getItems($event)">\n        </ion-searchbar>\n      </div>\n    </div>\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        <button ion-button margin (click)="goToSecondStep(item)">\n          {{item}}\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div [@stepTrigger]="stepTransaction" class="second-step">\n    <form class="form" [formGroup]="accCreate" (ngSubmit)="createAccountForUser(accCreate.value.accName)">\n      <div class="add-acc-container">\n        <div class="add-acc-name">\n          <input-floating formControlName="accName" [(ngModel)]="login" [type]="text" [border]="borderL" [hint]="customeLogin" [progressDisplay]="progressDisplayNone"\n            [backgroundColorOverlay]="backgroundColorOverlayWhite"></input-floating>\n        </div>\n      </div>\n      <button ion-button class="blue-button" large>CREATE ACCOUNT</button>\n    </form>\n    <button ion-button class="clear-button" color="dark" outline large (click)="onCancel()">CANCEL</button>\n  </div>\n\n  <!-- <p>content of the sub page</p> -->\n</ion-content>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/main/main.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('addAccountTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ opacity: '0', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ opacity: '1', display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('visible => invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('invisible => visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('200ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('stepTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'translate(100%, -100%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'translate(0%, -100%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('visible => invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('invisible => visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('200ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('stepTriggerOne', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'translateX(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'translateX(-100%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('visible => invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('invisible => visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], MainPage);

// function isBigEnough(element, index, array) { 
//    return (element >= 10); 
// }  
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/list/list.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Listovka</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content>\n        <ion-list>\n          <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n            {{item.title}}\n            <div class="item-note" item-end>\n              {{item.note}}\n            </div>\n          </button>\n        </ion-list>\n        <div *ngIf="selectedItem" padding>\n            \n          You navigated here from\n          <b>{{selectedItem.title}}</b>\n        </div>\n      </ion-content>\n      '/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountsPage = (function () {
    function AccountsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return AccountsPage;
}());
AccountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accounts',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/accounts/accounts.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Accounts</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <p>Accounts Page</p>\n  </ion-content>\n  '/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/accounts/accounts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], AccountsPage);

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    return TutorialPage;
}());
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/tutorial/tutorial.html"*/'<!--\n  Generated template for the TutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tutorial</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/tutorial/tutorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangePage = (function () {
    function ExchangePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExchangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExchangePage');
    };
    return ExchangePage;
}());
ExchangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exchange',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/exchange/exchange.html"*/'<!--\n  Generated template for the ExchangePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Exchange</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/exchange/exchange.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ExchangePage);

//# sourceMappingURL=exchange.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BalancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BalancesPage = (function () {
    function BalancesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BalancesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalancesPage');
    };
    return BalancesPage;
}());
BalancesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-balances',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/balances/balances.html"*/'<!--\n  Generated template for the BalancesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Balances</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/balances/balances.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], BalancesPage);

//# sourceMappingURL=balances.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/dashboard/dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(129);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFloatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Keyboard } from '@ionic-native/keyboard';
// export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
// };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return InputFloatingComponent; }),
    multi: true
};
var InputFloatingComponent = (function () {
    function InputFloatingComponent(events) {
        var _this = this;
        this.events = events;
        this.type = "text";
        this.progressDisplay = "";
        this.letterSpacing = "";
        this.force = false;
        this.text = "";
        this.hint = "Hint";
        this.hintError = "";
        this.hintErrorColor = "#FF0000";
        this.c = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.hintColor = "#A8A8A8";
        this.accentColor = "#A8A8A8";
        this.backgroundColorOverlay = "#FFFFFF";
        this.progressWidth = '0%';
        this.border = "";
        // @Input('value') innerValue = '';  
        this.errors = ['This field is required'];
        this.inputState = 'collapsed';
        this.hintErrorState = 'invisible';
        this.spacing = true;
        this._value = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.propagateChange = function (_) { };
        // private keyboard: Keyboard
        // this.keyboard.hideKeyboardAccessoryBar
        // this.keyboard.onKeyboardShow().subscribe(
        //   next =>{
        //     console.log("onNext ", next);
        //   },
        //   error =>{
        //     console.log("onError ", error);
        //   },
        //   () => {
        //     console.log("onComplete");
        //   }
        // )
        // this.checkCollapse.subscribe()
        events.subscribe('close:inputs', function () {
            _this.collapse();
        });
    }
    InputFloatingComponent.prototype.onFocusOut = function () {
        if (this.force == true) {
            console.log("Must be collapsed");
            // console.log("must be ")
            this.inputState = 'collapsed';
            this.hintErrorState = 'invisible';
        }
        console.log("On focus out " + this._value);
        if (!this._value) {
            this.inputState = 'collapsed';
            this.hintErrorState = 'invisible';
        }
        this.inputState = 'collapsed';
        this.hintErrorState = 'invisible';
        // if(this._value == ""){
        //   this.inputState = 'collapsed';      
        //   this.hintErrorState = 'invisible';
        // }
    };
    InputFloatingComponent.prototype.onFocus = function () {
        this.inputState = 'expanded';
        if (this.hintError) {
            this.hintErrorState = 'visible';
        }
    };
    InputFloatingComponent.prototype.ngOnChanges = function () {
    };
    InputFloatingComponent.prototype.expand = function () {
        var _this = this;
        this.inputState = 'expanded';
        if (this.hintError) {
            this.hintErrorState = 'visible';
        }
        // this.onFocus();
        setTimeout(function () {
            _this.inputRef.setFocus();
        }, 10);
    };
    InputFloatingComponent.prototype.collapse = function () {
        console.log("On focus out " + this._value);
        if (!this._value) {
            this.inputState = 'collapsed';
            this.hintErrorState = 'invisible';
        }
    };
    InputFloatingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // RESET the custom input form control UI when the form control is RESET
        this.c.valueChanges.subscribe(function () {
            // check condition if the form control is RESET
            if (_this.c.value == "" || _this.c.value == null || _this.c.value == undefined) {
                // this.innerValue = "";
                _this.inputRef.nativeElement.value = "";
                // this.onFocusOut();
                // this.collapse();
            }
        });
        // if(this.checkCollapse){
        //   this.checkCollapse.subscribe(
        //     (next)=>{
        //       if(next == true){
        //         // this.collapse();
        //       }
        //     }
        //   );
        // }
    };
    Object.defineProperty(InputFloatingComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    // write the value to the input
    InputFloatingComponent.prototype.writeValue = function (value) {
        this._value = value;
        this.onChange(value);
    };
    InputFloatingComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    InputFloatingComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return InputFloatingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], InputFloatingComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], InputFloatingComponent.prototype, "progressDisplay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"])
], InputFloatingComponent.prototype, "checkCollapse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], InputFloatingComponent.prototype, "letterSpacing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InputFloatingComponent.prototype, "force", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], InputFloatingComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "hint", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "hintError", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "hintErrorColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
], InputFloatingComponent.prototype, "c", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "hintColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "accentColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "backgroundColorOverlay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "progressWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFloatingComponent.prototype, "border", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InputFloatingComponent.prototype, "spacing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('input'),
    __metadata("design:type", Object)
], InputFloatingComponent.prototype, "inputRef", void 0);
InputFloatingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'input-floating',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/components/input-floating/input-floating.html"*/'<div style="background: #FFFFFF;" [style.border]="border">\n  <div class="input-floating" [style.background-color]="backgroundColorOverlay" (click)="expand()" (tap)="expand()">\n    <ion-label [@scaleChange]="inputState" class="input-label">\n      <div class="hint-label">\n        <div class="hint-size">{{hint}}</div>\n        <div [@opacityState]="hintErrorState">\n          <p class="hint-field" [style.color]="hintErrorColor" ng-pattern="regex">\n            <b>{{hintError}}</b>\n          </p>\n        </div>\n      </div>\n    </ion-label>\n    <ion-input type=\'text\' [(ngModel)]="value" [ngClass]="{\'floating-input\': spacing == true, \'floating-input-spacing\': spacing == false}"\n      class="floating-input" (blur)="collapse()"  [@heightChange]="inputState" type="{{type}}" #input id="input" autofocus></ion-input>\n  </div>\n</div>\n<div class="linear-progress" style="position: relative;">\n  <div class="linear-progress" style="background:rgba(190, 190, 190, 1);" [style.display]="progressDisplay">\n\n  </div>\n  <div class="linear-progress" style="z-index: 1000; position: absolute; top: 0;" [style.background]="hintErrorColor" [style.display]="progressDisplay"\n    [style.width]="progressWidth">\n\n  </div>\n</div>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/components/input-floating/input-floating.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('heightChange', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'scaleY(0.0)', height: '0', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'scaleY(1.0)', height: '*', display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('collapsed <=> expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('150ms')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('scaleChange', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'scale(1.0)', color: '#A8A8A8' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ transform: 'scale(0.8) translateX(-11.5%)', color: '#488AFF', fontWeight: '500', paddingTop: '0px' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('collapsed <=> expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('150ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('opacityState', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ opacity: '1' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ opacity: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('150ms ease-out')),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */]])
], InputFloatingComponent);

//# sourceMappingURL=input-floating.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_platform__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage_es2015_storage__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_util_events__ = __webpack_require__(50);
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








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, apiService, formBuilder, translate, screenOrientation, platform, storage, appCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.translate = translate;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.storage = storage;
        this.appCtrl = appCtrl;
        this.events = events;
        this.param = { value: 'HELLO' };
        this.errorState = 'invisible';
        this.errorStateMobile = 'invisible';
        this.backPassTrigger = 'invisible';
        this.backPassReTrigger = 'invisible';
        this.backLogTrigger = 'invisible';
        this.errorMessage = '';
        this.state = 'active';
        this.visible = true;
        this.introState = 'none';
        this.logoState = 'visible';
        this.mainState = 'visible';
        this.opacityState = 'invisible';
        //SignUpErrors
        this.opacityLoginError = 'invisible';
        this.opacityPasswordError = 'invisible';
        this.opacityErrorL = 'invisible';
        this.opacityErrorP = 'invisible';
        this.opacityErrorRP = 'invisible';
        //PassHintErrors
        this.passLabelVisibility = 'invisible';
        this.loginVisibility = 'invisible';
        this.signUpVisibility = 'invisible';
        this.inputVisibility = 'visible';
        this.loginAvailable = 'invisible';
        this.passAvailable = 'invisible';
        this.passReAvailable = 'invisible';
        this.signUpIntroState = 'none';
        this.loginError = 'none';
        this.passwordError = 'none';
        this.passHintError = ' ';
        this.passwordHelpHint = 'Password must be at least 6 characters';
        this.loginErrorSignUp = "Please complete all required fields";
        this.showProgress = false;
        this.colorVar = "rgba(101, 101, 101, 1)";
        // Custome variables
        this.customeLogin = 'Login';
        this.customePassword = 'Password';
        this.customeRepeatPassword = 'Repeat Password';
        this.progressDisplayNone = 'none';
        this.progressDisplay = 'none';
        this.letterSpacing = false;
        this.backgroundColorOverlayWhite = "#FFFFFF";
        this.backgroundColorOverlay = "#FFFFFF";
        this.login = '';
        this.password = '';
        this.repeatPassword = '';
        this.passType = 'password';
        this.borderL = '0px solid #ff0000';
        this.borderP = '0px solid #ff0000';
        this.borderRP = '0px solid #ff0000';
        this.progressWidth = '0%';
        this.countt = 0;
        this.lastLogin = '';
        this.logggInError = 'Please enter login ';
        this.android = false;
        this.browser = true;
        this.loginState = false;
        this.signUpState = false;
        this.mainScreen = true;
        this.loginUseCase = false;
        this.registerUseCase = false;
        this.loginToRegisterUseCase = false;
        this.mainUseCase = true;
        this.isLogin = true;
        this.forceCollapse = false;
        this.avaible = false;
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_6__app_app_module__["b" /* language */]);
        this.authForm = formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])]
        });
        this.authForm.valueChanges.subscribe(function (_value) { return _this.clearForm(); });
        this.signForm = formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6)])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])]
        });
        this.signForm.valueChanges.subscribe(function (_value) { return _this.onErrors(); });
        this.authForm.valueChanges.subscribe(function (_value) { return _this.clearForm(); });
        this.signForm.controls.login.valueChanges.subscribe(function (_value) { return _this.checkUserName(); });
    }
    LoginPage.prototype.checkUserName = function () {
        var _this = this;
        // if(this.avaible){
        setTimeout(function () {
            _this.isLoginAvaible();
        }, 1000);
        // }
    };
    // hideError(){
    //   if(this.signForm.controls.password.value.length == ""){
    //     this.opacityState = 'invisible';
    //   }
    // }
    // showError(){
    //   // if(this.signForm.controls.password.value.length > 0 && this.signForm.controls.password.value.length <){
    //   //   this.opacityState = 'invisible';
    //   // } else {
    //     this.opacityState = 'visible';
    //   // }
    // }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("Platform width ", this.platform.width());
        console.log("Platform height ", this.platform.height());
        this.platform.registerBackButtonAction(function () {
            if (_this.mainUseCase == true) {
                _this.platform.exitApp();
            }
            else if (_this.loginUseCase == true) {
                // this.platform.exitApp()
                _this.authForm.controls.login.setValue('');
                _this.authForm.controls.password.setValue('');
                _this.loginError = 'none';
                _this.passwordError = 'none';
                _this.loginVisibility = 'invisible';
                // this.introState = 'none';
                _this.mainUseCase = true;
                _this.loginUseCase = false;
                setTimeout(function () {
                    _this.visible = !_this.visible;
                    _this.state = 'active';
                    _this.introState = 'none';
                }, 200);
            }
            else if (_this.registerUseCase == true) {
                _this.opacityErrorL = 'invisible';
                _this.opacityErrorP = 'invisible';
                _this.opacityErrorRP = 'invisible';
                _this.opacityLoginError = 'invisible';
                _this.borderL = '1px solid #FFFFFF';
                _this.borderP = '1px solid #FFFFFF';
                _this.borderRP = '1px solid #FFFFFF';
                // this.signForm.controls.login.setValue('');
                _this.signForm.controls.password.setValue('');
                _this.signForm.controls.login.patchValue("");
                _this.signForm.controls.repeatPassword.setValue('');
                // this.inp.nativeElement.focus();
                // this.forceCollapse.next(true);
                _this.signUpVisibility = 'invisible';
                // this.inp.nativeElement.focus();
                // this.int.nativeElement.
                _this.mainUseCase = true;
                _this.loginUseCase = false;
                _this.registerUseCase = false;
                setTimeout(function () {
                    _this.signUpIntroState = 'none';
                    _this.logoState = 'visible';
                    _this.mainState = 'visible';
                }, 200);
            }
            else if (_this.loginToRegisterUseCase == true) {
                console.log("fromSignUpToLogin");
                _this.opacityErrorL = 'invisible';
                _this.opacityErrorP = 'invisible';
                _this.opacityErrorRP = 'invisible';
                _this.opacityLoginError = 'invisible';
                _this.borderL = '1px solid #ffffff';
                _this.borderP = '1px solid #ffffff';
                _this.borderRP = '1px solid #ffffff';
                _this.signForm.controls.login.setValue('');
                _this.signForm.controls.password.setValue('');
                _this.signForm.controls.repeatPassword.setValue('');
                // this.signUpIntroState = 'none';
                _this.signUpVisibility = 'invisible';
                _this.loginState = true;
                _this.loginUseCase = true;
                _this.loginToRegisterUseCase = false;
                _this.registerUseCase = false;
                setTimeout(function () {
                    _this.signUpIntroState = 'none';
                    _this.logoState = 'visible';
                    _this.mainState = 'visible';
                }, 200);
            }
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        if (this.platform.is('android')) {
            this.android = true;
            this.browser = false;
        }
        else if (this.platform.is('browser')) {
            this.android = false;
            this.browser = true;
        }
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
                .then(function () {
                console.log("OK");
            })
                .catch(function () {
                console.log("NOT_OK");
            });
            console.log(this.platform.width());
        }
    };
    LoginPage.prototype.onErrors = function () {
        if (this) {
            if (this.signForm.controls.login.value.length > 0) {
                this.opacityErrorL = 'invisible';
                this.borderL = '0px solid #ff0000';
            }
            if (this.signForm.controls.password.value.length > 0) {
                this.opacityErrorP = 'invisible';
                this.borderP = '0px solid #ff0000';
            }
            if (this.signForm.controls.login.value.length > 6) {
                // console.log(this.signForm.controls.login.value.length)
                this.opacityLoginError = 'invisible';
            }
            if (this.signForm.controls.repeatPassword.value.length > 0) {
                this.opacityErrorRP = 'invisible';
                this.borderRP = '0px solid #ff0000';
            }
            //LoginErrorVisibilit
            if (this.lastLogin !== this.signForm.controls.login.value) {
                this.loginAvailable = 'invisible';
            }
            this.lastLogin = this.signForm.controls.login.value;
            if (this.signForm.controls.login.valid && this.signForm.controls.password.valid && this.signForm.controls.repeatPassword.valid) {
                this.opacityLoginError = 'invisible';
            }
            if (this.signForm.controls.password.value.length == 0) {
                this.progressDisplay = 'none';
            }
            if (this.signForm.controls.password.value.length != 0 && this.signForm.controls.password.value.length < 6) {
                this.opacityState = 'visible';
                this.passLabelVisibility = 'visible';
                this.colorVar = "rgba(101, 101, 101, 1)";
                this.backgroundColorOverlay = "#FFFFFF";
                this.passHintError = ' ';
                this.progressWidth = '25%';
                this.progressDisplay = 'none';
                this.passwordHelpHint = 'Password must be at least 6 characters';
            }
            else {
                this.passAvailable = 'invisible';
                this.opacityState = 'invisible';
                this.passLabelVisibility = 'invisible';
                this.colorVar = "rgba(101, 101, 101, 1)";
                this.progressWidth = '25%';
                this.backgroundColorOverlay = "#FFFFFF";
                this.passHintError = ' ';
                this.passwordHelpHint = 'Password must be at least 6 characters';
            }
            if (this.signForm.controls.password.value.length > 1 && this.signForm.controls.password.value.length < 6) {
                this.passHintError = 'Too Short';
                this.progressDisplay = 'flex';
                this.progressWidth = '25%';
                this.colorVar = "rgba(82, 82, 82, 1)";
                this.backgroundColorOverlay = "#FFFFFF";
            }
            if (this.signForm.controls.password.value.length >= 6) {
                this.passLabelVisibility = 'visible';
                this.opacityState = 'visible';
                this.passHintError = 'Weak';
                this.progressWidth = '25%';
                this.colorVar = "rgba(204, 55, 56, 1)";
                this.backgroundColorOverlay = "rgba(255, 232, 232, 1)";
                var count = 4;
                this.countt = count;
                if (!hasUpperCase(this.signForm.controls.password.value)) {
                    this.passwordHelpHint = 'Please enter at least one uppercase letter';
                    count--;
                    this.countt = count;
                }
                if (!hasLowerCase(this.signForm.controls.password.value)) {
                    this.passwordHelpHint = 'Please enter at least one lowercase letter';
                    count--;
                    this.countt = count;
                }
                if (!hasNumber(this.signForm.controls.password.value)) {
                    this.passwordHelpHint = 'Please enter at least one number';
                    count--;
                    this.countt = count;
                }
                if (!this.signForm.controls.password.value.includes("~") &&
                    !this.signForm.controls.password.value.includes("!") &&
                    !this.signForm.controls.password.value.includes("@") &&
                    !this.signForm.controls.password.value.includes("#") &&
                    !this.signForm.controls.password.value.includes("$") &&
                    !this.signForm.controls.password.value.includes("%") &&
                    !this.signForm.controls.password.value.includes("^") &&
                    !this.signForm.controls.password.value.includes("&") &&
                    !this.signForm.controls.password.value.includes("*") &&
                    !this.signForm.controls.password.value.includes("(") &&
                    !this.signForm.controls.password.value.includes(")") &&
                    !this.signForm.controls.password.value.includes("_") &&
                    !this.signForm.controls.password.value.includes("+") &&
                    !this.signForm.controls.password.value.includes("-") &&
                    !this.signForm.controls.password.value.includes("=") &&
                    !this.signForm.controls.password.value.includes(":") &&
                    !this.signForm.controls.password.value.includes(";") &&
                    !this.signForm.controls.password.value.includes(",") &&
                    !this.signForm.controls.password.value.includes(".") &&
                    !this.signForm.controls.password.value.includes("/") &&
                    !this.signForm.controls.password.value.includes("\\") &&
                    !this.signForm.controls.password.value.includes("?") &&
                    !this.signForm.controls.password.value.includes("\"")) {
                    this.passwordHelpHint = 'Please enter at least one special character ~!@#$%^&*()_+-=:";,./\?\'';
                    count--;
                    this.countt = count;
                }
                this.passAvailable = 'invisible';
                switch (count) {
                    case 0:
                        this.colorVar = "rgba(204, 55, 56, 1)";
                        this.passHintError = 'Weak';
                        this.backgroundColorOverlay = "rgba(255, 232, 232, 1)";
                        this.progressWidth = '25%';
                        break;
                    case 1:
                        this.colorVar = "rgba(204, 55, 56, 1)";
                        this.passHintError = 'Weak';
                        this.backgroundColorOverlay = "rgba(255, 232, 232, 1)";
                        this.progressWidth = '25%';
                        break;
                    case 2:
                        this.colorVar = "rgba(202, 172, 0, 1)";
                        this.passHintError = 'Fair';
                        this.backgroundColorOverlay = "rgba(255, 251, 229, 1)";
                        this.progressWidth = '50%';
                        break;
                    case 3:
                        this.colorVar = "rgba(57, 113, 255, 1)";
                        this.passHintError = 'Good';
                        this.backgroundColorOverlay = "rgba(221, 233, 255, 1)";
                        this.progressWidth = '75%';
                        break;
                    case 4:
                        this.passHintError = 'Strong';
                        this.colorVar = "rgba(19, 149, 103, 1)";
                        this.backgroundColorOverlay = "rgba(229, 255, 249, 1)";
                        this.progressWidth = '100%';
                        this.opacityState = 'invisible';
                        this.passAvailable = 'visible';
                        break;
                }
            }
            //RepeatPasswordErrorVisibility
            if (this.signForm.controls.repeatPassword.value === this.signForm.controls.password.value) {
                this.opacityPasswordError = 'invisible';
                // this.borderRP = '0px solid #ff0000';   
            }
            if (this.signForm.controls.repeatPassword.value === this.signForm.controls.password.value && this.signForm.controls.repeatPassword.value != "") {
                this.passReAvailable = 'visible';
            }
            else {
                this.passReAvailable = 'invisible';
            }
        }
    };
    LoginPage.prototype.scrollToBot = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 500);
    };
    LoginPage.prototype.clearForm = function () {
        if (this) {
            this.loginError = 'none';
            this.passwordError = 'none';
            this.errorState = 'invisible';
            this.errorStateMobile = 'invisible';
            // this.content.scrollToBottom(200);
        }
    };
    LoginPage.prototype.validateForm = function () {
        if (!this.authForm.controls.login.valid) {
            console.log("log err done");
            this.loginError = 'done';
        }
        if (!this.authForm.controls.password.valid) {
            console.log("pass err done");
            this.passwordError = 'done';
        }
    };
    LoginPage.prototype.validateSignUpForm = function () {
        if (!this.signForm.controls.login.valid) {
            this.opacityLoginError = 'visible';
            console.log("asdasd");
            if (this.signForm.controls.login.value.length > 0 && this.signForm.controls.login.value.length < 6) {
                this.logggInError = 'Login must be at least 6 characters';
                this.loginAvailable = 'invisible';
            }
            if (this.signForm.controls.login.value.length == 0) {
                this.logggInError = 'Please enter login';
            }
            // this.opacityErrorL = 'visible'
            this.borderL = '1px solid #ff0000';
        }
        if (!this.signForm.controls.password.valid) {
            // this.opacityLoginError = 'visible'
            this.opacityErrorP = 'visible';
            this.borderP = '1px solid #ff0000';
        }
        if (!this.signForm.controls.repeatPassword.valid) {
            // this.opacityLoginError = 'visible'
            this.borderRP = '1px solid #ff0000';
            this.opacityErrorRP = 'visible';
        }
        if (this.signForm.controls.repeatPassword.value !== this.signForm.controls.password.value) {
            this.opacityPasswordError = 'visible';
            this.borderRP = '1px solid #ff0000';
        }
    };
    LoginPage.prototype.authorize = function (login, password) {
        var _this = this;
        this.appCtrl.getActiveNav();
        if (!this.authForm.valid) {
            this.validateForm();
            return;
        }
        this.showProgress = true;
        this.apiService.login(login, password)
            .subscribe(function (_token) {
            _this.storage.set("USER_TOKEN", _token.value);
            _this.showProgress = false;
            _this.navCtrl.setRoot('HomePage');
            // this.appCtrl.getRootNav().push('HomePage');
            // this.navCtrl.setRoot = 'HomePage';
            // this.navCtrl.push('HomePage');
            console.log(_token);
        }, function (error) {
            _this.showProgress = false;
            if (error.code == 401 || error.type == __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__["a" /* ErrorType */].NotAuthorized) {
                _this.errorMessage = "Login / password combination is not valid. Please try again";
            }
            else {
                _this.errorMessage = "<b style='font-size=3rem'>Can't connect to server</b><br/>It may be busy or temporarily unavailable";
            }
            _this.errorState = "visible";
            console.log("this error");
            //  if(this.platform.is('android') || this.platform.is('ios')){}
            if (_this.platform.width() < 1200) {
                _this.errorStateMobile = 'visible';
                console.log("not this error");
            }
            else {
                _this.errorStateMobile = 'invisible';
                console.log("nots this error");
            }
        });
    };
    LoginPage.prototype.registration = function (login, password) {
        var _this = this;
        if (!this.signForm.valid || this.signForm.controls.password.value !== this.signForm.controls.repeatPassword.value || this.countt < 4) {
            this.validateSignUpForm();
            return;
        }
        this.showProgress = true;
        this.apiService.register(login, password)
            .mergeMap(function (_result) { return _this.apiService.login(login, password); })
            .subscribe(function (_res) {
            _this.showProgress = false;
            _this.navCtrl.push('HomePage');
            console.log(_res);
        }, function (error) {
            _this.showProgress = false;
            if (error.code == 401 || error.type == __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__["a" /* ErrorType */].NotAuthorized) {
                _this.errorMessage = "<b> Login / password combination is not valid. Please try again </b>";
            }
            else {
                _this.errorMessage = "<b style='font-size=3rem'>Can't connect to server</b><br/>It may be busy or temporarily unavailable";
            }
            _this.errorState = "visible";
        });
    };
    LoginPage.prototype.closeError = function () {
        this.errorState = 'invisible';
    };
    LoginPage.prototype.forgotPassword = function () {
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        // this.introState = 'done';
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        this.visible = !this.visible;
        this.state = 'inactive';
        this.mainUseCase = false;
        this.loginUseCase = true;
        this.registerUseCase = false;
        this.loginToRegisterUseCase = false;
        setTimeout(function () {
            _this.loginVisibility = 'visible';
            _this.introState = 'done';
        }, 200);
    };
    LoginPage.prototype.onSignUp = function () {
        var _this = this;
        this.closeError();
        this.logoState = 'invisible';
        this.mainState = 'invisible';
        this.events.publish('close:inputs');
        this.mainUseCase = false;
        this.loginUseCase = false;
        this.registerUseCase = true;
        this.loginToRegisterUseCase = false;
        setTimeout(function () {
            _this.signUpIntroState = 'done';
            _this.signUpVisibility = 'visible';
        }, 200);
    };
    LoginPage.prototype.onRegistrationClick = function () {
    };
    LoginPage.prototype.onSignUpFromLogin = function () {
        var _this = this;
        this.events.publish('close:inputs');
        console.log("onSignUpFromLogin");
        this.loginError = 'none';
        this.passwordError = 'none';
        this.errorState = 'invisible';
        this.logoState = 'invisible';
        this.mainState = 'invisible';
        this.loginUseCase = false;
        this.registerUseCase = false;
        this.loginToRegisterUseCase = true;
        setTimeout(function () {
            _this.signUpIntroState = 'done';
            _this.signUpVisibility = 'visible';
        }, 200);
    };
    LoginPage.prototype.isLoginAvaible = function () {
        var _this = this;
        console.log("SignForm login: " + this.signForm.controls.login.value);
        if (!this.signForm.controls.login.value)
            return;
        this.apiService.checkName(this.signForm.controls.login.value)
            .subscribe(function (isNotAvaible) {
            // this.navCtrl.push('HomePage');
            if (isNotAvaible) {
                _this.isLogin = false;
                console.log("YES OLES");
                _this.opacityLoginError = 'visible';
                _this.loginErrorSignUp = "This username is already in use. Please try another";
                _this.loginAvailable = 'invisible';
                _this.borderL = '1px solid #ff0000';
            }
            else {
                // console.log("NO OLES") 
                _this.isLogin = true;
                if (_this.signForm.controls.login.value.length > 0 && _this.signForm.controls.login.value.length < 6) {
                    _this.loginAvailable = 'invisible';
                    _this.opacityLoginError = 'visible';
                    _this.borderL = '1px solid #ff0000';
                    _this.loginErrorSignUp = 'Login must be at least 6 characters';
                }
                else {
                    _this.opacityLoginError = 'invisible';
                    _this.loginAvailable = 'visible';
                    _this.borderL = '0px solid #ff0000';
                    console.log("here");
                    _this.avaible = true;
                    _this.loginErrorSignUp = 'Please complete all required fields';
                }
                // this.loginErrorSignUp = 'Please complete all required fields' 
            }
        }, function (error) {
            // this.showProgress = false;
            if (error.code == 401 || error.type == __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__["a" /* ErrorType */].NotAuthorized) {
                _this.errorMessage = "<b>Login / password combination is not valid. Please try again</b>";
            }
            else {
                _this.errorMessage = "<b style='font-size=3rem'>Can't connect to server</b><br/>It may be busy or temporarily unavailable";
            }
            _this.errorState = "visible";
        });
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('getFocusThis'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], LoginPage.prototype, "inp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('custome'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], LoginPage.prototype, "int", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */])
], LoginPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('floating1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], LoginPage.prototype, "floating1", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/pages/login/login.html"*/'<ion-content [ngClass]="{\'android\': android == true, \'browser\': browser == true}" style="background: white">\n\n  <video controls="true" preload="auto" class="background-image" poster="assets/img/bg-placeholder.png" webkit-playsinline\n    id="bgvid" playsinline autoplay muted loop src="assets/video/video-background.mp4">\n    <!-- <source src="assets/video/video-background.mp4" type="video/mp4"> -->\n  </video>\n\n  <div class="overlay-bg"></div>\n\n  <div [@errorTrigger]="errorState" class="error-pop-up">\n    <button ion-button icon-only clear class="close-error" (click)="closeError()">\n      <ion-icon ios="ios-close" md="md-close"></ion-icon>\n    </button>\n    <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n    <p [innerHTML]="errorMessage"></p>\n  </div>\n\n  <div class="content" [@mainTrigger]="mainState">\n    <div class="logo" [@errorLogoTrigger]="errorStateMobile" [@logoTransitionTrigger]="logoState" [@fadeTrigger]="mainState">\n      <img class="log_m" src="assets/img/logo.svg" alt="">\n      <p class="slog_m">Bitcoin for everyone </p>\n    </div>\n\n    <div class="input-fields-container" [@fadeTrigger]="mainState">\n      <div [@transitionTrigger]="state" class="intro-buttons">\n        <button ion-button class="intro-signup-button mybutt" color="dark" outline large (click)="onSignUp()">Sign Up</button>\n        <button ion-button class="blue-button no-radius mybutt" large (click)="onLogin()">Login</button>\n      </div>\n      <form [@loginTrigger]="loginVisibility" [formGroup]="authForm" (ngSubmit)="authorize(authForm.value.login, authForm.value.password)"\n        class="input-fields">\n\n        <div class=input-container>\n          <div [@slideDown]="loginError" class="error-message">\n            <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n            <p>Login is incorrect, try again</p>\n          </div>\n          <div class="input-item" [@slideLeft]="introState" [ngClass]="{\'form-error\': loginError == \'done\'}">\n            <custom-icon set="login" name="social" class="icon-custom-color icon"></custom-icon>\n            <input (focus)="clearForm()" force="forceCollapse" (tap)="scrollToBot()" class="custom-input-login" formControlName="login"\n              type="email" value="" placeholder="Login">\n            <!-- <ion-input (focus)="clearForm()" class="input" formControlName="login" type="email" value="" placeholder="Login"></ion-input> -->\n          </div>\n          <div [@slideDown]="passwordError" class="error-message">\n            <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n            <p>Password is incorrect, try again</p>\n          </div>\n          <div class="input-item" [@slideRight]="introState" [ngClass]="{\'form-error\': passwordError == \'done\'}">\n            <custom-icon set="login" name="lock" class="icon-custom-color icon" custom-icon></custom-icon>\n            <!-- <ion-input (focus)="clearForm()" class="input" formControlName="password" type="password" placeholder="Password"></ion-input> -->\n            <input (focus)="clearForm()" (tap)="scrollToBot()" class="custom-input-pass" formControlName="password" type="password" placeholder="Password">\n          </div>\n        </div>\n        <div [@slideRight]="introState" class="forget-password">\n          <button ion-button type=button color="primary" (click)="forgotPassword()" small clear>\n            <p class="forgot-button" no-margin no-padding>Forgot password?</p>\n          </button>\n        </div>\n        <button ion-button class="blue-button no-radius mybutt" large>Login</button>\n        <div [@slideDown]="introState" class="buttons-signup">\n          <p class="dont-have-account">Don\'t have account?</p>\n          <button ion-button type=button color="primary" small clear (click)="onSignUpFromLogin()">\n            <p class="sign-button" no-margin no-padding (tap)="onSignUpFromLogin()">Sign Up</p>\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class="content" [@signUpTrigger]="signUpVisibility">\n    <div class="signup-input-fields-container">\n      <form class="signup-input-fields" [formGroup]="signForm" (ngSubmit)="registration(signForm.value.login, signForm.value.password)">\n        <div class="error-message-signup full-width" [@opacityTrigger]="opacityLoginError">\n          <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n          <p>{{ loginErrorSignUp}}</p>\n        </div>\n        <div class="error-message-signup full-width" [@opacityTrigger]="opacityErrorL">\n          <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n          <p>{{logggInError}}</p>\n        </div>\n        <div class="custom-input-field-container" [@slideLeft]="signUpIntroState">\n          <input-floating #floating1 formControlName="login"  [(ngModel)]="login" [type]="text"\n            [border]="borderL" [hint]="customeLogin" [hintError]="" [hintErrorColor]="" [hintColor]="" [progressDisplay]="progressDisplayNone"\n            [backgroundColorOverlay]="backgroundColorOverlayWhite"></input-floating>\n          <div class="chevron" [@opacityTrigger]="loginAvailable">\n            <ion-icon ios="ios-checkmark" md="md-checkmark" color="secondary" style="font-size: 200%;"></ion-icon>\n          </div>\n        </div>\n        <div class="error-message-signup full-width" [@opacityTrigger]="opacityErrorP">\n          <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n          <p>Please enter password</p>\n        </div>\n        <div class="custom-input-field-container" (tap)="isLoginAvaible()" [@slideRight]="signUpIntroState">\n          <input-floating #custome formControlName="password" [(ngModel)]="password" [type]="passType" [border]="borderP" [hint]="customePassword"\n            [hintError]="passHintError" [hintErrorColor]="colorVar" [hintColor]="" \n            [progressDisplay]="progressDisplay" [spacing]="letterSpacing" [backgroundColorOverlay]="backgroundColorOverlay"\n            [progressWidth]="progressWidth"></input-floating>\n          <div class="chevron" [@opacityTrigger]="passAvailable">\n            <ion-icon ios="ios-checkmark" md="md-checkmark" color="secondary" style="font-size: 200%;"></ion-icon>\n          </div>\n        </div>\n        <div class="error-message-signup full-width margin-1em" [@opacityTrigger]="opacityPasswordError">\n          <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n          <p>Password doesn\'t match</p>\n        </div>\n        <div class="pass-message full-width margin-1em" [@opacityTrigger]="opacityState">\n          <div>\n            <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n          </div>\n          <p>{{passwordHelpHint}}</p>\n        </div>\n        \n        <div class="error-message-signup full-width" [@opacityTrigger]="opacityErrorRP">\n          <custom-icon set="signup" name="warning" class="sign-up-icon"></custom-icon>\n          <p>Please repeat password</p>\n        </div>\n        <div class="custom-input-field-container" [@slideLeft]="signUpIntroState">\n          <input-floating formControlName="repeatPassword" [(ngModel)]="repeatPassword" [type]="passType" [border]="borderRP" [hint]="customeRepeatPassword"\n            [hintError]="" [hintErrorColor]=""  [hintColor]="" [progressDisplay]="progressDisplayNone"\n            [spacing]="letterSpacing" [backgroundColorOverlay]="backgroundColorOverlayWhite"></input-floating>\n          <div class="chevron" [@opacityTrigger]="passReAvailable">\n            <ion-icon ios="ios-checkmark" md="md-checkmark" color="secondary" style="font-size: 200%;"></ion-icon>\n          </div>\n        </div>\n        <button ion-button class="blue-button no-radius full-width margTop" large>Sign Up</button>\n      </form>\n    </div>\n  </div>\n\n\n  <div class="loading-overlay" padding [hidden]="!showProgress">\n    <div class="loading-overlay-bg"></div>\n    <ion-spinner name="crescent"></ion-spinner>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/pages/login/login.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('errorTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(-6em)', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(0em)', display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible => invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('invisible => visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('errorLogoTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(0em)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(0em)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible => invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('invisible => visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('slideLeft', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('none', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateX(-100%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('done', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateX(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('none => done', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('300ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('slideRight', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('none', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateX(100%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('done', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateX(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('none => done', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('300ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('slideDown', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('none', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(100%)', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('done', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(0%)', display: 'flex`' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('none => done', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('300ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('done => none', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('300ms ease-in')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('transitionTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(30%)', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('190ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('190ms ease-in')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('loginTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'none ' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('signUpTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'none ' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('logoTransitionTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ transform: 'translateY(-50%)', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('mainTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('opacityTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ opacity: '1', display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ opacity: '0', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('passLabelTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ opacity: '1', display: 'flex' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ opacity: '0', display: 'none' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('fadeTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ opacity: '1' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ opacity: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_33" /* trigger */])('backgTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ background: '#FFFFFF' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_31" /* style */])({ background: 'transparent' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_32" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* animate */])('200ms ease-out')),
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslatePipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_platform__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_storage_es2015_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_11_ionic_angular_util_events__["a" /* Events */]])
], LoginPage);

function hasNumber(myString) {
    return /\d/.test(myString);
}
function hasLowerCase(myString) {
    return myString.toUpperCase() !== myString;
}
function hasUpperCase(myString) {
    return myString.toLowerCase() !== myString;
}
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return xCoinsApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var xCoinsApp = (function () {
    function xCoinsApp(events, menu, platform, storage, splashScreen, userData) {
        var _this = this;
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.userData = userData;
        this.rootPage = 'LoginPage';
        this.platform.ready().then(function () {
            // let tokken: string = ""
            // this.storage.get("USER_TOKEN")
            // .then(token =>{
            // if(tokken === token){
            // this.rootPage = 'LoginPage'          
            // } else {
            // this.rootPage = 'HomePage'
            // }
            // })
            // .catch(error=>{
            // this.rootPage = 'LoginPage'          
            // console.log(error);
            // })
            _this.splashScreen.hide();
        });
    }
    return xCoinsApp;
}());
xCoinsApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/wildleaf/WebstormProjects/xcoins/src/app/app.template.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/wildleaf/WebstormProjects/xcoins/src/app/app.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
], xCoinsApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.url = "http://13.56.148.150:5000";
        this.debugLoggingEnabled = true;
    }
    ApiService.prototype.log = function (response) {
        if (this.debugLoggingEnabled) {
            console.log(response);
        }
    };
    ApiService.prototype.handleError = function (error) {
        var apiError = {
            code: error.status,
            message: error.statusText,
        };
        switch (error.status) {
            case 401:
                apiError.type = __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__["a" /* ErrorType */].NotAuthorized;
                break;
            default:
                apiError.type = __WEBPACK_IMPORTED_MODULE_0__interfaces_api_model__["a" /* ErrorType */].ServerError;
        }
        console.log(apiError);
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(apiError);
    };
    ApiService.prototype.login = function (login, password) {
        return this.http.post(this.url + '/api/User/Login', {
            site: "xCoins",
            login: login,
            password: password
        })
            .map(function (res) { return res.json(); })
            .do(this.log)
            .catch(this.handleError);
    };
    ApiService.prototype.checkName = function (name) {
        return this.http.get(this.url + '/api/User/CheckName/' + name)
            .map(function (res) { return res.json(); })
            .do(this.log)
            .catch(this.handleError);
    };
    ApiService.prototype.register = function (login, password) {
        return this.http.post(this.url + '/api/User/Add', {
            siteName: "xCoins",
            login: login,
            locale: "en_US",
            status: "A",
            password: password
        })
            .do(this.log)
            .catch(this.handleError)
            .map(function (_response) { return true; });
    };
    ApiService.prototype.getUser = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/api/User/Get', options)
            .map(function (res) { return res.json(); })
            .do(this.log)
            .catch(this.handleError);
    };
    ApiService.prototype.getUserAccounts = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/Account/List', {
            first: "0"
        }, options)
            .map(function (res) { return res.json(); })
            .do(this.log)
            .catch(this.handleError);
    };
    ApiService.prototype.createAccount = function (accName, code, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + '/api/Account/Create', {
            assetCode: code,
            accountName: accName
        }, options)
            .map(function (res) { return res.json(); })
            .do(this.log)
            .catch(this.handleError);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], ApiService);

//# sourceMappingURL=api-service.js.map

/***/ })

},[241]);
//# sourceMappingURL=main.js.map