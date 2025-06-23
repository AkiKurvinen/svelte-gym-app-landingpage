<script>
  import Footer from './Footer.svelte';
  const supportLinks = [
    { href: '#', text: 'Contact Us' }
  ];
  const researchLinks = [
    { href: '#', text: 'Read the science' }
  ];
  const followLinks = [
    { href: '#', icon: '<i class="fa-brands fa-instagram pr-2"></i>', text: 'Instagram' },
    { href: '#', icon: '<i class="fa-brands fa-youtube pr-2"></i>', text: 'YouTube' },
    { href: '#', icon: '<i class="fa-brands fa-facebook pr-2"></i>', text: 'Facebook' },
    { href: '#', icon: '<i class="fa-brands fa-twitter pr-2"></i>', text: 'Twitter' },
  ];
</script>

<Footer {supportLinks} {researchLinks} {followLinks} />