
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }              from 'rxjs';

import 'rxjs/add/operator/map';

import { ProfileType } from '../models/profile.type.model';

@Injectable()
export class ProfileTypeService {
  private headers   = new Headers({'Content-Type': 'application/json'});
  private profileTypeUrl = 'api/profile_types';

  constructor(private http: Http) {}

  getProfileTypes(): Observable<ProfileType[]>{
    return this.http.get(this.profileTypeUrl)
      .map((r: Response) => r.json().data as ProfileType[]);
  }
}
