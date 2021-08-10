import Modal from '../js/Madal';

const modal = new Modal();

test.each([
  ['51.50851, −0.12572', true],
  ['51.50851,−0.12572', true],
  ['[51.50851, −0.12572]', true],
  ['smth text', false],
  [',0.12572', false],
  ['0.12572', false],
  ['53.837 83.600', false],
])(('Coords value "%s" should check like %o'), (value, expected) => {
  expect(modal.checkFormat(value)).toEqual(expected);
});
