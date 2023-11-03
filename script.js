async function getLyrics() {
  const artist = document.getElementById('artist').value;
  const song = document.getElementById('song').value;

  if (artist === '' || song === '') {
    alert('Please enter both artist and song!');
    return;
  }

  try {
    // Fetch the JSON file
    const response = await fetch('lyrics.json');
    const data = await response.json();

    // Find the specific song in the JSON file
    const selectedSong = `song${song.toLowerCase().replace(/ /g, '')}`;
    const foundSong = data[selectedSong];

    if (foundSong && foundSong.artist.toLowerCase() === artist.toLowerCase()) {
      document.getElementById('lyrics').innerText = foundSong.lyrics;
    } else {
      document.getElementById('lyrics').innerText = "Lyrics not found.";
    }
  } catch (error) {
    console.log('Error fetching lyrics:', error);
  }
}
