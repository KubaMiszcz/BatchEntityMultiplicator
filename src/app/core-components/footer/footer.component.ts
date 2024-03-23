import { AppSettingsService } from 'src/app/services/app-settings.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = this.appSettingsService.version;
  build = this.appSettingsService.build;

  constructor(private appSettingsService: AppSettingsService) {}
}
