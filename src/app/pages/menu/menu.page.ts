import { Component, OnInit } from '@angular/core';


import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  ngOnInit() {
    this.generateItems();
  }

  items: any = [];
  
  
  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 12; i++) {
      this.items.push(`Anime ${count + i}`);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 10000);
  }//altere ^ para ver o carregamento 
  

  


}

