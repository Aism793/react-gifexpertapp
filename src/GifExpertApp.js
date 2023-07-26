import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setcategories([...categories, 'prueba']);
    //     //setcategories(cats => [...categories, 'prueba']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>
 
            <ol>
                {
                    categories.map(category => (
                        // <li key={category}>{category}</li>
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;