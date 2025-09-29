import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  currentSection: string = '';
  sections: string[] = ['proyectos', 'tecnologias', 'sobre-mi'];

  ngOnInit(): void {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const y = event.clientY; // posición vertical del ratón
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (y >= rect.top && y <= rect.bottom) {
          this.currentSection = this.sections[i];
          break;
        }
      }
    }
  }
}
