// Import Angular elements.
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

// Import components, services, directives, pipes, types and interfaces.
import { VideoDownloadComponent } from '@app/components';
import { DownloadService, SettingsService } from '@app/services';
import { TooltipDirective } from '@app/directives';

// Import UI components.
import { ViButton, ViCheckbox, ViInput, ViModal } from '@app/ui';

@Component({
  selector: 'video-settings',
  templateUrl: './video-settings.component.html',
  styleUrl: './video-settings.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TranslateModule,
    VideoDownloadComponent, TooltipDirective,
    ViButton, ViCheckbox, ViInput, ViModal,
  ],
})
export class VideoSettingsComponent {
  // Inject app services.
  public download = inject(DownloadService);
  public settings = inject(SettingsService);
};