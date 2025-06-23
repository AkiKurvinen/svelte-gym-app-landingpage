<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';
  import { fn } from 'storybook/test';
  

  const { Story } = defineMeta({
    title: 'Organisms/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    }
  });
</script>

<Story name="Header" args={{}}/>
