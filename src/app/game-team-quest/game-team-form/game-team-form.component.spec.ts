import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTeamFormComponent } from './game-team-form.component';

describe('GameTeamFormComponent', () => {
  let component: GameTeamFormComponent;
  let fixture: ComponentFixture<GameTeamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTeamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
