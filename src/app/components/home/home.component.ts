import { Component } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rpd = this.stateService.rpd;

  constructor(private stateService: StateService) {}
}
