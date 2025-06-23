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
            imgUrl: 'src/components/Molecules/assets/selection.png',
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
            imgUrl: 'src/components/Molecules/assets/training.png',
    }
  ]
  const { Story } = defineMeta({
    title: 'Organisms/Product',
    component: Product,
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
      productFeatures: mockProductFeatures
    }
  });
</script>

<Story name="Product" args={{productFeatures: mockProductFeatures}}/>
