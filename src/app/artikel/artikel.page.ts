import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.page.html',
  styleUrls: ['./artikel.page.scss'],
})
export class ArtikelPage implements OnInit {
  public artikel: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.artikel = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
