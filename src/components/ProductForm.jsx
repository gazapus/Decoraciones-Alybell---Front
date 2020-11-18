import { useEffect, useState } from 'react';
import '../styles/ProductForm.css';
import Button from './Button';
import validator from 'validator';

/** 
 * New or edit product Form, contains username and password field
 * @constructor
 * @prop {string} backgroundColor 
 * @prop {string} textColor 
 * @prop {function} handleSubmit - function to call when the data is sended
 * @prop {string} errorSubmit - error message to show
 */
function ProductForm({ backgroundColor = "#000", textColor = "#fff", handleSubmit, errorSubmit, product= {} }) {
    const [description, setDescription] = useState(product.description || "");
    const [imageURL, setImageURL] = useState(product.imageURL || "");
    const [price, setPrice] = useState(product.price || "");
    const [shopURL, setShopURL] = useState(product.shopURL || "");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setErrorMessage(errorSubmit)
    }, [errorSubmit])

    function isValidForm() {
        return (validator.isURL(imageURL) && validator.isURL(shopURL))
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        if(isValidForm()) {
            handleSubmit({
                description: description,
                imageURL: imageURL,
                shopURL: shopURL,
                price: price
            }, product.id || "");
        } else {
            setErrorMessage("Uno de los datos ingresados no es correcto")
        }
    }

    return (
        <form
            className="ProductForm"
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span className="ProductForm__errorMessage">{errorMessage}</span>
            <div className="ProductForm__image" style={{ backgroundImage: `url(${imageURL})` }}></div>
            <label htmlFor="imageURL" className="ProductForm__label">URL de Imagen:</label>
            <input
                type="url"
                id="imageURL"
                className="ProductForm__input"
                value={imageURL}
                onInput={(e) => setImageURL(e.target.value)}
                minLength={1}
                placeholder="https://www.images.com/image.png"
                required={true}
            />
            <label htmlFor="description" className="ProductForm__label">Descripción:</label>
            <textarea
                id="description"
                className="ProductForm__input ProductForm__textArea"
                value={description}
                onInput={(e) => setDescription(e.target.value)}
                placeholder="Hermoso decorado de guirnaldas de temporada, varios colores"
                minLength={1}
            />
            <label htmlFor="price" className="ProductForm__label">Precio:</label>
            <input
                type="numbre"
                id="price"
                className="ProductForm__input"
                value={price}
                onInput={(e) => setPrice(e.target.value)}
                minLength={1}
            />
            <label htmlFor="shopURL" className="ProductForm__label">URL de la publicación:</label>
            <input
                type="url"
                id="shopURL"
                className="ProductForm__input"
                value={shopURL}
                onInput={(e) => setShopURL(e.target.value)}
                minLength={1}
                placeholder="https://www.shop.com/publicacion1"
                required={true}
            />
            <div className="ProductForm__buttonContainer">
                <Button
                    text="GUARDAR"
                    size="S"
                    backgroundColor={textColor}
                    textColor={backgroundColor}
                    handleClick={handleSubmitForm}
                />
            </div>
        </form>
    )
}

export default ProductForm;