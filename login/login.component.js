"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent() {
        this.value = '';
    }
    LoginComponent.prototype.onEnter = function (value) {
        this.value = value;
        console.log(this.value);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFhMUM7SUFOQTtRQVFJLFVBQUssR0FBRyxFQUFFLENBQUM7SUFPZixDQUFDO0lBTkcsZ0NBQU8sR0FBUCxVQUFRLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQU5RLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7T0FDVyxjQUFjLENBUzFCO0lBQUQscUJBQUM7Q0FURCxBQVNDLElBQUE7QUFUWSx3Q0FBYyIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FyfSBmcm9tICcuL0RldGFpbHMnXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZC1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydsb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIGNhcnM6IENhcltdO1xyXG4gICAgdmFsdWUgPSAnJztcclxuICAgIG9uRW50ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iXX0=
