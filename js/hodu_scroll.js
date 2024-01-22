const imageList = document.querySelector(".image-list");
let pageToFetch = 1;

async function fetchImages(pageNum) {

    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=20');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        const datas = await response.json();

        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas){
    datas.forEach((item) => {
        const img = document.createElement("img");
        img.src = item.download_url;
        img.width = 378;
        img.height = 378;
        imageList.appendChild(img);
    });
}

const infinityScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop +10 >= document.documentElement.offsetHeight) {
        fetchImages(pageToFetch++);}

};

const throttling = (callback, delay) => {
    let timer = null;
    return () => {
        if (timer === null) {
            timer = setTimeout(() => {
                callback();
                timer = null;
            }, delay);
        }
    };
};

function startScroll() {
    fetchImages(pageToFetch++);
    window.addEventListener('scroll', throttling(infinityScroll, 3000));
}
