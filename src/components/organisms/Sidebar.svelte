<script>
  import { onMount } from "svelte";
  import { Button } from "atoms";
  import Burger from "icons/burger.svg";
  import Close from "icons/close.svg";
  import { fly } from "svelte/transition";
  import { mobileWidth } from "utils";

  let menu,
    screenWidth,
    offset,
    active = false;

  const handleMenuToggle = () => {
    active = !active;
    if (active === true) {
      document.body.classList.add("menu-expanded");
    } else if (document.body.classList.contains("menu-expanded")) {
      document.body.classList.remove("menu-expanded");
    }
  };

  const handleMenuBlur = (e) => {
    if (
      e.target !== menu &&
      !menu.contains(e.target) &&
      menu.classList.contains("active")
    ) {
      handleMenuToggle();
    }
  };

  onMount(() => {
    offset = screenWidth <= mobileWidth ? 500 : -500;
  });
</script>

<svelte:window
  on:click={active && handleMenuBlur}
  bind:innerWidth={screenWidth}
/>
<div
  bind:this={menu}
  class={`menu fixed top-0 sm:right-0 h-screen z-10${active ? " active" : ""}`}
>
  <Button
    on:click={handleMenuToggle}
    class="menu-button absolute top-0 sm:right-0 p-4 sm:py-4 sm:px-3 z-10"
  >
    {#if !active}
      <Burger class="pointer-events-none" />
    {:else}
      <Close class="pointer-events-none" />
    {/if}
  </Button>
  {#if active}
    <div
      class={`menu-dropdown flex flex-col absolute top-0 sm:right-0 h-full w-76 pt-20 overflow-hidden${
        active ? " active" : ""
      }`}
      on:click={handleMenuToggle}
      transition:fly={{ x: offset, duration: 500 }}
    >
      <slot />
    </div>
  {/if}
</div>

<style global lang="postcss">
  :global(body.menu-expanded) {
    overflow: hidden;

    &::before {
      @apply fixed w-full h-full bg-primary opacity-50 z-10;

      content: "";
    }
  }
  .menu {
    a {
      @apply font-serif text-2xl pl-6;
    }

    &-button:focus,
    &-button:hover {
      outline: none;
    }
  }

  .menu-dropdown {
    @apply bg-gradient-to-r from-primary to-transparent;

    background-image: linear-gradient(
      to right,
      var(--gradient-from-color) 80%,
      var(--gradient-to-color) 100%
    );
    gap: 1.5em;
  }

  .menu-expanded .menu-dropdown,
  .menu-dropdown.active {
    @apply max-w-xs;
  }

  @screen sm {
    .menu-expanded .menu-dropdown,
    .menu-dropdown.active {
      a {
        @apply opacity-100;
      }
    }
    .menu-dropdown {
      @apply bg-primary justify-end pb-8;
    }

    .menu {
      a {
        @apply opacity-0 transition-opacity duration-500;
      }
    }
  }
</style>
