import { Component } from '@angular/core';
import { EventForm } from 'src/app/types/event.type';

@Component({
  selector: 'app-rpd-form',
  templateUrl: './rpd-form.component.html',
  styleUrls: ['./rpd-form.component.scss'],
})
export class RpdFormComponent {
  event!: any;
  emotion!: any;
  reaction!: any;
  rule!: any;

  saveEvent(formValues: EventForm) {
    console.log(formValues);
  }
}
