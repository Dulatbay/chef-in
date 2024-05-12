import {useNavigate} from "react-router-dom";

export interface RecipeCardProps {
    image: string;
    label: string;
    source: string;
    cuisineType: string,
    dishType: string;
    link: string;
}

const extractIdFromUrl = (url : string) => {
    const idPattern = /recipes\/v2\/([a-z0-9]+)\?/; // Обновленное регулярное выражение
    const match = url.match(idPattern);
    return match ? match[1] : null;
};

const RecipeCard = ({ image, label, source, cuisineType, dishType,link } : RecipeCardProps) => {
    const navigate = useNavigate();

    function handleCardClick() {
        if (link) {
            const recipeId = extractIdFromUrl(link);
            if (recipeId) {
                navigate(`/detail/${recipeId}`);
            }
        }
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#343333]" onClick={handleCardClick}>
            <img className="w-full" src={image} alt="Recipe Image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{label}</div>
                <p className="text-gray-400 text-base">
                    {source}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{cuisineType}</span>
                <span className="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{dishType}</span>
            </div>
        </div>
    );
};

export default RecipeCard;
