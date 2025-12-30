import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResearchList = () => {
    const [researchList, setResearchList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        fetchResearch();
    }, [searchTerm, selectedType]);

    const fetchResearch = async () => {
        try {
            let url = '/api/research';
            const params = new URLSearchParams();
            
            if (searchTerm) params.append('search', searchTerm);
            if (selectedType) params.append('type', selectedType);
            
            if ([...params.keys()].length > 0) {
                url += `?${params}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            setResearchList(data.data || data); // Handle both paginated and non-paginated responses
            setLoading(false);
        } catch (error) {
            console.error('Error fetching research:', error);
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
        <div className="research-list-page p-t-40 p-b-40">
            <div className="container">
                <div className="sec-title p-b-35">
                    <h3 className="m-text14 t-center">Research</h3>
                </div>
                
                <form onSubmit={handleSearch} className="search-form bo5 p-all-15 m-b-30">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Search research..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="size-s-1 bo2 s-full bocl13 p-l-15 p-r-15 p-t-11 p-b-11"
                                />
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="form-group">
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="size-s-1 bo2 s-full bocl13 p-l-15 p-r-15 p-t-11 p-b-11"
                                >
                                    <option value="">All Types</option>
                                    <option value="journal">Journal</option>
                                    <option value="conference">Conference</option>
                                    <option value="thesis">Thesis</option>
                                    <option value="report">Report</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-m">
                        <button type="submit" className="flex-c-m size2 bo-rad-23 s-text2 bg1 bo1 hov1 trans-0-4">
                            Search
                        </button>
                    </div>
                </form>

                <div className="row">
                    {researchList.map(research => (
                        <div key={research.id} className="col-md-4 p-b-30">
                            <div className="pos-relative bg-white bo-1-r bor14 hov-img-zoom p-all-22">
                                <div className="p-t-10">
                                    <h3 className="m-text16 p-b-5">
                                        <Link to={`/research/${research.id}`} className="hov-cl10 trans-0-4">
                                            {research.title}
                                        </Link>
                                    </h3>
                                    <div className="flex-sa-m flex-w p-b-10">
                                        <span className="s-text7 p-r-10">
                                            {research.research_type}
                                        </span>
                                        <span className="s-text7">
                                            {new Date(research.published_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="s-text7 p-b-10">
                                        {research.abstract.substring(0, 200)}...
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

export default ResearchList;