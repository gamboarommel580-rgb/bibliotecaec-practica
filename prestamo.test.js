const { test } = require('node:test');
const assert = require('node:assert/strict');
const { puedeRenovar } = require('./prestamo');

test('Permite la primera renovación', () => {
  assert.equal(puedeRenovar(0), true);
});

test('Rechaza la segunda renovación', () => {
  assert.equal(puedeRenovar(1), false);
});
