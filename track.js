document.addEventListener('DOMContentLoaded', function() {
    // Create cycle dots
    const cycleDots = document.querySelector('.cycle-dots');
    for (let i = 0; i < 12; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        cycleDots.appendChild(dot);
    }

    // Category buttons
    const categoryButtons = document.querySelectorAll('.categories button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simulated data for insights (in a real app, this would come from a backend)
    const insights = [
        { title: 'A Visual Guide to Understanding Your Period', category: 'Video' },
        { title: 'Breaking Taboos and Starting Conversations about Menstruation', category: 'Article' },
        { title: 'Taking Control of Your Menstrual Health: Key Factors for a Balanced Cycle', category: 'Health' },
        { title: 'The Best Foods and Drinks for a Healthy Menstrual Period', category: 'Food & Drink' },
        { title: 'Yoga Practices for a Harmonious Menstrual Cycle', category: 'Yoga' },
        { title: 'Tried and Tested Tips for Managing Your Menstruation', category: 'Tips & Tricks' },
    ];

    // Populate insights
    const insightsGrid = document.querySelector('.insights-grid');
    insights.forEach(insight => {
        const insightElement = document.createElement('div');
        insightElement.classList.add('insight');
        insightElement.innerHTML = `
            <h3>${insight.title}</h3>
            <span class="category">${insight.category}</span>
        `;
        insightsGrid.appendChild(insightElement);
    });
});