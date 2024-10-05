import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showModal = false;
  selectedImage: string = '';

  expandImage(image: string) {
    this.selectedImage = image;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedImage = '';
  }
}


