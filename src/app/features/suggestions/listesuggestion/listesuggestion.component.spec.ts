import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesuggestionComponent } from './listesuggestion.component';

describe('ListesuggestionComponent', () => {
  let component: ListesuggestionComponent;
  let fixture: ComponentFixture<ListesuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListesuggestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
