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
            transition('* => flip', [
                style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)' }),
                animate(1000),]),
            transition('* => flipR', animate(1000, keyframes([
                style({ transform: 'perspective(400px) rotate3d(0,0,1,-360deg)' }),
            ]))),
            transition('* => flipY', animate(1000, keyframes([
                style({ transform: 'perspective(400px) rotate3d(1,0,0,-360deg)' }),
            ]))),
            //TODO: WHYYYY??????
            //https://daneden.github.io/animate.css/
            //https://github.com/daneden/animate.css/blob/fb4313ad0c3c2a962f7a86c89cbbc69ba1285214/source/specials/hinge.css
            // transition('* => hinge', [
            //     style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0 }),
            //     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '.2' }),
            //     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: .4, }),
            //     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out', offset: '.6' }),
            //     style({ transformOrigin: 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', animationTimingFunction: 'ease-in-out', opacity: 1, offset: .8, }),
            //     style({ transform: "translate3d(0, 700px, 0)", opacity: 0, offset: 1 }),
            //     animate(2000)
            // ]),
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
