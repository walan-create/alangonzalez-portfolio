import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
    tiltCard(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left; // posición del ratón dentro de la tarjeta
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10; // negativo para efecto invertido
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.setProperty('--rotate-x', `${rotateX}deg`);
  card.style.setProperty('--rotate-y', `${rotateY}deg`);
}

resetTilt(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  card.style.setProperty('--rotate-x', `0deg`);
  card.style.setProperty('--rotate-y', `0deg`);
}
 }
