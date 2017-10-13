"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var XrpService = (function () {
    function XrpService(http) {
        this.http = http;
    }
    XrpService.prototype.getHistory = function () {
        return this.http.get('http://localhost:4000/history').map(function (response) {
            return response.json();
        });
    };
    XrpService.prototype.getAllTranscationDetails = function (transcationDetails) {
        console.log("Inside the service: ", transcationDetails);
        var body = {
            "quantity": transcationDetails.quantity,
            "xrpPerBuyingPrice": transcationDetails.xrpPerBuyingPrice,
            "totalBuyingCost": 0,
            "profit": transcationDetails.profit,
            "totalSellingcost": 0,
            "xrpPerSellingPrice": 0
        };
        return this.http.post('http://localhost:4000/xrp', body).map(function (response) {
            console.log("response:", response.json());
            return response.json();
        });
    };
    XrpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], XrpService);
    return XrpService;
}());
exports.XrpService = XrpService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC94cnAvc2hhcmVkL3hycC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUdyQyxpQ0FBK0I7QUFHL0I7SUFDSSxvQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRzVCLCtCQUFVLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBYTtZQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDZDQUF3QixHQUEvQixVQUFnQyxrQkFBdUI7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3ZELElBQUksSUFBSSxHQUFHO1lBQ1AsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFFBQVE7WUFDdkMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUMsaUJBQWlCO1lBQ3pELGlCQUFpQixFQUFFLENBQUM7WUFDcEIsUUFBUSxFQUFFLGtCQUFrQixDQUFDLE1BQU07WUFDbkMsa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixvQkFBb0IsRUFBRSxDQUFDO1NBQzFCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBYTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQXpCUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUk7T0FEckIsVUFBVSxDQTBCdEI7SUFBRCxpQkFBQztDQTFCRCxBQTBCQyxJQUFBO0FBMUJZLGdDQUFVIiwiZmlsZSI6ImFwcC94cnAvc2hhcmVkL3hycC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBYcnBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRIaXN0b3J5KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9oaXN0b3J5JykubWFwKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbFRyYW5zY2F0aW9uRGV0YWlscyh0cmFuc2NhdGlvbkRldGFpbHM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgdGhlIHNlcnZpY2U6IFwiLCB0cmFuc2NhdGlvbkRldGFpbHMpXHJcbiAgICAgICAgbGV0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIFwicXVhbnRpdHlcIjogdHJhbnNjYXRpb25EZXRhaWxzLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBcInhycFBlckJ1eWluZ1ByaWNlXCI6IHRyYW5zY2F0aW9uRGV0YWlscy54cnBQZXJCdXlpbmdQcmljZSxcclxuICAgICAgICAgICAgXCJ0b3RhbEJ1eWluZ0Nvc3RcIjogMCxcclxuICAgICAgICAgICAgXCJwcm9maXRcIjogdHJhbnNjYXRpb25EZXRhaWxzLnByb2ZpdCxcclxuICAgICAgICAgICAgXCJ0b3RhbFNlbGxpbmdjb3N0XCI6IDAsXHJcbiAgICAgICAgICAgIFwieHJwUGVyU2VsbGluZ1ByaWNlXCI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3hycCcsIGJvZHkpLm1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOlwiLHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=
