<script>
    import SectionWrapper from "../SectionWrapper/SectionWrapper.svelte";
    import Header from "../Header/Header.svelte";
    import CTAs from "../../Molecules/CTAs/CTAs.svelte";
</script>
<SectionWrapper>
    <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl
            lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold">
            <span class="text-indigo-400">Gym</span>
            Training <span class="text-slate-600 line-through">Is hard</span><br/>
            Just Got <span class="text-indigo-400">Easier</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] x-auto w-full">
            Less thinking & more doing. We're the trainer in you pocket full of 
            <span class="italic">personalized workouts, excercise explanations, analytics</span> and much more.
        </p>
        <CTAs/>
        <div class="flex items-center justify-center gap-2 text-base">
            <p>4.6</p>
            {#each [0,1,2,3,4] as index}
                <div class="grid place-items-center relative">
                    <i class="fa-solid fa-star opacity-0"></i>
                    <div class={"absolute top-0 left-0 grid place-items-center " + (index===4? "w-[60%] overflow-hidden": " ")}>
                        <i class="fa-solid fa-star text-amber-400"></i>
                    </div>
                </div>
            {/each}
            <p>500+</p>
        </div>
    </div>
</SectionWrapper>