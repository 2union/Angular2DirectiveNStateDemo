import { NgModule }             from '@angular/core';
import { HttpModule}            from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { BrowserModule }        from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '../services/in-memory-data.service';
import { BackgroundDirective } from '../directives/background.modification.directive';
import { ProfileTypeService }  from '../services/profile.type.service';
import { BackgroundService }   from '../services/background.service';
import { CreateComponent }     from '../components/create.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ CreateComponent, BackgroundDirective ],
  bootstrap:    [ CreateComponent ],
  providers:    [ ProfileTypeService, BackgroundService ]
})
export class CreateModule { }
