import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDescriptionComponent } from './launch-description.component';

describe('LaunchDescriptionComponent', () => {
  let component: LaunchDescriptionComponent;
  let fixture: ComponentFixture<LaunchDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
