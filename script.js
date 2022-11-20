console.log("New-App");
const newsBox = document.querySelector(".news-box");
const API_KEY = `8558cb563747414e9a7e2d03c74b06aa`;

const getNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8558cb563747414e9a7e2d03c74b06aa`;
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();
//   console.log(data.articles);
  return showNews(data.articles);
};

const showNews = (data) => {
    data.forEach(key => {
        let news = `
            <figure class="snip1360 snipheight">
                <img src="${key.urlToImage}" alt="sample88" id="imageToUrl" />
                <figcaption>
                    <h2>${key.author}</h2>
                    <p>${key.description}</a>
                    </figcaption>
                    <a href="${key.url}"><button class="btn btn-other">Read More</button></a>
                </figure>
        `;
        
        newsBox.innerHTML += news;
    });
  }
    

getNews();
