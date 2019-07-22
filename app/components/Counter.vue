<template>
  <div>
    <span class="count">{{ count }}</span>
    <span class="square">(square: {{ square }})</span>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { counterVuexNamespace } from '@/store/counter/const'

@Component
export default class Counter extends Vue {
  // computed properties are defined as non-null variables
  @counterVuexNamespace.State('count')
  private count!: number

  @counterVuexNamespace.Getter('square')
  private square!: number
  // methods should match expected signature

  @counterVuexNamespace.Action('increment')
  private increment!: () => void
}
</script>