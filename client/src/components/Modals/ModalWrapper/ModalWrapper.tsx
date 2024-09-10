import { Modal as AntModal } from "antd";
import { createPortal } from "react-dom";

import { setIsOpen } from "@/store/slices/ModalSlice";
import { modalIsOpenSelector } from "@/store/selectors";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { iModalProps } from "./iModalWrapper";

const Modal = ({ id, children, ...rest }: iModalProps) => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => modalIsOpenSelector(state, id));

    const handleCancel = () => {
        dispatch(
            setIsOpen({
                id,
                setIsOpen: false,
            })
        );
    };

    return createPortal(
        <AntModal
            open={isOpen}
            closeIcon={null}
            onCancel={handleCancel}
            cancelButtonProps={{ className: "rounded ant-modal-cancel-btn" }}
            okButtonProps={{ className: "rounded" }}
            {...rest}
        >
            {children}
        </AntModal>,
        document.body
    );
};

export default Modal;
