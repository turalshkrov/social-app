import { Typography } from "antd";

import { useAppDispatch } from "@/hooks/hooks";
import Modal from "../ModalWrapper/ModalWrapper";
import { setIsOpen } from "@/store/slices/ModalSlice";

const { Text } = Typography;

const LogOutModal = () => {
    const dispatch = useAppDispatch();

    const handleOk = () => {
        dispatch(
            setIsOpen({
                id: "logout",
                setIsOpen: false,
            })
        );
    };

    return (
        <Modal id="logout" title="Logout" onOk={handleOk}>
            <Text>Are you sure you want to log out?</Text>
        </Modal>
    );
};

export default LogOutModal;
