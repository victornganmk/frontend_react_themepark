import React from 'react'

const Hotel_Dining_Box = ({name, image, info, list1, list2, list3, list4}) => {
    return (
        <div className="hotel_dining_card">
            <div className="hotel_dining_card_image">
                <img src={image} alt=""/>
            </div>
            <div className="hotel_dining_card_content">
                <h3>{name}</h3>
                <p>{info}</p>
                <div className="list_container">
                    <ul>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hotel_Dining_Box