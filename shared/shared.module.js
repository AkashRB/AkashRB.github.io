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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var navbar_component_1 = require("./navbar/navbar.component");
var name_list_service_1 = require("./name-list/name-list.service");
var primeng_1 = require("primeng/primeng");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [name_list_service_1.NameListService]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, primeng_1.TabMenuModule],
            declarations: [toolbar_component_1.ToolbarComponent, navbar_component_1.NavbarComponent],
            exports: [toolbar_component_1.ToolbarComponent, navbar_component_1.NavbarComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUUvQyxpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELG1FQUFnRTtBQUNoRSwyQ0FBdUQ7QUFXdkQ7SUFBQTtJQU9BLENBQUM7cUJBUFksWUFBWTtJQUNoQixvQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQztJQU5VLFlBQVk7UUFOeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxFQUFDLHVCQUFhLENBQUM7WUFDbkQsWUFBWSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsa0NBQWUsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxrQ0FBZTtnQkFDekMscUJBQVksRUFBRSxtQkFBVyxFQUFFLHFCQUFZLENBQUM7U0FDM0MsQ0FBQztPQUNXLFlBQVksQ0FPeEI7SUFBRCxtQkFBQzs7Q0FQRCxBQU9DLElBQUE7QUFQWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1RhYk1lbnVNb2R1bGUsTWVudUl0ZW19IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSxUYWJNZW51TW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb29sYmFyQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUb29sYmFyQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsXHJcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
