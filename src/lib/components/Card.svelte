<script lang="ts">
  import Icon from './Icon.svelte'

  export let title: string
  export let icon: string
  export let href: string
</script>

<a class="card" {href}>
  <div class="image">
    <Icon style="font-size: 64px;">{icon}</Icon>
  </div>
  <div class="content">
    <span class="title">{title}</span>
    <slot></slot>
  </div>
</a>

<style>
  .card {
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid var(--color);
    border-radius: 8px;
    transition: all 250ms;
  }

  .card:hover {
    border-color: var(--accent);
  }

  .card:hover .image {
    transform: rotate(5deg) scale(1.25);
  }

  .image {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15%;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
    transition: all 250ms;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
  }

  .title {
    text-align: center;
    font-size: 20px;
  }
</style>
