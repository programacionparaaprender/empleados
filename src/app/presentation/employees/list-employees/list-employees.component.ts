import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
