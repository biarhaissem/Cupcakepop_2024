import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardapioItems = [
    {
      title: 'Brigadeiro',
      description: 'Delicioso cupcake, sem glúten, com massa de chocolate e recheio de brigadeiro.',
      price: 'R$ 10',
      image: 'assets/imgs/brigadeiro.png'
    },
    {
      title: 'Ganache',
      description: 'Delicioso cupcake, sem glúten, com a massa de baunilha ou chocolate e recheio de ganache.',
      price: 'R$ 10',
      image: 'assets/imgs/ganache.png'
    },
    {
      title: 'Amendoim',
      description: 'Delicioso cupcake, sem glúten, com massa de baunilha e recheio de amendoim.',
      price: 'R$ 10',
      image: 'assets/imgs/amendoim.png'
    },
    {
      title: 'Limão',
      description: 'Delicioso cupcake, sem glúten, com massa de laranja e recheio de limão.',
      price: 'R$ 10',
      image: 'assets/imgs/limao.png'
    },
    {
      title: 'Morango',
      description: 'Delicioso cupcake, sem glúten, com massa de baunilha e recheio de morango.',
      price: 'R$ 10',
      image: 'assets/imgs/morango.png'
    },
    {
      title: 'Beijinho',
      description: 'Delicioso cupcake, sem glúten, com massa de baunilha e recheio de beijinho.',
      price: 'R$ 10',
      image: 'assets/imgs/beijinho.png'
    },
  ];

    showModal = false;
    selectedImage: string | null = null;

    expandImage(image: string) {
      this.selectedImage = image;
      this.showModal = true;
    }

    closeModal() {
      this.showModal = false;
      this.selectedImage = null;
    }
  }








