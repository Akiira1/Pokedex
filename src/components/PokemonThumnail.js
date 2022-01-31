import React from 'react';

//création de chaque carte individuelle et réutilisable
const PokemonThumnail = ({id, name, image, type}) => {

    const style = `thumb-container ${type}`
    return (
        <div className={style} >
            <div className="number">
                <small>#{id}</small>
            </div>
            <div>
                <img src={image} alt="{name}" />
                <div className="detail-wrapper">
                    <h3>
                        {name}
                    </h3>
                    <small>
                        type : {type}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default PokemonThumnail;
