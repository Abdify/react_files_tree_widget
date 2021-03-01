function File(props) {
    const { name } = props;
    const fileExtension = name.split(".")[1];
    console.log(fileExtension, name);
    const fileIcons = {
        mp4: "headphone",
        png: "file image outline",
        jpeg: "file image",
        pdf: "book",
    };
    return (
        <div>
            <i className={`${fileIcons[fileExtension]} icon`}></i>
            {name}
        </div>
    );
}

export default File;