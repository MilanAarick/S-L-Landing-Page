import "./article.css"

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="mw__blog-article__container">
      <div className="mw__blog-article__container-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="mw__blog-article__container-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article