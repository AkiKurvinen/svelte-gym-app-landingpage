<script>
    import { Button } from 'flowbite-svelte';
    let { children, dark } = $props();

</script>
<div class="flex items-center gap-4">
    <Button>Contact Us</Button>
    <Button outline color={dark ? 'light' : 'dark'}>Get Started &rarr;</Button>
</div>