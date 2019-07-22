import { mount } from '@vue/test-utils'
import Test from '@/pages/test.vue'

describe('Test', () => {
  it('is a Vue page', () => {
    const wrapper = mount(Test)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
