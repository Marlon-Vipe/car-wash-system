import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, DashboardComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
