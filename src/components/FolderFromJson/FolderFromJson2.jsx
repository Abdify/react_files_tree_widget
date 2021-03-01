import React, { useState } from "react";
import File from "../File/File";

const FolderFromJson2 = (props) => {
    const { type, name, files, subFolders } = props.data;
    const [isOpen, setIsOpen] = useState(false);
    const direction = isOpen ? "down" : "right";
    if (type === "Folder" || type === "subFolder") {
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

                <div style={{ marginLeft: "20px" }}>
                    {isOpen ? (
                        <div>
                            {files.map((file) => {
                                return <File name={file} />;
                            })}
                            {subFolders.length > 0 &&
                                subFolders.map((sub) => {
                                    return <FolderFromJson2 data={sub} />;
                                })}
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
    return (
        <div>
            {props.data.map((file) => (
                <File name={file} />
            ))}
        </div>
    );
};

export default FolderFromJson2;
