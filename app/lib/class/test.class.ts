export default class TestClass {
  text: string = 'test'

  logText(): string {
    return 'log: ' + this.text
  }
}