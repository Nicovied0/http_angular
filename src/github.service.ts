import { Injectable } from "@angular/core" //al ser un servicio importo el injectable de angular y ejecuto el servicion abajo
import { HttpClient } from "@angular/common/http"

@Injectable({ providedIn: 'root' }) //Injectable para injectar la dependencia y ROOt para poder solicitar el servicio

export class GithubService {
  constructor(private http: HttpClient) { }

  getReposEnOnInit() {
    let datos = this.http.get('https://api.github.com/users/Nicovied0/repos').toPromise()
    console.log(datos)
    return datos
    //toPromiseActiva una futura ejecusion
  }
  getReposEnOnClick() {
    let datos = this.http.get('https://api.github.com/users/Nicovied0/repos')
    console.log(datos)
    return datos
    //toPromiseActiva una futura ejecusion
  }
}

//AHORA PARA QUE FUNCIONE ESTE SERVICIO EN MI COMPONENTE DEBO PASARLO AL SERVICIO POR MI CONSTRUCTORT DE COMPONENTE