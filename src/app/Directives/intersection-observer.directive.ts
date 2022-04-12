import { Directive, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[observe]',
})
export class IntersectionObserverDirective {
  @Output() visible: EventEmitter<string> = new EventEmitter();
  constructor(private _element: ElementRef<any>) {
    this.observer.observe(_element.nativeElement);
  }
  observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('activated');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '-200px' }
  );
}
