import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../types/item.type";
import ItemImage from "../ItemImage";
import { handleItemClick } from "./functions";
import useStyles from "./styles";

const ItemCard: FC<{ item: Item, index: number }> = ({ item, index }) => {
    const navigate = useNavigate();

    const [isAnimated, setIsAnimated] = useState(false);
    const [leftPosition, setLeftPosition] = useState(0);
    const [topPosition, setTopPosition] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const classes = useStyles({ topPosition: topPosition, leftPosition: leftPosition });

    return <span onClick={() => handleItemClick(index, elementRef.current || null, navigate, setLeftPosition, setTopPosition, setIsAnimated)} key={index} className={`${classes.cardContainer} ${isAnimated ? classes.animated : ''}`}>
        <span className={classes.cardContent}>
            <span className={classes.itemText}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </span>
            <span>
                <span className={classes.imgContainer} ref={elementRef}>
                    <ItemImage image={item.content} title={item.title}></ItemImage>
                </span>
            </span>
        </span>
        <span className={classes.metaData}>
            <p>{item.metaData.publisher}</p>
            <p>{item.metaData.date}</p>
        </span>
    </span>
}
export default ItemCard;

