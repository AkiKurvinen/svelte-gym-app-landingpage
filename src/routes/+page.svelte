<script>
    import Hero from '../components/Organisms/Hero/Hero.svelte';
    import ProductController from '../components/Organisms/Product/ProductController.svelte';
    import FAQsConstroller from '../components/Organisms/FAQs/FAQsController.svelte';
    import Conversion from '../components/Molecules/Conversion/Conversion.svelte';
    import ReviewsController from '../components/Organisms/Reviews/ReviewsController.svelte';
</script>
<svelte:head>
  <title>Swoley Moley</title>
</svelte:head>
<main class="flex flex-col">
    <ProductController/>
    <ReviewsController/>
    <FAQsConstroller/>
    <Conversion dark={true}/>
</main>
