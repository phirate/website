<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  let ready = false
  onMount(() => (ready = true))
</script>

<section class="auto top">
  {#if ready}
    <h1 transition:fly={{ y: -32, duration: 1000, delay: 500 }}>Mathematics</h1>
  {/if}
</section>
