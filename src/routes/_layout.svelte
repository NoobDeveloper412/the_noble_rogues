<script>
  import Nav from "components/Nav.svelte";
  import GlobalStyle from "components/GlobalStyle.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="min-h-screen">
	<GlobalStyle />
  <slot />
</main>
