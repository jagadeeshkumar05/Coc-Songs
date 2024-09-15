import React,{useState,useEffect} from 'react';
import jsonData from '../songs.json'

function Home() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const itemId = 1; // Example ID
    useEffect(() => {
        setData(jsonData); // Load JSON data when the component mounts
    }, []);
    console.log(data);
    useEffect(() => {
        // Filter data based on ID
        const selectedItem = jsonData.find(item => item.id === itemId);
        setSelectedItem(selectedItem);
    }, [data, itemId]);
    console.log(selectedItem);
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1 className="text-center mb-4">Song Lyrics Search</h1>
        <form id="searchForm">
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="searchInput" placeholder="Search for song lyrics..."/>
            <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
        <div id="lyricsDisplay" className="lyrics-box">
            <h4>{selectedItem.head}</h4>
            <p>{selectedItem.body}</p>
        </div>
      </div>
    </div>
  </div>

  );
}
export default Home;