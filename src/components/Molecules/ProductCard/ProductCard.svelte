<script>
    import { Button } from 'flowbite-svelte';
    let { children, index, productFeature } = $props();
</script>
<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base">
    <div class={"flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10"+
        (index%2===1?' md:order-2':' ')}>
        <h4 class="text-2xl sm:text-3xl max-w-[1000px]
        w-full font-medium relative
        after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900">
        {@render children?.()}
    </h4>
    <p>{productFeature.description}</p>
    <div class="flex flex-col gap-3">
        {#each productFeature.featureList as listItem}
        <div class="flex gap-2 items-center">
            <div
                class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300"
            >
                <i class="fa-solid fa-bolt text-green-400"></i>
            </div>
            <p>{listItem}</p>
        </div>
    {/each}
    </div>
    <div class="flex items-center">
        <Button color="primary" class="mr-auto font-semibold">Try free today &rarr;</Button>
    </div>
    
    </div>
    <div class={"flex flex-col dropShadow overflow-hidden rounded-b-lg "+
    (index%2===1?' order-1':' ')}>
    <div class="rounded-t-xl sm:h-10 bg-white opacity-60 px-3 flex items-center gap-2">
        {#each [1,2,3] as i}
        <div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"></div>
        {/each}
    </div>
    <div class="flex flex-col bg-white gap-4 flex-1">
        <img src={productFeature.imgUrl} alt="product-img"/>
    </div>
</div>
</div>