(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cover-page></app-cover-page>\n<!-- <app-nav-bar></app-nav-bar> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _cover_page_cover_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cover-page/cover-page.component */ "./src/app/cover-page/cover-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                _cover_page_cover_page_component__WEBPACK_IMPORTED_MODULE_5__["CoverPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cover-page/cover-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cover-page/cover-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\n\r\na,\r\na:focus,\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Custom default button */\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n  color: #333;\r\n  text-shadow: none; /* Prevent inheritance from `body` */\r\n  background-color: #fff;\r\n  border: .05rem solid #fff;\r\n}\r\n\r\n/*\r\n * Base structure\r\n */\r\n\r\n.cover-page {\r\n    background: url(\"Charcoal_Profile.JPG\") no-repeat fixed;\r\n    background-size: contain;\r\n    background-position: center;\r\n    height: 100vh;\r\n    background-color: #333;\r\n    display: flex;\r\n    color: #fff;\r\n    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\r\n    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\r\n}\r\n\r\n/*\r\n * Quote box\r\n */\r\n\r\n#QuoteBox {\r\n   font-size: 40px;\r\n   /* font-size: 10vh; */\r\n   /* width: 40vw; */\r\n }\r\n\r\n.cover-container {\r\n  max-width: 42em;\r\n}\r\n\r\n/*\r\n * Main\r\n */\r\n\r\n.main-section {\r\n  font-family: \"Impact\";\r\n  font-size: 1px;\r\n}\r\n\r\n/*\r\n * Header\r\n */\r\n\r\n.masthead {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.masthead-brand {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.nav-masthead .nav-link {\r\n  padding: .25rem 0;\r\n  font-weight: 700;\r\n  color: rgba(255, 255, 255, .5);\r\n  background-color: transparent;\r\n  border-bottom: .25rem solid transparent;\r\n}\r\n\r\n.nav-masthead .nav-link:hover,\r\n.nav-masthead .nav-link:focus {\r\n  border-bottom-color: rgba(255, 255, 255, .25);\r\n}\r\n\r\n.nav-masthead .nav-link + .nav-link {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav-masthead .active {\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  .masthead-brand {\r\n    float: left;\r\n  }\r\n  .nav-masthead {\r\n    float: right;\r\n  }\r\n}\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.cover .btn-lg {\r\n  padding: .75rem 1.25rem;\r\n  font-weight: 700;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n#footer {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cover-page/cover-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/cover-page/cover-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-page\">\n  <div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n    <header class=\"masthead mb-auto\">\n      <div class=\"inner\">\n        <h3 class=\"masthead-brand\">Justin Mabutas</h3>\n      </div>\n        <!-- <nav class=\"nav nav-masthead justify-content-center\">\n          <a class=\"nav-link\" href=\"#\">Home</a>\n          <a class=\"nav-link\" href=\"#\">Features</a>\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </nav> -->\n    </header>\n\n    <main role=\"main\" class=\"inner cover main-section\">\n      <h1 class=\"cover-heading\" id=\"QuoteBox\">{{motivational_phrase}}</h1>\n      <h3 class=\"cover-heading\">{{motivational_author}}</h3>\n      <button id=\"getMotivated\" type=\"button\" class=\"btn btn-lg btn-secondary\" (click)=\"changeMotivationalPhrase()\">Get Motivated!</button>\n    </main>\n\n\n    <footer class=\"mt-auto\" id=\"footer\">\n      <p>\n        Email: <a href=\"mailto:justin.troy.mabutas@gmail.com\">Justin.Mabutas@contact.me</a>\n        <br>\n        Phone: (408)515-9400\n        <br>\n        Unofficial Website for Justin Mabutas\n      </p>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cover-page/cover-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cover-page/cover-page.component.ts ***!
  \****************************************************/
/*! exports provided: CoverPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverPageComponent", function() { return CoverPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoverPageComponent = /** @class */ (function () {
    function CoverPageComponent() {
        this.motivational_phrase = "Welcome to my website!";
        this.motivational_author = "";
    }
    CoverPageComponent.prototype.addMotivationalPhrase = function (phrase) {
        var _this = this;
        var func = setTimeout(function () {
            if (phrase != "") {
                _this.motivational_phrase += phrase.substring(0, 1);
                var newPhrase = phrase.substring(1);
                _this.addMotivationalPhrase(newPhrase);
            }
            else {
                document.getElementById("getMotivated").disabled = false;
            }
        }, 50);
    };
    CoverPageComponent.prototype.addMotivationalAuthor = function (author) {
        var _this = this;
        var func = setTimeout(function () {
            if (author != "") {
                _this.motivational_author += author.substring(0, 1);
                var newAuthor = author.substring(1);
                _this.addMotivationalAuthor(newAuthor);
            }
        }, 50);
    };
    CoverPageComponent.prototype.changeMotivationalPhrase = function () {
        var _this = this;
        document.getElementById("getMotivated").disabled = true;
        setTimeout(function () {
            _this.removeMotivationalAuthor();
            _this.removeMotivationalPhrase();
            if (_this.motivational_phrase != "") {
                _this.changeMotivationalPhrase();
            }
            else {
                _this.replaceQuote();
            }
        }, 50);
    };
    CoverPageComponent.prototype.removeMotivationalAuthor = function () {
        this.motivational_author = this.motivational_author.substring(0, this.motivational_author.length - 1);
    };
    CoverPageComponent.prototype.removeMotivationalPhrase = function () {
        this.motivational_phrase = this.motivational_phrase.substring(0, this.motivational_phrase.length - 1);
    };
    CoverPageComponent.prototype.replaceQuote = function () {
        var website = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            url: 'https://api.forismatic.com/api/1.0/',
            type: 'GET',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp',
            },
            success: function (quote) {
                var newPhrase = quote.quoteText;
                var newAuthor;
                if (quote.quoteAuthor != "") {
                    newAuthor = "-" + quote.quoteAuthor;
                }
                else {
                    newAuthor = "-Unknown";
                }
                website.addMotivationalPhrase(newPhrase);
                website.addMotivationalAuthor(newAuthor);
            }
        });
    };
    CoverPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover-page',
            template: __webpack_require__(/*! ./cover-page.component.html */ "./src/app/cover-page/cover-page.component.html"),
            styles: [__webpack_require__(/*! ./cover-page.component.css */ "./src/app/cover-page/cover-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverPageComponent);
    return CoverPageComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #e3f2fd;\">\r\n  <a class=\"navbar-brand\" href=\"#\">Justin Mabutas | Programming</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Dropdown\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Justin Mabutas\Desktop\Code\Atom\FreshWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map