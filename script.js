window.onload = function () {
  getLyrics(); // Populate the table on page load
};

async function getLyrics() {
  try {
    const response = await fetch('lyrics.json');
    const data = await response.json();

    const songTableBody = document.getElementById('songTableBody');
    songTableBody.innerHTML = ''; // Clear the table body for new results

    Object.values(data).forEach(songData => {
      const { artist: songArtist, title: songTitle } = songData;
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${songArtist}</td>
        <td>${songTitle}</td>
      `;
      songTableBody.appendChild(row);
    });
  } catch (error) {
    console.log('Error fetching and populating song titles:', error);
  }
}

// Rest of the code remains the same
