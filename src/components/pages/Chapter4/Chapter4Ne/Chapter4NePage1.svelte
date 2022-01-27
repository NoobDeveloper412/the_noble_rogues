<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import handSrc from "images/Chapter4/hand-no.png";
  import hand2Src from "images/Chapter4/hand-no2.png";
</script>

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 top-1/10 left-0 h-screen sm:w-full sm:left-0"
  >
    <img src={handSrc} alt="" class="absolute" />
    <img
      src={hand2Src}
      alt=""
      class="absolute w-1/2 right-0 bottom-0 top-0 my-auto animate-fadeOutSlow"
    />
  </div>
  <Card class="card dark last float-right sm:float-none">
    <h2 class="c-h2 mb-8">Ne</h2>
    <p>
      Man dvidešimt vieneri. Jam – trisdešimt penkeri. Aš niekada nesvajojau
      ištekėti, įsivaizdavau, kad esu moderni, meniškos prigimties mergina.
      Bloga buvo vien nuo minties apie <Explanation
        variant="gray"
        background="dark"
        class="border-grayscale border-b-4"
      >
        <div slot="content" class="w-full">
          <p class="p-6">
            Sutartinė santuoka, kai besituokiančiųjų tėvai nusprendžia, kas bus
            vyras ir žmona, neklausiant jokios jaunųjų nuomonės. Pasakojamais
            laikais tai buvo beveik be išimčių įprasta praktika.
          </p>
        </div>
        <span slot="text">sutartinę</span>
      </Explanation> santuoką. Norėjau meilės istorijos, tokios, kokia nutiko mano
      mamai ir tėčiui, kai jie įsimylėjo žaisdami tenisą. Šis vyras jau buvo vedęs.
      Jis ką tik išsiskyręs.
    </p>
    <p class="mt-8">
      Ir aš nesutinku tekėti, atmetu jo pasiūlymą. Čiunė pas mus nebesilanko.
      Toliau gaminu pusryčius ir vakarienes savo broliui. Artėja karas. Mano
      eilėraščiai vis liūdnesni.
    </p>
    <p class="mt-8 bg-primary-300 w-3 h-3 border-none rounded-lg" />
  </Card>
</div>
