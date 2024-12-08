import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FooterComponent } from '../footer/footer.component';
import { ServiceInterface } from '../../../interface/service.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, DashboardComponent, FooterComponent, NgFor],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
  serviceList: any = []

  ngOnInit(): void {
    this.serviceList.push({
      serviceName: 'Lavado Sencillo',
      serviceAmount: 500,
      serviceDescription: 'Incluye lavado exterior del vehículo con shampoo automotriz, secado con microfibra, y limpieza de vidrios exteriores. Ideal para mantener el vehículo limpio en el día a día.',
    });
    this.serviceList.push({
      serviceName: 'Lavado Completo',
      serviceAmount: 700,
      serviceDescription: 'Servicio detallado que incluye lavado exterior, limpieza de llantas y rines, limpieza interior (aspirado, limpieza de tapicería y tablero), y lavado de vidrios por dentro y por fuera.',
    });
    this.serviceList.push({
      serviceName: 'Lavado Premium',
      serviceAmount: 999,
      serviceDescription: 'Incluye lavado completo más encerado manual, limpieza profunda de alfombras, desodorización del interior, y tratamiento de brillo para los rines. Perfecto para dejar el auto como nuevo.',
    });
    this.serviceList.push({
      serviceName: 'Lavado Ecológico',
      serviceAmount: 620,
      serviceDescription: 'Lavado exterior e interior utilizando productos biodegradables y técnica de bajo consumo de agua. Cuida tu auto y el medio ambiente.',
    });
  } 
}
