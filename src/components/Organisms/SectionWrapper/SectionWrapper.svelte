<script>
    let { children, id } = $props();
</script>
<section {id} class={"min-h-screen flex flex-col px-4 scroll-mt-20"}>
    <div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">
        {@render children?.()}
    </div>
</section>