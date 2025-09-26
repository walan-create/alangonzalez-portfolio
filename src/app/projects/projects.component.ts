import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {

tiltCard(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left; // posición del ratón dentro de la tarjeta
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -5; // negativo para efecto invertido
  const rotateY = ((x - centerX) / centerX) * 5;

  card.style.setProperty('--rotate-x', `${rotateX}deg`);
  card.style.setProperty('--rotate-y', `${rotateY}deg`);
}

resetTilt(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  card.style.setProperty('--rotate-x', `0deg`);
  card.style.setProperty('--rotate-y', `0deg`);
}

}
