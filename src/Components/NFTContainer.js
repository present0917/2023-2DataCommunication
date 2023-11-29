import React,{useState} from "react";
import NFTModal from "./NFTModal";
import "../Css/NFTContainer.css";

const NFTContainer=({ item }) => {
    const [modalOpen,setModalOpen]=useState(false);

    const title=item.name;
    const description=item.description;
    const image=item.image;

    const showModal=()=>{
        setModalOpen(true);
    }
    return (
        <>
            {modalOpen&&
                <NFTModal 
                    item={item}
                    setModalOpen={setModalOpen}
                />}
            <div className="nft-sub-container" onClick={showModal}>
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