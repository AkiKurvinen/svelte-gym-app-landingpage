<script>
    import Hero from '../components/Organisms/Hero.svelte';
    import ProductController from '../components/Organisms/ProductController.svelte';
    import FAQsConstroller from '../components/Organisms/FAQsConstroller.svelte';
    import Conversion from '../components/Molecules/Conversion.svelte';
    import Footer from '../components/Organisms/Footer.svelte';
    import ReviewsController from '../components/Organisms/ReviewsController.svelte';
</script>
<main class="flex flex-col">
    <ProductController/>
    <ReviewsController/>
    <FAQsConstroller/>
    <Conversion/>
</main>