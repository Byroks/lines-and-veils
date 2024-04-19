import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { LoginComponent } from './components/components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _selectedPortal?: ComponentPortal<any>;

  constructor() {
    this._selectedPortal = new ComponentPortal(LoginComponent);
  }

  public openLink(): void {
    window.open('https://github.com/Byroks/lines-and-veils', '_blank');
  }

  get selectedPortal(): ComponentPortal<any> | undefined {
    return this._selectedPortal;
  }
}
