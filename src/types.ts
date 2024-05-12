export interface Recipe {
    id: number;
    label: string;
    source: string;
    cuisineType: string;
    dishType: string;
    image: string;
}

export interface RecipesResponse {
    hits: { "recipe": Recipe, "_links": never }[];
}
//
// export type CuisineType =
//     "American"
//     | "Asian"
//     | "British"
//     | "Caribbean"
//     | "Central Europe"
//     | "Chinese"
//     | "Eastern Europe"
//     | "French"
//     | "Indian"
//     | "Italian"
//     | "Japanese"
//     | "Kosher"
//     | "Mediterranean"
//     | "Mexican"
//     | "Middle Eastern"
//     | "Nordic"
//     | "South American"
//     | "South East Asian";

export interface RecipeState {
    q?: string;
    ingr?: string;
    cuisineType?: string[];
    mealType?: string[];
    dishType?: string[];
    imageSize: string[];
    diet?   : string[];
    health? : string[]
}
