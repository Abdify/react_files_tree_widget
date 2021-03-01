import { useEffect, useState } from 'react';
import File from './components/File/File';
import Folder from './components/Folder/Folder';
import FolderFromJson2 from './components/FolderFromJson/FolderFromJson2';
import d from './data/data2.json';
function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setData(d);
        setLoading(false);
        console.log(data);
    }, [])

    if(loading){
        return <h1>Loading</h1>
    }

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

          {data.map((f) => (
              <FolderFromJson2 data={f} />
          ))}
      </div>
  );

}

export default App;
