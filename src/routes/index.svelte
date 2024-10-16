<script>
  import backSrc from "images/back.png";
  import catSrc from "images/cat.png";
  import leftSrc from "images/left.png";
  import LogoImage from "images/noble_rogues_english_logo.png";
  import rightSrc from "images/right.png";
  import sugiharaSrc from "images/sugihara.png";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let landingPage;
  let content;
  let header;
  let logo;
  let sugihara, cat, back, left, right, shortDetails;
  let button, background;

  const animateIn = (element, time) => {
    setTimeout(() => {
      element.classList.add("animate-focusInContractBck");
    }, time);
  };

  const animateLogo = (element, time) => {
    setTimeout(() => {
      element.classList.remove("opacity-0");
      element.classList.add("ss");
    }, time);
  };

  const animateUp = (element, time) => {
    setTimeout(() => {
      element.classList.add("anitop");
    }, time);
  };

  const animateTopIn = (element, time) => {
    setTimeout(() => {
      element.classList.add("animate-slideInBottom");
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
    animateLogo(logo, 4700);
    animateUp(logo, 5500);
    animateTopIn(sugihara, 8300);
    animateTopIn(cat, 9300);
    animateTopIn(back, 10500);
    animateTopIn(left, 11500);
    animateTopIn(right, 12500);
    animateTopIn(button, 13500);
    animateTopIn(shortDetails, 14000);

    setTimeout(() => {
      landingPage.style.position = "static";
      landingPage.classList.remove("z-30");
    }, 8500);
  });
</script>

<svelte:head>
  <title>The Noble Rogue</title>
</svelte:head>

<div
  class="landing-page fixed w-full inset-0 flex items-center justify-center bg-primary z-30"
  bind:this={landingPage}
  out:fly={{ y: -2000, duration: 1500 }}
>
  <div
    class="next-page-indicator absolute w-full bottom-1/10 flex flex-col justify-center items-center p-10 bg-primary shadow-primaryTop"
  >
    <a
      href="/01-how-to-recognize-spies"
      class="link_btn_part fixed opacity-0 border-primary-300 text-primary-300"
      bind:this={button}>Begin</a
    >
    <p class="short_details opacity-0 fixed" bind:this={shortDetails}>
      most convenient to read on non-mobile screens
    </p>
  </div>

  <div
    class="landing-page__overlay absolute h-full w-full inset-0 bg-primary"
  />
  <p
    class="landing-page__content absolute inset-0 m-auto h-min w-max uppercase text-center tracking-3 leading-7 opacity-0 animate-focusInContractBck"
    bind:this={content}
  >
    The story of how <br /> the courage of <br /> one determines the lives of
    <br /> thousands
  </p>

  <img
    class="logoimage absolute opacity-0"
    bind:this={logo}
    alt="LogoImage"
    src={LogoImage}
  />

  <div class="bottom_image fixed bottom-1/5">
    <img
      class="absolute bottom-0 opacity-0 sugihara"
      bind:this={sugihara}
      alt="sugihara"
      src={sugiharaSrc}
    />
    <img
      class="absolute bottom-0 opacity-0 cat_lan"
      bind:this={cat}
      alt="LogoImage"
      src={catSrc}
    />
    <img
      class="absolute absolute bottom-0 opacity-0 back"
      bind:this={back}
      alt="LogoImage"
      src={backSrc}
    />
    <img
      class="absolute absolute bottom-0 opacity-0 left"
      bind:this={left}
      alt="LogoImage"
      src={leftSrc}
    />
    <img
      class="absolute bottom-0 opacity-0 right"
      bind:this={right}
      alt="LogoImage"
      src={rightSrc}
    />
  </div>
</div>

<style global lang="postcss">
  .landing-page {
    .__background-image {
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

  .logoimage {
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .ss {
    opacity: 1;
    transition:
      opacity 1s linear,
      visibility 1s linear;
  }
  .anitop {
    animation-name: example;
    animation-duration: 2s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes example {
    from {
      top: 40%;
    }
    to {
      top: 10%;
    }
  }
  .bottom_image {
    width: 850px;
    margin: 0 auto;
    display: block;
  }
  .sugihara {
    width: 384px;
    left: 0;
    right: -2%;
    margin: 0 auto;
    z-index: 99;
  }
  .cat_lan {
    width: 62px;
    margin: 0 auto;
    z-index: 999;
    left: 33%;
    bottom: 7vw;
  }
  .back {
    width: 472px;
    left: 16%;
    right: 0;
    margin: 0 auto;
  }
  .left {
    width: 270px;
    left: 0;
    margin: 0 auto;
    z-index: 99;
  }
  .right {
    width: 256px;
    right: 1.8%;
    margin: 0 auto;
    z-index: 99;
  }
  .link_btn_part {
    color: #ebe8e0;
    border: 1px solid #ebe8e0;
    margin: 0 auto;
    left: 0;
    right: 0;
    max-width: 230px;
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
    z-index: 9999;
  }
  .bottom_image:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1500px;
    z-index: 9999;
    margin-top: -20px;
    top: 15%;
    background: #2e2b29;
    filter: blur(30px);
    min-width: 1100px;
    left: -80px;
  }
  .shadow-primaryTop {
    box-shadow: 0px 0px 105px 70px #2e2b29;
    z-index: 99999;
  }
  .short_details {
    font-size: 16px;
    color: #ebe8e0;
    bottom: 40px;
  }
  @screen sm {
    .logoimage {
      max-width: 40%;
    }
    .bottom_image {
      width: 100%;
      margin: 0 auto;
      display: block;
      position: absolute;
    }
    .sugihara {
      width: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 9999;
      bottom: 30px;
    }
    .cat {
      width: 33px;
      margin: 0 auto;
      left: 29%;
      bottom: 23vw;
      z-index: 9999;
    }
    .back {
      width: 60%;
      left: 4%;
      right: 0;
      margin: 0 auto;
      bottom: 30px;
    }
    .left {
      width: 26%;
      left: 0;
      margin: 0 auto;
      z-index: 99;
    }
    .right {
      width: 31%;
      right: 0;
      margin: 0 auto;
      z-index: 9999;
      bottom: 27px;
    }
    .bottom_image:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 300px;
      z-index: 9999;
      margin-top: -20px;
      top: 15%;
      background: #2e2b29;
      filter: blur(30px);
      min-width: 100%;
      left: 0;
    }
    .cat_lan {
      width: 35px;
      margin: 0 auto;
      z-index: 9999;
      left: 29%;
      bottom: 23vw;
    }
    .short_details {
      font-size: 14px;
      bottom: 28px;
    }
  }
</style>
