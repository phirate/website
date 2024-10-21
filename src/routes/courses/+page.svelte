<script lang="ts">
  import Accordion from '$lib/components/Accordion.svelte'
  import Card from '$lib/components/Card.svelte'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { subjects } from '$lib/courses'

  let ready = false
  onMount(() => (ready = true))
</script>

<section id="banner">
  {#if ready}
    <span id="pill" transition:fly={{ y: -32, duration: 1000 }}>Courses</span>
    <h1 transition:fly={{ y: -32, duration: 1000, delay: 500 }}>Browse Interactive Lessons</h1>
    <p id="caption" transition:fly={{ y: -32, duration: 1000, delay: 1000 }}>Master topics through step-by-step learning paths.</p>
  {/if}
</section>
<section class="auto">
  {#each Object.keys(subjects) as subject}
    <Accordion title={subject}>
      <div class="grid">
        {#each Object.values(subjects[subject]) as course}
          <Card title={course.name} href={`/courses/${subject.toLowerCase()}/${course.name.toLowerCase().split(' ').join('_')}`} icon={course.icon}></Card>
        {/each}
      </div>
    </Accordion>
  {/each}
</section>

<style>
  .auto {
    padding: 32px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    gap: 16px;
  }
</style>
