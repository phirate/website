<script lang="ts">
  export let disabled = false

  let pressed = false

  function mousedown(ev: MouseEvent) {
    pressed = true
  }

  function mouseup(ev: MouseEvent) {
    pressed = false
  }
</script>

<button {disabled} on:mousedown={mousedown} on:mouseup={mouseup} on:mouseleave={mouseup} class:pressed>
  <span class="label">
    <slot></slot>
  </span>
</button>

<style>
  button {
    padding: 8px 16px;
    background-color: transparent;
    color: var(--color);
    border-radius: 4px;
    border: 2px solid var(--color);
    transition: all 250ms;
  }

  button:hover {
    background-color: var(--color);
    color: var(--bg);
  }

  button:focus:not(:hover) {
    box-shadow: 0px 0px 8px 0px var(--color);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button.pressed {
    transform: scale(0.9);
  }
</style>