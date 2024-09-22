<script lang="ts">
  import Button from '$lib/components/Button.svelte'
</script>

<section id="hero">
  <h1>Free Forever</h1>
  <p class="subtitle">Never pay for revision material again.</p>
  <Button>Get Started</Button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
    <path
      fill-opacity="1"
      d="M0,160L40,170.7C80,181,160,203,240,208C320,213,400,203,480,176C560,149,640,107,720,85.3C800,64,880,64,960,69.3C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
</section>

<style>
  #hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #hero h1 {
    margin: 0;
    color: transparent;
    background: linear-gradient(to right, var(--color), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
  }

  #hero .subtitle {
    margin: 16px 0;
    font-size: 20px;
  }

  #hero svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  #hero path {
    fill: var(--color);
  }
</style>