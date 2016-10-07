import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
	selector:'[grow]'
})
export class GrowDirective {
	constructor(private el:ElementRef,private renderer:Renderer){}

	@HostListener('mouseenter') onMouseEnter(){
		this.grow('20px');
		console.log(this.renderer);
	};

	@HostListener('mouseleave') onMouseLeave(){
		this.grow('10px');
	};

	private grow(size: string){
		this.renderer.setElementStyle(this.el.nativeElement, 'fontSize', size);
	}
}