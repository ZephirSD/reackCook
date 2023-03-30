import React from 'react';

const Card = ({source}) => {
    return (
        <>
            <div className="card">
                <div className="titre_card">{ source.strMeal}</div>
                <div className="origin_repas">
                    <span>Origin</span>
                    <span>{ source.strArea }</span>
                </div>
                <div className="img_repas">
                    <img src={source.strMealThumb} alt="img_plat" />
                </div>
                <div className="desc_repas">
                    { source.strInstructions}
                </div>
            </div>
        </>
    );
};

export default Card;