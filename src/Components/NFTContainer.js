import React from "react";
import "../Css/NFTContainer.css";

const NFTContainer=({ title, description, image }) => {
    return (
        <>
            <div className="nft-sub-container">
                <img 
                    src={image} 
                    alt="NFT" 
                    className="nft-img"
                />
                <div className="nft-description">
                    <div className="nft-title">{title}</div>
                    <p className="nft-sub-description">{description}</p>
                </div>
            </div>
        </>
    )
}

export default NFTContainer;