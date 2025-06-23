<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Stars from './Stars.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Molecules/Stars',
    component: Stars,
    tags: ['autodocs'],
    argTypes: {
      average: { control: 'number', description: 'Average rating (0-5)' },
      totalReviews: { control: 'number', description: 'Total number of reviews' },
    },
    args: {
      average: 4.5,
      totalReviews: 500,
    }
  });
</script>
<Story name="Stars" args={{ average: 4.5, totalReviews: 500 }}/>

