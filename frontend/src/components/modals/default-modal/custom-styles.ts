import { Styles } from "react-modal";

const customStyles: Styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxHeight: "calc(100vh - 40px)",
        border: "0",
        padding: "0",
        background: "transparent",
        borderRadius: 0,
        color: "#fff"
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.9)"
    }
};

export default customStyles;