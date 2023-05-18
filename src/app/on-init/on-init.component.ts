import { Component } from '@angular/core';
import { GithubService } from '../../github.service';
import { Router } from '@angular/router'; // impoertar router para navegar entre rutas

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent {
  constructor(private githubService: GithubService, private router: Router) { }

  arrayDates: any = []


  ngOnInit() {
    this.githubService.getReposEnOnInit().then((results) => {
      this.arrayDates = results
      console.log(this.arrayDates)
    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    })

  }
}
