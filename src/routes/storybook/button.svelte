<script>
  import { Button, Arrow, Burger, Close } from "components";
</script>

<div class="p-4">
  <h2>Button types:</h2>
  <p>Down</p>
  <Button>
      <Arrow direction="DOWN"/> 
  </Button>
  <p>Left</p>
  <Button>
      <Arrow direction="LEFT"/> 
  </Button>
  <p>Left with text</p>
  <Button>
      <Arrow direction="LEFT"/> 
      NE
  </Button>
  <p>Right with text</p>
  <Button class="text-primary">
      <Arrow direction="RIGHT" class="text-primary"/> 
      TAIP
  </Button>
  <p>Close</p>

  <Close onClick={()=>console.log("click")} />
  <p>Burger</p>
  <Burger class="text-primary-100"/>

</div>