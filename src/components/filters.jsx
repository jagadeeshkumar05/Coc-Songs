import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'

export default function Filters() {
    const [alpha, setAlpha] = useState('');
    const [data,setData] = useState([]);
    const [songData,setSongData] = useState([]);
    const [relatedData,setRelatedData] = useState([]);
    // const HandleSubmit = () => {
    //     let list = [];
    //     if(songData){
    //         songData.forEach((item, index) => {
    //             if(String(item.Song_Title.charAt(0)) === String(alpha)){
    //                 list.push(item.Song_Title);
    //             }
    //         });
    //     }
    //     else {
    //         console.log("No data available.");
    //     }
    //     console.log(list);
    //     setRelatedData(list);
    // }
    // useEffect(() => {
    //     console.log("Related Data Updated:", relatedData);
    // }, [relatedData]);
    useEffect(() => {
        fetch('/SongAlphaOrder.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
    },[]);    
    useEffect(() => {
        fetch('/Songs.json')
      .then(response => response.json())
      .then(jsonData => setSongData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
    },[]);  
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            // const response = await fetch("/Songs.json");
            // const sdata = await response.json();
            // setSongData(sdata);
            let list = [];
            if (songData) {
                songData.forEach((item, index) => {
                    if(String(item.Song_Title.charAt(0)) === String(alpha)){
                        list.push({"Song_Id":item.Song_Id,"Song_Title":item.Song_Title});
                    }
                });
                setRelatedData(list);
            } else {
                console.log('Song not found.');
            }
        } catch (error) {
            console.error('Error fetching the song data:', error);
        }
    };
    // console.log(relatedData);
  return (
    <>
        <Nav/>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-8 bg-white offset-md-2'> 
                        <form action="" onSubmit={handleSearch} className="form-horizontal form-control">
                        <div className="input-group">
                            <select className="form-select" onChange={(e) => setAlpha(e.target.value)}>
                                <option className='form-control' defaultValue={"select"}>select</option>
                                {data.map((item, index) => (
                                    <option value={item.Label} >{item.Label}</option>
                                    ))} 
                            </select> 
                            <div className="input-group-append">
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                        </div>
            </form>   

                    </div>
                </div>
                <div className="row mt-3">
        <div className="col-md-8 offset-md-2">
        <ul className="lyrics-list">  {/* Changed to unordered list for line-by-line display */}
    {relatedData.map((item, index) => (
      <li key={index} className="lyrics-item">  {/* Use key on the list item */}
        <Link className="customlink" to={`/${item.Song_Id}`}>  {/* Use Link for redirection */}
          {item.Song_Title}
        </Link>
      </li>
    ))}
  </ul>
        </div>
    </div>
            </div>
    </>
  )
}