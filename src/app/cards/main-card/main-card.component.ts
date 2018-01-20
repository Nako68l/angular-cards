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
            transition('* => rubberBand', animate(1000, keyframes(kf.rubberBand))),
            transition('* => flip', animate(750, keyframes(kf.flip))),
            transition('* => flipR', animate(750, keyframes(kf.flipR))),
            transition('* => flipY', animate(750, keyframes(kf.flipY))),
            transition('* => hinge2', animate(2000, keyframes(kf.hinge2))),
            transition('* => hinge', animate(2000, keyframes(kf.hinge))),
            transition('* => fadeOut', animate(1000, keyframes(kf.fadeOut))),
            transition('* => flyRight', animate(1000, keyframes(kf.flyRight))),
            transition('* => flyUp', animate(1000, keyframes(kf.flyUp))),
            transition('* => flyDown', animate(1000, keyframes(kf.flyDown))),
            transition('* => rollOut', animate(750, keyframes(kf.rollOut))),
            transition('* => bounce', animate(2000, keyframes(kf.bounce))),
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
