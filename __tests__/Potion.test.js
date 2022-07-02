const Potion = require('../lib/Potion.js')

test('creats a health potion object', () => {
  const potion = new Potion('health')

  expect(potion.name).toBe('health')
  expect(potion.value).toEqual(expect.any(Number))
})
