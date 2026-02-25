import { useEffect, useState } from "react";
import { wordpressService } from "../components/wordpress";
import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getPosts();
        setPosts(data);
      } catch (err) {
        console.error("Error cargando posts:", err);
        setError("No se pudieron cargar los artículos. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-section container">
      <div className="blog-container block">
        <header className="blog-header">
          <span className="blog-eyebrow">Insights</span>
          <h2>Análisis, estrategia y visión financiera</h2>
          <p>
            Ideas, tendencias y herramientas para tomar mejores decisiones
            empresariales.
          </p>
        </header>

        {loading && <p className="blog-loading">Cargando artículos...</p>}
        
        {error && <p className="blog-error">{error}</p>}

        {!loading && !error && posts.length === 0 && (
          <p className="blog-empty">No hay artículos disponibles.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map(post => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <article key={post.id} className="blog-card">
                  {image && (
                    <div className="blog-image">
                      <img src={image} alt={post.title.rendered} />
                    </div>
                  )}

                  <div className="blog-content">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />

                    <div
                      className="blog-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />

                    <a href={post.link} target="_blank" rel="noreferrer">
                      Leer artículo →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
