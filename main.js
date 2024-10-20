// Example data for different dates and meals
const mealData = {
    "2024-10-20": {
        breakfast: { 
            ingredients: "Oats, Milk, Banana", 
            energy: "350 kcal", 
            nutrients: "Protein: 10g, Carbs: 50g, Fats: 10g" 
        },
        lunch: { 
            ingredients: "Chicken, Rice, Salad", 
            energy: "600 kcal", 
            nutrients: "Protein: 30g, Carbs: 60g, Fats: 15g" 
        },
        snacks: { 
            ingredients: "Almonds, Apple", 
            energy: "200 kcal", 
            nutrients: "Protein: 5g, Carbs: 25g, Fats: 10g" 
        },
        dinner: { 
            ingredients: "Fish, Vegetables", 
            energy: "450 kcal", 
            nutrients: "Protein: 25g, Carbs: 40g, Fats: 20g" 
        }
    },
    // More date entries can be added here
};

function loadMealPlan() {
    const selectedDate = document.getElementById('mealDate').value;
    const mealPlan = mealData[selectedDate] || mealData['2024-10-20']; // Fallback to today's data if date not found

    document.getElementById('selectedDate').innerText = selectedDate;

    document.getElementById('breakfastIngredients').innerText = mealPlan.breakfast.ingredients;
    document.getElementById('breakfastEnergy').innerText = mealPlan.breakfast.energy;
    document.getElementById('breakfastNutrients').innerText = mealPlan.breakfast.nutrients;

    document.getElementById('lunchIngredients').innerText = mealPlan.lunch.ingredients;
    document.getElementById('lunchEnergy').innerText = mealPlan.lunch.energy;
    document.getElementById('lunchNutrients').innerText = mealPlan.lunch.nutrients;

    document.getElementById('snackIngredients').innerText = mealPlan.snacks.ingredients;
    document.getElementById('snackEnergy').innerText = mealPlan.snacks.energy;
    document.getElementById('snackNutrients').innerText = mealPlan.snacks.nutrients;

    document.getElementById('dinnerIngredients').innerText = mealPlan.dinner.ingredients;
    document.getElementById('dinnerEnergy').innerText = mealPlan.dinner.energy;
    document.getElementById('dinnerNutrients').innerText = mealPlan.dinner.nutrients;
}

// Load today's meal plan initially
window.onload = function() {
    document.getElementById('mealDate').value = "2024-10-20";
    loadMealPlan();
};
