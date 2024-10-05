import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    'assets/imgs/cupscoloridos.png',
    'assets/imgs/cupstrio.png',
    'assets/imgs/cupsvariados.png',
    'assets/imgs/rosaduplo.png',
    'assets/imgs/brigadeirohome.png',
    'assets/imgs/muitos.png'
  ];

  currentSlide = 0;
  totalSlides = 6; // Número total de imagens no carrossel

  slide(direction: string) {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const slideWidth = track.offsetWidth / 6; // Dividido pelo total de imagens

    if (direction === 'next') {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    } else {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    }

    const offset = -(this.currentSlide * slideWidth);
    track.style.transform = `translateX(${offset}px)`;
  }

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



