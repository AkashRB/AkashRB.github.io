"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_component_1 = require("./login.component");
var login_routing_module_1 = require("./login-routing.module");
var forms_1 = require("@angular/forms");
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, login_routing_module_1.LoginRoutingModule, forms_1.FormsModule],
            declarations: [login_component_1.LoginComponent],
            exports: [login_component_1.LoginComponent],
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLHFEQUFtRDtBQUNuRCwrREFBNEQ7QUFDNUQsd0NBQTZDO0FBUTdDO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFOdkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSx5Q0FBa0IsRUFBQyxtQkFBVyxDQUFDO1lBQ3ZELFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUUxQixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBNUIsQUFBNEIsSUFBQTtBQUFmLGtDQUFXIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMb2dpblJvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdLFxyXG4vLyAgIHByb3ZpZGVyczogW0Fib3V0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfSJdfQ==
