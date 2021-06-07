/// <reference types="Jest" />

import { actualizarTextoIndicePokemones } from '../listado.js';

test('actualiza el texto indice de pokemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  actualizarTextoIndicePokemones('Hola');
  expect(document.querySelector(('#indice')).textContent).toContain('Hola');
});
