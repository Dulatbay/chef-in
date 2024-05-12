import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateFilters} from "../features/recipes/recipesSlice.ts";
import {RootState} from "../store/store.tsx";

interface Filters {
    cuisineType?: string[];
    dishType?: string[];
    mealType?: string[];
    diet?: string[];
    health?: string[];
}

const FilterBar = () => {

    const dispatch = useDispatch();
    const savedFilters = useSelector((state: RootState) => state.filters); // Предполагается, что у вас есть slice `filters`

    const [selectedCuisineTypes, setSelectedCuisineTypes] = useState<string[]>([]);
    const [selectedDishTypes, setSelectedDishTypes] = useState<string[]>([]);
    const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([]);
    const [selectedDietTypes, setSelectedDietTypes] = useState<string[]>([]);
    const [selectedHealthLabels, setSelectedHealthLabels] = useState<string[]>([]);

    // Восстанавливаем выбранные значения из Redux при монтировании компонента
    useEffect(() => {
        setSelectedCuisineTypes(savedFilters.cuisineType || []);
        setSelectedDishTypes(savedFilters.dishType || []);
        setSelectedMealTypes(savedFilters.mealType || []);
        setSelectedDietTypes(savedFilters.diet || []);
        setSelectedHealthLabels(savedFilters.health || []);
    }, [savedFilters]);

    const handleFilterUpdate = () => {
        const filters: Filters = {};

        if (selectedCuisineTypes.length > 0) {
            filters.cuisineType = selectedCuisineTypes;
        }
        if (selectedDishTypes.length > 0) {
            filters.dishType = selectedDishTypes;
        }
        if (selectedMealTypes.length > 0) {
            filters.mealType = selectedMealTypes;
        }
        if (selectedDietTypes.length > 0) {
            filters.diet = selectedDietTypes;
        }
        if (selectedHealthLabels.length > 0) {
            filters.health = selectedHealthLabels;
        }

        dispatch(updateFilters(filters));
    };


    function handleFilterClear() {

        dispatch(updateFilters({
            cuisineType: undefined,
            dishType: undefined,
            mealType: undefined,
            diet: undefined,
            health: undefined,
        }))
    }

    return (
        <div className="p-4 flex flex-wrap gap-4 justify-center">
            <select multiple value={selectedCuisineTypes} onChange={(e) => setSelectedCuisineTypes(Array.from(e.target.selectedOptions, option => option.value))} className="border p-2 rounded">
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="British">British</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Central Europe">Central Europe</option>
                <option value="Chinese">Chinese</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="French">French</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Kosher">Kosher</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Nordic">Nordic</option>
                <option value="South American">South American</option>
                <option value="South East Asian">South East Asian</option>
            </select>
            <select multiple value={selectedDishTypes} onChange={(e) => setSelectedDishTypes(Array.from(e.target.selectedOptions, option => option.value))} className="border p-2 rounded">
                <option value="Biscuits and cookies">Biscuits and cookies</option>
                <option value="Bread">Bread</option>
                <option value="Cereals">Cereals</option>
                <option value="Condiments and sauces">Condiments and sauces</option>
                <option value="Desserts">Desserts</option>
                <option value="Drinks">Drinks</option>
                <option value="Main course">Main course</option>
                <option value="Pancake">Pancake</option>
                <option value="Preps">Preps</option>
                <option value="Preserve">Preserve</option>
                <option value="Salad">Salad</option>
                <option value="Sandwiches">Sandwiches</option>
                <option value="Side dish">Side dish</option>
                <option value="Soup">Soup</option>
                <option value="Starter">Starter</option>
                <option value="Sweets">Sweets</option>
            </select>
            <select multiple value={selectedMealTypes} onChange={(e) => setSelectedMealTypes(Array.from(e.target.selectedOptions, option => option.value))} className="border p-2 rounded">
                <option value="Breakfast">Breakfast</option>
                <option value="Dinner">Dinner</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>
            </select>
            <select multiple value={selectedDietTypes} onChange={(e) => setSelectedDietTypes(Array.from(e.target.selectedOptions, option => option.value))} className="border p-2 rounded">
                <option value="balanced">Balanced</option>
                <option value="high-fiber">High-fiber</option>
                <option value="high-protein">High-protein</option>
                <option value="low-carb">Low-carb</option>
                <option value="low-fat">Low-fat</option>
                <option value="low-sodium">Low-sodium</option>
            </select>
            <select multiple value={selectedHealthLabels} onChange={(e) => setSelectedHealthLabels(Array.from(e.target.selectedOptions, option => option.value))} className="border p-2 rounded">
                <option value="alcohol-cocktail">Alcohol-cocktail</option>
                <option value="alcohol-free">Alcohol-free</option>
                <option value="celery-free">Celery-free</option>
                <option value="crustacean-free">Crustacean-free</option>
                // Добавьте остальные здоровые метки из вашего списка
            </select>
            <button onClick={handleFilterUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Apply Filters
            </button>
            <button onClick={handleFilterClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Clear all
            </button>
        </div>
    );
};

export default FilterBar;
