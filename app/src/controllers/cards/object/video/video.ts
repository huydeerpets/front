import { Component, View, CORE_DIRECTIVES, NgStyle } from 'angular2/angular2';
import { RouterLink } from "angular2/router";
import { Client } from 'src/services/api';
import { SessionFactory } from 'src/services/session';
import { Material } from 'src/directives/material';

@Component({
  selector: 'minds-card-video',
  viewBindings: [ Client ],
  properties: ['object']
})
@View({
  templateUrl: 'src/controllers/cards/object/video/video.html',
  directives: [ CORE_DIRECTIVES, NgStyle, Material, RouterLink]
})

export class VideoCard {
  entity : any;
  session = SessionFactory.build();
  minds: {};

	constructor(public client: Client){
    this.minds = window.Minds;
	}

  set object(value: any) {
    this.entity = value;
  }

}
