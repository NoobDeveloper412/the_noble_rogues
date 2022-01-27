<script>
  import Close from 'icons/close.svg'
  import { Button } from 'atoms'
  const defaultClass = $$props.class || 'text-primary-300'
</script>

<Button {...$$props} on:click>
  <Close class={`fill-current ${defaultClass}`} />
</Button>
