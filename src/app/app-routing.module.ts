// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCotacaoComponent } from './consulta-cotacao/consulta-cotacao.component';


const routes: Routes = [
  { path: 'consultar-cotacao', component: ConsultaCotacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
