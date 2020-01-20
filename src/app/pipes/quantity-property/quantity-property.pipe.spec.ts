import { QuantityPropertyPipe } from './quantity-property.pipe';

describe('QuantityPropertyPipe', () => {
  it('create an instance', () => {
    const pipe = new QuantityPropertyPipe();
    expect(pipe).toBeTruthy();
  });
});
