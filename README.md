# 🍽️ Culinary Canvas - Recipe Discovery App

**Culinary Canvas** is a beautifully designed, fully responsive recipe discovery app built with React. It leverages modern development best practices, including Context API for global state, clean component-based architecture, and seamless integration with [TheMealDB API](https://www.themealdb.com/api.php). Users can explore, search, and save their favorite recipes—all in a visually engaging and user-friendly interface.

## 🔥 Features

- 🌐 **Multi-Page SPA**: Built with React Router - includes Home, Explore, Recipe Details, Favorites, and a 404 Not Found page.  
- 🔍 **Search & Filter Recipes**: Find meals by keyword or category using a form with built-in validation.  
- ⭐ **Favorites System**: Save your favorite recipes using Context API for persistent global state.  
- 🌓 **Dark/Light Mode**: Toggle themes with preference stored in localStorage.  
- 🎨 **Modern UI/UX Design**:
  - Primary Color: Emerald `#10B981`
  - Accent Color: Amber `#F59E0B`
  - Neutral Slate Tones for balance  
- 📱 **Fully Responsive**: Optimized layouts across mobile, tablet, and desktop.  
- 💡 **Thoughtful Components**: Clean layout, animations, hover effects, and intuitive interactions.

## 📁 Project Structure

CulinaryCanvas/ ├── public/ │ └── vite.svg ├── src/ │ ├── components/ │ │ ├── layout/ │ │ │ ├── Header.jsx │ │ │ └── Footer.jsx │ │ ├── recipe/ │ │ │ ├── RecipeCard.jsx │ │ │ └── RecipeList.jsx │ │ ├── explore/ │ │ │ └── SearchForm.jsx │ │ ├── ui/ │ │ │ ├── LoadingSpinner.jsx │ │ │ └── ErrorDisplay.jsx │ │ └── utils/ │ │ └── ScrollToTop.jsx │ ├── contexts/ │ │ ├── ThemeContext.jsx │ │ └── FavoritesContext.jsx │ ├── pages/ │ │ ├── HomePage.jsx │ │ ├── ExplorePage.jsx │ │ ├── RecipeDetailsPage.jsx │ │ ├── FavoritesPage.jsx │ │ └── NotFoundPage.jsx │ ├── services/ │ │ └── api.js │ ├── App.jsx │ ├── main.jsx │ ├── index.css ├── tailwind.config.js ├── postcss.config.js ├── package.json └── index.html
