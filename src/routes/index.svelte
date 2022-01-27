<script>
  import { onMount } from "svelte";
  import { Image, ChapterLink } from "components";
  import backgroundImage from "images/background-image.png";
  import { chapterLinks } from "utils";
  import { fly } from "svelte/transition";

  let landingPage;
  let content;
  let header;
  let background;

  const animateIn = (element, time) => {
    setTimeout(() => {
      element.classList.add("animate-focusInContractBck");
    }, time);
  };

  const animateOut = (element, time) => {
    setTimeout(() => {
      element.classList.remove("animate-focusInContractBck");
      element.style.opacity = "1";
      element.classList.add("animate-blurOut");
    }, time);
  };

  onMount(() => {
    animateOut(content, 3500);
    animateIn(header, 4500);
    animateOut(header, 7500);
    animateOut(background, 7500);

    setTimeout(() => {
      landingPage.style.position = "static";
      landingPage.classList.remove("z-30");
      background.remove();
    }, 8500);
  });
</script>

<svelte:head>
  <title>Sugihara</title>
</svelte:head>
<div
  class="landing-page fixed h-screen w-full inset-0 flex items-center justify-center bg-primary z-30"
  bind:this={landingPage}
  out:fly={{ y: -2000, duration: 1500 }}
>
  <Image
    src={backgroundImage}
    alt="background image"
    class="landing-page__background-image absolute h-screen w-full inset-0"
  />
  <div
    class="next-page-indicator absolute w-full bottom-0 flex flex-col justify-center items-center p-10 bg-primary shadow-primaryTop"
  >
    <ChapterLink
      href={chapterLinks.chapter1}
      class="border-primary-300 text-primary-300">pradžia</ChapterLink
    >
  </div>
  <div
    class="landing-page__overlay absolute h-full w-full inset-0 bg-primary"
    bind:this={background}
  />
  <p
    class="landing-page__content absolute inset-0 m-auto h-min w-max uppercase text-center tracking-3 leading-7 opacity-0 animate-focusInContractBck"
    bind:this={content}
  >
    Istorija apie tai, kaip <br /> vieno drąsa lemia <br /> tūkstančių gyvybes
  </p>
  <h1
    class="landing-page__header absolute inset-0 m-auto h-min w-max font-bold text-8xl font-serif text-center inset-0 opacity-0 leading-tight sm:text-6xl"
    bind:this={header}
  >
    Gyvenimo <br /> vizos
  </h1>
</div>

<style global lang="postcss">
  .landing-page {
    &__background-image {
      img {
        @apply w-full h-full object-cover;
      }

      &::before {
        content: "";
        filter: brightness(0.25);

        @apply absolute h-full w-full bg-primary-300 bg-opacity-50;
      }
    }
  }
</style>
