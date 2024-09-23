<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  let ready = false
  onMount(() => (ready = true))
</script>

<section id="banner">
  {#if ready}
    <span id="pill" transition:fly={{ y: -32, duration: 1000 }}>Blog</span>
    <h1 transition:fly={{ y: -32, duration: 1000, delay: 500 }}>Read Useful Thoughts</h1>
  {/if}
</section>

<style>
  #banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #pill {
    margin: 0 0 8px;
    padding: 4px 16px;
    border: 2px solid var(--color);
    border-radius: 100vmax;
    text-transform: uppercase;
    font-size: 16px;
  }

  #banner h1 {
    margin-block: 0 0;
  }
</style>
