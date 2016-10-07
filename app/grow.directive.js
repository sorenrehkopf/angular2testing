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
var GrowDirective = (function () {
    function GrowDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    GrowDirective.prototype.onMouseEnter = function () {
        this.grow('20px');
        console.log(this.renderer);
    };
    ;
    GrowDirective.prototype.onMouseLeave = function () {
        this.grow('10px');
    };
    ;
    GrowDirective.prototype.grow = function (size) {
        this.renderer.setElementStyle(this.el.nativeElement, 'fontSize', size);
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GrowDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GrowDirective.prototype, "onMouseLeave", null);
    GrowDirective = __decorate([
        core_1.Directive({
            selector: '[grow]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], GrowDirective);
    return GrowDirective;
}());
exports.GrowDirective = GrowDirective;
//# sourceMappingURL=grow.directive.js.map