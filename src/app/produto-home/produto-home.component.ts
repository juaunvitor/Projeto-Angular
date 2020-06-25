import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.interface';
import { ProdutoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-home',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css']
})
export class ProdutoHomeComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  excluir(produto: Produto) {
    this.produtoService
      .excluir(produto)
      .subscribe(() => this.listar(), e => console.log(e));
  }

  listar() {
    this.produtoService
      .getProdutos()
      .subscribe(dados => this.produtos = dados, e => console.log(e));
  }


}
