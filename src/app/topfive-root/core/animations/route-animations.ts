import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    style({
      opacity: 0
    }),
    animate('2000ms ease', style({ opacity: 1 }))
  ])
]);
