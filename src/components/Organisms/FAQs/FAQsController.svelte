<script>
    import FAQs from "./FAQs.svelte";
    let faqs = [
        {
            question: "What is Swoley Moley?",
            ans: "Swoley Moley is a fun fitness app designed to make your workouts enjoyable by incorporating interactive games and challenges.",
        },
        {
            question: "How do I download Swoley Moley?",
            ans: "You can download Swoley Moley from the App Store (for iOS) or Google Play Store (for Android) on your mobile device.",
        },
        {
            question: "Is Swoley Moley free to use?",
            ans: "Yes, Swoley Moley offers a free version with basic features. There is also a premium subscription that unlocks additional games and advanced workout tracking.",
        },
        {
            question: "What types of workouts does Swoley Moley offer?",
            ans: "Swoley Moley offers a variety of workouts, including cardio, strength training, and flexibility exercises. The workouts are designed to be engaging and entertaining.",
        },
        {
            question: "Can I connect Swoley Moley to my fitness tracker?",
            ans: "Yes, Swoley Moley supports integration with popular fitness trackers, allowing you to sync your workout data and track your progress seamlessly.",
        },
        {
            question: "Are there multiplayer features in Swoley Moley?",
            ans: "Yes, Swoley Moley includes multiplayer challenges, allowing you to compete with friends or join group workouts for a more interactive and social experience.",
        },
        {
            question: "How does Swoley Moley motivate users to stay active?",
            ans: "Swoley Moley employs a reward system, where users earn points and achievements for completing workouts. These rewards can be used to unlock new levels, challenges, and in-app content.",
        },
        {
            question: "Can I customize my workouts in Swoley Moley?",
            ans: "Absolutely! Swoley Moley allows users to customize their workouts based on personal preferences, fitness goals, and available equipment.",
        },
        {
            question: "Is there a beginner-friendly mode in Swoley Moley?",
            ans: "Yes, Swoley Moley offers a beginner-friendly mode with easier exercises and lower intensity workouts, making it suitable for users at various fitness levels.",
        },
        {
            question:
                "How often should I use Swoley Moley for optimal results?",
            ans: "The frequency of Swoley Moley workouts depends on your fitness goals. It is recommended to engage in at least 3-5 sessions per week for noticeable results.",
        },
    ];
</script>
<FAQs faqs={faqs}/>