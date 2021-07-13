import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.page.html',
  styleUrls: ['./film-info.page.scss'],
})
export class FilmInfoPage implements OnInit {
  info: object = null;
  constructor(
    private filmService: FilmService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getInfo(id).subscribe((result) => (this.info = result));
  }
}
