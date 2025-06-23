<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Footer from './Footer.svelte';
  import { fn } from 'storybook/test';
  


  const { Story } = defineMeta({
    title: 'Organisms/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
    args: {
      onclick: fn(),
    }
  });
</script>

<Story name="Footer" args={{}}/>
