<script>
    import "../app.css";
    let { children } = $props();
    import FooterController from "../components/Organisms/Footer/FooterController.svelte";
    import Header from "../components/Organisms/Header/Header.svelte";    
    let y = $state(0);
    let outerHeight = $state(0);
</script>

<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 fadeIn">
      <Header fixed={y > outerHeight}/>
</div>
<div class="mt-[80px]">
    {@render children()}
</div>
<FooterController />
<svelte:window bind:scrollY={y} bind:outerHeight />