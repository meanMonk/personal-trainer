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
var core_1 = require('@angular/core');
var order_by_pipe_1 = require('./order-by.pipe');
var search_pipe_1 = require('./search.pipe');
var seconds_to_time_pipe_1 = require("./seconds-to-time.pipe");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [order_by_pipe_1.OrderByPipe,
                seconds_to_time_pipe_1.SecondsToTimePipe,
                search_pipe_1.SearchPipe],
            exports: [
                order_by_pipe_1.OrderByPipe,
                seconds_to_time_pipe_1.SecondsToTimePipe,
                search_pipe_1.SearchPipe],
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
