<template>
  <div>
    <p>text: {{ text }}</p>
    <p>log: {{ log }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TestClass from '@/lib/class/test.class'

@Component
export default class TypescriptClass extends Vue {
  public text: string = ''

  public log: string = ''

  public mounted() {
    const test = new TestClass()
    this.text = test.text
    this.log = test.logText()
  }
}
</script>