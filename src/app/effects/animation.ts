import {
  trigger, transition, state, style, animate, keyframes
} from '@angular/animations';

export const fade = trigger('fade', [
  state('normal', style({ opacity: 1 })),
  state('fadeOut', style({ opacity: 0 })),
  transition('normal <=> fadeOut', animate('2000ms linear'))
]);

export const grow = trigger('grow', [
  state('normal', style({ transform: 'scale(1)' })),
  state('grow', style({ transform: 'scale(1.4)' })),
  transition('normal => grow', animate('1s linear')),
  transition('grow => normal', animate('200ms linear'))
])

export const avoid = trigger('avoid', [
  state('normal', style({ transform: 'translateX(0)' })),
  state('avoid', style({ transform: 'translateX(-50%)' })),
  transition('normal <=> avoid', animate('100ms linear'))
]);

export const blow = trigger('blow', [
  state('normal', style({ transform: 'translateY(0)' })),
  state('blow', style({ transform: 'translateY(25%)' })),
  transition('normal <=> blow', animate('60ms linear'))
]);

export const mendoi = trigger('mendoi', [
  state('normal', style({ transform: 'translate(0%, 0%)' })),
  state('mendoi', style({ transform: 'translate(0%, 0%) rotate(0deg)' })),
  transition('normal => mendoi', animate('2.5s linear', keyframes([
    style({ transform: 'translate(0%, 0%)', offset: 0 }),
    style({ transform: 'translate(10%, 0%) rotate(10deg)', offset: 0.05 }),
    style({ transform: 'translate(20%, 0%) rotate(20deg)', offset: 0.25 }),
    style({ transform: 'translate(-10%, 0%) rotate(-10deg)', offset: 0.30 }),
    style({ transform: 'translate(-15%, 0%) rotate(-15deg)', offset: 0.35 }),
    style({ transform: 'translate(10%, 0%) rotate(10deg)', offset: 0.45 }),
    style({ transform: 'translate(15%, 0%) rotate(15deg)', offset: 0.50 }),
    style({ transform: 'translate(-5%, 0%) rotate(-5deg)', offset: 0.60 }),
    style({ transform: 'translate(-7%, 0%) rotate(-7deg)', offset: 0.75 }),
    style({ transform: 'translate(0%, 0%) rotate(0deg)', offset: 1 })
  ])
  ))
])


export const poyooon = trigger('poyooon', [
  state('normal', style({ transform: 'scale(1.0, 1.0) translate(0%, 0%)' })),
  state('poyooon', style({ transform: 'scale(1.0, 1.0) translate(0%, 0%)' })),
  transition('normal => poyooon', animate('0.9s linear', keyframes([
    style({ transform: 'scale(1.0, 1.0) translate(0%, 0%)', offset: 0 }),
    style({ transform: 'scale(1.1, 0.9) translate(0%, 5%)', offset: 0.1 }),
    style({ transform: 'scale(1.2, 0.8) translate(0%, 15%)', offset: 0.4 }),
    style({ transform: 'scale(1.0, 1.0) translate(0%, 0%)', offset: 0.5 }),
    style({ transform: 'scale(0.9, 1.2) translate(0%, -100%)', offset: 0.6 }),
    style({ transform: 'scale(0.9, 1.2) translate(0%, -20%)', offset: 0.75 }),
    style({ transform: 'scale(1.2, 0.8) translate(0%, 15%)', offset: 0.85 }),
    style({ transform: 'scale(1.0, 1.0) translate(0%, 0%)', offset: 1 })
  ])
  ))
])