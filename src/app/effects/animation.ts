import {
  trigger, transition, state, style, animate, keyframes
} from '@angular/animations';

/**
 * animation
 * 徐々に消える エフェクト
 */
export const fadeOut = trigger('fadeOut', [
  state('normal', style({ opacity: 1 })),
  state('fadeOut', style({ opacity: 0 })),
  transition('normal <=> fadeOut', animate('1000ms linear'))
]);

/**
 * animation
 * 大きくなる エフェクト
 */
export const grow = trigger('grow', [
  state('normal', style({ transform: 'scale(1)' })),
  state('grow', style({ transform: 'scale(1.4)' })),
  transition('normal => grow', animate('1s linear')),
  transition('grow => normal', animate('200ms linear'))
])

/**
 * animation
 * 回避 エフェクト
 */
export const avoid = trigger('avoid', [
  state('normal', style({ transform: 'translateX(0)' })),
  state('avoid', style({ transform: 'translateX(-50%)' })),
  transition('normal <=> avoid', animate('100ms linear'))
]);

/**
 * animation
 * 点滅 エフェクト
 */
export const faint = trigger('faint', [
  state('normal', style({ opacity: 1 })),
  state('faint', style({ opacity: 0 })),
  transition('normal <=> faint', animate('500ms linear', keyframes([
    style({ opacity: 0, offset: 0.3 }),
    style({ opacity: 1, offset: 0.6 })
  ])))
]);


/**
 * animation
 * バウンドアップ エフェクト
 */
export const bounceOutUp = trigger('bounceOutUp', [
  state('normal', style({ opacity: 1,transform: 'translate3d(0, 0, 0)' })),
  state('bounceOutUp', style({ opacity: 0,transform: 'translate3d(0, -2000px, 0)' })),
  transition('normal => bounceOutUp', animate('800ms linear', keyframes([
    style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
    style({ opacity: 1,transform: 'translate3d(0, 80px, 0)', offset: 0.4 }),
    style({ opacity: 1,transform: 'translate3d(0, 20px, 0)', offset: 0.45 }),
    style({ opacity: 0,transform: 'translate3d(0, -2000px, 0)', offset: 1})
  ])))
  ,transition('bounceOutUp => normal',animate('200ms linear'))
]);


/**
 * animation
 * 打撃 エフェクト
 */
export const blow = trigger('blow', [
  state('normal', style({ transform: 'translateY(0)' })),
  state('blow', style({ transform: 'translateY(25%)' })),
  transition('normal <=> blow', animate('60ms linear'))
]);


/**
 * animation
 * ゆらゆら エフェクト
 */
export const yurayura = trigger('yurayura', [
  state('normal', style({ transform: 'translate(0%, 0%)' })),
  state('yurayura', style({ transform: 'translate(0%, 0%) rotate(0deg)' })),
  transition('normal => yurayura', animate('2.5s linear', keyframes([
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


/**
 * animation
 * ぽよ〜ん エフェクト
 */
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

/**
 * animation
 * ゴムパッチン エフェクト
 */
export const rubberBand = trigger('rubberBand', [
  state('normal', style({ transform: 'scale3d(1, 1, 1)' })),
  state('rubberBand', style({ transform: 'scale3d(1, 1, 1)' })),
  transition('normal => rubberBand', animate('1.5s linear', keyframes([
    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
    style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
    style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
    style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
    style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
    style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
  ])
  ))
])