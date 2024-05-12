import Header from "./components/Header"
import RecipeCardList from "./components/RecipeCardList.tsx";
import {useGetRecipesQuery} from "./services/recipes.tsx";
import {selectFilters} from "./store/selectors.ts";
import {useSelector} from "react-redux";
import FilterBar from "./components/FilterBar.tsx";

function App() {
    const filters = useSelector(selectFilters);
    const {data: recipes, isFetching} = useGetRecipesQuery(filters);

    if (isFetching) return <div>Loading...</div>;


    return (
        <>
            <Header/>
            <FilterBar/>
            <div className="flex justify-center">
                {recipes && <RecipeCardList hits={recipes.hits}/>}
            </div>
        </>
    )
}

export default App
