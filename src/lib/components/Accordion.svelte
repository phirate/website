<script lang="ts">
  import { slide } from 'svelte/transition'

  export let open: boolean = false
  export let title: string

  function click(ev: MouseEvent) {
    open = !open
  }
</script>

<div class="accordion">
  <span class="summary" on:click={click}>{title}</span>
  {#if open}
    <div class="details" transition:slide>
      <slot></slot>
    </div>
  {/if}
</div>

<style>
  .accordion {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-bottom: 2px solid var(--color);
  }

  .summary {
    box-sizing: border-box;
    padding: 32px;
    font-size: 32px;
    cursor: pointer;
  }

  .details {
    box-sizing: border-box;
    padding: 0 32px 32px;
  }
</style>