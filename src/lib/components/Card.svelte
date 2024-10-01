<script lang="ts">
  export let title: string
  export let src: string
  export let href: string
</script>

<a class="card" {href}>
  <div class="image">
    <img src="{src}" alt="{title}" />
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
    transform: rotate(5deg) scale(1.05);
  }

  .image {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 15%;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
  }

  img {
    width: 100%;
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