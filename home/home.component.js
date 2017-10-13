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
var name_list_service_1 = require("../shared/name-list/name-list.service");
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.names = [];
        this.authors = ["Joseph Campbell", "Steve Jobs", "Buddha", "Francis of Assisi", "Aristotle", "Muhammad Ali", "Bruce Lee", "Ernest Hemingway", "Franklin D. Roosevelt", "Heraclitus", "George Orwell"];
        this.quotes = [{
                "Joseph Campbell": "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
                "Steve Jobs": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
                "Buddha": "What we think, we become.",
                "Francis of Assisi": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
                "Aristotle": "It is during our darkest moments that we must focus to see the light.",
                "Muhammad Ali": "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
                "Bruce Lee": "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them. ",
                "Ernest Hemingway": "But man is not made for defeat. A man can be destroyed but not defeated.",
                "Franklin D. Roosevelt": "When you reach the end of your rope, tie a knot in it and hang on.",
                "Heraclitus": "There is nothing permanent except change.",
                "George Orwell": "Happiness can exist only in acceptance."
            }];
        this.quotesJson = JSON.parse(JSON.stringify(this.quotes));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
        this.random();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.random = function () {
        this.author = this.authors[Math.floor(Math.random() * this.authors.length)];
        console.log(this.author);
        this.quote = this.quotesJson[0][this.author];
        console.log(this.quotesJson[0][this.author]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }),
        __metadata("design:paramtypes", [name_list_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQVl4RTtJQTRCRSx1QkFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBMUJuRCxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFHbEIsWUFBTyxHQUFhLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUE7UUFDMU0sV0FBTSxHQUFHLENBQUM7Z0JBQ1IsaUJBQWlCLEVBQUUsNkZBQTZGO2dCQUNoSCxZQUFZLEVBQUUsMFRBQTBUO2dCQUN4VSxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxtQkFBbUIsRUFBRSxzR0FBc0c7Z0JBQzNILFdBQVcsRUFBRSx1RUFBdUU7Z0JBQ3BGLGNBQWMsRUFBRSxzSEFBc0g7Z0JBQ3RJLFdBQVcsRUFBRSxpT0FBaU87Z0JBQzlPLGtCQUFrQixFQUFFLDBFQUEwRTtnQkFDOUYsdUJBQXVCLEVBQUUsb0VBQW9FO2dCQUM3RixZQUFZLEVBQUUsMkNBQTJDO2dCQUN6RCxlQUFlLEVBQUUseUNBQXlDO2FBQzNELENBQUMsQ0FBQTtRQUNGLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFPRyxDQUFDO0lBS3hELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTthQUN2QixTQUFTLENBQ1YsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FDdEMsQ0FBQztJQUNOLENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBSUQsOEJBQU0sR0FBTjtRQUdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXJFVSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQThCb0MsbUNBQWU7T0E1QnhDLGFBQWEsQ0FzRXpCO0lBQUQsb0JBQUM7Q0F0RUQsQUFzRUMsSUFBQTtBQXRFWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbmV3TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgbmFtZXM6IGFueVtdID0gW107XHJcbiAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgcXVvdGU6IHN0cmluZztcclxuICBhdXRob3JzOiBzdHJpbmdbXSA9IFtcIkpvc2VwaCBDYW1wYmVsbFwiLCBcIlN0ZXZlIEpvYnNcIiwgXCJCdWRkaGFcIiwgXCJGcmFuY2lzIG9mIEFzc2lzaVwiLCBcIkFyaXN0b3RsZVwiLCBcIk11aGFtbWFkIEFsaVwiLCBcIkJydWNlIExlZVwiLCBcIkVybmVzdCBIZW1pbmd3YXlcIiwgXCJGcmFua2xpbiBELiBSb29zZXZlbHRcIiwgXCJIZXJhY2xpdHVzXCIsIFwiR2VvcmdlIE9yd2VsbFwiXVxyXG4gIHF1b3RlcyA9IFt7XHJcbiAgICBcIkpvc2VwaCBDYW1wYmVsbFwiOiBcIldlIG11c3QgbGV0IGdvIG9mIHRoZSBsaWZlIHdlIGhhdmUgcGxhbm5lZCwgc28gYXMgdG8gYWNjZXB0IHRoZSBvbmUgdGhhdCBpcyB3YWl0aW5nIGZvciB1cy5cIixcclxuICAgIFwiU3RldmUgSm9ic1wiOiBcIllvdXIgd29yayBpcyBnb2luZyB0byBmaWxsIGEgbGFyZ2UgcGFydCBvZiB5b3VyIGxpZmUsIGFuZCB0aGUgb25seSB3YXkgdG8gYmUgdHJ1bHkgc2F0aXNmaWVkIGlzIHRvIGRvIHdoYXQgeW91IGJlbGlldmUgaXMgZ3JlYXQgd29yay4gQW5kIHRoZSBvbmx5IHdheSB0byBkbyBncmVhdCB3b3JrIGlzIHRvIGxvdmUgd2hhdCB5b3UgZG8uIElmIHlvdSBoYXZlbid0IGZvdW5kIGl0IHlldCwga2VlcCBsb29raW5nLiBEb24ndCBzZXR0bGUuIEFzIHdpdGggYWxsIG1hdHRlcnMgb2YgdGhlIGhlYXJ0LCB5b3UnbGwga25vdyB3aGVuIHlvdSBmaW5kIGl0LlwiLFxyXG4gICAgXCJCdWRkaGFcIjogXCJXaGF0IHdlIHRoaW5rLCB3ZSBiZWNvbWUuXCIsXHJcbiAgICBcIkZyYW5jaXMgb2YgQXNzaXNpXCI6IFwiU3RhcnQgYnkgZG9pbmcgd2hhdCdzIG5lY2Vzc2FyeTsgdGhlbiBkbyB3aGF0J3MgcG9zc2libGU7IGFuZCBzdWRkZW5seSB5b3UgYXJlIGRvaW5nIHRoZSBpbXBvc3NpYmxlLlwiLFxyXG4gICAgXCJBcmlzdG90bGVcIjogXCJJdCBpcyBkdXJpbmcgb3VyIGRhcmtlc3QgbW9tZW50cyB0aGF0IHdlIG11c3QgZm9jdXMgdG8gc2VlIHRoZSBsaWdodC5cIixcclxuICAgIFwiTXVoYW1tYWQgQWxpXCI6IFwiSSBoYXRlZCBldmVyeSBtaW51dGUgb2YgdHJhaW5pbmcsIGJ1dCBJIHNhaWQsICdEb24ndCBxdWl0LiBTdWZmZXIgbm93IGFuZCBsaXZlIHRoZSByZXN0IG9mIHlvdXIgbGlmZSBhcyBhIGNoYW1waW9uLidcIixcclxuICAgIFwiQnJ1Y2UgTGVlXCI6IFwiSWYgeW91IGFsd2F5cyBwdXQgbGltaXQgb24gZXZlcnl0aGluZyB5b3UgZG8sIHBoeXNpY2FsIG9yIGFueXRoaW5nIGVsc2UuIEl0IHdpbGwgc3ByZWFkIGludG8geW91ciB3b3JrIGFuZCBpbnRvIHlvdXIgbGlmZS4gVGhlcmUgYXJlIG5vIGxpbWl0cy4gVGhlcmUgYXJlIG9ubHkgcGxhdGVhdXMsIGFuZCB5b3UgbXVzdCBub3Qgc3RheSB0aGVyZSwgeW91IG11c3QgZ28gYmV5b25kIHRoZW0uIFwiLFxyXG4gICAgXCJFcm5lc3QgSGVtaW5nd2F5XCI6IFwiQnV0IG1hbiBpcyBub3QgbWFkZSBmb3IgZGVmZWF0LiBBIG1hbiBjYW4gYmUgZGVzdHJveWVkIGJ1dCBub3QgZGVmZWF0ZWQuXCIsXHJcbiAgICBcIkZyYW5rbGluIEQuIFJvb3NldmVsdFwiOiBcIldoZW4geW91IHJlYWNoIHRoZSBlbmQgb2YgeW91ciByb3BlLCB0aWUgYSBrbm90IGluIGl0IGFuZCBoYW5nIG9uLlwiLFxyXG4gICAgXCJIZXJhY2xpdHVzXCI6IFwiVGhlcmUgaXMgbm90aGluZyBwZXJtYW5lbnQgZXhjZXB0IGNoYW5nZS5cIixcclxuICAgIFwiR2VvcmdlIE9yd2VsbFwiOiBcIkhhcHBpbmVzcyBjYW4gZXhpc3Qgb25seSBpbiBhY2NlcHRhbmNlLlwiXHJcbiAgfV1cclxuICBxdW90ZXNKc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1b3RlcykpXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxyXG4gICAqIE5hbWVMaXN0U2VydmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgLSBUaGUgaW5qZWN0ZWQgTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldE5hbWVzKCk7XHJcbiAgICB0aGlzLnJhbmRvbSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHRoZSBuYW1lTGlzdFNlcnZpY2Ugb2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIGdldE5hbWVzKCkge1xyXG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0KClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgbmFtZXMgPT4gdGhpcy5uYW1lcyA9IG5hbWVzLFxyXG4gICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFB1c2hlcyBhIG5ldyBuYW1lIG9udG8gdGhlIG5hbWVzIGFycmF5XHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXHJcbiAgICovXHJcbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcclxuICAgIC8vIFRPRE86IGltcGxlbWVudCBuYW1lTGlzdFNlcnZpY2UucG9zdFxyXG4gICAgdGhpcy5uYW1lcy5wdXNoKHRoaXMubmV3TmFtZSk7XHJcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcmFuZG9tKCkge1xyXG4gICAgLy90aGlzLmF1dGhvcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF1dGhvci5sZW5ndGgpXVxyXG4gICAgLy90aGlzLnF1b3RlPXRoaXMucXVvdGVzLlxyXG4gICAgdGhpcy5hdXRob3IgPSB0aGlzLmF1dGhvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hdXRob3JzLmxlbmd0aCldXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmF1dGhvcik7XHJcbiAgICB0aGlzLnF1b3RlID0gdGhpcy5xdW90ZXNKc29uWzBdW3RoaXMuYXV0aG9yXVxyXG4gICAgY29uc29sZS5sb2codGhpcy5xdW90ZXNKc29uWzBdW3RoaXMuYXV0aG9yXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
