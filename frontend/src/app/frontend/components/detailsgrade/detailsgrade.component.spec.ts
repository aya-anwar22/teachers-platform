import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsgradeComponent } from './detailsgrade.component';

describe('DetailsgradeComponent', () => {
  let component: DetailsgradeComponent;
  let fixture: ComponentFixture<DetailsgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsgradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
