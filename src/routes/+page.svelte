<script lang="ts">
  import { onMount } from 'svelte'
  import { fly, draw } from 'svelte/transition'
  import Button from '$lib/components/Button.svelte'
  import { quintOut } from 'svelte/easing'

  let boatTransition = { duration: 750, delay: 1000, easing: quintOut }

  let ready = false
  onMount(() => (ready = true))
</script>

<section id="hero">
  {#if ready}
    <h1 transition:fly={{ y: -32, duration: 1000 }}>Free Forever</h1>
    <p class="subtitle" transition:fly={{ y: 32, duration: 1000, delay: 250 }}>
      Never pay for revision material again.
    </p>
    <div transition:fly={{ y: 32, duration: 1000, delay: 500 }}>
      <Button>Coming Soon</Button>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 240"
      id="wave"
      transition:fly={{ y: 64, duration: 1000, delay: 750 }}
    >
      <path
        fill-opacity="1"
        d="M0,160L40,170.7C80,181,160,203,240,208C320,213,400,203,480,176C560,149,640,107,720,85.3C800,64,880,64,960,69.3C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <svg viewBox="0 0 270 195" fill="none" xmlns="http://www.w3.org/2000/svg" id="boat">
      <path
        d="M4.76514 140.163C7.94149 143.974 9.81905 149.149 12.5871 153.301C16.4367 159.075 20.9141 163.826 26.7502 167.578C38.7776 175.31 51.9801 181.462 65.5943 185.956C79.5971 190.578 94.6942 190.74 109.299 190.74C122.778 190.74 136.258 190.74 149.738 190.74C169.507 190.74 187.707 183.909 206.048 177.07C217.594 172.765 227.507 165.476 237.982 159.148C245.448 154.637 253.762 150.025 260.346 144.264C264.377 140.737 263.215 136.551 265.169 132.645"
        transition:draw={boatTransition}
      />
      <path
        d="M5 139.183C69.2219 139.183 133.584 137.825 197.759 135.612C207.847 135.264 218.045 136.069 228.112 135.337C233.356 134.956 238.688 134.238 243.941 134.238C248.088 134.238 252.856 134.909 256.851 133.62C259 132.927 261.119 133.002 263.34 133.002"
        transition:draw={boatTransition}
      />
      <path
        d="M70.4553 10.4861C78.8893 11.2195 83.7622 22.171 85.8376 29.0959C88.1639 36.8584 88.558 45.1617 88.9964 53.1995C89.4024 60.6429 89.7066 68.2531 88.5844 75.6549C87.4103 83.3991 83.8063 92.2669 78.3524 98.1103C77.782 98.7214 76.7923 98.8657 76.0176 98.8657"
        transition:draw={boatTransition}
      />
      <path
        d="M69.2192 9.25004C70.0863 8.61941 71.0607 8.62181 72.1034 8.49465C76.8289 7.91837 81.5233 7.36272 86.2839 7.12124C102.025 6.32278 117.813 6.31234 133.564 5.67914C142.139 5.33441 150.898 4.30573 159.453 4.30573"
        transition:draw={boatTransition}
      />
      <path
        d="M159.453 6.15984C164.149 7.01365 168.883 14.93 171.093 18.5206C178.041 29.8115 180.607 41.8855 181.359 54.9849C182.023 66.5663 180.311 76.0926 175.797 86.7109C174.059 90.7969 171.351 94.6899 169.96 98.8657"
        transition:draw={boatTransition}
      />
      <path
        d="M77.8718 100.72C82.1578 100.72 86.3731 100.466 90.6446 100.033C105.427 98.5334 120.075 98.4644 134.903 97.9386C146.791 97.517 158.684 97.6296 170.578 97.6296"
        transition:draw={boatTransition}
      />
      <path
        d="M140.879 26.6291C137.625 26.6291 134.688 25.0124 131.282 25.3695C125.152 26.0121 118.417 30.2135 118.205 37.0064C117.981 44.1596 121.527 50.6107 128.582 52.9623C132.254 54.1863 130.986 58.9171 131.162 62.2599C131.32 65.2727 134.964 65.499 137.1 65.499C141.569 65.499 141.537 62.0588 142.379 58.4809C142.546 57.7688 142.635 54.6229 143.278 54.2819C144.534 53.6172 145.656 53.6428 146.818 52.5424C148.706 50.7533 149.274 49.5788 150.357 47.1438C151.797 43.9034 149.169 40.6712 148.557 37.6663C147.744 33.6756 144.582 28.7694 140.339 27.7089"
        transition:draw={boatTransition}
      />
      <path
        d="M118.745 74.1368C125.852 74.3661 132.978 78.2322 139.499 80.855C144.32 82.7936 149.262 84.1144 153.836 86.5536"
        transition:draw={boatTransition}
      />
      <path
        d="M123.064 87.6333C125.567 87.1782 128.269 84.7482 130.292 83.3444C133.752 80.9432 137.313 78.7735 141.179 77.076C144.33 75.6924 152.158 73.714 153.836 70.3578"
        transition:draw={boatTransition}
      />
      <path
        d="M129.002 39.0459C129.082 39.6849 130.025 40.0883 130.622 40.1256C131.039 40.1517 130.622 39.5932 130.622 39.0459"
        transition:draw={boatTransition}
      />
      <path d="M139.799 40.6655V41.7452" transition:draw={boatTransition} />
      <path
        d="M121.217 100.309C122.704 103.097 121.962 107.737 122.338 110.892C122.713 114.028 122.661 117.489 122.338 120.635C121.824 125.648 121.848 130.599 121.848 135.634"
        transition:draw={boatTransition}
      />
      <path d="M134.464 101.57V135.634" transition:draw={boatTransition} />
      <path
        d="M210.686 86.2934C205.801 86.2934 202.339 86.3919 199.888 91.3875C197.01 97.251 201.847 103.935 207.638 105.233C213.166 106.472 220.752 103.862 218.958 97.0041C217.765 92.4431 214.939 87.3148 209.902 86.6853"
        transition:draw={boatTransition}
      />
      <path
        d="M210.686 109.413C210.686 112.016 212.73 115.087 213.799 117.424C214.996 120.043 216.294 121.848 218.523 123.52"
        transition:draw={boatTransition}
      />
      <path
        d="M218.914 124.695C220.985 123.165 224.641 122.344 227.231 122.344C229.763 122.344 230.72 128.911 231.454 130.965"
        transition:draw={boatTransition}
      />
      <path
        d="M217.739 126.655C217.249 128.859 216.955 131.441 216.955 133.708"
        transition:draw={boatTransition}
      />
      <path
        d="M211.077 112.548C219.632 112.548 226.152 111.044 231.846 103.927"
        transition:draw={boatTransition}
      />
      <path
        d="M209.118 113.331C206.441 113.555 202.58 115.702 200.976 117.816C199.669 119.539 199.714 121.861 199.714 123.912"
        transition:draw={boatTransition}
      />
    </svg>
  {/if}
</section>

<style>
  #hero {
    position: relative;
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

  #hero #wave {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: -1;
  }

  #hero #wave path {
    fill: var(--color);
  }

  #hero #boat {
    position: absolute;
    left: 33vw;
    bottom: 6vw;
    width: 15vw;
    transform: rotate(-15deg);
    z-index: -1;
    animation: float 2000ms infinite alternate ease-in-out;
  }

  #hero #boat path {
    stroke: var(--color);
    stroke-width: 8;
    stroke-linecap: round;
  }

  @keyframes float {
    0% {
      transform: rotate(-15deg) translateY(0);
    }
    100% {
      transform: rotate(-17deg) translateY(-0.5vw);
    }
  }
</style>
