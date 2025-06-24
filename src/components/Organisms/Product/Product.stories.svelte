<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Product from './Product.svelte';
  import { fn } from 'storybook/test';
  let mockProductFeatures = [
    {
        featureList: [
            "Daily streak counter",
            "Weights and reps tracker",
            "Community challenges",
            "Every workout is new and exciting",
        ],
        description:
            "Swoley moley ensures all users have the information they need to train safely and train effectively.",
            imgUrl: 'selection.png',
    },
    {
        featureList: [
            "Select your preferences",
            "Personalize your workouts",
            "Customize your training",
            "Guarantees progress on all core exercises",
        ],
        description:
            "Build you streaks and see your progress with our amazing tracking and analytics features.",
            imgUrl: 'training.png',
    }
  ]
  const { Story } = defineMeta({
    title: 'Organisms/Product',
    component: Product,
    tags: ['autodocs'],
    argTypes: {
      productFeatures: { control: 'object', description: 'Array of product feature objects' },
    },
    args: {

      productFeatures: mockProductFeatures
    }
  });
</script>

<Story name="Product" args={{productFeatures: mockProductFeatures}}/>
