import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovipagePage } from './movipage.page';

describe('MovipagePage', () => {
  let component: MovipagePage;
  let fixture: ComponentFixture<MovipagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovipagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovipagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
