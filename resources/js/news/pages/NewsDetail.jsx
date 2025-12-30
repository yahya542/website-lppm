import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNewsDetail();
    }, [id]);

    const fetchNewsDetail = async () => {
        try {
            const response = await fetch(`/api/news/${id}`);
            const data = await response.json();
            setNews(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching news detail:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!news) {
        return <div>News not found</div>;
    }

    return (
        <div className="news-detail-page p-t-40 p-b-40">
            <div className="container">
                <article className="news-article">
                    <header className="news-header p-b-30">
                        <h1 className="m-text12 t-center p-b-15">{news.title}</h1>
                        <div className="flex-w flex-m flex-sb t-center p-b-15">
                            <span className="s-text7 m-r-10">
                                {news.category?.name}
                            </span>
                            <span className="s-text7 m-r-10">
                                {new Date(news.published_at).toLocaleDateString()}
                            </span>
                            <span className="s-text7">
                                By {news.author}
                            </span>
                        </div>
                    </header>

                    <div className="news-image p-b-30">
                        {news.featured_image && (
                            <img src={news.featured_image} alt={news.title} className="img-fluid" />
                        )}
                    </div>

                    <div className="news-content p-t-30">
                        <div dangerouslySetInnerHTML={{ __html: news.content }} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default NewsDetail;