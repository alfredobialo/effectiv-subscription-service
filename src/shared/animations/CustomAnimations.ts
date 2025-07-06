import {animate, keyframes, style, transition, trigger} from '@angular/animations';

export const animateKeyFrame = keyframes([
  style({backgroundColor :'red', offset : 0.4, opacity : 1, transform: 'translateY(-30%) scale(1.2)' },),
  style({backgroundColor :'yellow', offset : 0.8, transform: 'translateY(0%) translateX(40%) scale(1)'}),
  style({backgroundColor :'bg-lime-600', offset : 1, transform: 'translateY(0%) scale(1)'}),
]);
export const componentCreatedAnimation = trigger("cmp-enter",[
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.5) translateY(-70%)',
    }),
    animate("5000ms ease-out", animateKeyFrame)

  ])
]);
