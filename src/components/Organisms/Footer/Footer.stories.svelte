<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Footer from './Footer.svelte';
  import { fn } from 'storybook/test';
  const mockSupportLinks = [
    { href: '#', text: 'Contact Us' }
  ];
  const mockResearchLinks = [
    { href: '#', text: 'Read the science' }
  ];
  const mockfollowLinks = [
    { href: '#', icon: '<i class="fa-brands fa-instagram pr-2"></i>', text: 'Instagram' },
    { href: '#', icon: '<i class="fa-brands fa-youtube pr-2"></i>', text: 'YouTube' },
    { href: '#', icon: '<i class="fa-brands fa-facebook pr-2"></i>', text: 'Facebook' }
  ]

  const { Story } = defineMeta({
    title: 'Organisms/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
      supportLinks: { control: 'object', description: 'List of support links (array of {href, text})' },
      researchLinks: { control: 'object', description: 'List of research links (array of {href, text})' },
      followLinks: { control: 'object', description: 'List of follow links (array of {href, icon, text})' },
    },
    args: {
      supportLinks: mockSupportLinks,
      researchLinks: mockResearchLinks,
      followLinks: mockfollowLinks
    }
  });
</script>

<Story name="Footer" args={{}}/>
