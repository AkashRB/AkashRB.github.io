"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var login_module_1 = require("./login/login.module");
var xrp_module_1 = require("./xrp/xrp.module");
var home_module_1 = require("./home/home.module");
var shared_module_1 = require("./shared/shared.module");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [animations_1.BrowserAnimationsModule, platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, xrp_module_1.XrpModule, home_module_1.HomeModule, login_module_1.LoginModule, shared_module_1.SharedModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsc0NBQTJDO0FBQzNDLGlEQUErQztBQUMvQywyREFBd0Q7QUFDeEQscURBQWtEO0FBQ2xELCtDQUE2QztBQUM3QyxrREFBZ0Q7QUFDaEQsd0RBQXNEO0FBRXRELG1FQUErRTtBQVkvRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBVnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9DQUF1QixFQUFFLGdDQUFhLEVBQUUsaUJBQVUsRUFBRSxxQ0FBZ0IsRUFBRSxzQkFBUyxFQUFFLHdCQUFVLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNJLFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QixDQUFDO1lBQ0YsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUUxQixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBMUIsQUFBMEIsSUFBQTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4vbG9naW4vbG9naW4ubW9kdWxlJ1xyXG5pbXBvcnQgeyBYcnBNb2R1bGUgfSBmcm9tICcuL3hycC94cnAubW9kdWxlJztcclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBYcnBNb2R1bGUsIEhvbWVNb2R1bGUsIExvZ2luTW9kdWxlLCBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcbiAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcclxuICB9XSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
