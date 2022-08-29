import { useState } from "react";

import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    // TlFj0k0UOl9q5fyIvdcGmk8J9zCYlyFv

    const [ categories, setCategories ] = useState([ 'Rick and Morty']);
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;
        // console.log( newCategory );
        setCategories( [ newCategory,  ...categories ] );

    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />



            {categories.map( category => (
                <GifGrid
                    key={category}
                    category={category} />
            ) )}

        </>
     )
}
