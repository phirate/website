<script lang="ts">
  export let style: string = ''
</script>

<span class="material-symbols-rounded" {style}>
  <slot></slot>
</span>

<style>
  .material-symbols-rounded {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }
</style>
