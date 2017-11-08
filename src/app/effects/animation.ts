import { 
  trigger, transition, state, style, animate, keyframes 
} from '@angular/animations';

export const fade = trigger('fade', [
  state('fadeIn', style({ opacity: 1 })),
  state('fadeOut', style({ opacity: 0.1 })),
  transition('fadeIn <=> fadeOut', animate('2000ms linear'))
]);

export const grow = trigger('grow' , [
  state('small', style({ transform: 'scale(1)' })),
  state('large', style({ transform: 'scale(1.4)' })),
  transition('small => large', animate('2s linear')),
  transition('large =>small', animate('200ms linear'))
])

export const flyInOut = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  state('out', style({ transform: 'translateX(-150%)' })),
  transition('in <=> out', animate('200ms linear'))
]);