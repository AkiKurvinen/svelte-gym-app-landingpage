<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Hero from './Hero.svelte';
  import { fn } from 'storybook/test';
  

  const { Story } = defineMeta({
    title: 'Organisms/Hero',
    component: Hero,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    }
  });
</script>

<Story name="Hero" args={{}}/>
