import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnnouncementList = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchAnnouncements();
    }, [searchTerm]);

    const fetchAnnouncements = async () => {
        try {
            let url = '/api/announcements';
            if (searchTerm) {
                url += `?search=${searchTerm}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            setAnnouncements(data.data || data); // Handle both paginated and non-paginated responses
            setLoading(false);
        } catch (error) {
            console.error('Error fetching announcements:', error);
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="announcement-list-page p-t-40 p-b-40">
            <div className="container">
                <div className="sec-title p-b-35">
                    <h3 className="m-text14 t-center">Announcements</h3>
                </div>
                
                <form onSubmit={handleSearch} className="search-form bo5 p-all-15 m-b-30">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Search announcements..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="size-s-1 bo2 s-full bocl13 p-l-15 p-r-15 p-t-11 p-b-11"
                        />
                    </div>
                    
                    <div className="flex-m">
                        <button type="submit" className="flex-c-m size2 bo-rad-23 s-text2 bg1 bo1 hov1 trans-0-4">
                            Search
                        </button>
                    </div>
                </form>

                <div className="row">
                    {announcements.map(announcement => (
                        <div key={announcement.id} className="col-md-4 p-b-30">
                            <div className="pos-relative bg-white bo-1-r bor14 hov-img-zoom p-all-22">
                                <div className="p-t-10">
                                    <h3 className="m-text16 p-b-5">
                                        <Link to={`/announcements/${announcement.id}`} className="hov-cl10 trans-0-4">
                                            {announcement.title}
                                        </Link>
                                    </h3>
                                    <div className="flex-sa-m flex-w p-b-10">
                                        <span className="s-text7">
                                            {new Date(announcement.published_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="s-text7 p-b-10">
                                        {announcement.content.substring(0, 200)}...
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnnouncementList;