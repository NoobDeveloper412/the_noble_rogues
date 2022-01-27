<script>
  import Burger from 'icons/burger.svg'
  import { Button } from 'atoms'
  const defaultClass = $$props.class || 'text-primary-300'
</script>

<Button {...$$props}>
  <Burger class={`fill-current ${defaultClass}`} />
</Button>
