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
      navItems: { control: 'object', description: 'Navigation items (array of {label, href})' },
      openModal: { control: 'boolean', description: 'Mobile menu open state' },
    },
    args: {
      navItems: mockNavItems,
      openModal: false
    }
  });
</script>

<Story name="NavResponsive" args={{ navItems: mockNavItems }}/>
<Story name="NavMobileClosed" args={{ navItems: mockNavItems, openModal:false }}/>
<Story name="NavMobileOpen" args={{ navItems: mockNavItems, openModal:true }}/>
