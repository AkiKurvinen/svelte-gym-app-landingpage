<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Conversion from './Conversion.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Molecules/Conversion',
    component: Conversion,
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

<Story name="Conversion" args={{}}/>
