import { useEffect, useState } from 'react';
import ProductService from './services/product.service';

function Test() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        ProductService.getAll()
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                alert("Falló")
            })
            .finally(() => {
                setLoaded(true)
            })
    }, [])

    return (
        <div>
            <h2>{loaded ? <p>cargo</p> : <p>cargando</p>}</h2>
            <ul>
                {data.map((el, index) => <li key={index}>{el.description}</li>)}
            </ul>
        </div>
    )
}

export default Test;