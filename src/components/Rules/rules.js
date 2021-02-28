import React from "react";
import "./rules.scss";
import { RuleBook } from "../../assets/svg";
import Modal from "../Modal";

const Rules = ({ showModal, setModalState }) => {
  return (
    <>
      <button
        type={"button"}
        className={"rules__btn"}
        onClick={() => setModalState(true)}
      >
        rules
      </button>
      <Modal
        isVisible={showModal}
        title="Rules"
        content={<img src={RuleBook} alt={"Rule Book"} />}
        onClose={() => setModalState(false)}
      />
    </>
  );
};

export default Rules;
