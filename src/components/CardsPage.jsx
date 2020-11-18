import { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Card from './Card';
import Button from './Button';
import { getScrollbarWidth } from '../utils/getScrollbarWidth.js';
import '../styles/CardsPage.css';

const cardDatas_test = [{
    imageURL: "https://image.freepik.com/vector-gratis/cartel-super-sale-banner-gran-venta-despacho-50-rebajado_1057-5174.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://cdn.fstoppers.com/styles/medium/s3/media/2015/12/07/white_background_bag_after.jpg?itok=uj0Yl1Gv&timestamp=1449548314",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://expertphotography.com/wp-content/uploads/2019/05/product-photography-business-5.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://www.powproductphotography.com/app/uploads/2020/03/drink-photography-0008.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://expertphotography.com/wp-content/uploads/2018/03/Natural-Light-Product-Photography-Sunglasses.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://expertphotography.com/wp-content/uploads/2019/01/product-photography-on-a-tiny-budget-5-2.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://img.pixelz.com/blog/photograph-white-products-on-white-backgrounds-ecommerce/set-up1.jpg?w=1000",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://www.volusion.com/blog/content/images/2018/10/WhiteItem.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://dqg5fqdy33g0r.cloudfront.net/photos/event-planner/null/spyne/1536769630868/logo_4yfU48oeZS.",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://s3.us-east-1.wasabisys.com/grid50/2017/12/white-background-prudct-photography-example-002.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://www.stephengalea.com/wp-content/uploads/2018/05/Foodstylist_McDonalds-Shoot-6.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
}, {
    imageURL: "https://i.pinimg.com/originals/c6/16/ac/c616acbc749cecaaedc6c4f1eb6b56a7.jpg",
    description: "Hermosa replica de un coso japones con multiples colores, ideal para esta epoca el año.",
    price: 150.6,
    redirectURL: "#"
},];

/** 
 * Represents the card container
 ** This adjust the large and distribution of the cards on the parent element
 */
function CardsPage() {
    const [width, height] = useWindowSize();
    const [largeCard, setLargeCard] = useState(1);
    const [cardsQuantity, setCardsQuantity] = useState(1);
    const [cardDatas, setCardDatas] = useState(cardDatas_test);
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        function adjustCards(columns) {
            // Set large card
            let windowWidth = width - getScrollbarWidth();
            let largeCard = windowWidth / columns;
            setLargeCard(largeCard);
            // set card quantity
            let cardRows = Math.floor(height / largeCard);
            setCardsQuantity(Math.max(2, cardRows) * columns);
        }

        if (width >= height) {
            adjustCards(4);
        } else {
            adjustCards(2);
        }
    }, [width, height])

    return (
        <div className="CardsPage">
            {cardDatas.map((data, index) =>
                (index < cardsQuantity || seeMore) ?
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
            {(cardsQuantity < cardDatas.length && !seeMore) ?
                <div className="verMas">
                    <Button
                        text="VER MAS"
                        handleClick={() => setSeeMore(true)}
                        color="red"
                    />
                </div>
                : ''
            }
        </div>
    );
}

export default CardsPage;
