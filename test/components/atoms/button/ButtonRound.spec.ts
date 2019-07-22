import { mount } from '@vue/test-utils'
import ButtonRound from '@/components/atoms/button/ButtonRound.vue'

describe('ButtonRound', () => {
  it('is a Vue component', () => {
    const wrapper = mount(ButtonRound)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})