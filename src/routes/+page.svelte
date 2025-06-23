<script>
    import Hero from '../components/Hero.svelte';
    import Product from '../components/Product.svelte';
    import FAQsConstroller from '../components/Organisms/FAQsConstroller.svelte';
    import Conversion from '../components/Molecules/Conversion.svelte';
    import Footer from '../components/Organisms/Footer.svelte';
    import ReviewsController from '../components/Organisms/ReviewsController.svelte';
</script>
<main class="flex flex-col">
    <Product/>
    <ReviewsController/>
    <FAQsConstroller/>
    <Conversion/>
</main>