import { TestBed } from '@angular/core/testing';

import { CartFormConfigService } from './cart-form-config.service';

describe('CartFormConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartFormConfigService = TestBed.get(CartFormConfigService);
    expect(service).toBeTruthy();
  });
});
