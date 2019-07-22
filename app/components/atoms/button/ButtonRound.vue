<template>
  <a
    class="button"
    @click="$emit('click')"
  >
    <slot>Text</slot>
  </a>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AtomsButtonButtonTextIcon extends Vue {}
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    font-weight: 700;
    line-height: 1.5;
    color: #000;
    background-color: #0f0;
  }
</style>
