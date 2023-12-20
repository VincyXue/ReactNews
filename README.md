# Vincy News

Vincy News is a dynamic web application designed to keep users informed with the latest news and articles. This README provides an overview of its features and functionalities.

## Features/Usage

### Article Interactions

- **Like Icon**: Increases the like count by one each time it's clicked.
- **Plus Icon**: Adds the current article to your favorites column.
- **Minus Icon**: Removes the article from your favorites column. Closes the currently opened article.
- **Expandable Articles**: Clicking on the article header will extend the article content for a detailed read.

### Navbar / Vincy News

- **Hover Effect**: The color of the navbar changes upon hover.
- **Topic Selection**: Clicking on different topics in the navbar dynamically updates the content of the web page.
- **Main Page**: Clicking on "Vincy News" in the navbar returns you to the main page where news articles from various subjects are mixed together.

### Search Bar

- Enables users to search for specific news articles.
- Displays related news articles based on the search query.

### Subscribe Feature

- **Technologies Used**: For practice and to hone my skills, I intentionally opted not to use Bootstrap. Instead, I built all the form's features, including the error messaging, using React and CSS.
- **Error Handling**: Implemented using `useEffect` and `useState` to display error messages.
- **Form Submission**: Upon submission, the content entered in the form is logged to the console.
- **Data Cleanup**: All form data is cleared upon submission or when the form is closed.
