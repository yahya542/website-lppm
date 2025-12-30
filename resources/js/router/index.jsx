import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../home/Home';
import NewsList from '../news/pages/NewsList';
import NewsDetail from '../news/pages/NewsDetail';
import AnnouncementList from '../announcements/pages/AnnouncementList';
import AnnouncementDetail from '../announcements/pages/AnnouncementDetail';
import ResearchList from '../research/pages/ResearchList';
import ResearchDetail from '../research/pages/ResearchDetail';
import About from '../shared/pages/About';
import Contact from '../shared/pages/Contact';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/news" element={<NewsList />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                    <Route path="/announcements" element={<AnnouncementList />} />
                    <Route path="/announcements/:id" element={<AnnouncementDetail />} />
                    <Route path="/research" element={<ResearchList />} />
                    <Route path="/research/:id" element={<ResearchDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;