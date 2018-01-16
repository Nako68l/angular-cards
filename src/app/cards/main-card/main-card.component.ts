import { Component, OnInit } from '@angular/core';
import * as kf from "./keyframe";
import { trigger, transition, keyframes, animate, style } from '@angular/animations';
@Component({
    selector: 'app-main-card',
    templateUrl: './main-card.component.html',
    styleUrls: ['./main-card.component.css'],
    animations: [
        trigger('cardAnimator', [
            transition('* => swing', animate(1000, keyframes(kf.swing))),
            transition('* => rubberBand', animate(1000, keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
                style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
                style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
                style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
                style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
            ]))),
            transition('* => flip', animate(750, keyframes([
                style({ transform: 'perspective(400px) rotate3d(0,1,0,-360deg)' }),
            ]))),
            transition('* => flipR', animate(750, keyframes([
                style({ transform: 'perspective(400px) rotate3d(0,0,1,-360deg)' }),
            ]))),
            transition('* => flipY', animate(750, keyframes([
                style({ transform: 'perspective(400px) rotate3d(1,0,0,-360deg)' }),
            ]))),
            transition('* => hinge2', animate(2000, keyframes([
                style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0 }),
                style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '0.2' }),
                style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: '0.4', }),
                style({ transform: "translate3d(0, 700px, 0)", opacity: 0, offset: 1 }),
            ]))),
            transition('* => hinge', animate(2000, keyframes([
                style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0 }),
                style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '.2' }),
                style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: .4, }),
                style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '.6' }),
                style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: .8, }),
                style({ transform: "translate3d(0, 700px, 0)", opacity: 0, offset: 1 }),
            ]))),
            transition('* => fadeOut', animate(1000, keyframes([
                style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, })
            ]))),
            transition('* => flyRight', animate(1000, keyframes([
                style({ transform: 'scale3d(.475, .475, .475) translate3d(375px, 0, 0) perspective(300px) rotate3d(0, 1, 0, -360deg)', opacity: 0, offset: 0.7 }),
                style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 0.71 }),
                style({ transform: 'none', opacity: 1, offset: 1 }),
            ]))),
            transition('* => flyUp', animate(1000, keyframes([
                style({ transform: 'scale3d(.3, .3, .3) translate3d(0, -375px, 375px) perspective(300px) rotate3d(1, 0, 0, 360deg)', opacity: 0, offset: 0.7 }),
                // style({ transform: 'translate3d(0, 0, -100%)', opacity: 0, offset: 0.71 }),
                style({ transform: 'none', opacity: 1, offset: 1 }),
            ]))),
            transition('* => flyDown', animate(1000, keyframes([
                style({ transform: 'perspective(400px) rotate3d(0,0,1,-360deg) scale3d(.475, .475, .475) translate3d(0, -60px, 0)', animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', opacity: 1, offset: 0.4 }),
                style({ transform: 'perspective(400px) rotate3d(0,0,1,360deg) scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', opacity: 0, offset: 1 }),
                // style({ transform: 'translate3d(0, 0, -100%)', opacity: 0, offset: 0.71 }),
                // style({ transform: 'none', opacity: 1, offset: 1 }),
            ]))),
            transition('* => rollOut', animate(750, keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, -1, 120deg)', opacity: 0, offset: .7 }),
                style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: .71 }),
                style({ transform: 'none', opacity: 1, offset: 1 })
            ]))),
        ])
    ]
})
export class MainCardComponent {

    animationState: String;

    startAnimation(state) {
        if (!this.animationState) {
            this.animationState = state;
        }
    }

    resetAnimationState() {
        this.animationState = '';
    }
}
