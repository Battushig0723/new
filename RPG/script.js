 async function fetchMangaTranslation() {
    const response = await fetch('API_URL_HERE');
    const data = await response.json();
    document.getElementById('manga-content').innerText = data.translation;
}

fetchMangaTranslation();