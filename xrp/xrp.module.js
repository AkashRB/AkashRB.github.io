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
var xrp_component_1 = require("./xrp.component");
var xrp_routing_module_1 = require("./xrp-routing.module");
var xrp_service_1 = require("./shared/xrp.service");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var primeng_3 = require("primeng/primeng");
var primeng_4 = require("primeng/primeng");
var primeng_5 = require("primeng/primeng");
var XrpModule = (function () {
    function XrpModule() {
    }
    XrpModule = __decorate([
        core_1.NgModule({
            imports: [primeng_4.DataGridModule, primeng_5.DataTableModule, common_1.CommonModule, xrp_routing_module_1.XrpRoutingModule, forms_1.FormsModule, primeng_1.CalendarModule, primeng_2.ChartModule, primeng_3.PaginatorModule],
            declarations: [xrp_component_1.XRPComponent],
            exports: [xrp_component_1.XRPComponent],
            providers: [xrp_service_1.XrpService]
        })
    ], XrpModule);
    return XrpModule;
}());
exports.XrpModule = XrpModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC94cnAveHJwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsaURBQStDO0FBQy9DLDJEQUF3RDtBQUN4RCxvREFBa0Q7QUFDbEQsd0NBQTZDO0FBQzdDLDJDQUFpRDtBQUNqRCwyQ0FBOEM7QUFDOUMsMkNBQWtEO0FBQ2xELDJDQUFpRDtBQUNqRCwyQ0FBNkQ7QUFRN0Q7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQU5yQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx3QkFBYyxFQUFDLHlCQUFlLEVBQUMscUJBQVksRUFBRSxxQ0FBZ0IsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMscUJBQVcsRUFBQyx5QkFBZSxDQUFDO1lBQy9ILFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN2QixTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO1NBQ3hCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUExQixBQUEwQixJQUFBO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL3hycC94cnAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgWFJQQ29tcG9uZW50IH0gZnJvbSAnLi94cnAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgWHJwUm91dGluZ01vZHVsZSB9IGZyb20gJy4veHJwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgWHJwU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3hycC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlLFNoYXJlZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0RhdGFHcmlkTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxDb21tb25Nb2R1bGUsIFhycFJvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGUsQ2FsZW5kYXJNb2R1bGUsQ2hhcnRNb2R1bGUsUGFnaW5hdG9yTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtYUlBDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtYUlBDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1hycFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYcnBNb2R1bGUgeyB9XHJcbiJdfQ==
