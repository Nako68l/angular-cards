import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'game-team-form',
    templateUrl: './game-team-form.component.html',
    styleUrls: ['./game-team-form.component.css']
})
export class GameTeamFormComponent {
    classControl = new FormControl();

    typeGroup = [
        {
            name: 'Warrior',
            class: [
                { value: 'bulbasaur-0', viewValue: 'Executioner' },
                { value: 'oddish-1', viewValue: 'Blighter' },
                { value: 'bellsprout-2', viewValue: 'Darkrunner' }
            ]
        },
        {
            name: 'Mage',
            class: [
                { value: 'squirtle-3', viewValue: 'Enigmatist' },
                { value: 'psyduck-4', viewValue: 'Daggerspell' },
                { value: 'horsea-5', viewValue: 'Demonologist' }
            ]
        },
        {
            name: 'Archer',
            disabled: true,
            class: [
                { value: 'charmander-6', viewValue: 'Primeval' },
                { value: 'vulpix-7', viewValue: 'Stone Arrow' },
                { value: 'flareon-8', viewValue: 'Druid' }
            ]
        },
        {
            name: 'Healer',
            class: [
                { value: 'he-9', viewValue: 'Templar' },
                { value: 'mewtwo-10', viewValue: 'Cleric' },
                { value: 'hierophant-0', viewValue: 'Hierophant' },
            ]
        }
    ];
}
