<script>
    import { openModal } from "../../store";
    import Nav from "../Nav.svelte";
    import Logo from "../Logo.svelte";
    export let fixed = false;
</script>

<header class={`flex justify-between border-b border-solid border-black items-center relative px-2 z-20 h-20 ${fixed ? 'fixed top-0 left-0 w-full' : ''}`}>
    <a href="/"><Logo/></a>
    <Nav/>
</header>
