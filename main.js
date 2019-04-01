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

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"main_title\">\n    About Me.\n    <span><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i></span>\n  </h1>\n  <div class=\"content\">\n    <!-- intro -->\n    <div class=\"intro\">\n      <div class=\"intro_title\">Frontend Developer</div>\n      <p>\n        <!-- To work in a challenging environment where my skills and knowledge are utilized for the achievement of the objectives of the organization -->\n        I am seeking a position with a growing organization where I can learn and make a positive impact. I am eager to apply academic and professional background towards launching a successful career as a frontend Developer with an employer offering opportunities for professional development.\n        </p>\n    </div>\n    <!-- personal -->\n    <div class=\"personal\">\n      <!--personal  infor -->\n      <div class=\"infor\">\n        <div class=\"infor_title\">Personal Information</div>\n        <div class=\"infor_content\">\n          <div class=\"item\">\n            <span>Name</span> : Ho Tuan Kiet\n          </div>\n          <div class=\"item\">\n            <span>Age</span> : 23\n          </div>\n          <div class=\"item\">\n            <span>Residence</span> : HCM, Viet Nam\n          </div>\n          <div class=\"item\">\n            <span>Address</span> : 247/80E4 Lac Long Quan , Ward 3 , District 11\n          </div>\n          <div class=\"item\">\n            <span>Phone</span> : 0901449501\n          </div>\n        </div>\n      </div>\n      <!--personal skill -->\n      <div class=\"skill\">\n          <div class=\"skill_title\">Personal Skills</div>\n          <div class=\"skill_content\">\n              <div class=\"item\" *ngFor=\"let skill of personal_skills\">\n                  {{skill.name}}\n                  <div class=\"item_progress\">\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-info progress-bar-striped\" [ngStyle]=\"{'width':skill.percent}\">\n                        {{skill.percent}}\n                      </div>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      \n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .intro_title {\n  font-family: 'Playfair Display', serif; }\n\n.content .personal .infor_title, .content .personal .skill_title {\n  display: inline-block;\n  position: relative;\n  padding: 0 5px;\n  color: white;\n  font-weight: bold;\n  font-size: 22px;\n  text-transform: uppercase;\n  border-bottom: 2px solid #00A3E1;\n  margin-bottom: 15px;\n  letter-spacing: 1px; }\n\n.content .personal .infor_title::before, .content .personal .skill_title::before {\n    content: '';\n    position: absolute;\n    background: #00A3E1;\n    width: 2px;\n    height: 10px;\n    left: 0;\n    bottom: 0; }\n\n.content .personal .infor_title::after, .content .personal .skill_title::after {\n    content: '';\n    position: absolute;\n    background: #00A3E1;\n    width: 2px;\n    height: 10px;\n    right: 0;\n    bottom: 0; }\n\n.content {\n  color: #DDDDDD; }\n\n.content .intro_title {\n    font-size: 21px;\n    font-weight: 600;\n    color: white;\n    letter-spacing: 1px;\n    margin-bottom: 15px; }\n\n.content .intro p {\n    padding-right: 20px; }\n\n.content .personal {\n    display: grid;\n    grid-template-columns: 1fr 1fr; }\n\n.content .personal .infor {\n      margin-top: 47px; }\n\n.content .personal .infor_content {\n        display: flex;\n        flex-flow: column; }\n\n.content .personal .infor_content .item {\n          margin: 5px 0; }\n\n.content .personal .infor_content .item span {\n            font-size: 16px;\n            font-weight: bold;\n            color: white; }\n\n.content .personal .skill {\n      margin-top: 47px; }\n\n.content .personal .skill_content {\n        display: flex;\n        flex-flow: column; }\n\n.content .personal .skill_content .item {\n          margin: 10px 0;\n          font-size: 16px;\n          font-weight: bold;\n          color: white; }\n\n.content .personal .skill_content .item .item_progress {\n            margin-top: 5px;\n            width: 70%; }\n\n.content .personal .skill_content .item .item_progress .progress {\n              background: #DDDDDD; }\n\n.content .personal .skill_content .item .item_progress .progress .progress-bar {\n                text-align: left;\n                padding-left: 20px; }\n\n@media screen and (max-width: 992px) {\n    .content .personal {\n      grid-template-columns: 1fr; } }\n\n@media screen and (max-width: 410px) {\n    .content .intro p {\n      text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC1tZS9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxIZWxwZXJcXF9leHRlbmQuc2NzcyIsInNyYy9hcHAvYWJvdXQtbWUvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvYWJvdXQtbWUvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQ0hJLHVDQUFzQyxFQUN6Qzs7QURFRDtFQ0NJLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsZUFBYTtFQUNiLGFDSGM7RURJZCxrQkFBZ0I7RUFDaEIsZ0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixpQ0NMZTtFRE1mLG9CQUFrQjtFQUNsQixvQkFBbUIsRUFzQnRCOztBRGhDRDtJQ2FRLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsb0JDWlc7SURhWCxXQUFTO0lBQ1QsYUFBVztJQUNYLFFBQU07SUFDTixVQUFRLEVBRVg7O0FEckJMO0lDdUJRLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsb0JDdEJXO0lEdUJYLFdBQVM7SUFDVCxhQUFXO0lBQ1gsU0FBTztJQUNQLFVBQVEsRUFFWDs7QUQvQkw7RUFDSSxlRUNxQixFRjRFeEI7O0FBOUVEO0lHSEksZ0JIUStCO0lHUC9CLGlCRGdCTztJQ2ZQLGFERWM7SUZLTixvQkFBbUI7SUFDbkIsb0JBQWtCLEVBQ3JCOztBQVJUO0lBV1ksb0JBQWtCLEVBQ3JCOztBQVpUO0lBZVEsY0FBYTtJQUNiLCtCQUE4QixFQStDakM7O0FBL0RMO01BbUJZLGlCQUFlLEVBY2xCOztBQWpDVDtRQXdCZ0IsY0FBWTtRQUNaLGtCQUFpQixFQU9wQjs7QUFoQ2I7VUEyQm9CLGNBQVksRUFJZjs7QUEvQmpCO1lHSEksZ0JIZ0MyQztZRy9CM0Msa0JEZVM7WUNkVCxhREVjLEVGNkJHOztBQTlCckI7TUFvQ1ksaUJBQWUsRUEwQmxCOztBQTlEVDtRQTBDZ0IsY0FBWTtRQUNaLGtCQUFpQixFQWtCcEI7O0FBN0RiO1VBNkNvQixlQUFhO1VHaEQ3QixnQkhpRHVDO1VHaER2QyxrQkRlUztVQ2RULGFERWMsRUYyREQ7O0FBNURqQjtZQWdEd0IsZ0JBQWM7WUFDZCxXQUFTLEVBVVo7O0FBM0RyQjtjQW9ENEIsb0JFbERILEVGd0RBOztBQTFEekI7Z0JBdURnQyxpQkFBZTtnQkFDZixtQkFBaUIsRUFDcEI7O0FBUXpCO0lBakVKO01BbUVZLDJCQUEwQixFQUM3QixFQUFBOztBQUdMO0lBdkVKO01BMEVnQixpQkFBZ0IsRUFDbkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2Nzcy9IZWxwZXIvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICcuLi9zY3NzL0hlbHBlci9taXhpbic7XHJcbkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL2V4dGVuZCc7XHJcblxyXG4uY29udGVudHtcclxuICAgIGNvbG9yOiRjb2xvci1kYXJrLXdoaXRlO1xyXG4gICAgLmludHJve1xyXG4gICAgICAgICZfdGl0bGV7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJXRpdGxlLWZvbnQ7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLTEgLSA0LCRmdy02MDAsJGNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wZXJzb25hbHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcbiAgICAgICAgLmluZm9ye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjQ3cHg7XHJcbiAgICAgICAgICAgICZfdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICV0b3BpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2NvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBUZXh0KCRmcy0wICsgMiwkZnctYm9sZCwkY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNraWxse1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjQ3cHg7XHJcblxyXG4gICAgICAgICAgICAmX3RpdGxle1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAldG9waWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLTAgKyAyLCRmdy1ib2xkLCRjb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLml0ZW1fcHJvZ3Jlc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo3MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZ3Jlc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGFyay13aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZ3Jlc3MtYmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAgICAucGVyc29uYWx7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NDEwcHgpIHtcclxuICAgICAgICAuaW50cm97XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJXRpdGxlLWZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxufVxyXG5cclxuJXRvcGlje1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzowIDVweDtcclxuICAgIGNvbG9yOiRjb2xvci13aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6JGZzLTEgLSAzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRjb2xvci1ibHVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlO1xyXG4gICAgICAgIHdpZHRoOjJweDtcclxuICAgICAgICBoZWlnaHQ6MTBweDtcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJsdWU7XHJcbiAgICAgICAgd2lkdGg6MnB4O1xyXG4gICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIGNvbG9yXHJcbiRjb2xvci1ncmF5LTA6Izc3Nzc3NztcclxuJGNvbG9yLWdyYXktMTojMkMyRDJGO1xyXG4kY29sb3ItZ3JheS0yOiMxNzE4MUI7XHJcbiRjb2xvci1ibGFjazpibGFjaztcclxuJGNvbG9yLXdoaXRlOndoaXRlO1xyXG4kY29sb3ItZGFyay13aGl0ZTojREREREREO1xyXG4kY29sb3ItYmx1ZTojMDBBM0UxO1xyXG5cclxuLy9mb250IHNpemVcclxuJGZzLWRlZmF1bHQ6MTZweDtcclxuJGZzLTA6MTRweDtcclxuJGZzLTE6MjVweDtcclxuJGZzLTI6NDBweDtcclxuXHJcbi8vZm9udCB3ZWlnaHRcclxuJGZ3LW5vcm1hbDpub3JtYWw7XHJcbiRmdy1ib2xkOmJvbGQ7XHJcbiRmdy02MDA6NjAwO1xyXG4kZnctOTAwOjkwMDsiLCJAbWl4aW4gVGV4dCgkZnMsJGZ3LCRjb2xvcikge1xyXG4gICAgZm9udC1zaXplOiAkZnM7XHJcbiAgICBmb250LXdlaWdodDogJGZ3O1xyXG4gICAgY29sb3I6JGNvbG9yO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
        this.personal_skills = [
            { name: 'Creative', percent: '65%' },
            { name: 'Research', percent: '80%' },
            { name: 'Teamwork', percent: '70%' },
        ];
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/about-me/about-me.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<!-- <app-index></app-index> -->\n<!-- <app-about-me></app-about-me> -->\n<!-- <app-resume></app-resume> -->\n<!-- <app-project></app-project> -->\n<!-- <app-contact></app-contact> -->\n<router-outlet ></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CV-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");















