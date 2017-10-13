"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var home_routing_module_1 = require("./home-routing.module");
var shared_module_1 = require("../shared/shared.module");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var primeng_1 = require("primeng/primeng");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule, primeng_1.FieldsetModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            providers: [name_list_service_1.NameListService]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLG1EQUFpRDtBQUNqRCw2REFBMEQ7QUFDMUQseURBQXVEO0FBQ3ZELDJFQUF3RTtBQUN4RSwyQ0FBaUQ7QUFRakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQU50QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSw0QkFBWSxFQUFDLHdCQUFjLENBQUM7WUFDekQsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQTNCLEFBQTJCLElBQUE7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWVsZHNldE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtIb21lUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlLEZpZWxkc2V0TW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIl19
