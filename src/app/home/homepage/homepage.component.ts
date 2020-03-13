import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../images';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  crousalImages = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
