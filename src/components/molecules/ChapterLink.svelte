<script>
  export let href;
</script>

<a
  {href}
  class="block w-max py-4 px-12 bg-transparent uppercase border transition duration-500 hover:bg-primary hover:text-primary-300 cursor-pointer text-center {$$props.class ||
    ''}"
>
  <slot />
</a>
