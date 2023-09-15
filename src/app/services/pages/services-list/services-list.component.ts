import { Component } from '@angular/core';
import { Service } from '../../interfaces/services.interface';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent {
  public services: Service[] = [
    {
      Id: 1,
      AssocitedDate: '2022-01-01',
      Cups: '82545',
      Description: 'PRIMER CONSULTA PSICOLOGIA',
    },
  ];
}
