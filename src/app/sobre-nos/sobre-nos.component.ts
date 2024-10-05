import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  membros = [
    { nome: 'Aline Souza', curso: 'Análise e Desenvolvimento de Sistemas', img: 'assets/imgs/membros/aline.png' },
    { nome: 'Beatriz Pedro', curso: 'Análise e Desenvolvimento de Sistemas', img: 'assets/imgs/membros/beatriz.png' },
    { nome: 'Fabrício Mascarenhas', curso: 'Redes de Computadores', img: 'assets/imgs/membros/fabricio.png' },
    { nome: 'Laura Honório', curso: 'Ciência da Computação', img: 'assets/imgs/membros/laura.jpeg' },
    { nome: 'Letícia Alves', curso: 'Análise e Desenvolvimento de Sistemas', img: 'assets/imgs/membros/leticia.png' },
    { nome: 'Priscila Cruz', curso: 'Análise e Desenvolvimento de Sistemas', img: 'assets/imgs/membros/priscila.png' }
  ];

  selectedImage: string | null = null;  // Imagem atualmente selecionada
  showModal: boolean = false;  // Controla a exibição do modal

  // Método para abrir o modal
  openModal(image: string): void {
    this.selectedImage = image;
    this.showModal = true;
  }

  // Método para fechar o modal
  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
  }
}












