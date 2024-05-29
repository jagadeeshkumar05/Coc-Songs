import React,{useState} from 'react'
import {Container , Dropdown} from 'react-bootstrap';  
import Nav from './Nav'

export default function filters() {
    const [songNumber, setSongNumber] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [verses, setVerses] = useState('');
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/SongAlphaOrder.json");
            const data = await response.json();
            console.log(data);
            const song = data.find(song => (String(song.Song_Id)===String(songNumber)));
            console.log(song);
            if (song) {
                setLyrics(song.Song_Title);
                // setVerses(preprocessData(song.Song_Verses));
            } else {
                setLyrics('Song not found.');
            }
        } catch (error) {
            console.error('Error fetching the song data:', error);
            setLyrics('Error fetching the song data.');
        }
    };
  return (
    <>
        <Nav/>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-10 bg-white'>
                    <Container className='p-4'>  
                        <Dropdown>  
                        <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
                            Dropdown Navigation Button  
                        </Dropdown.Toggle>  
                        
                        <Dropdown.Menu>  
                            <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
                            <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
                            <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
                            <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
                        </Dropdown.Menu>  
                        </Dropdown>  
                    </Container>                                                            
                    </div>
                </div>
            </div>
    </>
  )
}