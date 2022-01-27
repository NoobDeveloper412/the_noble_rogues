<svelte:head>
  <title>Mediateka | Sugihara</title>
</svelte:head>

<script>
  import { onMount } from "svelte";
  import Gallery1 from "images/gallery-1.png";
  import Gallery2 from "images/gallery-2.png";
  import Gallery3 from "images/gallery-3.png";
  import { Gallery } from "components";

  let background;

  const animateIn = (element, time) => {
    setTimeout(() => {
      element.classList.add("animate-focusInContractBck");
    }, time);
  };

  onMount(() => {
    animateIn(background, 0);
  });

  const images = [
    { src: Gallery1, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery2, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery3, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery2, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery1, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery2, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery3, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
    { src: Gallery2, alt: "Gallery Image", caption: "Long caption with a lot of words to see how it would look."},
  ];
</script>

<div>
  <div
    class="fixed-background fixed inset-0 h-screen w-full flex items-center justify-center md:relative md:h-auto md:mt-32"
  >
    <h1 class="c-h2 opacity-0" bind:this={background}>Mediateka</h1>
  </div>
  <Gallery images={images} />
</div>