<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Reviews from './Reviews.svelte';
  import { fn } from 'storybook/test';
  
    let mockReviews = [
      {
          name: "John Doe",
          review: "Swoley Moley has been a game-changer for my fitness journey! The personalized workout plans and progress tracking tools are amazing, and the community keeps me motivated. I especially love the feature that recommends new workouts based on my goals and strengths.",
          features: [
              "Personalized workout plans",
              "Community features",
              "Workout recommendation system",
          ],
      },
      {
          name: "Jane Smith",
          review: "Swoley Moley is the most user-friendly fitness app I've ever used. The interface is clean and intuitive, and the exercises are easy to follow. I've already seen significant results in just a few weeks. My favorite features are the guided workouts and the ability to log my meals and track my progress.",
          features: [
              "Guided workouts",
              "Meal logging and tracking",
              "User-friendly interface",
          ],
      }
    ]

  const { Story } = defineMeta({
    title: 'Organisms/Reviews',
    component: Reviews,
    tags: ['autodocs'],
    argTypes: {
      reviewsList: { control: 'object', description: 'Array of review objects' },
    },
    args: {
      reviewsList: mockReviews
    }
  });
</script>

<Story name="Reviews" args={{}}/>
