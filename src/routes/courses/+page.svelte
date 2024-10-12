<script lang="ts">
  import Accordion from '$lib/components/Accordion.svelte'
  import Card from '$lib/components/Card.svelte'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  let ready = false
  onMount(() => (ready = true))

  let subjects: Record<string, string[]> = {
    Mathematics: [
      'Geometry'
    ],
    Biology: [
      'Genetics'
    ],
    Chemistry: [
      'Energetics'
    ],
    Physics: [
      'Kinematics',
      'Optics'
    ],
    Informatics: [
      'Programming',
      'Olympiad'
    ]
  }
</script>

<section id="banner">
  {#if ready}
    <span id="pill" transition:fly={{ y: -32, duration: 1000 }}>Courses</span>
    <h1 transition:fly={{ y: -32, duration: 1000, delay: 500 }}>Browse Interactive Lessons</h1>
    <p>Master topics through step-by-step learning paths.</p>
  {/if}
</section>
<section class="auto">
  {#each Object.keys(subjects) as subject}
    <Accordion title={subject}>
      <div class="list">
        {#each Object.values(subjects[subject]) as course}
          <Card title={course} href={`/courses/${subject.toLowerCase()}/${course.toLowerCase().split(' ').join('_')}`} src="/favicon.png"></Card>
        {/each}
      </div>
    </Accordion>
  {/each}
</section>

<style>
  .auto {
    padding: 32px;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    gap: 16px;
  }
</style>
