import { useState } from 'react'
import styles from './Product.module.scss'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

interface IProps {
    //@ts-ignore
    item: string
}

export const Product = ({ item }: IProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [isHover, setIsHover] = useState<boolean>(false)

    const handleAddToFavorites = () => {
        if (!isFavorite) {
            // dispatch(addToFavorites(item))
            setIsFavorite(true)
        }else{
            // dispatch(removeFromFavorites(item))
            setIsFavorite(false)
        }
    }

    return (
        <div
            className={styles.product}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={styles.product_img_block}>
                <img src={item} alt={item} />

                <div className={`${styles.actions} ${isHover ? styles.open : ""}`}>
                    <div className={styles.btn} onClick={handleAddToFavorites}>
                        {
                            isFavorite ? <GoHeartFill /> : <GoHeart />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
