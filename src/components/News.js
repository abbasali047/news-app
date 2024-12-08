import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    UpdateNews();
    console.log(articles)
    // es-Lint-disable-next-line
  }, []);

  const UpdateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-10-21&sortBy=publishedAt&apiKey=2cd4b4be165d452096e332fe10c67792`;
    setLoading(true);
    let data = await fetch(url);
    console.log(data)
    props.setProgress(35);
    let parseData = await data.json();
    console.log(parseData)
    props.setProgress(70);
    setArticle(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url);
    let parseData = await data.json();
    setPage(page + 1);
    setArticle(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <h2 className="text-center" style={{ margin: "35px 0px" }}>
        NewsMonkey - {capitalize(props.category)} category Top Headlines
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={page !== Math.ceil(totalResults / props.pageSize)}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.title}>
                  <NewsItem
                    title={
                      element.title ? element.title : "Searching for heading"
                    }
                    description={
                      element.description
                        ? element.description
                        : "Description not found"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
