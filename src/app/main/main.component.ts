import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";
import { HeroComponent } from "../hero/hero.component";
import { TechnologiesComponent } from "../technologies/technologies.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-main',
  imports: [ProjectsComponent, HeroComponent, TechnologiesComponent, AboutMeComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { }
