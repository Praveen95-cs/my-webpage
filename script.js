document.addEventListener('DOMContentLoaded', () => {

    const currDate = new Date();
    document.getElementById('currDate').innerText = `Current Date: ${currDate.toLocaleDateString()}`;
    document.getElementById('CalcAge').addEventListener('click', calculateAge);
    document.getElementById('reset').addEventListener('click', resetForm);
    const healthBenefits = {
            "exercise": "Regularly getting your body moving can do wonders for your health, lifting your mood and helping to fend off various illnesses.",
            "healthy diet": "Filling your plate with a variety of fruits, veggies, whole grains, and lean proteins can really give your immune system a boost.",
            "hydration": "Staying well-hydrated is key—water helps everything in your body function smoothly.",
            "sleep": "Don’t underestimate the power of a good night’s sleep! It’s essential for your mind and body to recharge and heal.",
            "stress management": "Finding ways to manage stress, like practicing meditation or yoga, can make a big difference in how you feel day-to-day.",
            "vitamins": "Making sure you get enough vitamins through your diet is crucial for keeping your body running at its best.",
            "mental health": "Prioritizing your mental health by practicing mindfulness or seeking support from friends and professionals can really enhance your overall well-being.",
            "healthy weight": "Keeping your weight in check is important for lowering the risk of chronic conditions like diabetes and heart disease.",
            "fiber": "Incorporating fiber-rich foods into your meals can help keep your digestive system happy and healthy.",
            "probiotics": "Foods like yogurt and kimchi are great for gut health—think of them as your friendly gut bacteria boosters!",
            "fruits": "Eating a mix of fruits not only satisfies your sweet tooth but also provides essential nutrients for your body.",
            "vegetables": "Loading up on colorful veggies can help keep you healthy and lower the risk of chronic diseases.",
            "whole grains": "Opting for whole grains over refined ones means more nutrients and fiber, which is great for digestion and heart health.",
            "healthy fats": "Embracing healthy fats from sources like avocados and nuts can benefit your heart and help fight inflammation.",
            "regular check-ups": "Don’t skip those health check-ups—they’re a smart way to catch any potential issues early and stay on top of your health.",
            "mindfulness": "Practicing mindfulness can sharpen your focus, ease stress, and boost your emotional health."
        };
        
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    sendButton.addEventListener('click', () => {
        handleChatInput();
    });

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleChatInput();
        }
    });

    function handleChatInput() {
        const input = userInput.value.toLowerCase();
        userInput.value = '';
        
        chatLog.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

        if (healthBenefits[input]) {
            chatLog.innerHTML += `<p><strong>Bot:</strong> ${healthBenefits[input]}</p>`;
        } else {
            chatLog.innerHTML += `<p><strong>Bot:</strong> I'm sorry, I can provide information about exercise, healthy diet, hydration, sleep, stress management, vitamins, mental health, healthy weight, fiber, probiotics, fruits, vegetables, whole grains, healthy fats, regular check-ups, or mindfulness.</p>`;
        }

        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function calculateAge() {
        const dobInput = document.getElementById('DOB').value;
        const dobParts = dobInput.split('/');
        
        if (dobParts.length !== 3) {
            document.getElementById('age').innerText = "Please enter a valid date in MM/DD/YYYY format.";
            return;
        }

        const month = parseInt(dobParts[0], 10) - 1; // Months are 0-indexed
        const day = parseInt(dobParts[1], 10);
        const year = parseInt(dobParts[2], 10);
        const dob = new Date(year, month, day);

        if (isNaN(dob.getTime())) {
            document.getElementById('age').innerText = "Please enter a valid date.";
            return;
        }

        const today = new Date();
        let ageYears = today.getFullYear() - dob.getFullYear();
        let ageMonths = today.getMonth() - dob.getMonth();
        let ageDays = today.getDate() - dob.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get days in the previous month
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.getElementById('age').innerText = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    }
    function resetForm() {
        document.getElementById('DOB').value = '';
        document.getElementById('age').innerText = '';
        chatLog.innerHTML = ''; // Clear chat log
    }
});
