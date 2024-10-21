<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { subjects } from '$lib/courses'
  import Card from '$lib/components/Card.svelte'

  let ready = false
  onMount(() => (ready = true))

  let name = 'Mathematics'
</script>

<section class="auto top">
  {#if ready}
    <h1 transition:fly={{ y: -32, duration: 1000 }}>{name}</h1>
    <div class="list" transition:fly={{ y: -32, duration: 1000, delay: 500 }}>
      {#each Object.values(subjects[name]) as course}
        <div class="box">
          <Card
            href={`/courses/${name}/${course.name.toLowerCase().split(' ').join('_')}`}
            icon={course.icon}
          ></Card>
          <div class="text">
            <h2>{course.name}</h2>
            <p>{course.teaser}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .box {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 32px;
  }

  .box h2 {
    margin: 0;
  }
</style>
