<script lang="ts">
  import { onMount } from 'svelte'
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

<svelte:head>
  <meta name="og:title" content="Phirate" />
  <meta
    name="og:description"
    content="The free & open-source alternative to Brilliant, Save My Exams, and other education platforms"
  />
  <meta name="og:url" content="https://phirate.pages.dev" />
  <title>Phirate</title>
</svelte:head>

<header>
  <div class="auto">
    <a id="logo" class="center" href="/"> Phirate </a>
    <Nav {links}></Nav>
  </div>
</header>
<main>
  <slot></slot>
</main>
<footer></footer>
