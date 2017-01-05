import { Directive, ElementRef, Input } from '@angular/core';

import { BackgroundService } from '../services/background.service';

@Directive({
  selector: '[changeBackground]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BackgroundDirective {
  constructor(private backgroundService: BackgroundService) { }

  @Input('changeBackground') backgroundClass: string;

  onMouseEnter() { this.setClass(this.backgroundClass); }
  onMouseLeave() { this.setClass(''); }

  private setClass(className:string) {
    this.backgroundService.updatebackgroundClass(className);
  }
}
