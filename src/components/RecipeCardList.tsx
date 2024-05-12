import RecipeCard from './RecipeCard';
import {Recipe} from "../types.ts";

interface RecipeCardListProps {
    hits: {
        "recipe": Recipe, "_links": {
            self: {
                type: string,
                href: string
            }
        }
    }[];
}

const RecipeCardList = ({hits}: RecipeCardListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {hits.map((hit, index) => (
                <RecipeCard
                    key={index}
                    image={hit.recipe.image}
                    label={hit.recipe.label}
                    source={hit.recipe.source}
                    cuisineType={hit.recipe.cuisineType}
                    dishType={hit.recipe.dishType}
                    link={hit._links.self.href}
                />
            ))}
        </div>
    );
};

export default RecipeCardList;
