import { Component } from '@angular/core';
import { ElectronService } from '@face-recognition/electron-helper';
import { ICamera } from '@face-recognition/domain-models';

@Component({
  selector: 'face-recognition-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'face-recognition-admin';

  camera: ICamera

  constructor(private electronService: ElectronService) {
    console.log(this.electronService.isElectron);
  }

}
