<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Nav from './Nav.svelte';
  import { fn } from 'storybook/test';
  const mockNavItems = [
        { label: "Product", href: "#product" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQs", href: "#faqs" },
    ];
  const { Story } = defineMeta({
    title: 'Organisms/Nav',
    component: Nav,
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
      navItems: mockNavItems
    }
  });
</script>

<Story name="NavResponsive" args={{ navItems: mockNavItems}}/>
<Story name="NavMobileClosed" args={{ navItems: mockNavItems, openModal:false}}/>
<Story name="NavMobileOpen" args={{ navItems: mockNavItems, openModal:true}}/>
