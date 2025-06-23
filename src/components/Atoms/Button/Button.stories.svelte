<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from 'flowbite-svelte/Button.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color', description: 'Button background color' },
      size: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg'],
        description: 'Button size',
      },
      primary: { control: 'boolean', description: 'Primary style' },
      outline: { control: 'boolean', description: 'Outline style' },
      disabled: { control: 'boolean', description: 'Disabled state' },
      onclick: { action: 'clicked', description: 'Click handler' },
    },
    args: {
      onclick: fn(),
      primary: true,
      outline: false,
      size: 'md',
      disabled: false,
      backgroundColor: '',
    }
  });
</script>

<Story name="Primary" args={{primary: true, outline: false, size: 'md', disabled: false}}>Button</Story>
<Story name="Outline"  args={{outline:true, primary: false, size: 'md', disabled: false}}>Get Started &rarr;</Story>
