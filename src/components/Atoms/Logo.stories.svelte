<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Logo from './Logo.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Atoms/Logo',
    component: Logo,
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

<Story name="Primary" args={{}}/>