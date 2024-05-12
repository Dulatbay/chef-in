import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

interface Recipe {
    label: string;
    image: string;
    ingredientLines: string[];
    ingredients: {
        text: string;
        weight: number;
        image: string;
    }[];
    totalNutrients: {
        [key: string]: {
            label: string;
            quantity: number;
            unit: string;
        };
    };
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    calories: number;
    totalWeight: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    totalTime: number;
}

function RecipeDetailPage() {
    const {recipeId} = useParams<{ recipeId: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=0c1e8c21&app_key=370062603582ae47fb4a2dc20465a557&beta=true`)
            .then(response => response.json())
            .then(data => setRecipe(data.recipe));
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 text-white flex flex-col justify-center items-stretch">
            <button onClick={() => navigate(-1)}>{"<-Back"}</button>
            <h1 className="text-2xl font-bold">{recipe.label}</h1>
            <img src={recipe.image} alt={recipe.label} className="my-3 w-fit"/>
            <div>
                <h2 className="text-xl font-bold">Ingredients</h2>
                <ul className="list-disc pl-5">
                    {recipe.ingredientLines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-3">
                <h2 className="text-xl font-bold">Nutrition Facts</h2>
                <table className="w-full">
                    <tbody>
                    {Object.entries(recipe.totalNutrients).map(([key, value]) => (
                        <tr key={key}>
                            <td className="py-1 font-semibold">{value.label}</td>
                            <td className="py-1">{`${value.quantity.toFixed(2)} ${value.unit}`}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-3">
                <p><strong>Calories:</strong> {recipe.calories.toFixed(2)}</p>
                <p><strong>Total Weight:</strong> {recipe.totalWeight.toFixed(2)} grams</p>
                <p><strong>Cuisine Type:</strong> {recipe.cuisineType.join(", ")}</p>
                <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                <p><strong>Dish Type:</strong> {recipe.dishType.join(", ")}</p>
                <p><strong>Total Cooking Time:</strong> {recipe.totalTime} minutes</p>
            </div>
        </div>
    );
}

export default RecipeDetailPage;
