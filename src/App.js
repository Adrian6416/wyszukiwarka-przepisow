import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

// Stworzenie tematu
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const appId = 'da85af3a'; // Twoje APP ID
    const appKey = '4dca0f210902c89ad1ba7220a945f162'; // Twój APP KEY

    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`);
      const data = await response.json();

      console.log('Response from API:', response);
      console.log('Data from API:', data);

      if (data.hits) {
        setRecipes(data.hits.map(hit => hit.recipe));
      } else {
        setRecipes([]);  // Jeśli `data.hits` jest undefined, ustaw puste tablice przepisów
      }
    } catch (error) {
      console.error('Error fetching the recipes:', error);
      setRecipes([]);  // W przypadku błędu, ustaw puste tablice przepisów
    }
  };

  useEffect(() => {
    fetchRecipes('chicken');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <SearchBar onSearch={fetchRecipes} />
        <RecipeList recipes={recipes} />
      </div>
    </ThemeProvider>
  );
}

export default App;
