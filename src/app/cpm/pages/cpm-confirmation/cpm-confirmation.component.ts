import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpm-confirmation',
  templateUrl: './cpm-confirmation.component.html',
  styleUrls: ['./cpm-confirmation.component.css']
})
export class CpmConfirmationComponent {

  constructor(private router:Router) {}
  home(){
    this.router.navigate(['/home'])
  }

}
