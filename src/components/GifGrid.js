import React from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs(category);

    // //Permite que al React renderizar la app cuando detecta algún cambio, no se 
    // //llame al método nuevamente. Si el arr es vacío solo lo ejec 1 vez, si tiene algún 
    //dato, lo ejec cada vez que ese dato cambia
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>

        {loading && <p className='animate__animated animate__flash'>loading...</p>}
        
        <div className='card-grid'>
            
            {
                images.map(img => (
                    // <li key={category}>{category}</li>
                    <GifGridItem 
                    key={img.id}
                    {...img}
                    />
                ))
            }
            
        </div>
    </>
  )
}
