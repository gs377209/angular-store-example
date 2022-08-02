import { HttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

import { ShippingComponent } from "./shipping.component";

describe("ShippingComponent", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let cartService: CartService;
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingComponent],
      imports: [HttpClientTestingModule],
      providers: [CartService, FormBuilder],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
