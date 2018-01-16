import { keyframes, style, transition, animate } from "@angular/animations";
//TODO: попробувать убрать офсет

export const swing = [
    style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .6 }),
    style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: .8 }),
    style({ transform: 'none', offset: 1 })
];


// export const hinge = [
//     style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0 }),
//     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '.2' }),
//     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: .4, }),
//     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '.6' }),
//     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: .8, }),
//     style({ transform: "translate3d(0, 700px, 0)", opacity: 0, offset: 1 }),
// ]