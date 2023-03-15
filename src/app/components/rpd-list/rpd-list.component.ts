import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rpd-list',
  templateUrl: './rpd-list.component.html',
  styleUrls: ['./rpd-list.component.scss'],
})
export class RpdListComponent {
  @Input() rpd: any[] = [];
}
