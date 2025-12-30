import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    return (
        <div className="pos-relative bg-white bo-1-r bor14 hov-img-zoom p-all-22">
            <div className="hov-img0">
                {news.featured_image ? (
                    <img src={news.featured_image} alt={news.title || 'News'} className="img-fluid" />
                ) : (
                    <img src="/images/placeholder-image.jpg" alt={news.title || 'News'} className="img-fluid" />
                )}
            </div>
            <div className="p-t-10">
                <h3 className="m-text16 p-b-5">
                    <Link to={`/news/${news.id}`} className="hov-cl10 trans-0-4">
                        {news.title || 'No Title'}
                    </Link>
                </h3>
                <div className="flex-sa-m flex-w p-b-10">
                    <span className="s-text7 p-r-10">
                        {news.category?.name || 'Uncategorized'}
                    </span>
                    <span className="s-text7">
                        {news.published_at ? new Date(news.published_at).toLocaleDateString() : '-'}
                    </span>
                </div>
                <p className="s-text7 p-b-10">
                    {(news.content || '').substring(0, 150)}...
                </p>
            </div>
        </div>
    );
};

export default NewsCard;