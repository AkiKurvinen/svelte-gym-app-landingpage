<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CTAs from './CTAs.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Molecules/CTAs',
    component: CTAs,
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

<Story name="CTAs" args={{}}/>
