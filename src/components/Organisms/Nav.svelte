<script>
    import { Button } from 'flowbite-svelte';
    import { openModal } from "../../store";
    import Logo from "../Atoms/Logo.svelte";
    import CTAs from "../Molecules/CTAs.svelte";

    const navItems = [
        { label: "Product", href: "#product" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQs", href: "#faqs" },
    ];

    function reroute(href) {
        console.log("Rerouting to:", href);
        openModal.set(false);
        window.location.href = href;
    }

</script>

<!-- Desktop navigation -->
<nav class="hidden md:flex items-center gap-4 lg:gap-6">
    <ul class="flex items-center gap-4 lg:gap-6">
        {#each navItems as item}
            <li>
                <a
                    href={item.href}
                    class="duration-200 hover:text-indigo-400 cursor-pointer"
                >{item.label}</a>
            </li>
        {/each}
        <li>
            <Button>Start free today</Button>
        </li>
    </ul>
</nav>

<!-- Mobile menu button -->
{#if !$openModal}
<Button onclick={() => ($openModal = true)} aria-label="menu" class="md:hidden grid place-items-center ml-auto">
    <i class="fa-solid fa-bars text-2xl"></i>
</Button>
{/if}

<!-- Mobile modal -->
{#if $openModal}

<Button onclick={() => openModal.set(false)} aria-label="menu">
    <i class="fa-solid fa-xmark text-2xl"></i>
</Button>
     
    <nav
        class="fixed top-0 left-0 w-screen h-screen z-50 mt-[80px] flex flex-col gap-8 md:hidden"
    >
        <ul class="flex flex-col gap-4 flex-1 bg-white p-4">
            {#each navItems as item}
                <li>
                    <Button  color="ghost" class="w-full text-left group duration-200 p-2"
                    onclick={() => reroute(item.href)}>
                        <span class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
                            {item.label} <i class="fa-solid fa-chevron-right text-xl pl-4"></i>
                        </span>
                    </Button>
                </li>
            {/each}
            <li class="flex flex-col items-center justify-center">
                <CTAs />
            </li>
        </ul>
    </nav>
{/if}
