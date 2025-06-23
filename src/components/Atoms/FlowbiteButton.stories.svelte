<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from 'flowbite-svelte/Button.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Atoms/Button',
    component: Button,
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
    }
  });
</script>

<Story name="Primary" args={{primary: true, label: 'Button' }}>Button</Story>
<Story name="Outline"  args={{outline:true}}>Get Started &rarr;</Story>
