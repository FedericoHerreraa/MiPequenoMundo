import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

interface ImgDto {
    img1: string;
    img2: string;
    img3: string;
}

export default function MainCarousel({ img }: { img: ImgDto }) {
    const { img1, img2, img3 } = img
    return (
        <div className="h-96 shadow-2xl">
            <Carousel className="h-72 pt-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-full h-80"
                        src={img1}
                        alt="Primera imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-full h-80"
                        src={img2}
                        alt="Segunda imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-full h-80"
                        src={img3}
                        alt="Tercera imagen"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}