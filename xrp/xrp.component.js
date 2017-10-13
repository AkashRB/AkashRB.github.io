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
var xrp_service_1 = require("./shared/xrp.service");
var router_1 = require("@angular/router");
var averageDetails_1 = require("./Xrp/averageDetails");
var XRPComponent = (function () {
    function XRPComponent(xrpservice, router) {
        this.xrpservice = xrpservice;
        this.router = router;
        this.transcationDetails = {};
        this.responseTranscationDetails = {};
        this.isPriceChecked = false;
        this.isAverageChecked = true;
        this.avgQuantity = 0;
        this.avgPrice = 0;
        this.avgdetails = [];
        this.displayAvgDetails = [];
        this.totalCost = 0;
        this.totalQuantity = 0;
        this.average = 0;
        this.date = new Date();
        this.enableDatepicker = false;
        this.options = {
            responsive: false,
            maintainAspectRatio: false
        };
        this.date2 = new Date();
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Average Chart',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        };
    }
    XRPComponent.prototype.ngOnInit = function () {
        this.getHistory();
        localStorage.setItem("totalCost", String(0));
        localStorage.setItem("totalQuantity", String(0));
        this.getlocalStorage("avg");
        this.getAverage(true);
    };
    XRPComponent.prototype.getlocalStorage = function (key) {
        this.displayAvgDetails = Object.assign([], JSON.parse(localStorage.getItem(key)));
    };
    XRPComponent.prototype.writeToLocalStorage = function (key) {
        localStorage.setItem(key, JSON.stringify(this.avgdetails));
        console.log(key + ":", localStorage.getItem(key));
    };
    XRPComponent.prototype.getHistory = function () {
        var _this = this;
        this.xrpservice.getHistory().subscribe(function (history) {
            console.log("response: ", history);
            _this.buyingHistory = history;
            _this.buyingHistory = _this.buyingHistory.json();
            console.log(_this.buyingHistory.password);
        });
    };
    XRPComponent.prototype.getTranscationDetails = function () {
        var _this = this;
        console.log("Inside the getAllTranscationDetails method");
        this.transcationDetails.totalBuyingCost = 0;
        this.transcationDetails.totalSellingcost = 0;
        this.transcationDetails.xrpPerSellingPrice = 0;
        console.log("transcation object:", this.transcationDetails);
        this.xrpservice.getAllTranscationDetails(this.transcationDetails).subscribe(function (details) {
            console.log("response a: ", details);
            _this.responseTranscationDetails = Object.assign({}, details);
            ;
        });
    };
    XRPComponent.prototype.authentication = function () {
        console.log("Inside the authentication method");
        console.log(this.transcationDetails.quantity, this.transcationDetails.xrpPerBuyingPrice, this.transcationDetails.profit);
    };
    XRPComponent.prototype.changeRadio = function (value) {
        console.log(value);
        if (value == true) {
            this.isAverageChecked = true;
            this.isPriceChecked = false;
        }
        else {
            this.isAverageChecked = false;
            this.isPriceChecked = true;
        }
        this.enableDatepicker == true ? this.enableDatepicker = false : this.enableDatepicker = true;
        console.log(this.date);
    };
    XRPComponent.prototype.getAverage = function (onPageLoad) {
        if (onPageLoad) {
            for (var _i = 0, _a = this.avgdetails; _i < _a.length; _i++) {
                var details = _a[_i];
                this.totalCost += (details.price * details.quantity);
                this.totalQuantity += details.quantity;
            }
            localStorage.setItem("totalCost", String(this.totalCost));
            localStorage.setItem("totalQuantity", String(this.totalQuantity));
        }
        else {
            this.totalCost = Number(localStorage.getItem("totalCost"));
            console.log(this.avgQuantity, this.avgPrice);
            console.log(this.totalCost, this.totalQuantity);
            this.totalCost += (this.avgQuantity * this.avgPrice);
            localStorage.setItem("totalCost", String(this.totalCost));
            this.totalQuantity = Number(localStorage.getItem("totalQuantity"));
            this.totalQuantity += this.avgQuantity;
            localStorage.setItem("totalQuantity", String(this.totalQuantity));
            this.average = Number((this.totalCost / this.totalQuantity).toFixed(2));
        }
    };
    XRPComponent.prototype.add = function () {
        this.avgdetails = Object.assign([], JSON.parse(localStorage.getItem("avg")));
        this.avgdetails.push(new averageDetails_1.AverageDetails(this.avgQuantity, this.avgPrice));
        console.log(this.avgdetails);
        this.getAverage(false);
        this.avgQuantity = 0;
        this.avgPrice = 0;
        console.log(JSON.stringify(this.avgdetails));
        this.writeToLocalStorage("avg");
        this.getlocalStorage("avg");
        this.data.datasets[0].data.push(45);
        console.log(this.data.datasets[0].data);
    };
    XRPComponent.prototype.reset = function () {
        console.log("Reset");
        var decision = alert("Wo Teri bhens ki aankh---Do you want to remove the all the transcation---");
        console.log(decision);
        localStorage.removeItem("avg");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("totalQuantity");
        location.reload();
    };
    XRPComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            templateUrl: 'xrp.component.html',
            styleUrls: ['xrp.component.css']
        }),
        __metadata("design:paramtypes", [xrp_service_1.XrpService, router_1.Router])
    ], XRPComponent);
    return XRPComponent;
}());
exports.XRPComponent = XRPComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC94cnAveHJwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxvREFBa0Q7QUFDbEQsMENBQXdFO0FBRXhFLHVEQUFzRDtBQWF0RDtJQUNFLHNCQUFvQixVQUFzQixFQUFVLE1BQWM7UUFBOUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFlM0QsdUJBQWtCLEdBQTJDLEVBQUUsQ0FBQTtRQUMvRCwrQkFBMEIsR0FBMkMsRUFBRSxDQUFBO1FBQ3ZFLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVUsR0FBMEIsRUFBRSxDQUFBO1FBQ3RDLHNCQUFpQixHQUEwQixFQUFFLENBQUE7UUFDN0MsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxZQUFPLEdBQUc7WUFDUixVQUFVLEVBQUUsS0FBSztZQUNqQixtQkFBbUIsRUFBRSxLQUFLO1NBQzNCLENBQUM7UUFDRixVQUFLLEdBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQS9CbkIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN4RSxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLGVBQWUsRUFBRSxTQUFTO29CQUMxQixXQUFXLEVBQUUsU0FBUztvQkFD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LENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQTFKVSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQUVnQyx3QkFBVSxFQUFrQixlQUFNO09BRHZELFlBQVksQ0E0SnhCO0lBQUQsbUJBQUM7Q0E1SkQsQUE0SkMsSUFBQTtBQTVKWSxvQ0FBWSIsImZpbGUiOiJhcHAveHJwL3hycC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWHJwU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3hycC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zY2F0aW9uRGV0YWlscyB9IGZyb20gJy4vWHJwL3RyYW5zY2F0aW9uRGV0YWlscyc7XHJcbmltcG9ydCB7IEF2ZXJhZ2VEZXRhaWxzIH0gZnJvbSAnLi9YcnAvYXZlcmFnZURldGFpbHMnO1xyXG5pbXBvcnQgeyBQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Nhcn0gZnJvbSAnLi9EZXRhaWxzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAneHJwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsneHJwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWFJQQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHhycHNlcnZpY2U6IFhycFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnQXZlcmFnZSBDaGFydCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDJBNUY1JyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzFFODhFNScsXHJcbiAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBkYXRhOiBhbnk7XHJcbiAgcHVibGljIGJ1eWluZ0hpc3Rvcnk6IGFueTtcclxuICBwdWJsaWMgdHJhbnNjYXRpb25EZXRhaWxzOiBUcmFuc2NhdGlvbkRldGFpbHMgPSA8VHJhbnNjYXRpb25EZXRhaWxzPnt9XHJcbiAgcHVibGljIHJlc3BvbnNlVHJhbnNjYXRpb25EZXRhaWxzOiBUcmFuc2NhdGlvbkRldGFpbHMgPSA8VHJhbnNjYXRpb25EZXRhaWxzPnt9XHJcbiAgcHVibGljIGlzUHJpY2VDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGlzQXZlcmFnZUNoZWNrZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBhdmdRdWFudGl0eTogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgYXZnUHJpY2U6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGF2Z2RldGFpbHM6IEFycmF5PEF2ZXJhZ2VEZXRhaWxzPiA9IFtdXHJcbiAgcHVibGljIGRpc3BsYXlBdmdEZXRhaWxzOiBBcnJheTxBdmVyYWdlRGV0YWlscz4gPSBbXVxyXG4gIHB1YmxpYyB0b3RhbENvc3Q6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIHRvdGFsUXVhbnRpdHk6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGF2ZXJhZ2U6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGVuYWJsZURhdGVwaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBvcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZVxyXG4gIH07XHJcbiAgZGF0ZTI6RGF0ZT1uZXcgRGF0ZSgpXHJcbiAgY2FyczphbnlbXVxyXG4gIC8qY2FycyA9IFt7IHZpbjogXCJhc2RcIiwgeWVhcjogXCIxMjNcIiwgYnJhbmQ6IFwiYXNkXCIsIGNvbG9yOiBcImJsYWNrXCIgfSxcclxuICAgIHsgdmluOiBcIjlcIiwgeWVhcjogXCIxMjNcIiwgYnJhbmQ6IFwiYXNkXCIsIGNvbG9yOiBcImJsYWNrXCIgfSxcclxuICAgIHsgdmluOiBcIjRcIiwgeWVhcjogXCIxMjNcIiwgYnJhbmQ6IFwiYXNkXCIsIGNvbG9yOiBcImJsYWNrXCIgfSxcclxuICAgIHsgdmluOiBcIjJcIiwgeWVhcjogXCIxMjNcIiwgYnJhbmQ6IFwiYXNkXCIsIGNvbG9yOiBcImJsYWNrXCIgfSx7IHZpbjogXCJhc2Q0XCIsIHllYXI6IFwiMTIzXCIsIGJyYW5kOiBcImFzZFwiLCBjb2xvcjogXCJibGFja1wiIH1dKi9cclxuXHJcbiAgLyoqXHJcbiAgICogT24gcGFnZSBMb2FkLVxyXG4gICAqIDEuR2V0IHRoZSBwcmV2aW91cyB0cmFuc2FjdGlvbiBkZXRhaWxzIGZyb20gdGhlIGxvY2FsU3RvcmFnZVxyXG4gICAqIDIuQ2FsY3VsYXRlIHRoZSBBdmVyYWdlXHJcbiAgICogXHJcbiAgICogQG1lbWJlcm9mIFhSUENvbXBvbmVudFxyXG4gICAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRIaXN0b3J5KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQ29zdFwiLCBTdHJpbmcoMCkpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsUXVhbnRpdHlcIiwgU3RyaW5nKDApKVxyXG4gICAgdGhpcy5nZXRsb2NhbFN0b3JhZ2UoXCJhdmdcIik7XHJcbiAgICB0aGlzLmdldEF2ZXJhZ2UodHJ1ZSk7XHJcbiAgICBcclxuICB9XHJcbiAgcHVibGljIGdldGxvY2FsU3RvcmFnZShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5kaXNwbGF5QXZnRGV0YWlscyA9IE9iamVjdC5hc3NpZ24oW10sIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpXHJcbiAgfVxyXG4gIHB1YmxpYyB3cml0ZVRvTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKSB7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmF2Z2RldGFpbHMpKVxyXG4gICAgY29uc29sZS5sb2coa2V5ICsgXCI6XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0SGlzdG9yeSgpIHtcclxuICAgIFxyXG4gICAgdGhpcy54cnBzZXJ2aWNlLmdldEhpc3RvcnkoKS5zdWJzY3JpYmUoaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCBoaXN0b3J5KTtcclxuICAgICAgdGhpcy5idXlpbmdIaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgdGhpcy5idXlpbmdIaXN0b3J5PXRoaXMuYnV5aW5nSGlzdG9yeS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2codGhpcy5idXlpbmdIaXN0b3J5LnBhc3N3b3JkKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRUcmFuc2NhdGlvbkRldGFpbHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkluc2lkZSB0aGUgZ2V0QWxsVHJhbnNjYXRpb25EZXRhaWxzIG1ldGhvZFwiKVxyXG4gICAgdGhpcy50cmFuc2NhdGlvbkRldGFpbHMudG90YWxCdXlpbmdDb3N0ID0gMDtcclxuICAgIHRoaXMudHJhbnNjYXRpb25EZXRhaWxzLnRvdGFsU2VsbGluZ2Nvc3QgPSAwO1xyXG4gICAgdGhpcy50cmFuc2NhdGlvbkRldGFpbHMueHJwUGVyU2VsbGluZ1ByaWNlID0gMDtcclxuICAgIGNvbnNvbGUubG9nKFwidHJhbnNjYXRpb24gb2JqZWN0OlwiLCB0aGlzLnRyYW5zY2F0aW9uRGV0YWlscyk7XHJcbiAgICB0aGlzLnhycHNlcnZpY2UuZ2V0QWxsVHJhbnNjYXRpb25EZXRhaWxzKHRoaXMudHJhbnNjYXRpb25EZXRhaWxzKS5zdWJzY3JpYmUoZGV0YWlscyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgYTogXCIsIGRldGFpbHMpO1xyXG4gICAgICB0aGlzLnJlc3BvbnNlVHJhbnNjYXRpb25EZXRhaWxzID0gT2JqZWN0LmFzc2lnbih7fSwgZGV0YWlscyk7O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSW5zaWRlIHRoZSBhdXRoZW50aWNhdGlvbiBtZXRob2RcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRyYW5zY2F0aW9uRGV0YWlscy5xdWFudGl0eSwgdGhpcy50cmFuc2NhdGlvbkRldGFpbHMueHJwUGVyQnV5aW5nUHJpY2UsIHRoaXMudHJhbnNjYXRpb25EZXRhaWxzLnByb2ZpdClcclxuICB9XHJcbiAgcHVibGljIGNoYW5nZVJhZGlvKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgdGhpcy5pc0F2ZXJhZ2VDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1ByaWNlQ2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQXZlcmFnZUNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc1ByaWNlQ2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5lbmFibGVEYXRlcGlja2VyID09IHRydWUgPyB0aGlzLmVuYWJsZURhdGVwaWNrZXIgPSBmYWxzZSA6IHRoaXMuZW5hYmxlRGF0ZXBpY2tlciA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGUpO1xyXG5cclxuICB9XHJcbiAgcHVibGljIGdldEF2ZXJhZ2Uob25QYWdlTG9hZDogYm9vbGVhbikge1xyXG4gICAgaWYgKG9uUGFnZUxvYWQpIHtcclxuICAgICAgZm9yIChsZXQgZGV0YWlscyBvZiB0aGlzLmF2Z2RldGFpbHMpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQ29zdCArPSAoZGV0YWlscy5wcmljZSAqIGRldGFpbHMucXVhbnRpdHkpXHJcbiAgICAgICAgdGhpcy50b3RhbFF1YW50aXR5ICs9IGRldGFpbHMucXVhbnRpdHlcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQ29zdFwiLCBTdHJpbmcodGhpcy50b3RhbENvc3QpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsUXVhbnRpdHlcIiwgU3RyaW5nKHRoaXMudG90YWxRdWFudGl0eSkpXHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudG90YWxDb3N0ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxDb3N0XCIpKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5hdmdRdWFudGl0eSwgdGhpcy5hdmdQcmljZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG90YWxDb3N0LCB0aGlzLnRvdGFsUXVhbnRpdHkpO1xyXG5cclxuICAgICAgdGhpcy50b3RhbENvc3QgKz0gKHRoaXMuYXZnUXVhbnRpdHkgKiB0aGlzLmF2Z1ByaWNlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbENvc3RcIiwgU3RyaW5nKHRoaXMudG90YWxDb3N0KSlcclxuICAgICAgdGhpcy50b3RhbFF1YW50aXR5ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxRdWFudGl0eVwiKSk7XHJcbiAgICAgIHRoaXMudG90YWxRdWFudGl0eSArPSB0aGlzLmF2Z1F1YW50aXR5O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsUXVhbnRpdHlcIiwgU3RyaW5nKHRoaXMudG90YWxRdWFudGl0eSkpXHJcbiAgICAgIHRoaXMuYXZlcmFnZSA9IE51bWJlcigodGhpcy50b3RhbENvc3QgLyB0aGlzLnRvdGFsUXVhbnRpdHkpLnRvRml4ZWQoMikpO1xyXG4gICAgICAvL3RoaXMuYXZlcmFnZS5pc05hbigpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGQoKSB7XHJcbiAgICB0aGlzLmF2Z2RldGFpbHMgPSBPYmplY3QuYXNzaWduKFtdLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXZnXCIpKSlcclxuICAgIHRoaXMuYXZnZGV0YWlscy5wdXNoKG5ldyBBdmVyYWdlRGV0YWlscyh0aGlzLmF2Z1F1YW50aXR5LCB0aGlzLmF2Z1ByaWNlKSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYXZnZGV0YWlscyk7XHJcbiAgICB0aGlzLmdldEF2ZXJhZ2UoZmFsc2UpO1xyXG4gICAgdGhpcy5hdmdRdWFudGl0eSA9IDA7XHJcbiAgICB0aGlzLmF2Z1ByaWNlID0gMDtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYXZnZGV0YWlscykpO1xyXG4gICAgdGhpcy53cml0ZVRvTG9jYWxTdG9yYWdlKFwiYXZnXCIpO1xyXG4gICAgdGhpcy5nZXRsb2NhbFN0b3JhZ2UoXCJhdmdcIik7XHJcbiAgICB0aGlzLmRhdGEuZGF0YXNldHNbMF0uZGF0YS5wdXNoKDQ1KVxyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlc2V0XCIpO1xyXG4gICAgbGV0IGRlY2lzaW9uID0gYWxlcnQoXCJXbyBUZXJpIGJoZW5zIGtpIGFhbmtoLS0tRG8geW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBhbGwgdGhlIHRyYW5zY2F0aW9uLS0tXCIpXHJcbiAgICBjb25zb2xlLmxvZyhkZWNpc2lvbik7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdmdcIilcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG90YWxDb3N0XCIpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvdGFsUXVhbnRpdHlcIilcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
