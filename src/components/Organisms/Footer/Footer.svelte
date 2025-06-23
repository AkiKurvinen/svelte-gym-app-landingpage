<script>
   let {supportLinks, researchLinks, followLinks} = $props();
</script>

<footer class="py-16 sm:py-20 md:py-24 px-4 md:px-8">
    <div
        class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base"
    >
        <div class="flex flex-col gap-4 md:col-span-2">
            <p class="font-semibold">
                Swoley <span class="text-indigo-400">Moley</span>
            </p>
            <p>©2025 SWOLEY MOLEY LTD. All rights reserved.</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Support</p>
            {#each supportLinks as link}
              <a href={link.href} target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">
                {#if link.icon}{@html link.icon}{/if}{link.text}
              </a>
            {/each}
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Research</p>
            {#each researchLinks as link}
              <a href={link.href} target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">
                {#if link.icon}{@html link.icon}{/if}{link.text}
              </a>
            {/each}
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Follow Us</p>
            {#each followLinks as link}
              <a href={link.href} target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">
                {#if link.icon}{@html link.icon}{/if}{link.text}
              </a>
            {/each}
        </div>
    </div>
</footer>