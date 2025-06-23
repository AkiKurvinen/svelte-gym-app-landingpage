<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Stars from './Stars.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Molecules/Stars',
    component: Stars,
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
      average: 4.5,
      totalReviews: 500,
    }
  });
</script>
<Story name="Stars" args={{}}/>

