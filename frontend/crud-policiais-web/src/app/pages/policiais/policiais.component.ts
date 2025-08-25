import { Component, OnInit } from '@angular/core';
import { PoliciaisService, Policiais } from '../services/policiais.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-policiais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './policiais.component.html',
  styleUrls: ['./policiais.component.css']
})
export class PoliciaisComponent implements OnInit {

  policiais: Policiais = {
    rg_civil: 0,
    rg_militar: 0,
    cpf: 0,
    data_nascimento: new Date(),
    matricula: ''
  };

  policiaisList: Policiais[] = [];
  editando: boolean = false;

  constructor(private policiaisService: PoliciaisService) { }

  ngOnInit(): void {
    this.carregarPoliciais();
  }

  carregarPoliciais(): void {
    this.policiaisService.getPoliciais().subscribe(
      (data) => this.policiaisList = data,
      (err) => alert('Erro ao carregar policiais: ' + err.message)
    );
  }

  salvar(): void {
    if (this.editando) {
      this.policiaisService.atualizar(this.policiais.rg_civil, this.policiais).subscribe(
        () => {
          alert('Policial atualizado com sucesso!');
          this.resetarFormulario();
          this.carregarPoliciais();
        },
        (err) => alert('Erro ao atualizar policial: ' + err.message)
      );
    } else {
      this.policiaisService.adicionar(this.policiais).subscribe(
        () => {
          alert('Policial adicionado com sucesso!');
          this.resetarFormulario();
          this.carregarPoliciais();
        },
        (err) => alert('Erro ao adicionar policial: ' + err.message)
      );
    }
  }

  editar(policial: Policiais): void {
    this.policiais = { ...policial };
    this.editando = true;
  }

  excluir(id: number): void {
    this.policiaisService.deletar(id).subscribe(
      () => {
        alert('Policial excluído com sucesso!');
        this.carregarPoliciais();
      },
      (err) => alert('Erro ao excluir policial: ' + err.message)
    );
  }

  resetarFormulario(): void {
    this.policiais = {
      rg_civil: 0,
      rg_militar: 0,
      cpf: 0,
      data_nascimento: new Date(),
      matricula: ''
    };
    this.editando = false;
  }
}
