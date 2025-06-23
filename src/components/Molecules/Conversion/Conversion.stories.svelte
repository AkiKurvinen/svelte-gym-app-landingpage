<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Conversion from './Conversion.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Molecules/Conversion',
    component: Conversion,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color', description: 'Background color' },
    },
    args: {
      dark: true,
    }
  });
</script>

<Story name="Conversion" args={{}}/>
