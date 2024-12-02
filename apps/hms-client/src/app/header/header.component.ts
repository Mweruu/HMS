import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'About us',
                icon: 'pi pi-star'
            },
            {
                label: 'Services',
                icon: 'pi pi-search',
            },
            {
                label: 'Doctors',
                icon: 'pi pi-users'
            },
            {
                label: 'News',
                icon: 'pi pi-file'
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}
