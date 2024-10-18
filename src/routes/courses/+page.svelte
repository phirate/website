<script lang="ts">
  import Accordion from '$lib/components/Accordion.svelte'
  import Card from '$lib/components/Card.svelte'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  let ready = false
  onMount(() => (ready = true))

  let subjects: Record<string, { name: string, icon: string }[]> = {
    Mathematics: [
      {
        name: 'Geometry',
        icon: 'category',
      },
      {
        name: 'Calculus',
        icon: 'function',
      },
      {
        name: 'Statistics',
        icon: 'bar_chart',
      },
    ],
    Biology: [
      {
        name: 'Microbiology',
        icon: 'microbiology',
      },
      {
        name: 'Genetics',
        icon: 'genetics',
      },
    ],
    Chemistry: [
      {
        name: 'Energetics',
        icon: 'explosion',
      },
      {
        name: 'Equilibria',
        icon: 'balance',
      },
      {
        name: 'Organics',
        icon: 'oil_barrel',
      },
    ],
    Physics: [
      {
        name: 'Kinematics',
        icon: 'trail_length',
      },
      {
        name: 'Optics',
        icon: 'flare',
      },
      {
        name: 'Electricity',
        icon: 'bolt',
      },
    ],
    Informatics: [
      {
        name: 'Programming',
        icon: 'code',
      },
      {
        name: 'Olympiad',
        icon: 'trophy',
      },
    ]
  }
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
      <div class="list">
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

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    gap: 16px;
  }
</style>
