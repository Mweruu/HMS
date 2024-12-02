import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DentallandingpageComponent } from './dentallandingpage.component';

describe('DentallandingpageComponent', () => {
  let component: DentallandingpageComponent;
  let fixture: ComponentFixture<DentallandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentallandingpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DentallandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
