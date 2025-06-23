<script>
    import Product from "./Product.svelte";
    let productFeatures = [
        {
            featureList: [
                "Daily streak counter",
                "Weights and reps tracker",
                "Community challenges",
                "Every workout is new and exciting",
            ],
            description:
                "Swoley moley ensures all users have the information they need to train safely and train effectively.",
            imgUrl: "assets/selection.png",
        },
        {
            featureList: [
                "Select your preferences",
                "Personalize your workouts",
                "Customize your training",
                "Guarantees progress on all core exercises",
            ],
            description:
                "Build you streaks and see your progress with our amazing tracking and analytics features.",
            imgUrl: "assets/training.png",
        },
        {
            featureList: [
                "Eliminating guesswork",
                "Save time",
                "Achieve the performance you seek",
                "Builds functional strength",
            ],
            description:
                "Enter as much information about yourself as you desire to ensure all workouts are personalized to your every need.",
            imgUrl: "assets/goal.png",
        },
    ];
</script>
<Product productFeatures={productFeatures}/>
