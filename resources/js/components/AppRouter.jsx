import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import AnnouncementList from './AnnouncementList';
import AnnouncementDetail from './AnnouncementDetail';
import ResearchList from './ResearchList';
import ResearchDetail from './ResearchDetail';

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<NewsList />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                    <Route path="/announcements" element={<AnnouncementList />} />
                    <Route path="/announcements/:id" element={<AnnouncementDetail />} />
                    <Route path="/research" element={<ResearchList />} />
                    <Route path="/research/:id" element={<ResearchDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;