import {LayoutModule} from '@angular/cdk/layout';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule,} from '@angular/material';

import {NavigationComponent} from './navigation.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      declarations: [NavigationComponent],
      imports: [
        [RouterModule.forRoot([])],
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
