<script>
  import { onMount } from "svelte";
  import { MenuLink } from "molecules";

  export let links = [];
  export let chapterHeader;

  const setActiveLink = (index) => {
    links.map((link) => (link.isActive = false));
    links[index].isActive = true;
  };

  onMount(() => {
    const activeIndex = links.findIndex(
      (link) =>
        window.location.pathname === link.href ||
        window.location.pathname === link.href + "/"
    );
    activeIndex > -1 && setActiveLink(activeIndex);
  });
</script>

<div class="chapter-menu {$$props.class || ''}">
  <div>
    {#each links as link, index}
      <MenuLink
        href={link.href}
        isActive={link.isActive}
        onClick={() => setActiveLink(index)}
      >
        <span slot="index">
          {`${index < 9 ? "0" + (index + 1) : index + 1}`}
        </span>
        <span>{link.title}</span>
      </MenuLink>
    {/each}
  </div>
  {#if chapterHeader}
    <p
      class="chapter-header sm:hidden transform rotate-180 text-2xl text-right font-serif ml-auto my-1"
    >
      {chapterHeader}
    </p>
  {/if}
</div>

<style global lang="postcss">
  .chapter-menu {
    @apply bg-primary text-primary-300 flex fixed bottom-0 ml-6 pl-12 pr-8 py-6 w-112;

    &:hover {
      @apply z-50;
    }
  }
  .chapter-header {
    writing-mode: vertical-lr;
  }

  @screen sm {
    .chapter-menu {
      @apply p-0 m-0 right-0 top-12 opacity-0 transition-max-width duration-500;

      height: max-content;
      max-width: 0;
    }

    .menu-expanded .chapter-menu {
      @apply max-w-xs -mr-6 pl-6 z-50 opacity-100;
    }
  }
</style>
