<script>
  import { SideStoryCard } from "components";
</script>

<div class="px-4">
  <SideStoryCard 
    onClickLeft={()=>console.log("left")} 
    onClickRight={()=>console.log("right")}  >
    <p slot="title" >TĖTIS</p>
    <p slot="text" >
        Mano tėtis, juvelyras, turi nedidelę papuošalų parduotuvę. Jis geriausiai moka nuraminti mamos audras, manau, tėčiai tam ir sugalvoti, kad mamos šypsotųsi. 
    </p>
    </SideStoryCard>
    <br/>
    <SideStoryCard 
    variant="light" >
    <p slot="title" class="text-center" >KINO BILIETŲ TIKRINTOJAS</p>
    <p slot="text" >
        Jo niekas nepastebi ir negirdi, o jis mato visus ir įsidėmi, ką tarpusavyje prieš filmo seansą kalbasi atsipalaidavę žiūrovai. 
    </p>
  </SideStoryCard>
      <br/>
  <SideStoryCard 
  variant="violet" >
  <p slot="title" >TEST</p>
  <p slot="text" >
      Small amount of text
  </p>
</SideStoryCard>
</div>

