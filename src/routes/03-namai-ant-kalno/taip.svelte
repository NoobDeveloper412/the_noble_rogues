<script>
  import { ChoicesScreen } from "components";
  import { ChapterItem } from "molecules";
  import { Card } from "atoms";
  import { fade } from "svelte/transition";
  import gateSrc from "images/chapter3/gate.png";
  import houseSrc from "images/chapter3/house.png";
  import { chapterLinks } from "utils";
</script>

<svelte:head>
  <title>Namai ant kalno</title>
</svelte:head>

<div class="absolute w-full bg-grayscale" out:fade in:fade>
  <ChapterItem
    textAligment="right"
    imageAligment="smTop"
    class="mt-20 sm:mt-120"
  >
    <div slot="story" class=" animate-slideInBlurredBottom">
      <Card class="bg-primary smMin:mt-0 text-primary-300">
        <h2 class="c-h2 my-8 text-primary-300 ">Taip</h2>
        <p class="mb-6 text-primary-300">
          Siaubo apimtas Gudzės veidas persikreipia iš pykčio, o aš visu garsu
          paleidžiu gerklę: “MIAAAAU” - rėkiu it sirena, -”Ššššnipas, sssukčius,
          vagissss” - šnypčiu, kai jis bando mane sugriebti ir keliais kruvinais
          dryžiais perrėžiu jam plaštakas, bet jo rankos it geležinės replės
          suspaudžia mane už pakarpos. Pro duris įvirsta sunerimęs Čiunė ir abu
          asistentai. “Katinas graužia laidus!” - riaumoja Gudzė. “Gudzė vagia
          šriftų raktus!” - kniaukiu visa gerkle aš.
        </p>
        <p class="mb-6 text-primary-300">Ir mus abu išspiria iš namų.</p>
        <p class="mb-6 text-primary-300">
          Gudzė ant visų konsulato darbuotojų užsiundo vokiečių gestapą.
        </p>
        <p class="mb-6 text-primary-300">
          Aš, katinas Aiko, iš nuglostyto japonijos konsulato katino tampu
          benamiu valkata ir Kauno sąvartynuose su kitais katinais besikaudamas
          dėl maisto likučių, greitai prarandu visas devynias katiniškas
          gyvybes.
        </p>
        <p class=" bg-primary-300 w-3 h-3 border-none rounded-lg" />
      </Card>
    </div>
    <div
      slot="illustration"
      class="house-image max-w-screen-md 2xl:m-auto w-full flex justify-start items-start relative animate-slideInBlurredBottom"
    >
      <img class="mb-40 sm:mb-32 sm:-mx-1-5" alt="house" src={houseSrc} />
      <img
        class="maw-w-screen-xl absolute bottom-0 sm:mb-16"
        alt="gate"
        src={gateSrc}
      />
    </div>
  </ChapterItem>

  <ChoicesScreen
    header="Ar sukniauks katinas?"
    class="relative h-120 p-10 sm:p-4 z-10"
    choice1={{ href: "", text: "taip" }}
    choice2={{ href: `${chapterLinks.chapter3}/ne`, text: "ne" }}
  />
</div>

<style global lang="postcss">
  @screen sm {
    .house-image {
      width: 150%;
      max-width: 150%;
      margin: 0 -25%;
    }
  }
</style>
