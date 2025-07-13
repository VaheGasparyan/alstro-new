import styles from './Shop.module.scss'
import { useState } from 'react'
import { Product } from '../../../../components/simple/Product/Product';
import photo1 from '../../../../assets/alstro-photo/1.jpg'
import photo2 from '../../../../assets/alstro-photo/1.jpg'
import photo3 from '../../../../assets/alstro-photo/1.jpg'
import photo4 from '../../../../assets/alstro-photo/1.jpg'
import photo5 from '../../../../assets/alstro-photo/5.jpg'
import photo6 from '../../../../assets/alstro-photo/6.jpg'
import photo7 from '../../../../assets/alstro-photo/7.jpg'
import photo8 from '../../../../assets/alstro-photo/8.jpg'
import photo9 from '../../../../assets/alstro-photo/9.jpg'
import photo10 from '../../../../assets/alstro-photo/10.jpg'
import photo11 from '../../../../assets/alstro-photo/11.jpg'
import photo12 from '../../../../assets/alstro-photo/12.jpg'
import photo13 from '../../../../assets/alstro-photo/13.jpg'
import photo14 from '../../../../assets/alstro-photo/14.jpg'
import photo15 from '../../../../assets/alstro-photo/15.jpg'
import photo16 from '../../../../assets/alstro-photo/16.jpg'
import photo17 from '../../../../assets/alstro-photo/17.jpg'
import photo18 from '../../../../assets/alstro-photo/18.jpg'
import photo19 from '../../../../assets/alstro-photo/19.jpg'
import photo20 from '../../../../assets/alstro-photo/20.jpg'
import photo21 from '../../../../assets/alstro-photo/21.jpg'
import photo22 from '../../../../assets/alstro-photo/22.jpg'
import photo23 from '../../../../assets/alstro-photo/23.jpg'
import photo24 from '../../../../assets/alstro-photo/24.jpg'
import photo25 from '../../../../assets/alstro-photo/25.jpg'
import photo26 from '../../../../assets/alstro-photo/26.jpg'
import photo27 from '../../../../assets/alstro-photo/27.jpg'
import photo28 from '../../../../assets/alstro-photo/28.jpg'
import photo29 from '../../../../assets/alstro-photo/29.jpg'
import photo30 from '../../../../assets/alstro-photo/30.jpg'
import photo31 from '../../../../assets/alstro-photo/31.jpg'
import photo32 from '../../../../assets/alstro-photo/32.jpg'
import photo33 from '../../../../assets/alstro-photo/33.jpg'
import photo34 from '../../../../assets/alstro-photo/34.jpg'
import photo35 from '../../../../assets/alstro-photo/35.jpg'
import photo36 from '../../../../assets/alstro-photo/36.jpg'
import photo37 from '../../../../assets/alstro-photo/37.jpg'
import photo38 from '../../../../assets/alstro-photo/38.jpg'
import photo39 from '../../../../assets/alstro-photo/39.jpg'
import photo40 from '../../../../assets/alstro-photo/40.jpg'
import photo41 from '../../../../assets/alstro-photo/41.jpg'
import photo42 from '../../../../assets/alstro-photo/42.jpg'
import photo43 from '../../../../assets/alstro-photo/43.jpg'
import photo44 from '../../../../assets/alstro-photo/44.jpg'
import photo45 from '../../../../assets/alstro-photo/45.jpg'
import photo46 from '../../../../assets/alstro-photo/46.jpg'
import photo47 from '../../../../assets/alstro-photo/47.jpg'
import photo48 from '../../../../assets/alstro-photo/48.jpg'
import photo49 from '../../../../assets/alstro-photo/49.jpg'
import photo50 from '../../../../assets/alstro-photo/50.jpg'

const imagesData = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
  photo21, photo22, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30,
  photo31, photo32, photo33, photo34, photo35, photo36, photo37, photo38, photo39, photo40,
  photo41, photo42, photo43, photo44, photo45, photo46, photo47, photo48, photo49, photo50,
];

export const Shop = () => {
  //@ts-ignore
    const [images, setImages] = useState(imagesData.slice(0, 10));
    const [count, setCount] = useState(10);
    //@ts-ignore
    const handleAddImages = () => {
        setImages(prevState => {
            return imagesData.slice(0, prevState.length + 10)
        });
        setCount(prevState => prevState + 10)
    };

    return (
        <div className={styles.wrapper} id='store'>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Каталог цветов</h2>
                    <div className={styles.line}></div>
                    <p>
                        Это подборка ярких и стойких сортов для парников и букетов. Нежные, долговечные и неприхотливые в уходе, альстромерии украсят любой сад или интерьер
                    </p>
                </div>
                <div className={styles.products}>
                    <div className={styles.grid_container}>
                        {
                            images.map(item => {
                                return <Product item={item} key={item} />
                            })
                        }
                    </div>
                    {
                        !(count === imagesData.length) && <span onClick={handleAddImages}>Add</span>
                    }
                </div>
            </div>
        </div>
    )
}
