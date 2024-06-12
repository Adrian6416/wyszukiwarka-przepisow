import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto',
});

function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <Typography variant="h6">Nie znaleziono przepisów</Typography>;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <StyledCard>
            <CardMedia
              component="img"
              height="140"
              image={recipe.image}
              alt={recipe.label}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {recipe.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.calories.toFixed(0)} Calories
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.ingredientLines.length} Ingredients
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                {recipe.source}
              </Typography>
            </CardActions>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
