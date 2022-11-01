import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ItemLista } from 'src/app/model/ItemLista';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { ItenslistaService } from 'src/app/servicos/itenslista.service';
import { Lista } from 'src/app/model/Lista';
import { ListasService } from 'src/app/servicos/listas.service';

@Component({
  selector: 'app-detalhelista',
  templateUrl: './detalhelista.component.html',
  styleUrls: ['./detalhelista.component.css']
})
export class DetalhelistaComponent implements OnInit {

  public listaProdutos: Produto[] = [];
  public novoProduto: Produto
  public novoItem: ItemLista;
  public formNovoProduto: boolean = false;
  public idLista: number = 0;
  public listaCompras: Lista = new Lista();
  constructor(private produtoService: ProdutosService, 
              private activatedRoute: ActivatedRoute, 
              private itemListaService: ItenslistaService, 
              private listaService: ListasService) { 
    this.novoProduto = new Produto();
    this.novoItem = new ItemLista();
    this.idLista = this.activatedRoute.snapshot.params['id']

  }

  ngOnInit(): void {
    this.recuperarTodosOsProdutos();
    this.recuperarDetaslhesLista(this.idLista);
  }

  public recuperarDetaslhesLista(idLista:number){
    this.listaService.recuperarPorId(this.idLista).subscribe(
      (res: Lista)=>{
        this.listaCompras = res;
      },
      (err)=>{
        alert("Não foi possível recuperar a lista de compras")
      }
    )
  }

  public recuperarTodosOsProdutos(){
    this.produtoService.getAllProdutos().subscribe(
      (res: Produto[]) => {
        this.listaProdutos = res;
      },
      (err) => {
        alert("Erro ao recuperar itens")
      }
    )

  }

  public exibirModal(){
    document.getElementById("btnModal")?.click();
  }

  public habilitarNovoProduto(){
    this.formNovoProduto = true;
  }

  public cadastrarNovoProduto(){
    this.produtoService.addNewProduct(this.novoProduto).subscribe(
      (res: Produto) => {
        alert("Produto cadastrado com sucesso");
        this.novoProduto = new Produto();
        this.recuperarTodosOsProdutos();
      },
      (err) => {alert("Não consegui cadastrar novo produto")}
    );
    this.formNovoProduto = false;
  }

  public adicionarItemLista(){
    this.novoItem.lista.id = this.idLista;
    this.itemListaService.adicionarNovoItem(this.novoItem).subscribe(
      () => {
        alert("Novo item adicionadao com sucesso");
        this.novoItem = new ItemLista();
        this.recuperarDetaslhesLista(this.idLista);
      },
      (err) => {
        alert("Não consegui adicionar novo item");
      }
    )
  }
}
