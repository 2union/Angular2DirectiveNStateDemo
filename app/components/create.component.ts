import { Component, OnInit } from '@angular/core';

import { ProfileType }        from '../models/profile.type.model';
import { BackgroundService }  from '../services/background.service';
import { ProfileTypeService } from '../services/profile.type.service';


@Component({
    selector: 'create',
    templateUrl: './templates/create/layout.html'
})
export class CreateComponent  {
  profileTypes:    ProfileType[];
  backgroundClass: string = '';

  constructor(private profileTypeService: ProfileTypeService, private backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this.profileTypeService.getProfileTypes().subscribe(result => this.profileTypes = result);
    this.backgroundService.backgroundClassUpdate.subscribe(result => this.backgroundClass = result);
  }
}
