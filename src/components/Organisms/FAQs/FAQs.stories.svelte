<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FAQs from './FAQs.svelte';
  import { fn } from 'storybook/test';
  
  let mockFaqs = [
    {
        question: "What is Swoley Moley?",
        ans: "Swoley Moley is a fun fitness app designed to make your workouts enjoyable by incorporating interactive games and challenges.",
    },
    {
        question: "How do I download Swoley Moley?",
        ans: "You can download Swoley Moley from the App Store (for iOS) or Google Play Store (for Android) on your mobile device.",
    }
  ]

  const { Story } = defineMeta({
    title: 'Organisms/FAQs',
    component: FAQs,
    tags: ['autodocs'],
    argTypes: {
      faqs: { control: 'object', description: 'Array of FAQ objects' },
    },
    args: {
      faqs: mockFaqs
    }
  });
</script>

<Story name="FAQs" args={{}}/>