var AppRoutes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"] },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"] },
    { path: 'about', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"] },
    // {path: 'portfolio', component: ProjectComponent},
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_14__["ParticlesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(AppRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"main_title\">\n    Contact Me.\n    <span><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></span>\n  </h1>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"form col-12\">\n        <form [formGroup]=\"Contact_form\" (ngSubmit)=\"Send()\">\n          <div class=\"form\">\n            <!-- infor contact -->\n            <div class=\"info_contact\">\n              <div class=\"field\">\n                <p class=\"label\">Name</p>\n                <input id=\"from_name\" formControlName=\"name\" type=\"text\" />\n              </div>\n              <div class=\"field\">\n                <p class=\"label\">Email</p>\n                <input formControlName=\"email\" type=\"text\" />\n                <div *ngIf=\"f().email.errors && (f().email.touched || f().email.dirty)\" class=\"error\">\n                  <span *ngIf=\"f().email.errors.required\" >*Please inform your email</span>\n                  <span *ngIf=\"f().email.errors.email\" >*Invalid email</span>\n                </div>\n              </div>\n            </div>\n            <!-- message --> \n            <div class=\"mess_contact\">\n              <p class=\"label\">Message</p>\n              <textarea id=\"message_html\" formControlName=\"mess\" class=\"mess\"></textarea>\n              <div *ngIf=\"f().mess.errors && (f().mess.touched || f().mess.dirty)\" class=\"error\">\n                <span>*Please inform your message</span>\n              </div>\n            </div>\n            <!-- button -->\n            <div class=\"btn_box\">\n              <button type=\"submit\" class=\"button\" [ngClass]=\"{'active':Contact_form.valid}\" [disabled]=\"Contact_form.invalid\">Send message</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- <div class=\"more_info col-12\">\n        <div class=\"item\">\n          <span><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></span>\n          <h5>hotuankietps02152@gmail.com</h5>\n        </div>\n        <div class=\"item\">\n            <span><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>\n            <h5>247/80E4 Lac Long Quan Q11, HCM</h5>\n          </div>\n          <div class=\"item\">\n              <span><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span>\n              <h5>0901449501</h5>\n            </div>\n      </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form {\n  width: 100%;\n  padding: 8px 40px;\n  margin-bottom: 30px; }\n  .content .form .label {\n    margin-bottom: 5px;\n    padding-left: 3px;\n    font-size: 16px;\n    font-weight: bold;\n    color: white; }\n  .content .form .info_contact {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 15px; }\n  .content .form .info_contact .field {\n      margin-top: 10px; }\n  .content .form .info_contact .field input {\n        width: 100%;\n        border: 2px solid #DDDDDD;\n        background: none;\n        color: white;\n        padding: 5px 10px; }\n  .content .form .info_contact .field input:focus {\n          outline: none; }\n  .content .form .mess_contact {\n    margin-top: 35px; }\n  .content .form .mess_contact .mess {\n      width: 100%;\n      height: 150px;\n      border: 2px solid #DDDDDD;\n      background: none;\n      color: white;\n      padding: 5px 10px; }\n  .content .form .error {\n    margin-top: 7px;\n    color: #00A3E1; }\n  .content .form .btn_box {\n    margin: 20px 0; }\n  .content .form .btn_box .button {\n      float: right;\n      cursor: pointer;\n      background: none;\n      padding: 15px 10px;\n      border: 2px solid #777777;\n      text-transform: uppercase;\n      font-size: 14px;\n      font-weight: normal;\n      color: #777777;\n      transition: all 0.2s;\n      -webkit-transition: all 0.2s;\n      -moz-transition: all 0.2s;\n      -ms-transition: all 0.2s;\n      -o-transition: all 0.2s; }\n  .content .form .btn_box .button.active {\n        border-color: white;\n        color: white; }\n  .content .form .btn_box .button.active:hover {\n          background: white;\n          color: #17181B;\n          font-weight: 600; }\n  @media screen and (max-width: 992px) {\n  .content .form {\n    padding: 8px 10px; }\n    .content .form .info_contact {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-column-gap: 15px; }\n  .content .more_info {\n    grid-template-columns: 1fr; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L0c6XFxjeWJlcnNvZnRcXEZyb250LWVuZFxcUHJvamVjdFxcQ1ZcXENWLWFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXEhlbHBlclxcX21peGluLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUdRLFlBQVU7RUFDVixrQkFBZ0I7RUFDaEIsb0JBQW1CLEVBd0V0QjtFQTdFTDtJQVFZLG1CQUFpQjtJQUNqQixrQkFBZ0I7SUNaeEIsZ0JDU1k7SURSWixrQkNlUztJRGRULGFDRWMsRUZVVDtFQVhUO0lBY1ksY0FBYTtJQUNiLCtCQUE2QjtJQUM3QixzQkFBcUIsRUFleEI7RUEvQlQ7TUFrQmdCLGlCQUFlLEVBWWxCO0VBOUJiO1FBb0JvQixZQUFXO1FBQ1gsMEJFbkJLO1FGb0JMLGlCQUFnQjtRQUNoQixhQUFXO1FBQ1gsa0JBQWdCLEVBS25CO0VBN0JqQjtVQTJCd0IsY0FBYSxFQUNoQjtFQTVCckI7SUFpQ1ksaUJBQWUsRUFTbEI7RUExQ1Q7TUFtQ2dCLFlBQVc7TUFDWCxjQUFhO01BQ2IsMEJFbkNTO01Gb0NULGlCQUFnQjtNQUNoQixhQUFXO01BQ1gsa0JBQWdCLEVBQ25CO0VBekNiO0lBNkNZLGdCQUFjO0lBQ2QsZUUzQ08sRUY0Q1Y7RUEvQ1Q7SUFrRFksZUFBYSxFQTBCaEI7RUE1RVQ7TUFvRGdCLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixtQkFBaUI7TUFDakIsMEJFM0RLO01GNERMLDBCQUF5QjtNQzVEckMsZ0JENkR5QztNQzVEekMsb0JDY2E7TURiYixlQ0ZpQjtNRjhETCxxQkFBb0I7TUFDcEIsNkJBQTRCO01BQzVCLDBCQUF5QjtNQUN6Qix5QkFBd0I7TUFDeEIsd0JBQXVCLEVBWTFCO0VBM0ViO1FBa0VvQixvQkVqRUY7UUZrRUUsYUVsRUYsRUZ5RUQ7RUExRWpCO1VBc0V3QixrQkVyRU47VUZzRU0sZUV4RUg7VUZ5RUcsaUJFMURiLEVGMkRVO0VBNEJqQjtFQXJHSjtJQXVHWSxrQkFBZ0IsRUFNbkI7SUE3R1Q7TUF5R2dCLGNBQWE7TUFDYiwyQkFBeUI7TUFDekIsc0JBQXFCLEVBQ3hCO0VBNUdiO0lBK0dZLDJCQUEwQixFQUU3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2Nzcy9IZWxwZXIvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICcuLi9zY3NzL0hlbHBlci9taXhpbic7XHJcbkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL2V4dGVuZCc7XHJcblxyXG4uY29udGVudHtcclxuICAgIC5mb3Jte1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBwYWRkaW5nOjhweCA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC5sYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDozcHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLWRlZmF1bHQsJGZ3LWJvbGQsJGNvbG9yLXdoaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvX2NvbnRhY3R7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIC5maWVsZHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1kYXJrLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc19jb250YWN0e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjM1cHg7XHJcbiAgICAgICAgICAgIC5tZXNze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWRhcmstd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXJyb3J7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgICAgICAgICBjb2xvcjokY29sb3ItYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG5fYm94e1xyXG4gICAgICAgICAgICBtYXJnaW46MjBweCAwO1xyXG4gICAgICAgICAgICAuYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAkY29sb3ItZ3JheS0wO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLWRlZmF1bHQgLSAyLCRmdy1ub3JtYWwsJGNvbG9yLWdyYXktMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjokY29sb3ItZ3JheS0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZ3LTYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAubW9yZV9pbmZve1xyXG4gICAgLy8gICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvLyAgICAgYm9yZGVyOnNvbGlkICRjb2xvci1kYXJrLXdoaXRlIDtcclxuICAgIC8vICAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcclxuICAgIC8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcblxyXG4gICAgLy8gICAgIC5pdGVte1xyXG4gICAgLy8gICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAvLyAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgLy8gICAgICAgICBtYXJnaW46MzBweCAwO1xyXG4gICAgLy8gICAgICAgICBzcGFue1xyXG4gICAgLy8gICAgICAgICAgICAgQGluY2x1ZGUgVGV4dCgkZnMtMiwkZnctbm9ybWFsLCRjb2xvci1ibHVlKTtcclxuICAgIC8vICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgLy8gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHhcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBoNXtcclxuICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTokZnMtZGVmYXVsdCArIDE7XHJcbiAgICAvLyAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4IDEwcHg7XHJcbiAgICAgICAgICAgIC5pbmZvX2NvbnRhY3R7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTVweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vcmVfaW5mb3tcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiQG1peGluIFRleHQoJGZzLCRmdywkY29sb3IpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZzO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdztcclxuICAgIGNvbG9yOiRjb2xvcjtcclxufSIsIi8vIGNvbG9yXHJcbiRjb2xvci1ncmF5LTA6Izc3Nzc3NztcclxuJGNvbG9yLWdyYXktMTojMkMyRDJGO1xyXG4kY29sb3ItZ3JheS0yOiMxNzE4MUI7XHJcbiRjb2xvci1ibGFjazpibGFjaztcclxuJGNvbG9yLXdoaXRlOndoaXRlO1xyXG4kY29sb3ItZGFyay13aGl0ZTojREREREREO1xyXG4kY29sb3ItYmx1ZTojMDBBM0UxO1xyXG5cclxuLy9mb250IHNpemVcclxuJGZzLWRlZmF1bHQ6MTZweDtcclxuJGZzLTA6MTRweDtcclxuJGZzLTE6MjVweDtcclxuJGZzLTI6NDBweDtcclxuXHJcbi8vZm9udCB3ZWlnaHRcclxuJGZ3LW5vcm1hbDpub3JtYWw7XHJcbiRmdy1ib2xkOmJvbGQ7XHJcbiRmdy02MDA6NjAwO1xyXG4kZnctOTAwOjkwMDsiXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);




var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.Contact_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'mess': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        console.log(this.Contact_form);
    };
    ContactComponent.prototype.Send = function () {
        var _this = this;
        var formvalue = this.Contact_form.value;
        var template_params = {
            'from_name': formvalue.name,
            'to_name': formvalue.email,
            'message': formvalue.mess,
        };
        // console.log(this.Contact_form.value);
        emailjs_com__WEBPACK_IMPORTED_MODULE_3__["send"]('gmail', 'template_r9RFuKqG', template_params, 'user_FOT3TRUjSrG39YMaSA8vu')
            .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            swal({
                title: "Email was successfully sent",
                icon: 'success',
            }).then(function (value) {
                _this.Contact_form.reset();
            });
        }, function (err) {
            console.log('FAILED...', err);
            swal({
                title: "Something went wrong. Please try again",
                icon: 'success',
            });
        });
    };
    ContactComponent.prototype.f = function () {
        return this.Contact_form.controls;
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"filter\">\n    <div class=\"title\">\n      <h1>Ho Tuan Kiet</h1>\n      <h3>\n        I am a <span>Web Developer</span>\n      </h3>\n    </div>\n  </div>\n  <particles #demo [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n</div>\n"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main .filter .title h1, .main .filter .title h3 {\n  font-family: 'Playfair Display', serif; }\n\n.main {\n  padding: 0px;\n  position: relative;\n  background-image: url('star.jpg');\n  background-position: center;\n  background-size: cover; }\n\n.main .filter {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    display: flex;\n    justify-content: center; }\n\n.main .filter .title {\n      display: inline-block;\n      align-self: center; }\n\n.main .filter .title h1 {\n        font-size: 57px;\n        font-weight: bold;\n        color: #62c0e6;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        margin-bottom: 30px; }\n\n.main .filter .title h3 {\n        text-align: center;\n        font-size: 22px;\n        font-size: 22px;\n        font-weight: normal;\n        color: white; }\n\n.main .filter .title h3 span {\n          border-bottom: 2px solid #00A3E1;\n          font-size: 25px;\n          font-size: 25px;\n          font-weight: 600;\n          color: white;\n          margin-left: 6px;\n          padding-bottom: 3px; }\n\n@media screen and (max-width: 410px) {\n      .main .filter .title h1 {\n        font-size: 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcaW5kZXhcXGluZGV4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmRleC9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxIZWxwZXJcXF9leHRlbmQuc2NzcyIsInNyYy9hcHAvaW5kZXgvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfbWl4aW4uc2NzcyIsInNyYy9hcHAvaW5kZXgvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0ZJLHVDQUFzQyxFQUN6Qzs7QURDRDtFQUNJLGFBQVc7RUFDWCxtQkFBa0I7RUFDbEIsa0NBQXFEO0VBQ3JELDRCQUEyQjtFQUMzQix1QkFBc0IsRUE4Q3pCOztBQW5ERDtJQVFRLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTTtJQUNOLFlBQVc7SUFDWCxhQUFXO0lBQ1gsK0JBQWdDO0lBQ2hDLGNBQWE7SUFDYix3QkFBdUIsRUFtQzFCOztBQWxETDtNQWtCWSxzQkFBcUI7TUFDckIsbUJBQWtCLEVBc0JyQjs7QUF6Q1Q7UUVGSSxnQkZ3QmlDO1FFdkJqQyxrQkNlUztRRGRULGVGc0I0RDtRQUNoRCwwQkFBeUI7UUFDekIsb0JBQW1CO1FBQ25CLG9CQUFrQixFQUNyQjs7QUExQmI7UUE4QmdCLG1CQUFrQjtRQUNsQixnQkFBeUI7UUVqQ3JDLGdCRmtDeUM7UUVqQ3pDLG9CQ2NhO1FEYmIsYUNFYyxFSHNDTDs7QUF4Q2I7VUFrQ29CLGlDRzlCRDtVSCtCQyxnQkcxQlY7VURYTixnQkNXTTtVRFZOLGlCQ2dCTztVRGZQLGFDRWM7VUhtQ0UsaUJBQWU7VUFDZixvQkFBa0IsRUFDckI7O0FBSVQ7TUEzQ1I7UUE4Q29CLGdCR3BDVixFSHFDTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zY3NzL0hlbHBlci92YXJpYWJsZSc7XHJcbkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL21peGluJztcclxuQGltcG9ydCAnLi4vc2Nzcy9IZWxwZXIvZXh0ZW5kJztcclxuLm1haW57XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAuZmlsdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6Ymx1ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICBAZXh0ZW5kICV0aXRsZS1mb250O1xyXG4gICAgICAgICAgICAgICBAaW5jbHVkZSBUZXh0KCRmcy0yKzE3LCRmdy1ib2xkLHJnYig5OCwgMTkyLCAyMzApKTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJXRpdGxlLWZvbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6JGZzLWRlZmF1bHQgKyA2O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgVGV4dCgkZnMtZGVmYXVsdCArIDYsICRmdy1ub3JtYWwsJGNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgJGNvbG9yLWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiRmcy0xO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLTEsICRmdy02MDAsJGNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206M3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NDEwcHgpIHtcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiRmcy0yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJXRpdGxlLWZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxufVxyXG5cclxuJXRvcGlje1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzowIDVweDtcclxuICAgIGNvbG9yOiRjb2xvci13aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6JGZzLTEgLSAzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRjb2xvci1ibHVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlO1xyXG4gICAgICAgIHdpZHRoOjJweDtcclxuICAgICAgICBoZWlnaHQ6MTBweDtcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJsdWU7XHJcbiAgICAgICAgd2lkdGg6MnB4O1xyXG4gICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIkBtaXhpbiBUZXh0KCRmcywkZncsJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6ICRmcztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnc7XHJcbiAgICBjb2xvcjokY29sb3I7XHJcbn0iLCIvLyBjb2xvclxyXG4kY29sb3ItZ3JheS0wOiM3Nzc3Nzc7XHJcbiRjb2xvci1ncmF5LTE6IzJDMkQyRjtcclxuJGNvbG9yLWdyYXktMjojMTcxODFCO1xyXG4kY29sb3ItYmxhY2s6YmxhY2s7XHJcbiRjb2xvci13aGl0ZTp3aGl0ZTtcclxuJGNvbG9yLWRhcmstd2hpdGU6I0RERERERDtcclxuJGNvbG9yLWJsdWU6IzAwQTNFMTtcclxuXHJcbi8vZm9udCBzaXplXHJcbiRmcy1kZWZhdWx0OjE2cHg7XHJcbiRmcy0wOjE0cHg7XHJcbiRmcy0xOjI1cHg7XHJcbiRmcy0yOjQwcHg7XHJcblxyXG4vL2ZvbnQgd2VpZ2h0XHJcbiRmdy1ub3JtYWw6bm9ybWFsO1xyXG4kZnctYm9sZDpib2xkO1xyXG4kZnctNjAwOjYwMDtcclxuJGZ3LTkwMDo5MDA7Il19 */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    IndexComponent.prototype.ngOnInit = function () {
        console.log(this.demo);
        this.myStyle = {
            'width': '100%',
            'height': '100%',
            'z-index': 999,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 500,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                },
                line_linked: {
                    enable: false,
                }
            }
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('demo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndexComponent.prototype, "demo", void 0);
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"main_title\">\n    portfolio\n    <span><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></span>\n  </h1>\n  <div class=\"content\">\n    <!-- options -->\n    <div class=\"text-center mb-3\">\n      <ul class=\"options\">\n        <li class=\"item\" *ngFor=\"let option of project_options\" (click)=\"Filter(option.option_name)\" [ngClass]=\"{'active':choose===option.option_name}\">\n          {{option.option_name}}\n        </li>\n      </ul>\n    </div>\n    <!-- project -->\n    <div #project class=\"project\">\n      <div class=\"item\" data-type=\"template\">\n        <img src=\"assets/images/bake.PNG\" />\n        <div class=\"filter\">\n          <h5 class=\"btn_detail text-light\">bake page</h5>\n        </div>\n      </div>\n      <div class=\"item\" data-type=\"template\">\n        <img src=\"assets/images/home_design.PNG\" />\n        <div class=\"filter\">\n          <h5 class=\"btn_detail text-light\">Home design page</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes progress_bar {\n  0% {\n    transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n    -moz-transform: translateX(-100%);\n    -ms-transform: translateX(-100%);\n    -o-transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%);\n    -webkit-transform: translateX(0%);\n    -moz-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    -o-transform: translateX(0%); } }\n\n@keyframes progress_bar {\n  0% {\n    transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n    -moz-transform: translateX(-100%);\n    -ms-transform: translateX(-100%);\n    -o-transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%);\n    -webkit-transform: translateX(0%);\n    -moz-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    -o-transform: translateX(0%); } }\n\n@-webkit-keyframes progress_point {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes progress_point {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.content .options {\n  display: inline-flex;\n  border: 1px dashed #DDDDDD;\n  padding: 1px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px; }\n\n.content .options .item {\n    cursor: pointer;\n    list-style-type: none;\n    padding: 8px 20px;\n    text-transform: uppercase; }\n\n.content .options .item.active {\n      background: #00A3E1;\n      color: #17181B;\n      border-radius: 10px;\n      -webkit-border-radius: 10px;\n      -moz-border-radius: 10px;\n      -ms-border-radius: 10px;\n      -o-border-radius: 10px;\n      transition: all 0.5s;\n      -webkit-transition: all 0.5s;\n      -moz-transition: all 0.5s;\n      -ms-transition: all 0.5s;\n      -o-transition: all 0.5s; }\n\n.content .project {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 23px; }\n\n.content .project .item {\n    cursor: pointer;\n    height: 230px;\n    position: relative;\n    border-radius: 8px;\n    -webkit-border-radius: 8px;\n    -moz-border-radius: 8px;\n    -ms-border-radius: 8px;\n    -o-border-radius: 8px;\n    overflow: hidden; }\n\n.content .project .item.hide {\n      display: none; }\n\n.content .project .item img {\n      min-height: 100%;\n      width: 100%; }\n\n.content .project .item .filter {\n      position: absolute;\n      overflow: hidden;\n      width: 100%;\n      height: 50px;\n      bottom: 0;\n      background: rgba(0, 163, 225, 0.9);\n      transform: translateY(100%);\n      -webkit-transform: translateY(100%);\n      -moz-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n      -o-transform: translateY(100%);\n      transition: 0.7s all;\n      -webkit-transition: 0.7s all;\n      -moz-transition: 0.7s all;\n      -ms-transition: 0.7s all;\n      -o-transition: 0.7s all; }\n\n.content .project .item .filter .btn_detail {\n        line-height: 50px;\n        padding-left: 10px;\n        font-weight: bold;\n        text-transform: capitalize; }\n\n.content .project .item:hover .filter {\n      transform: translateY(0);\n      -webkit-transform: translateY(0);\n      -moz-transform: translateY(0);\n      -ms-transform: translateY(0);\n      -o-transform: translateY(0); }\n\n@media screen and (max-width: 1000px) {\n  .content .project {\n    grid-template-columns: 1fr 1fr; } }\n\n@media screen and (max-width: 768px) {\n  .content .project {\n    grid-template-columns: 1fr; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxIZWxwZXJcXF9hbmltYXRpb24uc2NzcyIsInNyYy9hcHAvcHJvamVjdC9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxwcm9qZWN0XFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0L0c6XFxjeWJlcnNvZnRcXEZyb250LWVuZFxcUHJvamVjdFxcQ1ZcXENWLWFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXEhlbHBlclxcX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDZCQUEyQjtJQUMzQixxQ0FBbUM7SUFDbkMsa0NBQWdDO0lBQ2hDLGlDQUErQjtJQUMvQixnQ0FBOEIsRUFBQTtFQUVsQztJQUNJLDBCQUF3QjtJQUN4QixrQ0FBZ0M7SUFDaEMsK0JBQTZCO0lBQzdCLDhCQUE0QjtJQUM1Qiw2QkFBMkIsRUFBQSxFQUFBOztBQWJuQztFQUNJO0lBQ0ksNkJBQTJCO0lBQzNCLHFDQUFtQztJQUNuQyxrQ0FBZ0M7SUFDaEMsaUNBQStCO0lBQy9CLGdDQUE4QixFQUFBO0VBRWxDO0lBQ0ksMEJBQXdCO0lBQ3hCLGtDQUFnQztJQUNoQywrQkFBNkI7SUFDN0IsOEJBQTRCO0lBQzVCLDZCQUEyQixFQUFBLEVBQUE7O0FBSW5DO0VBQ0k7SUFBRyxXQUFTLEVBQUE7RUFDWjtJQUFLLFdBQVMsRUFBQSxFQUFBOztBQUZsQjtFQUNJO0lBQUcsV0FBUyxFQUFBO0VBQ1o7SUFBSyxXQUFTLEVBQUEsRUFBQTs7QUNmbEI7RUFFUSxxQkFBb0I7RUFDcEIsMkJDRGlCO0VERWpCLGFBQVc7RUFDWCxvQkFBa0I7RUFDbEIsNEJBQTBCO0VBQzFCLHlCQUF1QjtFQUN2Qix3QkFBc0I7RUFDdEIsdUJBQXFCLEVBdUJ4Qjs7QUFoQ0w7SUFZWSxnQkFBZTtJQUNmLHNCQUFvQjtJQUNwQixrQkFBZ0I7SUFDaEIsMEJBQXlCLEVBZ0I1Qjs7QUEvQlQ7TUFrQmdCLG9CQ2ZHO01EZ0JILGVDcEJLO01EcUJMLG9CQUFrQjtNQUNsQiw0QkFBMEI7TUFDMUIseUJBQXVCO01BQ3ZCLHdCQUFzQjtNQUN0Qix1QkFBcUI7TUFDckIscUJBQW9CO01BQ3BCLDZCQUE0QjtNQUM1QiwwQkFBeUI7TUFDekIseUJBQXdCO01BQ3hCLHdCQUF1QixFQUMxQjs7QUE5QmI7RUFvQ1EsY0FBYTtFQUNiLG1DQUFrQztFQUNsQyxlQUFjLEVBMkRqQjs7QUFqR0w7SUF5Q1ksZ0JBQWU7SUFDZixjQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLG1CQUFpQjtJQUNqQiwyQkFBeUI7SUFDekIsd0JBQXNCO0lBQ3RCLHVCQUFxQjtJQUNyQixzQkFBb0I7SUFDcEIsaUJBQWdCLEVBK0NuQjs7QUFoR1Q7TUFvRGdCLGNBQWEsRUFDaEI7O0FBckRiO01Bd0RnQixpQkFBZTtNQUNmLFlBQVcsRUFDZDs7QUExRGI7TUE2RGdCLG1CQUFrQjtNQUNsQixpQkFBZ0I7TUFDaEIsWUFBVTtNQUNWLGFBQVc7TUFDWCxVQUFTO01BQ1QsbUNDL0RHO01EZ0VILDRCQUEyQjtNQUMzQixvQ0FBbUM7TUFDbkMsaUNBQWdDO01BQ2hDLGdDQUErQjtNQUMvQiwrQkFBOEI7TUFDOUIscUJBQW9CO01BQ3BCLDZCQUE0QjtNQUM1QiwwQkFBeUI7TUFDekIseUJBQXdCO01BQ3hCLHdCQUF1QixFQVExQjs7QUFwRmI7UUErRW9CLGtCQUFpQjtRQUNqQixtQkFBaUI7UUFDakIsa0JDcEVQO1FEcUVPLDJCQUEwQixFQUM3Qjs7QUFuRmpCO01Bd0ZvQix5QkFBd0I7TUFDeEIsaUNBQWdDO01BQ2hDLDhCQUE2QjtNQUM3Qiw2QkFBNEI7TUFDNUIsNEJBQTJCLEVBRTlCOztBQUtiO0VBbkdKO0lBcUdZLCtCQUE4QixFQUNqQyxFQUFBOztBQUdMO0VBekdKO0lBMkdZLDJCQUEwQixFQUM3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBwcm9ncmVzc19iYXJ7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzc19wb2ludHtcclxuICAgIDAle29wYWNpdHk6MDt9XHJcbiAgICAxMDAle29wYWNpdHk6MX1cclxufSIsIkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL3ZhcmlhYmxlJztcclxuQGltcG9ydCAnLi4vc2Nzcy9IZWxwZXIvbWl4aW4nO1xyXG5AaW1wb3J0ICcuLi9zY3NzL0hlbHBlci9hbmltYXRpb24nO1xyXG5cclxuLmNvbnRlbnR7XHJcbiAgICAub3B0aW9uc3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBib3JkZXI6MXB4IGRhc2hlZCAkY29sb3ItZGFyay13aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOjFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOjEwcHg7XHJcblxyXG4gICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjhweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRjb2xvci1ibHVlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnByb2plY3R7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAyM3B4O1xyXG5cclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjMwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAmLmhpZGV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZpbHRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogJGNvbG9yLWJsdWUsICRhbHBoYTogMC45KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC43cyBhbGw7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuN3MgYWxsO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjdzIGFsbDtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiAwLjdzIGFsbDtcclxuICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuN3MgYWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC5idG5fZGV0YWlse1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZnctYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIC5maWx0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6MTAwMHB4KSB7XHJcbiAgICAgICAgLnByb2plY3R7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAucHJvamVjdHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gY29sb3JcclxuJGNvbG9yLWdyYXktMDojNzc3Nzc3O1xyXG4kY29sb3ItZ3JheS0xOiMyQzJEMkY7XHJcbiRjb2xvci1ncmF5LTI6IzE3MTgxQjtcclxuJGNvbG9yLWJsYWNrOmJsYWNrO1xyXG4kY29sb3Itd2hpdGU6d2hpdGU7XHJcbiRjb2xvci1kYXJrLXdoaXRlOiNEREREREQ7XHJcbiRjb2xvci1ibHVlOiMwMEEzRTE7XHJcblxyXG4vL2ZvbnQgc2l6ZVxyXG4kZnMtZGVmYXVsdDoxNnB4O1xyXG4kZnMtMDoxNHB4O1xyXG4kZnMtMToyNXB4O1xyXG4kZnMtMjo0MHB4O1xyXG5cclxuLy9mb250IHdlaWdodFxyXG4kZnctbm9ybWFsOm5vcm1hbDtcclxuJGZ3LWJvbGQ6Ym9sZDtcclxuJGZ3LTYwMDo2MDA7XHJcbiRmdy05MDA6OTAwOyJdfQ== */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.projects = [];
        this.project_options = [
            { option_name: 'all' },
            { option_name: 'template' },
            { option_name: 'project' },
        ];
        this.choose = 'all';
    }
    ProjectComponent.prototype.ngOnInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    ProjectComponent.prototype.Filter = function (name) {
        this.choose = name;
        var arr_item = this.view_projects.nativeElement.getElementsByClassName('item');
        if (this.choose === 'all') {
            for (var _i = 0, arr_item_1 = arr_item; _i < arr_item_1.length; _i++) {
                var item = arr_item_1[_i];
                item.classList.remove('hide');
            }
        }
        else {
            for (var _a = 0, arr_item_2 = arr_item; _a < arr_item_2.length; _a++) {
                var item = arr_item_2[_a];
                if (item.getAttribute('data-type') === this.choose) {
                    item.classList.remove('hide');
                }
                else {
                    item.classList.add('hide');
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('project'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectComponent.prototype, "view_projects", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"main_title\">\n    {{title}}.\n    <span><i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i></span>\n  </h1>\n  <!-- education -->\n  <div class=\"education\">\n    <div class=\"education_title\">education</div>\n    <ul class=\"education_content\">\n      <li class=\"item\" *ngFor=\"let edu of educations\">\n        <div class=\"item_content\">\n          <p class=\"major\">{{edu.major}}</p>\n          <p class=\"college\">{{edu.college}}</p>\n          <!-- <p class=\"describe\"></p> -->\n        </div>\n        <div class=\"line_point\"></div>\n        <span class=\"start\">{{edu.start}}</span>\n        <span class=\"end\">{{edu.end}}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!-- coding skills -->\n  <div class=\"coding_skill\">\n    <div class=\"skill_title\">Coding skills</div>\n    <div class=\"skill\">\n      <div class=\"item\" *ngFor=\"let skill of skills\">\n        <h6 class=\"name\">\n          {{skill.name}}\n          <span class=\"wow\">{{skill.point}} %</span>\n        </h6>\n        <div class=\"skill_progress\">\n          <div class=\"progress_bar wow\" [ngStyle]=\"{'width':skill.point+'%'}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".education_title, .coding_skill .skill_title {\n  display: inline-block;\n  position: relative;\n  padding: 0 5px;\n  color: white;\n  font-weight: bold;\n  font-size: 22px;\n  text-transform: uppercase;\n  border-bottom: 2px solid #00A3E1;\n  margin-bottom: 15px;\n  letter-spacing: 1px; }\n  .education_title::before, .coding_skill .skill_title::before {\n    content: '';\n    position: absolute;\n    background: #00A3E1;\n    width: 2px;\n    height: 10px;\n    left: 0;\n    bottom: 0; }\n  .education_title::after, .coding_skill .skill_title::after {\n    content: '';\n    position: absolute;\n    background: #00A3E1;\n    width: 2px;\n    height: 10px;\n    right: 0;\n    bottom: 0; }\n  @-webkit-keyframes progress_bar {\n  0% {\n    transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n    -moz-transform: translateX(-100%);\n    -ms-transform: translateX(-100%);\n    -o-transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%);\n    -webkit-transform: translateX(0%);\n    -moz-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    -o-transform: translateX(0%); } }\n  @keyframes progress_bar {\n  0% {\n    transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n    -moz-transform: translateX(-100%);\n    -ms-transform: translateX(-100%);\n    -o-transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%);\n    -webkit-transform: translateX(0%);\n    -moz-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    -o-transform: translateX(0%); } }\n  @-webkit-keyframes progress_point {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes progress_point {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  .education {\n  margin-left: 30px; }\n  .education_content {\n    list-style-type: none; }\n  .education_content .item {\n      border-left: 2px solid #00A3E1;\n      padding: 10px 40px;\n      position: relative;\n      margin: 20px 0 70px 20px; }\n  .education_content .item .major {\n        font-size: 19px;\n        font-weight: 600;\n        color: white;\n        text-transform: uppercase; }\n  .education_content .item .college {\n        font-size: 16px;\n        font-weight: 600;\n        color: #00A3E1;\n        margin-bottom: 0; }\n  .education_content .item .line_point {\n        position: absolute;\n        height: 100%;\n        width: 2px;\n        top: 0;\n        left: 0; }\n  .education_content .item .line_point::before {\n          content: '';\n          position: absolute;\n          width: 10px;\n          height: 10px;\n          border: 2px solid #00A3E1;\n          top: -10px;\n          left: -6px;\n          border-radius: 50%;\n          -webkit-border-radius: 50%;\n          -moz-border-radius: 50%;\n          -ms-border-radius: 50%;\n          -o-border-radius: 50%; }\n  .education_content .item .line_point::after {\n          content: '';\n          position: absolute;\n          width: 10px;\n          height: 10px;\n          border: 2px solid #00A3E1;\n          bottom: -10px;\n          left: -6px;\n          border-radius: 50%;\n          -webkit-border-radius: 50%;\n          -moz-border-radius: 50%;\n          -ms-border-radius: 50%;\n          -o-border-radius: 50%; }\n  .education_content .item span {\n        display: inline-block;\n        position: absolute;\n        color: white;\n        left: -46px; }\n  .education_content .item span.start {\n          top: -18px; }\n  .education_content .item span.end {\n          bottom: -18px; }\n  .coding_skill {\n  margin-left: 30px; }\n  .coding_skill .skill {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 60px;\n    grid-row-gap: 20px; }\n  .coding_skill .skill .item .name span {\n      float: right;\n      -webkit-animation-name: progress_point;\n              animation-name: progress_point;\n      -webkit-animation-iteration-count: 1;\n              animation-iteration-count: 1;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s; }\n  .coding_skill .skill .item .skill_progress {\n      height: 10px;\n      background: rgba(23, 24, 27, 0.5);\n      overflow: hidden; }\n  .coding_skill .skill .item .skill_progress .progress_bar {\n        position: relative;\n        background: linear-gradient(to right, #00A3E1, #00a8e0, #00e0e0);\n        height: 100%;\n        -webkit-animation-name: progress_bar;\n                animation-name: progress_bar;\n        -webkit-animation-iteration-count: 1;\n                animation-iteration-count: 1;\n        -webkit-animation-timing-function: ease-out;\n                animation-timing-function: ease-out;\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s; }\n  @media screen and (max-width: 992px) {\n  .coding_skill .skill {\n    grid-template-columns: 1fr; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0c6XFxjeWJlcnNvZnRcXEZyb250LWVuZFxcUHJvamVjdFxcQ1ZcXENWLWFuZ3VsYXIvc3JjXFxhcHBcXHJlc3VtZVxccmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfZXh0ZW5kLnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxIZWxwZXJcXF92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9yZXN1bWUvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfYW5pbWF0aW9uLnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxIZWxwZXJcXF9taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9LO0VDRkQsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixlQUFhO0VBQ2IsYUNIYztFRElkLGtCQUFnQjtFQUNoQixnQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLGlDQ0xlO0VETWYsb0JBQWtCO0VBQ2xCLG9CQUFtQixFQXNCdEI7RUQ3Qkk7SUNVRyxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLG9CQ1pXO0lEYVgsV0FBUztJQUNULGFBQVc7SUFDWCxRQUFNO0lBQ04sVUFBUSxFQUVYO0VEbEJBO0lDb0JHLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsb0JDdEJXO0lEdUJYLFdBQVM7SUFDVCxhQUFXO0lBQ1gsU0FBTztJQUNQLFVBQVEsRUFFWDtFRW5DTDtFQUNJO0lBQ0ksNkJBQTJCO0lBQzNCLHFDQUFtQztJQUNuQyxrQ0FBZ0M7SUFDaEMsaUNBQStCO0lBQy9CLGdDQUE4QixFQUFBO0VBRWxDO0lBQ0ksMEJBQXdCO0lBQ3hCLGtDQUFnQztJQUNoQywrQkFBNkI7SUFDN0IsOEJBQTRCO0lBQzVCLDZCQUEyQixFQUFBLEVBQUE7RUFibkM7RUFDSTtJQUNJLDZCQUEyQjtJQUMzQixxQ0FBbUM7SUFDbkMsa0NBQWdDO0lBQ2hDLGlDQUErQjtJQUMvQixnQ0FBOEIsRUFBQTtFQUVsQztJQUNJLDBCQUF3QjtJQUN4QixrQ0FBZ0M7SUFDaEMsK0JBQTZCO0lBQzdCLDhCQUE0QjtJQUM1Qiw2QkFBMkIsRUFBQSxFQUFBO0VBSW5DO0VBQ0k7SUFBRyxXQUFTLEVBQUE7RUFDWjtJQUFLLFdBQVMsRUFBQSxFQUFBO0VBRmxCO0VBQ0k7SUFBRyxXQUFTLEVBQUE7RUFDWjtJQUFLLFdBQVMsRUFBQSxFQUFBO0VIZGxCO0VBQ0ksa0JBQWdCLEVBZ0ZuQjtFQTVFRztJQUNJLHNCQUFvQixFQTBFdkI7RUEzRUE7TUFJTywrQkVQTztNRlFQLG1CQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIseUJBQXVCLEVBbUUxQjtFQTFFSjtRSVRELGdCSm1CeUM7UUlsQnpDLGlCRmdCTztRRWZQLGFGRWM7UUZnQkYsMEJBQXlCLEVBQzVCO0VBWlI7UUlURCxnQkZTWTtRRVJaLGlCRmdCTztRRWZQLGVGSWU7UUZrQkgsaUJBQWUsRUFDbEI7RUFoQlI7UUF3QlcsbUJBQWtCO1FBQ2xCLGFBQVc7UUFDWCxXQUFTO1FBQ1QsT0FBSztRQUNMLFFBQU0sRUErQlQ7RUEzRFI7VUErQmUsWUFBVTtVQUNWLG1CQUFrQjtVQUNsQixZQUFVO1VBQ1YsYUFBVztVQUNYLDBCRXRDRDtVRnVDQyxXQUFTO1VBQ1QsV0FBUztVQUNULG1CQUFrQjtVQUNsQiwyQkFBMEI7VUFDMUIsd0JBQXVCO1VBQ3ZCLHVCQUFzQjtVQUN0QixzQkFBcUIsRUFDeEI7RUEzQ1o7VUE4Q2UsWUFBVTtVQUNWLG1CQUFrQjtVQUNsQixZQUFVO1VBQ1YsYUFBVztVQUNYLDBCRXJERDtVRnNEQyxjQUFZO1VBQ1osV0FBUztVQUNULG1CQUFrQjtVQUNsQiwyQkFBMEI7VUFDMUIsd0JBQXVCO1VBQ3ZCLHVCQUFzQjtVQUN0QixzQkFBcUIsRUFDeEI7RUExRFo7UUE4RFcsc0JBQXFCO1FBQ3JCLG1CQUFrQjtRQUNsQixhRXJFRTtRRnNFRixZQUFVLEVBUWI7RUF6RVI7VUFvRW1CLFdBQVMsRUFDWjtFQXJFaEI7VUF1RW1CLGNBQVksRUFDZjtFQU1yQjtFQUNJLGtCQUFnQixFQXNDbkI7RUF2Q0Q7SUFNUSxjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLHNCQUFxQjtJQUNyQixtQkFBaUIsRUE2QnBCO0VBdENMO01BYW9CLGFBQVc7TUFDWCx1Q0FBOEI7Y0FBOUIsK0JBQThCO01BQzlCLHFDQUE0QjtjQUE1Qiw2QkFBNEI7TUFDNUIsNENBQW1DO2NBQW5DLG9DQUFtQztNQUNuQywrQkFBc0I7Y0FBdEIsdUJBQXNCO01BQ3RCLDRCQUFrQjtjQUFsQixvQkFBa0IsRUFDckI7RUFuQmpCO01Bc0JnQixhQUFXO01BQ1gsa0NFNUdLO01GNkdMLGlCQUFnQixFQVluQjtFQXBDYjtRQTJCb0IsbUJBQWtCO1FBRWxCLGlFQUFrRTtRQUNsRSxhQUFXO1FBQ1gscUNBQTRCO2dCQUE1Qiw2QkFBNEI7UUFDNUIscUNBQTRCO2dCQUE1Qiw2QkFBNEI7UUFDNUIsNENBQW1DO2dCQUFuQyxvQ0FBbUM7UUFDbkMsK0JBQXNCO2dCQUF0Qix1QkFBc0IsRUFDekI7RUFNakI7RUF6Q0E7SUE0Q1ksMkJBQTBCLEVBQzdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2Nzcy9IZWxwZXIvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICcuLi9zY3NzL0hlbHBlci9taXhpbic7XHJcbkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL2V4dGVuZCc7XHJcbkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL2FuaW1hdGlvbic7XHJcblxyXG4uZWR1Y2F0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgICZfdGl0bGV7XHJcbiAgICAgICAgQGV4dGVuZCAldG9waWM7XHJcbiAgICB9XHJcbiAgICAmX2NvbnRlbnR7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcblxyXG4gICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgJGNvbG9yLWJsdWU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweCA0MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4IDAgNzBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLm1ham9ye1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgVGV4dCgkZnMtZGVmYXVsdCArIDMsJGZ3LTYwMCwkY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sbGVnZXtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLWRlZmF1bHQsJGZ3LTYwMCwkY29sb3ItYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gLmRlc2NyaWJle1xyXG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICAgIC8vICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAubGluZV9wb2ludHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAkY29sb3ItYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDotNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OicnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgJGNvbG9yLWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOi0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6LTZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0Oi00NnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnN0YXJ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTE4cHg7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5lbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTotMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2Rpbmdfc2tpbGx7XHJcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgLnNraWxsX3RpdGxle1xyXG4gICAgICAgIEBleHRlbmQgJXRvcGljO1xyXG4gICAgfVxyXG4gICAgLnNraWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNjBweDtcclxuICAgICAgICBncmlkLXJvdy1nYXA6MjBweDtcclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwcm9ncmVzc19wb2ludDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OjJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5za2lsbF9wcm9ncmVzc3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKCRjb2xvcjogJGNvbG9yLWdyYXktMiwgJGFscGhhOiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAucHJvZ3Jlc3NfYmFye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkY29sb3ItYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yLWJsdWUsIzAwYThlMCwjMDBlMGUwICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHByb2dyZXNzX2JhcjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgLmNvZGluZ19za2lsbHtcclxuICAgICAgICAuc2tpbGx7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiV0aXRsZS1mb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbn1cclxuXHJcbiV0b3BpY3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgICBjb2xvcjokY29sb3Itd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOiRmcy0xIC0gMztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkY29sb3ItYmx1ZTtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmx1ZTtcclxuICAgICAgICB3aWR0aDoycHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwcHg7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlO1xyXG4gICAgICAgIHdpZHRoOjJweDtcclxuICAgICAgICBoZWlnaHQ6MTBweDtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBjb2xvclxyXG4kY29sb3ItZ3JheS0wOiM3Nzc3Nzc7XHJcbiRjb2xvci1ncmF5LTE6IzJDMkQyRjtcclxuJGNvbG9yLWdyYXktMjojMTcxODFCO1xyXG4kY29sb3ItYmxhY2s6YmxhY2s7XHJcbiRjb2xvci13aGl0ZTp3aGl0ZTtcclxuJGNvbG9yLWRhcmstd2hpdGU6I0RERERERDtcclxuJGNvbG9yLWJsdWU6IzAwQTNFMTtcclxuXHJcbi8vZm9udCBzaXplXHJcbiRmcy1kZWZhdWx0OjE2cHg7XHJcbiRmcy0wOjE0cHg7XHJcbiRmcy0xOjI1cHg7XHJcbiRmcy0yOjQwcHg7XHJcblxyXG4vL2ZvbnQgd2VpZ2h0XHJcbiRmdy1ub3JtYWw6bm9ybWFsO1xyXG4kZnctYm9sZDpib2xkO1xyXG4kZnctNjAwOjYwMDtcclxuJGZ3LTkwMDo5MDA7IiwiQGtleWZyYW1lcyBwcm9ncmVzc19iYXJ7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzc19wb2ludHtcclxuICAgIDAle29wYWNpdHk6MDt9XHJcbiAgICAxMDAle29wYWNpdHk6MX1cclxufSIsIkBtaXhpbiBUZXh0KCRmcywkZncsJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6ICRmcztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnc7XHJcbiAgICBjb2xvcjokY29sb3I7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var ResumeComponent = /** @class */ (function () {
    // Controller
    function ResumeComponent() {
        this.title = 'my resume';
        this.educations = [
            { major: 'Business Information Technology', college: 'FPT Polytechnic', start: 2013, end: 2016 },
            { major: 'PHP Developer', college: 'The University Of Science', start: 2017, end: 2017 },
            { major: 'Frontend Developer', college: 'CyberSoft', start: 2018, end: 'Now' },
        ];
        this.skills = [
            { name: 'HTML5', point: 85 },
            { name: 'CSS3', point: 85 },
            { name: 'JAVASCRIPT', point: 70 },
            { name: 'SCSS', point: 65 },
            { name: 'OOP', point: 75 },
            { name: 'Angular 6', point: 75 },
            { name: 'Reactjs', point: 30 },
        ];
    }
    ResumeComponent.prototype.ngOnInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar_mobile\">\n  <div class=\"mobile_name\">{{own_name}}</div>\n  <div class=\"icon_toggle\" (click)=\"toggle_active()\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n<section class=\"sidebar\" [ngClass]=\"{'active':toggle}\">\n  <!-- avatar -->\n  <div class=\"avatar\">\n    <img src=\"assets/images/mypic2.jpg\">\n    <div class=\"name\">{{own_name}}</div>\n  </div>\n  <!-- menu -->\n  <div class=\"menu_contain\">\n    <ul class=\"menu\">\n      <li class=\"menu_item\">\n        <a class=\"item_link\" routerLinkActive=\"active\" routerLink=\"/index\">\n          <span><i class=\"fa fa-home\" aria-hidden=\"true\"></i></span>Home\n        </a>\n      </li>\n      <li class=\"menu_item\">\n        <a class=\"item_link\" routerLinkActive=\"active\"  routerLink=\"/about\">\n          <span><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i></span>about me\n        </a>\n      </li>\n      <li class=\"menu_item\">\n        <a class=\"item_link\" routerLinkActive=\"active\"  routerLink=\"/resume\">\n          <span><i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i></span>resume\n        </a>\n      </li>\n      <!-- <li class=\"menu_item\">\n        <a class=\"item_link\" routerLinkActive=\"active\"  routerLink=\"/portfolio\">\n          <span><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></span>Portfolio\n        </a>\n      </li> -->\n      <li class=\"menu_item\">\n        <a class=\"item_link\" routerLinkActive=\"active\"  routerLink=\"/contact\">\n          <span><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></span>contact\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- download button -->\n  <div class=\"footer\">\n    <a class=\"btn_download\" href=\"assets/cv/Ho-Tuan-Kiet-CV.pdf\" download>\n      <!-- <div class=\"btn_download\"> -->\n        DOWNLOAD RESUME\n      <!-- </div> -->\n    </a>\n    <p><i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> Copyrights 2019</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar_mobile {\n  background: #17181B;\n  width: 100%;\n  height: 0%;\n  overflow: hidden;\n  display: flex;\n  line-height: 50px;\n  font-size: 25px;\n  font-weight: normal;\n  color: white;\n  text-align: center; }\n  .sidebar_mobile .mobile_name {\n    flex-grow: 2;\n    text-transform: uppercase; }\n  .sidebar_mobile .icon_toggle {\n    width: 50px;\n    border-left: 1px solid white;\n    cursor: pointer; }\n  .sidebar {\n  height: 100%;\n  white-space: nowrap;\n  position: fixed;\n  width: 200px;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: #17181B;\n  border-right: 1px solid #2C2D2F;\n  z-index: 999;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s; }\n  .sidebar .avatar {\n    height: 210px;\n    width: 100%;\n    background: #777777;\n    position: relative; }\n  .sidebar .avatar img {\n      width: 100%;\n      height: 100%; }\n  .sidebar .avatar .name {\n      position: absolute;\n      width: 100%;\n      line-height: 40px;\n      text-align: center;\n      text-transform: uppercase;\n      bottom: 0;\n      left: 0;\n      background: rgba(0, 163, 225, 0.9);\n      font-size: 23px;\n      font-weight: bold;\n      color: white; }\n  .sidebar .menu_contain .menu {\n    list-style-type: none;\n    padding-left: 0px; }\n  .sidebar .menu_contain .menu .menu_item {\n      border-bottom: 1px solid rgba(85, 85, 85, 0.507); }\n  .sidebar .menu_contain .menu .menu_item .item_link {\n        display: block;\n        width: 100%;\n        line-height: 50px;\n        text-transform: uppercase;\n        text-decoration: none;\n        font-size: 13px;\n        font-weight: normal;\n        color: #777777;\n        padding-left: 40px; }\n  .sidebar .menu_contain .menu .menu_item .item_link span {\n          display: inline-block;\n          margin-right: 12px;\n          width: 22px;\n          font-size: 17px; }\n  .sidebar .menu_contain .menu .menu_item .item_link.active {\n          color: white; }\n  .sidebar .footer {\n    margin-top: auto; }\n  .sidebar .footer .btn_download {\n      text-decoration: none;\n      display: block;\n      margin: 0 10px;\n      padding: 9px 6px;\n      text-align: center;\n      font-size: 14px;\n      font-weight: 600;\n      color: #17181B;\n      background: rgba(255, 255, 255, 0.3);\n      cursor: pointer;\n      border-radius: 5px;\n      -webkit-border-radius: 5px;\n      -moz-border-radius: 5px;\n      -ms-border-radius: 5px;\n      -o-border-radius: 5px;\n      transition: all 1s;\n      -webkit-transition: all 1s;\n      -moz-transition: all 1s;\n      -ms-transition: all 1s;\n      -o-transition: all 1s; }\n  .sidebar .footer .btn_download:hover {\n        background: white; }\n  .sidebar .footer p {\n      font-size: 12px;\n      font-weight: normal;\n      color: #777777;\n      text-align: center;\n      margin: 7px 10px 5px 10px; }\n  @media screen and (max-width: 768px) {\n  .sidebar_mobile {\n    height: auto; }\n  .sidebar {\n    width: 0px;\n    transition: all 0.3s;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -ms-transition: all 0.3s;\n    -o-transition: all 0.3s; }\n    .sidebar .name {\n      opacity: 0; }\n    .sidebar.active {\n      width: 200px; }\n      .sidebar.active .name {\n        opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9HOlxcY3liZXJzb2Z0XFxGcm9udC1lbmRcXFByb2plY3RcXENWXFxDVi1hbmd1bGFyL3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWRlYmFyL0c6XFxjeWJlcnNvZnRcXEZyb250LWVuZFxcUHJvamVjdFxcQ1ZcXENWLWFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXEhlbHBlclxcX3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvRzpcXGN5YmVyc29mdFxcRnJvbnQtZW5kXFxQcm9qZWN0XFxDVlxcQ1YtYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcSGVscGVyXFxfbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG9CQ0RpQjtFREVqQixZQUFXO0VBQ1gsV0FBUztFQUNULGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isa0JBQWdCO0VFUmhCLGdCRFdNO0VDVk4sb0JEY2E7RUNiYixhREVjO0VETWQsbUJBQWtCLEVBWXJCO0VBcEJEO0lBV1EsYUFBWTtJQUNaLDBCQUF5QixFQUM1QjtFQWJMO0lBZVEsWUFBVztJQUNYLDZCQ2RVO0lEZVYsZ0JBQWUsRUFDbEI7RUFHTDtFQUNJLGFBQVc7RUFDWCxvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osT0FBSztFQUNMLFFBQU07RUFDTixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JDaENpQjtFRGlDakIsZ0NDbENpQjtFRG1DakIsYUFBWTtFQUNaLHFCQUFtQjtFQUNuQiw2QkFBMkI7RUFDM0IsMEJBQXdCO0VBQ3hCLHlCQUF1QjtFQUN2Qix3QkFBc0IsRUF5RnpCO0VBM0dEO0lBcUJRLGNBQVk7SUFDWixZQUFXO0lBQ1gsb0JDOUNhO0lEK0NiLG1CQUFrQixFQWtCckI7RUExQ0w7TUEyQlksWUFBVztNQUNYLGFBQVcsRUFDZDtFQTdCVDtNQWdDWSxtQkFBaUI7TUFDakIsWUFBVztNQUNYLGtCQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsMEJBQXlCO01BQ3pCLFVBQVE7TUFDUixRQUFNO01BQ04sbUNDeERPO01DTmYsZ0JGK0QrQjtNRTlEL0Isa0JEZVM7TUNkVCxhREVjLEVENERUO0VBekNUO0lBOENZLHNCQUFxQjtJQUNyQixrQkFBZ0IsRUF3Qm5CO0VBdkVUO01BaURnQixpREFBK0MsRUFxQmxEO0VBdEViO1FBbURvQixlQUFjO1FBQ2QsWUFBVztRQUNYLGtCQUFnQjtRQUNoQiwwQkFBeUI7UUFDekIsc0JBQW9CO1FFOUVwQyxnQkYrRXVDO1FFOUV2QyxvQkRjYTtRQ2JiLGVERmlCO1FEZ0ZELG1CQUFpQixFQVlwQjtFQXJFakI7VUE0RHdCLHNCQUFxQjtVQUNyQixtQkFBaUI7VUFDakIsWUFBVTtVQUNWLGdCQUFlLEVBQ2xCO0VBaEVyQjtVQW1Fd0IsYUN0Rk4sRUR1Rkc7RUFwRXJCO0lBMkVRLGlCQUFnQixFQStCbkI7RUExR0w7TUE2RVksc0JBQXFCO01BQ3JCLGVBQWM7TUFDZCxlQUFhO01BQ2IsaUJBQWU7TUFDZixtQkFBa0I7TUV4RzFCLGdCRFVNO01DVE4saUJEZ0JPO01DZlAsZURBaUI7TUR3R1QscUNBQWdDO01BQ2hDLGdCQUFlO01BQ2YsbUJBQWlCO01BQ2pCLDJCQUF5QjtNQUN6Qix3QkFBc0I7TUFDdEIsdUJBQXFCO01BQ3JCLHNCQUFvQjtNQUNwQixtQkFBaUI7TUFDakIsMkJBQXlCO01BQ3pCLHdCQUFzQjtNQUN0Qix1QkFBcUI7TUFDckIsc0JBQW9CLEVBS3ZCO0VBbkdUO1FBaUdnQixrQkNwSEUsRURxSEw7RUFsR2I7TUV2QkksZ0JGNkgrQjtNRTVIL0Isb0JEY2E7TUNiYixlREZpQjtNRDhIVCxtQkFBa0I7TUFDbEIsMEJBQXdCLEVBQzNCO0VBS1Q7RUFDSTtJQUNJLGFBQVcsRUFDZDtFQUNEO0lBQ0ksV0FBUztJQUNULHFCQUFtQjtJQUNuQiw2QkFBMkI7SUFDM0IsMEJBQXdCO0lBQ3hCLHlCQUF1QjtJQUN2Qix3QkFBc0IsRUFhekI7SUFuQkQ7TUFTUSxXQUFTLEVBQ1o7SUFWTDtNQWFRLGFBQVcsRUFLZDtNQWxCTDtRQWdCWSxXQUFTLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL3ZhcmlhYmxlJyA7XHJcbkBpbXBvcnQgJy4uL3Njc3MvSGVscGVyL21peGluJztcclxuXHJcbi5zaWRlYmFyX21vYmlsZXtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmF5LTI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDowJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGluZS1oZWlnaHQ6NTBweDtcclxuICAgIEBpbmNsdWRlIFRleHQoJGZzLTEsJGZ3LW5vcm1hbCwkY29sb3Itd2hpdGUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAubW9iaWxlX25hbWV7XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuaWNvbl90b2dnbGV7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICRjb2xvci13aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcbi5zaWRlYmFye1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiRjb2xvci1ncmF5LTI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3ItZ3JheS0xO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjphbGwgMC4zcztcclxuXHJcbiAgICAuYXZhdGFye1xyXG4gICAgICAgIGhlaWdodDoyMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiRjb2xvci1ncmF5LTA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgkY29sb3I6ICRjb2xvci1ibHVlLCAkYWxwaGE6IDAuOSk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLTEgLSAyLCRmdy1ib2xkLCRjb2xvci13aGl0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnVfY29udGFpbntcclxuICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAubWVudV9pdGVte1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSg4NSwgODUsIDg1LCAwLjUwNyk7XHJcbiAgICAgICAgICAgICAgICAuaXRlbV9saW5re1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBUZXh0KCRmcy0wIC0gMSwkZnctbm9ybWFsLCRjb2xvci1ncmF5LTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgLmJ0bl9kb3dubG9hZHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOjAgMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzo5cHggNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLTAsJGZ3LTYwMCwkY29sb3ItZ3JheS0yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4zKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMXM7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMXM7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjphbGwgMXM7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOmFsbCAxcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjphbGwgMXM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDokY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIFRleHQoJGZzLTAgLSAyLCRmdy1ub3JtYWwsJGNvbG9yLWdyYXktMCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOjdweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLnNpZGViYXJfbW9iaWxle1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgICAgd2lkdGg6MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246YWxsIDAuM3M7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjphbGwgMC4zcztcclxuICAgICAgICAtby10cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5cclxuICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG5cclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gY29sb3JcclxuJGNvbG9yLWdyYXktMDojNzc3Nzc3O1xyXG4kY29sb3ItZ3JheS0xOiMyQzJEMkY7XHJcbiRjb2xvci1ncmF5LTI6IzE3MTgxQjtcclxuJGNvbG9yLWJsYWNrOmJsYWNrO1xyXG4kY29sb3Itd2hpdGU6d2hpdGU7XHJcbiRjb2xvci1kYXJrLXdoaXRlOiNEREREREQ7XHJcbiRjb2xvci1ibHVlOiMwMEEzRTE7XHJcblxyXG4vL2ZvbnQgc2l6ZVxyXG4kZnMtZGVmYXVsdDoxNnB4O1xyXG4kZnMtMDoxNHB4O1xyXG4kZnMtMToyNXB4O1xyXG4kZnMtMjo0MHB4O1xyXG5cclxuLy9mb250IHdlaWdodFxyXG4kZnctbm9ybWFsOm5vcm1hbDtcclxuJGZ3LWJvbGQ6Ym9sZDtcclxuJGZ3LTYwMDo2MDA7XHJcbiRmdy05MDA6OTAwOyIsIkBtaXhpbiBUZXh0KCRmcywkZncsJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6ICRmcztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnc7XHJcbiAgICBjb2xvcjokY29sb3I7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.own_name = 'ho tuan kiet';
        this.toggle = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.toggle_active = function () {
        this.toggle = !this.toggle;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\cybersoft\Front-end\Project\CV\CV-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map