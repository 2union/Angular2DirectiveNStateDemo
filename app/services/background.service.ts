
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';

@Injectable()
export class BackgroundService {
  backgroundClass:string;
  backgroundClassUpdate:Observable<string>;
  backgroundClassObserver:Observer<string>;

  constructor() {
    this.backgroundClassUpdate = Observable.create((observer:Observer<string>) => {
      this.backgroundClassObserver = observer;
    });
  }

  updatebackgroundClass(newValue:string) {
    this.backgroundClass = newValue;
    this.backgroundClassObserver.next(this.backgroundClass);
  }
}
