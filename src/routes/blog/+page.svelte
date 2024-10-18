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
    <p id="caption" class="subtitle" transition:fly={{ y: -32, duration: 1000, delay: 1000 }}>Get the latest Phirate news and discover <strong>unlocked</strong> content.</p>
  {/if}
</section>
