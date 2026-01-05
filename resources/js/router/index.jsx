import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../home/Home';
import Nama from '../home/nama';
import ProfilList from '../profil/pages/ProfilList';
import ProfilDetail from '../profil/pages/ProfilDetail';
import PenelitianList from '../penelitian/pages/PenelitianList';
import PenelitianDetail from '../penelitian/pages/PenelitianDetail';
import PengabdianList from '../pengabdian/pages/PengabdianList';
import PengabdianDetail from '../pengabdian/pages/PengabdianDetail';
import HKIList from '../hki/pages/HKIList';
import HKIDetail from '../hki/pages/HKIDetail';
import SeminarList from '../seminar/pages/SeminarList';
import SeminarDetail from '../seminar/pages/SeminarDetail';
import PermohonanSuratList from '../permohonan-surat/pages/PermohonanSuratList';
import PermohonanSuratDetail from '../permohonan-surat/pages/PermohonanSuratDetail';
import About from '../shared/pages/About';
import Contact from '../shared/pages/Contact';
import AdminDashboard from '../admin/AdminDashboard';
import NewsManagement from '../admin/NewsManagement';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/home/nama" element={<Nama />} />
                    <Route path="/profil" element={<ProfilList />} />
                    <Route path="/profil/:id" element={<ProfilDetail />} />
                    <Route path="/penelitian" element={<PenelitianList />} />
                    <Route path="/penelitian/:id" element={<PenelitianDetail />} />
                    <Route path="/pengabdian" element={<PengabdianList />} />
                    <Route path="/pengabdian/:id" element={<PengabdianDetail />} />
                    <Route path="/hki" element={<HKIList />} />
                    <Route path="/hki/:id" element={<HKIDetail />} />
                    <Route path="/seminar" element={<SeminarList />} />
                    <Route path="/seminar/:id" element={<SeminarDetail />} />
                    <Route path="/permohonan-surat" element={<PermohonanSuratList />} />
                    <Route path="/permohonan-surat/:id" element={<PermohonanSuratDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/news" element={<NewsManagement />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;