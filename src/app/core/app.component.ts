import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts,private router:Router) {}
  home(){
    this.router.navigate(['/home'])
  }
}
