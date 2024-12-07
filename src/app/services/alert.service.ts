import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class AlertService{
    succesAlert(){
        return Swal.fire({
            title: "Auto Close Alert!",
            text: 'Proceso completado correctamente',
            timer: 2000
        })
    }
}