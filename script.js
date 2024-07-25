$(document).ready(function () {
    const API_URL = 'https://hack-or-snooze-v3.herokuapp.com';

    // Function to fetch stories from the API
    function fetchStories() {
        $.ajax({
            url: `${API_URL}/stories`,
            method: 'GET',
            success: function (response) {
                displayStories(response.stories);
            },
            error: function (error) {
                console.error('Error fetching stories:', error);
            }
        });
    }

    // Function to display stories on the page
    function displayStories(stories) {
        const storyList = $('#story-list');
        storyList.empty();
        stories.forEach(story => {
            const storyItem = $(`
                <div class="story">
                    <h3>${story.title}</h3>
                    <p>${story.author}</p>
                    <a href="${story.url}" target="_blank">${story.url}</a>
                </div>
            `);
            storyList.append(storyItem);
        });
    }

    // Fetch and display stories on page load
    fetchStories();
});

