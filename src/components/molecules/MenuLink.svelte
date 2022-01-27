<script>
  export let href
  export let isActive = false
  export let onClick
</script>

<a
  {href}
  class={`menu-link flex relative my-1 sm:my-2 leading-6${
    isActive ? ' active' : ''
  }`}
  on:click={onClick}
>
  <span class="inline-block w-10">
    <slot name="index" />
  </span>
  <span class="uppercase sm:truncate sm:w-54">
    <slot />
  </span>
</a>

<style global lang="postcss">
  .menu-link {
    white-space: nowrap;
  }
  .menu-link.active::before {
    @apply bg-primary-300 absolute h-4 w-2 top-0 bottom-0 m-auto -left-6;

    content: '';
  }
</style>
