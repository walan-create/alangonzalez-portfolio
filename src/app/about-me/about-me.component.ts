import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent { }
