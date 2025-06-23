<script>
    let {average = 0, totalReviews = 0} = $props();
    let fullStars = Math.floor(average);
    let hasHalfStar = average - fullStars >= 0.5;
</script>

<div class="flex items-center justify-center gap-2 text-base">
    <p>{average}</p>
    {#each [0, 1, 2, 3, 4] as index}
        <div class="grid place-items-center relative">
            <i class="fa-solid fa-star opacity-0"></i>
            {#if index < fullStars}
                <div class="absolute top-0 left-0 grid place-items-center">
                    <i class="fa-solid fa-star text-amber-400"></i>
                </div>
            {:else if index === fullStars && hasHalfStar}
                <div class="absolute top-0 left-0 grid place-items-center w-[50%] overflow-hidden">
                    <i class="fa-solid fa-star text-amber-400"></i>
                </div>
            {/if}
        </div>
    {/each}
    <p>{totalReviews}</p>
</div>