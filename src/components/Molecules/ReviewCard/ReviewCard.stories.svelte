<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ReviewCard from './ReviewCard.svelte';
  import { fn } from 'storybook/test';
  let mockReviewItem = 
      {
          name: "John Doe",
          review: "Swoley Moley has been a game-changer for my fitness journey! The personalized workout plans and progress tracking tools are amazing, and the community keeps me motivated. I especially love the feature that recommends new workouts based on my goals and strengths.",
          features: [
              "Personalized workout plans",
              "Community features",
              "Workout recommendation system",
          ],
      }
  const { Story } = defineMeta({
    title: 'Molecules/ReviewCard',
    component: ReviewCard,
    tags: ['autodocs'],
    argTypes: {
      reviewItem: { control: 'object', description: 'Review data object' },
      left: { control: 'boolean', description: 'Align card to left' },
      index: { control: 'number', description: 'Card index' },
      onclick: { action: 'clicked', description: 'Click handler' },
    },
    args: {
      reviewItem: mockReviewItem,
      left: true,
      index:0
    }
  });
</script>
<Story name="ReviewCard" args={{}}/>
