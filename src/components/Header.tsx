import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateFilters} from "../features/recipes/recipesSlice.ts";
import {RootState} from "../store/store.tsx";

const Header = () => {
    const dispatch = useDispatch();
    const savedQuery = useSelector((state: RootState) => state.filters.q); // Предполагается, что у вас есть slice `filters`

    const [searchQuery, setSearchQuery] = useState(savedQuery || '');

    const handleSearch = () => {
        dispatch(updateFilters({
            q: searchQuery,
        }))
    };

    return (
        <header className="border-pink-400 border-b p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold text-pink-400">CHEF IN</h1>
                <div className="flex items-center">
                    <input
                        type="text"
                        className="p-3 rounded-xl pl-3"
                        placeholder="Enter your recipe..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className="ml-2 px-4 py-3 bg-pink-400 text-white rounded-xl hover:bg-pink-500"
                        onClick={handleSearch}
                    >
                        GO
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
