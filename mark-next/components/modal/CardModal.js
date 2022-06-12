import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";

const CardModalContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .msg {
    line-height: 1.5;
    font-size: 1rem;
    color: rgb(73, 80, 87);
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  .action_box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      margin-left: 0.5rem;
    }
  }
`;

export default function CardModal({
  closeEvent,
  title,
  actionMsg,
  actionEvent,
  children,
}) {
  return (
    <>
      <CardModalContainer>
        <h3>{title}</h3>
        <div className="msg">{children}</div>
        <div className="action_box">
          <div onClick={closeEvent}>닫기</div>
          <div onClick={actionEvent}>{actionMsg}</div>
        </div>
      </CardModalContainer>
    </>
  );
}
