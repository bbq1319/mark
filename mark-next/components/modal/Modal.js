import { useState } from "react";

export default function Modal({ active, children }) {
  const [modalActive, setModalActive] = useState(active);
  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <>
      <div>모달</div>
      {/* <div className={active ? "active modal" : "modal"}>
        {children}
        <button type="button" onClick={closeModal()}>
          닫기
        </button>
      </div>

      <style jsx>{`
        .active {
          display: flex !important;
        }

        .modal {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 99;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-sizing: border-box;
        }
      `}</style> */}
    </>
  );
}
