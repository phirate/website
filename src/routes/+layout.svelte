<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import '../app.css'

  let links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Courses',
      href: '/courses'
    },
    {
      name: 'Blog',
      href: '/blog'
    }
  ]
</script>

<header>
  <div class="auto">
    <a id="logo" class="center" href="/">
      Phirate
    </a>
    <Nav {links}></Nav>
  </div>
</header>
<main>
  <slot></slot>
</main>
<footer></footer>
