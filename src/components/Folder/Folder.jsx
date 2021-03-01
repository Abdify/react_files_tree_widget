import { useState } from 'react';

function Folder(props) {
    const { name, children } = props;
    const [isOpen, setIsOpen] = useState(false);
    const direction = isOpen ? "down" : "right";

    return (
        <div
            style={{
                backgroundColor: "lightgray",
                marginTop: "10px",
                padding: "10px 0",
                cursor: "pointer",
            }}
        >
            <div style={{ fontWeight: "bold" }} onClick={() => setIsOpen(!isOpen)}>
                <i className={`angle double ${direction} icon`}></i>
                {name}
            </div>

            <div style={{ marginLeft: "20px" }}>{isOpen ? children : null}</div>
        </div>
    );
}

export default Folder;