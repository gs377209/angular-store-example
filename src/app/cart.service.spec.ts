import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

import { CartService } from "./cart.service";

describe("CartService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CartService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
