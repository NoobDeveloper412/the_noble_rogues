<script>
  import { Card } from "atoms";
  import { ChapterItem, ChapterLink, HoverImage } from "molecules";
  import { ChapterMenu, SpyImagesCarousel } from "organisms";
  import { menuLinks, chapterLinks } from "utils";
  import spy from "images/chapter1/spy.png";
  import houseMaid from "images/chapter1/houseMaid.png";
  import desk from "images/chapter1/desk.png";
  import orange from "images/chapter1/orange.png";
  import ball from "images/chapter1/ball.png";
  import movieTicket from "images/chapter1/movieTicket.png";
  import passportSmall from "images/chapter1/passportSmall.png";
  import cat from "images/chapter1/cat.png";
  import catAngry from "images/chapter1/catAngry.png";
  import catBlissful from "images/chapter1/catBlissful.png";
  import documents from "images/chapter1/documents.png";
  import deskLight from "images/chapter1/deskLight.png";
  import IntersectionObserver from "svelte-intersection-observer";

  let elementForMaid;
  let elementForSpy;
  let elementForCat;
  let intersectingMaid = false;
  let intersectingSpy = false;
  let intersectingCat = false;

  const smallImages = [
    {
      alt: "ball",
      src: ball,
      class: "left-1/5 top-1/5 2xl:left-1/4",
      title: "Vaikutis",
      description:
        "Sekliais gali dirbti net visai nedideli vaikučiai – beje, kuo jie nedidesni, tuo labiau jų niekas nepastebi: kas atkreips dėmesį į po kojom vis pasipainiojantį murziną gatvės vaikigalį? ",
    },
    {
      alt: "movieTicket",
      src: movieTicket,
      class: "right-1/5 top-1/5 2xl:right-1/4",
      title: "Kino bilietų tikrintojas",
      description:
        "Jo niekas nepastebi ir negirdi, o jis mato visus ir įsidėmi, ką tarpusavyje prieš filmo seansą kalbasi atsipalaidavę žiūrovai. ",
    },
    {
      alt: "passportSmall",
      src: passportSmall,
      class: "left-1/5 bottom-1/5 2xl:left-1/4",
      title: "Turistas",
      description:
        "Jis maklinėja svetimo miesto gatvėmis, vis pasiklysta, tad turi klausti kelio ir čia pat rasti progą smalltalk'ui, neįpareigojančiam paplepėjimui.",
    },
    {
      alt: "orange",
      src: orange,
      class: "right-1/5 bottom-1/5 2xl:right-1/4",
      title: "Daržovių pardavėjas",
      description: "Tas kuris kaskart jums padovanojantis papildomą apelsiną. ",
    },
  ];
  let illustrations;
  let spyImage;
  let carouselClass = "hidden";
  let currentImageIndex = 0;

  const openSpyCarousel = (index) => {
    currentImageIndex = index;
    illustrations.classList.add("hidden");
    carouselClass = "flex animate-scaleInCenter";
    spyImage.classList.add("active");
  };
  const closeCarousel = () => {
    carouselClass = "hidden ";
    illustrations.classList.toggle("hidden");
    spyImage.classList.toggle("active");
  };

  let chapterItem1;
  let chapterItem2;
  let chapterItem3;
  let intersectingchapterItem1;
  let intersectingchapterItem2;
  let intersectingchapterItem3;
</script>

<svelte:head>
  <title>Kaip atpažinti šnipus?</title>
</svelte:head>

