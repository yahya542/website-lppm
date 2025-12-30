import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResearchDetail = () => {
    const { id } = useParams();
    const [research, setResearch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchResearchDetail();
    }, [id]);

    const fetchResearchDetail = async () => {
        try {
            const response = await fetch(`/api/research/${id}`);
            const data = await response.json();
            setResearch(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching research detail:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!research) {
        return <div>Research not found</div>;
    }

    return (
        <div className="research-detail-page p-t-40 p-b-40">
            <div className="container">
                <article className="research-article">
                    <header className="research-header p-b-30">
                        <h1 className="m-text12 t-center p-b-15">{research.title}</h1>
                        <div className="flex-w flex-m flex-sb t-center p-b-15">
                            <span className="s-text7 m-r-10">
                                {research.research_type}
                            </span>
                            <span className="s-text7 m-r-10">
                                {new Date(research.published_at).toLocaleDateString()}
                            </span>
                            <span className="s-text7">
                                By {research.authors}
                            </span>
                        </div>
                    </header>

                    <div className="research-abstract p-b-30">
                        <h3 className="m-text15">Abstract</h3>
                        <p className="s-text8">{research.abstract}</p>
                    </div>

                    <div className="research-content p-t-30">
                        <div dangerouslySetInnerHTML={{ __html: research.content }} />
                    </div>

                    {research.file_path && (
                        <div className="research-download p-t-30">
                            <a href={research.file_path} target="_blank" rel="noopener noreferrer" className="flex-c-m size2 bo-rad-23 s-text2 bg1 bo1 hov1 trans-0-4">
                                Download Research Paper
                            </a>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
};

export default ResearchDetail;