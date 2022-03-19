/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */

var findAllRecipes = function(recipes, ingredients, supplies) {
    
    let ans = [];
    restaurant = supplies.slice();
    recipe_book = {};
    recipes.forEach((recipe, i) => {
        recipe_book[recipe] = ingredients[i];
    });
    
    recipes.forEach(target => {
        findRecipes(target, []);
    });
    
    restaurant.forEach(item => {
        if (!supplies.includes(item)) {
            ans.push(item);
        }
    });
    
    return ans;
    
};

var restaurant = [];
var recipe_book = {};
var findRecipes = function (target, history) {
    
    if (history.includes(target)) {
        history.forEach(item => {
            delete recipe_book[item];
        });
        return false;
    }
    
    history.push(target);
    let ingredents = recipe_book[target];
    if (!ingredents) return false;
    
    let is_makeable = true;
    ingredents.forEach(ingred => {
        if (!restaurant.includes(ingred)) {
            is_makeable = findRecipes(ingred, history);
        }
    });
    
    if (is_makeable && !restaurant.includes(target) && recipe_book[target]) {
        restaurant.push(target);
    }
    
    return is_makeable;
}
