<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ProductCard from './ProductCard.svelte';
  import { fn } from 'storybook/test';

  let mockProductFeature = {
        featureList: [
            "Daily streak counter",
            "Weights and reps tracker",
            "Community challenges",
            "Every workout is new and exciting",
        ],
        description:
            "Swoley moley ensures all users have the information they need to train safely and train effectively.",
        imgUrl: 'selection.png',
    }
  const { Story } = defineMeta({
    title: 'Molecules/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    argTypes: {
      productFeature: { control: 'object', description: 'Product feature data' },
    },
    args: {
      productFeature: mockProductFeature,
    }
  });
</script>
<Story name="ProductCard" args={{ productFeature:mockProductFeature}}/>

