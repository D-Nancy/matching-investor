// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import ButtonRound from '@/components/atoms/button/ButtonRound.vue'

storiesOf('atoms/button/ButtonRound', module)
  .add('As a component', () => ({
    components: { ButtonRound },
    template: '<ButtonRound />',
  }))
  .add('I don\'t work', () => '<ButtonRound />')
