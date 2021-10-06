package foodRecipes.foodRecipes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class RecipeTest {
    @Test

    void testRecipe() {
        Recipe recipe = new Recipe();
        assertEquals(recipe.testNumber(), 5);
    }
}
