import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { getScrollbarWidth } from '../../utils/getScrollbarWidth.js';
import '../../styles/CardsPage.css';
import ProductService from '../../services/product.service';

/** 
 * Represents the card container
 ** This adjust the large and distribution of the cards on the parent element
 */
function CardsPage() {
    const [width, height] = useWindowSize();
    const [largeCard, setLargeCard] = useState(1);
    const [cardsQuantity, setCardsQuantity] = useState(1);
    const [cardDatas, setCardDatas] = useState([]);
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
    }, [width, height]);

    useEffect(() => {
        ProductService.getAll()
            .then(response => {
                setCardDatas(response.data);
            })
            .catch(err => {
                alert("Error to load data")
            })
    }, []);

    return (
        <div className="CardsPage" id="products">
            {cardDatas.map((data, index) =>
                (index < cardsQuantity || seeMore) ?
                    <Card
                        imageURL={data.imageURL}
                        description={data.description}
                        price={data.price}
                        redirectURL={data.shopURL}
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
