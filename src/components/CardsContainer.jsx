import '../styles/CardsContainer.css';
import '../styles/CardsContainer.css';
import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import { getScrollbarWidth } from '../utils/getScrollbarWidth.js';
import Card from './Card';
import ShopBanner from './ShopBanner';

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
    const [largeCard, setLargeCard] = useState(1);
    const [cardsQuantity, setCardsQuantity] = useState(1);
    const [heightSpare, setHeightSpare] = useState(0);

    useEffect(() => {
        function adjust(columns) {
            // Set large card
            let windowWidth = width - getScrollbarWidth();
            let largeCard = windowWidth / columns;
            setLargeCard(largeCard);
            // set card quantity
            let cardRows = Math.floor(height / largeCard);
            setCardsQuantity(Math.max(2, cardRows) * columns);
            // set spare space 
            let heightRest = height - (cardRows * largeCard);
            setHeightSpare(heightRest);
        }

        if (width >= height) {
            adjust(4);
        } else {
            adjust(2);
        }
    }, [width, height])

    return (
        <div className="CardsContainer">
            {cardDatas.map((data, index) =>
                (index < cardsQuantity) ?
                    <Card
                        imageURL={data.imageURL}
                        description={data.description}
                        price={data.price}
                        redirectURL={data.redirectURL}
                        large={largeCard}
                        key={index}
                    /> :
                    ''
            )}
        <ShopBanner link="#" heightSpare={heightSpare}/>
        </div>
    )
}

export default CardsContainer;