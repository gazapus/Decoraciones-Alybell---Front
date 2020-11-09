import '../styles/CardsContainer.css';
import '../styles/CardsContainer.css';
import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import { getScrollbarWidth } from '../utils/getScrollbarWidth.js';
import Card from './Card';

const cardDatas = [{
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
},];

function CardsContainer() {
    const [width, height] = useWindowSize();
    const [largeCard, setLargeCard] = useState();
    const [cardsQuantity, setCardsQuantity] = useState();

    function adjustToPortrait() {
        let columns = 2;
        let windowWidth = width - getScrollbarWidth();
        let largeCard = windowWidth / columns;
        setLargeCard(largeCard);
        let cardRows = Math.floor(height / largeCard);
        setCardsQuantity(cardRows * columns);
    }

    function adjustToLandscape() {
        let columns = 4;
        let windowWidth = width - getScrollbarWidth();
        let largeCard = windowWidth / columns;
        setLargeCard(largeCard);
        let cardRows = Math.floor(height / largeCard);
        setCardsQuantity(cardRows * columns);
    }

    useEffect(() => {
        if (width >= height) {
            adjustToLandscape();
        } else {
            adjustToPortrait();
        }
    }, [width, height])

    return (
        <div className="CardsContainer">
            {cardDatas.map((data, index) => {
                return (index < cardsQuantity) ?
                    <Card
                        imageURL={data.imageURL}
                        description={data.description}
                        price={data.price}
                        redirectURL={data.redirectURL}
                        large={largeCard}
                        key={index}
                    /> :
                    '';
            })}
        </div>
    )
}

export default CardsContainer;