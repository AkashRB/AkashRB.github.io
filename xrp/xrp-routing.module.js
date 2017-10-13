"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var xrp_component_1 = require("./xrp.component");
var XrpRoutingModule = (function () {
    function XrpRoutingModule() {
    }
    XrpRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'xrp', component: xrp_component_1.XRPComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        })
    ], XrpRoutingModule);
    return XrpRoutingModule;
}());
exports.XrpRoutingModule = XrpRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC94cnAveHJwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxpREFBK0M7QUFVL0M7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVI1QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtpQkFDekMsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFqQyxBQUFpQyxJQUFBO0FBQXBCLDRDQUFnQiIsImZpbGUiOiJhcHAveHJwL3hycC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFhSUENvbXBvbmVudCB9IGZyb20gJy4veHJwLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ3hycCcsIGNvbXBvbmVudDogWFJQQ29tcG9uZW50IH1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHJwUm91dGluZ01vZHVsZSB7IH1cclxuIl19
