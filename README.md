
# 🍽️ Culinary Canvas - Recipe Discovery App

**Culinary Canvas** is a beautifully designed, fully responsive recipe discovery app built with React. It leverages modern development best practices, including Context API for global state, clean component-based architecture, and seamless integration with [TheMealDB API](https://www.themealdb.com/api.php). Users can explore, search, and save their favorite recipes—all in a visually engaging and user-friendly interface.

---

## 🔥 Features

- 🌐 Multi-Page App with routing
- 🔍 Search and filter recipes using TheMealDB API
- ⭐ Save favorite recipes (Context API)
- ✅ Form validation in search components
- 🌓 Dark/light mode with preference saved in `localStorage`

---

## 🎨 Design Highlights

- **Color Palette**: Emerald `#10B981`, Amber `#F59E0B`, Slate neutrals  
- **Minimalist, card-based UI** with responsive grid layouts  
- **Typography**: Clean sans-serif fonts  
- **Interactive animations** for smooth UX  

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/culinary-canvas.git
cd culinary-canvas
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```

Visit: [cool-brioche-563d64.netlify.app](https://cool-brioche-563d64.netlify.app)


---

## 📁 Project Structure

```
CulinaryCanvas/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── recipe/
│   │   │   ├── RecipeCard.jsx
│   │   │   └── RecipeList.jsx
│   │   ├── explore/
│   │   │   └── SearchForm.jsx
│   │   ├── ui/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorDisplay.jsx
│   │   └── utils/
│   │       └── ScrollToTop.jsx
│   ├── contexts/
│   │   ├── ThemeContext.jsx
│   │   └── FavoritesContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ExplorePage.jsx
│   │   ├── RecipeDetailsPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── index.html
```

---

## 🧩 How It Works

The app uses a clean, modular structure:

- **Routing**: React Router handles navigation across pages
- **State Management**:
  - Theme toggling via `ThemeContext`
  - Favorites handling via `FavoritesContext`
- **Data Fetching**: API functions in `services/api.js` fetch meals from TheMealDB
- **Form Validation**: Input checking ensures clean queries in the search form
- **Dark Mode**: User's preference stored in `localStorage`

---

## 🔧 Configuration Notes

- Tailwind is customized via `tailwind.config.js`
- Theme toggling uses CSS classes and React Context
- Data fetched from [TheMealDB API](https://www.themealdb.com/api.php)

---

## 🌈 Tech Stack

- **React 18**  
- **Vite**  
- **Tailwind CSS**  
- **React Router v6**  
- **Context API**  
- **TheMealDB API**

---

## 🤝 Contributing

Feel free to fork and submit pull requests to improve the app or add new features!

---

## 📄 License

Open-source under the [MIT License](LICENSE)

---

## ✨ Author

Built with 💚 by [Prince Shakya](https://github.com/your-username)
