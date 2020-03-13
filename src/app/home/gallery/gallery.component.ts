import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../images';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  crousalImages = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
