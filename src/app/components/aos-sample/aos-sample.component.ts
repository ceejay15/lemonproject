import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-aos-sample',
  templateUrl: './aos-sample.component.html',
  styleUrls: ['./aos-sample.component.scss']
})
export class AosSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();
  }

}

