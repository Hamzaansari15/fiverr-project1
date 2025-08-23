"use client";

import React from "react";
import { Input, Modal } from "antd";

const ModalCustom: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      footer={false}
      onCancel={handleCancel}
    >
      <div className="flex flex-col gap-6 px-6 py-4">
        <div>
          <p className="font-roboto mb-2 text-sm text-[#A4A4A4]">
            Business Name
          </p>
          <Input placeholder="Lorem ipsum" size="large" />
        </div>
        <div>
          <p className="font-roboto mb-2 text-sm text-[#A4A4A4]">
            Contact Person
          </p>
          <Input placeholder="Lorem ipsum" size="large" />
        </div>
        <div>
          <p className="font-roboto mb-2 text-sm text-[#A4A4A4]">Email</p>
          <Input placeholder="myemail@address.com" size="large" />
        </div>
        <div>
          <p className="font-roboto mb-2 text-sm text-[#A4A4A4]">WhatsApp</p>
          <Input placeholder="000-000-000" size="large" />
        </div>
        <div>
          <p className="font-roboto mb-2 text-sm text-[#A4A4A4]">State</p>
          <Input placeholder="Lorem" size="large" />
        </div>
        <div>
          <p className="font-roboto mb-2 text-sm text-[#A4A4A4]">City</p>
          <Input placeholder="Lorem" size="large" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalCustom;
