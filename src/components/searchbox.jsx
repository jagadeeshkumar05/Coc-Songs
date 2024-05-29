import React,{useState} from 'react'

export default function Searchbar() {
    const [songNumber, setSongNumber] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [verses, setVerses] = useState('');
    function preprocessData(data) {
        // Split the text into lines
        let lines = data.split("\r\n");
        let symbolCount = 1;
    
        // Iterate through each line
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            // Replace ~ symbol with assigned number and increment
            line = line.replace(/~/g, () => `\r\n\n${symbolCount++}. `);
            // Update the line with the replaced symbol
            lines[i] = line;
        }
    
        // Join the lines back together
        return lines.join("\r\n");
    }
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/Songs.json");
            const data = await response.json();
            console.log(data);
            const song = data.find(song => (String(song.Song_Id)===String(songNumber)));
            console.log(song);
            if (song) {
                setLyrics(song.Song_Title);
                setVerses(preprocessData(song.Song_Verses));
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
        <div className="container">
    <div className="row">
        <div className="col-md-9 offset-md-3">
            <form action="" onSubmit={handleSearch} className="form-horizontal form-control">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control search-bar"
                        placeholder="Search song number"
                        value={songNumber}
                        onChange={(e) => setSongNumber(e.target.value)}
                    />
                    <div className="input-group-append">
                        <input type="submit" className="btn btn-primary" value="Search" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-md-9 offset-md-3">
            {lyrics && (
                <div className="lyrics-box border p-3 justify-content-center">
                    <h3>Song Number: {songNumber}</h3>
                    <p>{lyrics}</p>
                    <hr/>
                    <pre>{verses}</pre>
                </div>
            )}
        </div>
    </div>
</div>
    </>
  )
}
