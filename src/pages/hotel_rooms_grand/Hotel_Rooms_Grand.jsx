import React, { useState, useRef } from 'react'
import { hotel_rooms } from '../../data';
import { Link } from 'react-router-dom';

const Hotel_Rooms_Grand = () => {
    const room = hotel_rooms.find(room => room.id === 4);

    // State to manage the current large image and selected thumbnail index
    const [currentImage, setCurrentImage] = useState('/img/hotel_rooms/hotel_rooms_004.webp');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Ref to control the thumbnail container's scroll position
    const thumbnailContainerRef = useRef(null);

    // Array of thumbnail images
    const thumbnails = [
        '/img/hotel_rooms/hotel_rooms_001.webp',
        '/img/hotel_rooms/hotel_rooms_002.webp',
        '/img/hotel_rooms/hotel_rooms_003.webp',
        '/img/hotel_rooms/hotel_rooms_004.webp',
        '/img/hotel_rooms/hotel_rooms_005.webp',
        '/img/hotel_rooms/hotel_rooms_006.webp',
        '/img/hotel_rooms/hotel_rooms_007.webp',
        '/img/hotel_rooms/hotel_rooms_008.webp',
        '/img/hotel_rooms/hotel_rooms_009.webp',
        '/img/hotel_rooms/hotel_rooms_010.webp',
    ];

    // Handle thumbnail click to update the large image and index
    const handleThumbnailClick = (imageSrc, index) => {
        setCurrentImage(imageSrc);
        setCurrentIndex(index);
        // Scroll to the selected thumbnail
        const container = thumbnailContainerRef.current;
        const thumbnailWidth = container.children[0].offsetWidth + 10; // Include gap
        container.scrollTo({
            left: index * thumbnailWidth - (container.offsetWidth - thumbnailWidth) / 2,
            behavior: 'smooth'
        });
    };

    // Handle left button click to scroll thumbnails left
    const handlePrevClick = () => {
        const newIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
        setCurrentImage(thumbnails[newIndex]);
        setCurrentIndex(newIndex);
        const container = thumbnailContainerRef.current;
        const thumbnailWidth = container.children[0].offsetWidth + 10; // Include gap
        container.scrollTo({
            left: newIndex * thumbnailWidth - (container.offsetWidth - thumbnailWidth) / 2,
            behavior: 'smooth'
        });
    };

    // Handle right button click to scroll thumbnails right
    const handleNextClick = () => {
        const newIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
        setCurrentImage(thumbnails[newIndex]);
        setCurrentIndex(newIndex);
        const container = thumbnailContainerRef.current;
        const thumbnailWidth = container.children[0].offsetWidth + 10; // Include gap
        container.scrollTo({
            left: newIndex * thumbnailWidth - (container.offsetWidth - thumbnailWidth) / 2,
            behavior: 'smooth'
        });
    };

    return (
            <div className="hotel_rooms_grand">
                <h1 className='section-title'>{room.type}</h1>
                <article>
                    <div className="image">
                        <div className="image_large">
                            <img src={currentImage} alt="Large view" />
                        </div>
                        <div className="navigationbar">
                            <div className="button_container_left">
                                <button onClick={handlePrevClick} className="button_left">&lt;</button>
                            </div>
                            <div className="image_small_container" ref={thumbnailContainerRef}>
                                {thumbnails.map((thumbnail, index) => (
                                    <div className="image_small" key={index}>
                                        <img
                                            src={thumbnail}
                                            alt={`Thumbnail ${index + 1}`}
                                            style={{
                                                border: currentImage === thumbnail ? '3px solid #ffff00' : 'none',
                                            }}
                                            onClick={() => handleThumbnailClick(thumbnail, index)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="button_container_right">
                                <button onClick={handleNextClick} className="button_right">&gt;</button>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a consequatur dolores ratione explicabo nobis nemo adipisci architecto ipsam sunt!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, delectus alias aliquam voluptates reiciendis ad quasi architecto molestias assumenda facere?</p>
                            <p> {room.size_sqf} sqf | {room.size_sqm} sqm | {room.view} | {room.beds} </p>
                        </div>
                        <div className="booknow">
                            <Link to="/hotel_booking">book now</Link>
                        </div>
                    </div>
                </article>
                <section>
                    <h2 className='section-subtitle'>amenities include</h2>
                    <summary>
                        <aside>
                            <ul>
                                <li>{room.list1}</li>
                                <li>{room.list2}</li>
                                <li>{room.list3}</li>
                                <li>{room.list4}</li>
                                <li>{room.list5}</li>
                            </ul>
                        </aside>
                        <aside>
                            <ul>
                                <li>{room.list6}</li>
                                <li>{room.list7}</li>
                                <li>{room.list8}</li>
                                <li>{room.list9}</li>
                                <li>{room.list10}</li>
                            </ul>
                        </aside>
                    </summary>
                </section>
            </div>
    );
}

export default Hotel_Rooms_Grand