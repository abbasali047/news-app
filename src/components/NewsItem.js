import React from "react";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://lightwidget.com/wp-content/uploads/local-file-not-found-480x488.png"
          }
          className="card-img-top"
          alt="..."
          style={{ height: "40vh" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: "10vh" }}>
            {title.length > 70 ? title.slice(0, 70) : title}...
          </h5>
          <p className="card-text" style={{ height: "15vh" }}>
            {description.length > 150 ? description.slice(0, 150) : description}
            ...
          </p>
          <p className="card-text" style={{ height: "5vh" }}>
            <small className="text-danger">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
