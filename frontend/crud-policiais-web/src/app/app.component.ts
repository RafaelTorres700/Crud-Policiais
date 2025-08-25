import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoliciaisComponent } from "./pages/policiais/policiais.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PoliciaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-policiais-web';
}
