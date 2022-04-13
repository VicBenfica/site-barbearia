import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cliente {
  id: number,
  servico: number,
  cliente: string,
  contato: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'websiteBarbearia';
  url = 'http://lucasreno.kinghost.net/barbearia';
  fila: Cliente[] = [];

  constructor(private http: HttpClient) {
    this.pegarDados();
  }

  pegarDados() {
    this.http.get<Cliente[]>(this.url).subscribe(
      resposta => {
        this.fila = resposta;
      }
    );
  }
}
