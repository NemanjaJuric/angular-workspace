import { Component } from '@angular/core';
import { ElectronService } from 'electron-helper';

@Component({
  selector: 'face-recognition-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'face-recognition-admin';

  constructor(private electronService: ElectronService) {
    console.log(this.electronService.isElectron);
  }

}
