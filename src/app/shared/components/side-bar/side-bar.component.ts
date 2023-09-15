import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../../services/sideBar.service';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  sidebarVisible: boolean = false;
  items!: MenuItem[];
  constructor(public sideBarService: SideBarService) {}
  ngOnInit(): void {
    this.items = [
      { label: 'Servicios', icon: 'pi pi-file', routerLink: '/services/list' },
      { label: 'Usuarios', icon: 'pi pi-user', routerLink: '/users/list' },
    ];
  }
}
