async function getLyrics() {
  const artist = document.getElementById('artist').value;
  const song = document.getElementById('song').value;

  if (artist === '' || song === '') {
    alert('Please enter both artist and song!');
    return;
  }

  try {
    const response = await fetch('lyrics.json');
    const data = await response.json();

    const songTableBody = document.getElementById('songTableBody');
    songTableBody.innerHTML = ''; // Clear the table body for new results

    Object.values(data).forEach(songData => {
      const { artist: songArtist, title: songTitle } = songData;
      const selectedSong = `song${songTitle.toLowerCase().replace(/ /g, '')}`;

      if (selectedSong && songArtist.toLowerCase() === artist.toLowerCase()) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${songArtist}</td>
          <td>${songTitle}</td>
        `;
        songTableBody.appendChild(row);
      }
    });
  } catch (error) {
    console.log('Error fetching and populating song titles:', error);
  }
}
