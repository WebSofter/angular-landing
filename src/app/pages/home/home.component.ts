import { Component } from '@angular/core';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
