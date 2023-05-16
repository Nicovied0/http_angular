import { Component } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-get-on-click',
  templateUrl: './get-on-click.component.html',
  styleUrls: ['./get-on-click.component.css']
})
export class GetOnClickComponent {
  constructor(private githubService: GithubService) { }
  arrayDates: any = []
  
  onClick() {
    this.githubService.getReposEnOnClick().subscribe((data) => {
      console.log(data);
      this.arrayDates = data
      // Hacer algo con los datos recibidos, por ejemplo, asignarlos a una variable del componente
    });
  }
  onClick2() {
    console.log(this.arrayDates)
  }
}
