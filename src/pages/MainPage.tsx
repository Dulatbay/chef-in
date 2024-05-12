import {useSelector} from "react-redux";
import {selectFilters} from "../store/selectors.ts";
import {useGetRecipesQuery} from "../services/recipes.tsx";
import Header from "../components/Header.tsx";
import FilterBar from "../components/FilterBar.tsx";
import RecipeCardList from "../components/RecipeCardList.tsx";

function MainPage() {
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

export default MainPage
