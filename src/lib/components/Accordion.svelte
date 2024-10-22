<script lang="ts">
  import { slide } from 'svelte/transition'
  import Icon from './Icon.svelte'

  export let open: boolean = false
  export let title: string
  export let href: string

  function click(ev: MouseEvent) {
    open = !open
  }
</script>

<div class="accordion">
  <span class="summary" on:click={click}>
    <a {href}>{title}</a>
    <span class="icon" class:open>
      <Icon>keyboard_arrow_down</Icon>
    </span>
  </span>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 32px;
    cursor: pointer;
  }

  .summary a {
    font-size: 32px;
  }

  .summary .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    transition: all 250ms;
  }

  .summary .icon.open {
    transform: rotate(180deg);
  }

  .details {
    box-sizing: border-box;
    padding: 0 32px 32px;
  }
</style>