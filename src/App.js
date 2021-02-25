import {useState} from 'react'

function App() {
  return (
      <div>
          <Folder name="Desktop">
              <Folder name="Books">
                  <File name="The Great Coder.pdf" />
                  <File name="Multivariable Calculus.pdf" />
              </Folder>
              <File name="flower.jpeg" />
              <File name="phone.png" />
          </Folder>
          <Folder name="Application" />
      </div>
  );

  function Folder(props) {
    const {name, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    const direction = isOpen ? 'down' : 'right'

    return (
        <div style={{ backgroundColor: "lightgray", marginTop: "10px", padding: "10px 0", cursor: 'pointer' }}>
            <div style={{ fontWeight: "bold" }} onClick={() => setIsOpen(!isOpen)}>
                <i className={`angle double ${direction} icon`}></i>
                {name}
            </div>

            <div style={{ marginLeft: "20px" }}>{isOpen ? children : null}</div>
        </div>
    );
  }

  function File(props) {
    const {name} = props;
    const fileExtension = name.split('.')[1];
    console.log(fileExtension);
    const fileIcons = {
      mp4: 'headphone',
      png: 'file image outline',
      jpeg: 'file image',
      pdf: 'book'
    }
    return (
        <div>
            <i className={`${fileIcons[fileExtension]} icon`}></i>
            {name}
        </div>
    );
  }


}

export default App;
