import React from 'react';
import File from '../File/File';

const FolderFromJson = (props) => {
    
    const { name, files } = props.data;
    
    return (
        <div>
            <h2>{name}</h2>
            {/* <h5>{subFolders.name}</h5> */}
            <p>
                {files.map((file) => {
                    return <File name={file.name} />;
                })}
            </p>
            
            <p>
                {/* <FolderFromJson data={props.data.subFolders}/> */}
            </p>
            
        </div>
    );
};

export default FolderFromJson;