<div class="absolute w-full bg-violet">
  <ChapterMenu links={menuLinks} chapterHeader="Gyvenimo vizos" />

  <IntersectionObserver
    element={chapterItem1}
    bind:intersecting={intersectingchapterItem1}
  >
    <ChapterItem class="mb-20 z-10">
      <div
        slot="story"
        class="pt-16 mt-24 smRange:mt-54 sm:mt-120 sm:t-0 "
        bind:this={chapterItem1}
      >
        <Card class="animate-slideInBlurredBottom">
          <h2 class="c-h2 mb-8">Kaip atpažinti šnipus?</h2>
          <p>
            Beveik kiekvienas paklaustas kaip, jų nuomone, atrodo šnipai (jei
            norite mandagiau – slaptieji agentai), paminės juodą lietpaltį,
            juodą ant akių užmaukšlintą skrybėlę, juodus akinius. Dar – kokį
            įmantrų daikčiuką: fotografuojančias sagas, filmavimo kameras
            batuose arba iš saldainio popierėlio greitai išvyniojamą dūminį
            sprogmenį.
          </p>
          <p class="mt-6">
            Tikroji tiesa yra ta, kad šnipai dažniausiai nė iš tolo nepanašūs į
            šnipus. Šnipai dažnai yra
            <IntersectionObserver
              element={elementForSpy}
              bind:intersecting={intersectingSpy}
            >
              <span class="tracking-3" bind:this={elementForSpy}
                >LABAI MALONŪS ŽMONĖS</span
              >
            </IntersectionObserver>
          </p>
        </Card>
      </div>
      <div
        slot="illustration"
        class="spy w-full flex justify-center items-center relative 
   {intersectingSpy
          ? 'smMin:animate-slideInBlurredBottom'
          : 'smMin:opacity-0'}
    {intersectingchapterItem2
          ? 'sm:animate-blurOut'
          : intersectingchapterItem1
          ? ''
          : 'sm:opacity-0'}"
      >
        <div bind:this={illustrations} class="z-10">
          {#each smallImages as image, index}
            <img
              class="absolute animate-vibrate smRange:w-40 smRange:h-40 sm:w-28 sm:h-28 {intersectingMaid &&
              intersectingSpy
                ? 'smMin:animate-slideOutBlurredRight'
                : ''}   {image.class}"
              alt={image.alt}
              src={image.src}
              on:click={() => openSpyCarousel(index)}
            />
          {/each}
        </div>
        <img
          bind:this={spyImage}
          class="spy-image 2xl:w-4/6 object-contain z-0 {intersectingMaid &&
          intersectingSpy
            ? 'smMin:animate-blurOut'
            : ''}"
          alt="spy"
          src={spy}
        />
        <SpyImagesCarousel
          content={smallImages}
          bind:currentIndex={currentImageIndex}
          class="{intersectingMaid ? 'hidden' : ''} {carouselClass}"
          close={closeCarousel}
        />
      </div>
    </ChapterItem>
  </IntersectionObserver>
  <IntersectionObserver
    element={chapterItem2}
    bind:intersecting={intersectingchapterItem2}
  >
    <ChapterItem class="mb-20 sm:mt-152">
      <div slot="story" bind:this={chapterItem2}>
        <Card>
          <p class="mb-6">
            Šiais laikais viskas daug paprasčiau: jei turi telefoną kišenėje,
            tai turi ir tavęs pasiklausymo įrenginį. Bet norėčiau jus nukelti į
            daug įdomesnius laikus, kai dar niekas nebuvo taip paprasta ir
            lengva.
          </p>
          <p class="mb-6">
            Besikurianti Lietuvos valstybė 1918 metais jau turėjo besiplečiantį
            savo slaptųjų tarnybų tinklą. Kadangi nauja valstybė dar nelabai
            tokiems reikalams turėjo pinigų, imtas organizuoti žvalgybinis būrys
            vien tik iš moterų: seserų zitiečių, tarnaičių. Vadinasi, jei turite
            namų tvarkytoją, turite būti kaip niekad atsargūs.
          </p>
          <IntersectionObserver
            element={elementForMaid}
            bind:intersecting={intersectingMaid}
            rootMargin="100px"
          >
            <p bind:this={elementForMaid}>
              Namų tvarkytoja valo jūsų stalčius, tvarko darbastalius, išneša
              šiukšles (ir – neabejokite – tose šiukšlėse gerai pasikuičia).
              Namų tvarkytojų jūs įprantate nepastebėti, žiūrite į jas kaip į
              beveik nejudantį dar vieną baldą, nebylų kilimėlį. Tuo labiau, kad
              ši kvaiša yra visiškai neisšilavinusi, dažnai nesuvokia kas jai
              sakoma, nekalba jokia užsienio kalba.
            </p>
          </IntersectionObserver>
        </Card>
      </div>
      <div
        slot="illustration"
        class="w-full flex justify-center items-center 
    {intersectingMaid
          ? 'smMin:animate-focusIn'
          : 'smMin:hidden'} 
    {intersectingMaid && intersectingCat
          ? 'smMin:animate-slideOutBlurredRight'
          : ''}
    {intersectingchapterItem3
          ? 'sm:animate-slideOutBlurredRight'
          : ''}
    {intersectingchapterItem2
          ? 'sm:animate-focusIn'
          : intersectingchapterItem3
          ? 'sm:animate-slideOutBlurredRight'
          : 'sm:hidden'}
    "
      >
        <img
          class="object-contain 2xl:w-1/2 "
          alt="houseMaid"
          src={houseMaid}
        />
      </div>
    </ChapterItem>
  </IntersectionObserver>
  <IntersectionObserver
    element={chapterItem3}
    bind:intersecting={intersectingchapterItem3}
  >
    <ChapterItem class="mb-20 z-10 sm:mt-172 " imageAligment="top">
      <div slot="story" bind:this={chapterItem3}>
        <Card class="mb-16">
          <p>
            Ha. Na, nekalba. Gal ir nekalba. Nes nenori. Štai, pažiūrėkite į
            mane, katiną, šaunųjį istorijų pasakotoją: galėčiau būti geriausias
            iš šnipų: mano juodas kailis, baltos pirštinėlės, ilgi ūsai ir
            stačios ausys. Man patinka, kai mane glosto. Visi šnipai, kuriuos
            man teko sutikti, buvo be galo geri glostytojai, turbūt įtarė, kad
            turime kai ką bendro. Norėsiu – murksiu taip meiliai, kad
            užsihipnotizavę slaptieji agentai man išpliurps visas savo
            paslaptis. Norėsiu – kniauksiu it sirena, kai slaptosios tarnybos
            bandys prie stalviršio priklijuoti pasiklausymo blakę.
          </p>
        </Card>
        <Card class="flex flex-col items-stretch sm:mt-172">
          <IntersectionObserver
            element={elementForCat}
            bind:intersecting={intersectingCat}
            rootMargin="100px"
          >
            <p class="mb-6 " bind:this={elementForCat}>
              Kaip tai „kodėl tiek daug kalbu apie šnipus?“. Nes jų daug, tų
              šnipų. Ar negirdėjote, kad iki 1939 metų Lietuvos saugumo tarnybos
              sulaikė 302 šnipus Lenkijos naudai (42 iš jų buvo moterys), 87 (3
              moterys) šnipinėjusius Vokietijos naudai, o Sovietų Sąjungos
              agentų turėjo būti keturis kartus daugiau, nei jau paminėtus kartu
              sudėjus.
            </p>
          </IntersectionObserver>
          <p>
            Tačiau skaičiai man nuobodūs, nuo skaičių imu žiovauti. Mes,
            katinai, kai nemiegame ir nemedžiojame, labiausiai mėgstame žaisti.
            Nagi, prašššaaau, pažaiskite su manim. Keliaukime į Lietuvą prieš
            pat Antrąjam Pasauliniam karui prasidedant: parodysiu jums tokį
            Kauną, kuriame šnipų knibždėjo tiek, kad miestas vėliau buvo
            pramintas Šiaurės Kasablanka. Parodysiu, kaip gyveno tuometiniai
            jūsų bendraamžiai, paseksiu jums vienuolika istorijų. Galbūt ten bus
            ir šnipų, ir dokumentus klastojančių sukčių, ir paprastų namų
            tvarkytojų, - tokius asmenis kiaurai mato tik katino žvilgsnis,
            žmonės dažniausiai neatskiria, kas yra kas. Tad nepamirškite:
          </p>
          <p>
            Visokio plauko Šnipai ir Sukčiai Dažniausiai Būna Labai Malonūs
            Žmonės. (Ir katinai, be abejo – katinai!)
          </p>
          <ChapterLink
            href={chapterLinks.chapter2}
            class="mt-12 w-full border-primary text-primary"
          >
            KITAS SKYRIUS
          </ChapterLink>
        </Card>
      </div>
      <div
        slot="illustration"
        class="desk w-full flex justify-center items-start {intersectingCat
          ? 'smMin:animate-slideInBlurredBottom'
          : 'smMin:hidden'} {intersectingchapterItem3
          ? 'sm:animate-slideInBlurredBottom'
          : 'sm:hidden'}"
      >
        <img class="object-contain  mt-24 2xl:w-4/6 " alt="desk" src={desk} />
        <img
          class="absolute left-1/5 sm:-left-1/5 smRange:left-6 top-12 2xl:left-1/4  "
          alt="deskLight"
          src={deskLight}
        />
        <img
          class=" documents animate-vibrate absolute left-0 bottom-0 sm:-left-1/5"
          alt="documents"
          src={documents}
        />
        <img
          class="angry-cat hidden animate-vibrate absolute right-6 smRange:right-1/20 xs:-right-1/5  top-1/5 2xl:right-1/5"
          alt="cat"
          src={catAngry}
        />
        <img
          class="cat animate-vibrate absolute right-12 smRange:right-1/20 xs:-right-1/5 top-1/5 2xl:right-1/5"
          alt="cat"
          src={cat}
        />
        <HoverImage
          class="happy-cat opacity-0 animate-vibrate absolute right-12 smRange:right-1/20 xs:-right-1/5  top-1/5 2xl:right-1/5"
          alt="cat"
          src={catBlissful}
        >
          <div
            class="bg-primary py-3 px-4 text-primary-300 font-serif font-black"
          >
            Akio
          </div>
        </HoverImage>
      </div>
    </ChapterItem>
  </IntersectionObserver>
</div>

<style global lang="postcss">
  .desk {
    height: 600px;
  }
  .documents:hover {
    @apply animate-fastVibrate w-1/2;

    & ~ .cat {
      @apply hidden;
    }
    & ~ .angry-cat {
      @apply block;
    }
  }
  .happy-cat:hover {
    @apply opacity-100;
  }
  .spy-image.active {
    max-width: 100%;
    width: 100%;
    margin: 0 -50%;
  }
  @screen sm {
    .spy-image.active {
      max-width: 250%;
      width: 250%;
      margin: 0 -150%;
    }
  }
</style>
