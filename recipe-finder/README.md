# FOOD-COURT

## Date 8th May 2024

## Process
Imports:

    React: The main library for building user interfaces.
    useState and useEffect: Functions from React to manage component state and side effects.
    MealItem and RecipeIndex: Likely custom components used to display recipe items and a recipe index respectively.

Meal Component:

    State Variables:
        url: Stores the API endpoint URL for fetching recipes.
        item: Stores the fetched recipe data as an array.
        show: Controls whether to display the recipe items or a "Not Found" message.
        search: Stores the user's search term.
    useEffect Hook:
        Fetches data from the initial URL (https:/www.themealdb.com/api/json/v1/1/search.php?f=a) which retrieves recipes starting with the letter "a".
        Parses the JSON response and stores the recipes in the item state.
        Sets the show state to true to display the recipes.
    setIndex Function:
        Updates the url state based on the provided alphabet letter (alpha).
        This triggers a re-render and refetches recipes starting with the chosen letter.
    searchRecipe Function:
        Handles the "Enter" key press event on the search bar.
        Updates the url state to include the search term (search) for recipe name search.

Return Section:

    Renders the JSX code for the meal application layout:
        Main container with sections for heading, search box, recipe container, and recipe index.
        The MealItem component is conditionally rendered based on the show state, passing the fetched recipe data as props.
        The RecipeIndex component likely displays an index for filtering recipes by alphabet and might call the setIndex function when a letter is clicked.

### Technologies used
React
Javascript
Css
Html