import { news } from "@/data/labs";
export function NewsSection() {
  return (
    <section className="container section" id="news">
      <div className="section-head">
        <span className="kicker">News & signals</span>
        <h2>Latest signals from the Hub.</h2>
        <p>
          Khu vực news dùng để cập nhật hoạt động labs, dự án, công nghệ,
          workshop, hợp tác và các câu chuyện chuyển giao.
        </p>
      </div>
      <div className="news-grid">
        {news.map((n, i) => (
          <article
            className={`news-card ${i === 0 ? "featured" : ""}`}
            key={n.title}
          >
            <div className="news-meta">
              <span>{n.category}</span>
              <span>{n.date}</span>
            </div>
            <h3>{n.title}</h3>
            <p>{n.excerpt}</p>
            <a href="#">Read →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
