import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class AlertService{
    succesAlert(){
        return Swal.fire({
            title: "Bienvenido a Vipe Car Wash System",
            text: "Inicio de sesión exitoso",
            timer: 3000,
            icon: "success"
        })
    }
    errorAlert(title: string, text: string){
        return Swal.fire({
            title: title,
            text: text,
            timer: 2000,
            icon: "error"
        })
    }
}