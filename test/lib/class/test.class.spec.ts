import TestClass from '@/lib/class/test.class'

let testClass: TestClass

describe('Test Class', () => {
  beforeEach(() => {
    testClass = new TestClass()
  })

  test('it initialises', () => {
    expect(testClass.text).toBe('test')
  })

  test('it has moar test', () => {
    expect(testClass.logText()).toBe('log: test')
  })
})
