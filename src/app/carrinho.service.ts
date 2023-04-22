import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho (){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens;
    
  }

  adiconarAoCarrinho (produtos: IProdutoCarrinho){
    this.itens.push(produtos);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId)
    localStorage.setItem("carrinho", JSON.stringify(this.itens));

  }

  limparCarrinho (){
    this.itens = [];
    localStorage.clear;
  }
}
