import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AnnouncementDetail = () => {
    const { id } = useParams();
    const [announcement, setAnnouncement] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnnouncementDetail();
    }, [id]);

    const fetchAnnouncementDetail = async () => {
        try {
            const response = await fetch(`/api/announcements/${id}`);
            const data = await response.json();
            setAnnouncement(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching announcement detail:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!announcement) {
        return <div>Announcement not found</div>;
    }

    return (
        <div className="announcement-detail-page p-t-40 p-b-40">
            <div className="container">
                <article className="announcement-article">
                    <header className="announcement-header p-b-30">
                        <h1 className="m-text12 t-center p-b-15">{announcement.title}</h1>
                        <div className="flex-w flex-m flex-sb t-center p-b-15">
                            <span className="s-text7 m-r-10">
                                {new Date(announcement.published_at).toLocaleDateString()}
                            </span>
                            <span className="s-text7">
                                By {announcement.author}
                            </span>
                        </div>
                    </header>

                    <div className="announcement-content p-t-30">
                        <div dangerouslySetInnerHTML={{ __html: announcement.content }} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default AnnouncementDetail;