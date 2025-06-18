<script>
    import "../app.css";
    let { children } = $props();
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    let y = $state(0);
    let outerHeight = $state(0);
</script>

<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 fadeIn">
    <Header fixed={y > outerHeight}/>
</div>

{@render children()}
<Footer />
<svelte:window bind:scrollY={y} bind:outerHeight />