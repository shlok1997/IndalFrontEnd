import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPath: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadScript('./../../../assets/js/main.js');
    this.activatedRoute.url.subscribe(url => {
      if (url.length !== 0) {
        this.currentPath = url[0].path;
      } else {
        this.currentPath = '';
      }
    });
  }

  private loadScript(url: string) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    document.body.appendChild(script);
  }

}
