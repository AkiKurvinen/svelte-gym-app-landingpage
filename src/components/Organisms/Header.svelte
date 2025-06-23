<script>
    import NavController from "./NavController.svelte";
    import Logo from "../Atoms/Logo.svelte";
    export let fixed = false;
</script>

<header class={`flex justify-between border-b border-solid border-black items-center relative px-2 z-20 h-20 ${fixed ? 'fixed top-0 left-0 w-full' : ''}`}>
    <a href="/"><Logo/></a>
    <NavController/>
</header>
