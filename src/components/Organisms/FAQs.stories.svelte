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
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
    args: {
      onclick: fn(),
      faqs: mockFaqs
    }
  });
</script>

<Story name="FAQs" args={{}}/>
