import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['development0.jpg','development1.jpg','development2.jpg','development3.jpg'];
  headlines = [
    'Born to code',
    'Irren ist menschlich. Aber für das richtige Chaos, braucht man einen Computer.',
    'Bring engineering to the next level',
    'Früh aufstehen ist der erste Schritt in die falsche Richtung!'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
