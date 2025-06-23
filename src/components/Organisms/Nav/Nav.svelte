<script>
  import { Button } from 'flowbite-svelte';
  import Logo from "../../Atoms/Logo/Logo.svelte";
  import CTAs from "../../Molecules/CTAs/CTAs.svelte";
  let { children, navItems, openModal, onMenuOpen,onMenuClose,onNavClick } = $props();
</script>

<!-- Desktop navigation -->
<nav class="hidden md:flex items-center gap-4 lg:gap-6">
  <ul class="flex items-center gap-4 lg:gap-6">
    {#each navItems as item}
      <li>
        <a
          href={item.href}
          class="duration-200 hover:text-indigo-400 cursor-pointer"
          onclick={() => onNavClick(item.href)}
        >{item.label}</a>
      </li>
    {/each}
    <li>
      <Button>Start free today</Button>
    </li>
  </ul>
</nav>

<!-- Mobile menu button -->
{#if !openModal}
<Button onclick={onMenuOpen} aria-label="menu" class="md:hidden grid place-items-center ml-auto">
  <i class="fa-solid fa-bars text-2xl"></i>
</Button>
{/if}

<!-- Mobile modal -->
{#if openModal}
<Button onclick={onMenuClose} aria-label="menu">
  <i class="fa-solid fa-xmark text-2xl"></i>
</Button>
  <nav
    class="fixed top-0 left-0 w-screen h-screen z-50 mt-[80px] flex flex-col gap-8 md:hidden"
  >
    <ul class="flex flex-col gap-4 flex-1 bg-white p-4">
      {#each navItems as item}
        <li>
          <Button color="ghost" class="w-full text-left group duration-200 p-2"
            onclick={() => onNavClick(item.href)}>
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
