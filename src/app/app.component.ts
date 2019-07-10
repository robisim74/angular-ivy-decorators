import { Component, OnInit } from '@angular/core';

import { Language } from './decorators/language.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Language() lang: string;

  title = 'angular-ivy-decorators';


  ngOnInit() {
    // For aot
  }
}
