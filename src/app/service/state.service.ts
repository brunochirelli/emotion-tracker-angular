import { Injectable } from '@angular/core';

import { Event } from '../types/event.type';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  rpd: Event[] = [
    {
      id: 1,
      event: 'Nome do Evento',
      date: '2021-01-01',
      emotions: [
        {
          id: 1,
          name: 'Feliz',
          percentage: 0.5,
        },
        {
          id: 2,
          name: 'Triste',
          percentage: 0.3,
        },
      ],
      reaction: 'Reação automática',
      rule: 'Regra',
    },
  ];

  // constructor() {}
}
