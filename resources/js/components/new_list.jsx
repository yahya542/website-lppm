import React, { useEffect, useState } from 'react';

export default function NewsList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    return (
        <div>
            {news.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                </div>
            ))}
        </div>
    );
}
