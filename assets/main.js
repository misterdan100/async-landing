const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCJFP-5V2-0BFeVmKifG0H_Q&part=snippet%2Cid&order=date&maxResults=12';

const content = null || document.getElementById('content')
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ae8b0d4b69msh4c3f2b10b559bbbp1d6017jsn736cbf542f8f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};



async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data
}

// fetchData(API, options)

(async () => {
    try {
        const videos = await fetchData(API)
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-md text-gray-700 font-bold">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
            
                    </div>
                </div>
            `).join('')}
        `

        content.innerHTML = view;


    } catch (error) {
        console.error(error)
    }
})();