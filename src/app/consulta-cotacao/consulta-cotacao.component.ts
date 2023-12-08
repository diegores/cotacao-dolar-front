import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../services/cotacao-dolar.service';

@Component({
  selector: 'app-consulta-cotacao',
  templateUrl: './consulta-cotacao.component.html',
  styleUrl: './consulta-cotacao.component.scss'
})
export class ConsultaCotacaoComponent implements OnInit  {
    cotacoes: any;
    dataCotacao: any;
    mensagemSucesso: string = '';
    mensagemErro: string = '';

    constructor(private cotacaoService: CotacaoService) { }

    ngOnInit(): void {
      this.consultaCotacao(this.dataCotacao);
    }

    consultaCotacao(data: Date){
      this.cotacaoService.getCotacaoPorData(data)
      .subscribe(
        (response) => {
          this.cotacoes = response;
        },
        (error) => {
          console.error('Erro ao consultar uma cotação:', error);
        }
      );
    }

}
