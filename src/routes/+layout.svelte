<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import '../app.css'
</script>

<header>
  <div class="auto">
    <a id="logo" class="center" href="/">
      Phirate
    </a>
    <nav>
      <a class="center" href="/">Home</a>
    </nav>
    <div id="actions" class="center">
      <Button>Login</Button>
    </div>
  </div>
</header>
<main>
  <slot></slot>
</main>
<footer></footer>
