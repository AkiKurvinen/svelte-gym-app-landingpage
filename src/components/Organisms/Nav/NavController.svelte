<script>
    import Nav from "./Nav.svelte";
    import { openModal } from "../../../store";
    import { onMount } from 'svelte';

    const navItems = [
        { label: "Product", href: "#product" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQs", href: "#faqs" }
    ];

    let modalOpen = false;
    $: modalOpen = $openModal;

    function handleMenuOpen() {
        openModal.set(true);
    }
    function handleMenuClose() {
        openModal.set(false);
    }
    function handleNavClick(href) {
        openModal.set(false);
        window.location.href = href;
    }
</script>

<Nav
    {navItems}
    openModal={modalOpen}
    onMenuOpen={handleMenuOpen}
    onMenuClose={handleMenuClose}
    onNavClick={handleNavClick}
/>
