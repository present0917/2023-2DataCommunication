import React,{useRef,useEffect} from "react";
import "../Css/Modal.css";

const NFTModal=({item,setModalOpen})=>{
    const title=item.name;
    const description=item.description;
    const image=item.image;
    
    const closeModal=()=>{
        setModalOpen(false);
    }

    const modalRef = useRef(null);

    useEffect(()=>{
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };
        
        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    },[modalRef,setModalOpen]);

    return (
        <>
        <div className="modal-background">
            <div className="modal-container" ref={modalRef}>
                <button className="close" onClick={closeModal}>
                        X
                </button>
                <div className="modal-container-body">
                    <img
                        className="modal-image"
                        src={image}
                    />
                    <div className="ticket-description">
                        <p>{title}</p>
                        <p>{description}</p>
                        {/* <p>{image}</p> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NFTModal