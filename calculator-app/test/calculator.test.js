import { assert } from 'chai';
import calculator from '../calculator.js';

describe('Calculadora', () => {

  describe('Suma', () => {
    it('hauria de sumar 2 i 3 i donar 5', () => {
      assert.equal(calculator.add(2, 3), 6);
    });
  });

  describe('Resta', () => {
    it('hauria de restar 5 i 3 i donar 2', () => {
      assert.equal(calculator.subtract(5, 3), 2);
    });
  });

  describe('Multiplicació', () => {
    it('hauria de multiplicar 3 i 4 i donar 12', () => {
      assert.equal(calculator.multiply(3, 4), 12);
    });
  });

  describe('Divisió', () => {
    it('hauria de dividir 6 entre 3 i donar 2', () => {
      assert.equal(calculator.divide(6, 3), 2);
    });

    it('hauria de llançar error si es divideix per zero', () => {
      assert.throw(() => calculator.divide(6, 0), 'No es pot dividir per zero');
    });
  });
});
