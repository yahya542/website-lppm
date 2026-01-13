import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../home/pages/Home';
import Nama from '../home/components/nama';
import ProfilList from '../profil/pages/ProfilList';
import ProfilDetail from '../profil/pages/ProfilDetail';
import Anggota from '../profil/pages/Anggota';
import VisiMisi from '../profil/pages/VisiMisi';
import Kontak from '../profil/pages/Kontak';
import PenelitianList from '../penelitian/pages/PenelitianList';
import PenelitianDetail from '../penelitian/pages/PenelitianDetail';
import PenelitianDRPM from '../penelitian/pages/PenelitianDRPM';
import PenelitianInternal from '../penelitian/pages/PenelitianInternal';
import PenelitianInfo from '../penelitian/pages/PenelitianInfo';
import PengabdianList from '../pengabdian/pages/PengabdianList';
import PengabdianDetail from '../pengabdian/pages/PengabdianDetail';
import KKN from '../pengabdian/pages/KKN';
import PengmasDRPM from '../pengabdian/pages/PengmasDRPM';
import PengmasInternal from '../pengabdian/pages/PengmasInternal';
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
                    <Route path="/profil/anggota" element={<Anggota />} />
                    <Route path="/profil/visi-misi" element={<VisiMisi />} />
                    <Route path="/profil/kontak" element={<Kontak />} />
                    <Route path="/profil/:id" element={<ProfilDetail />} />
                    <Route path="/penelitian" element={<PenelitianList />} />
                    <Route path="/penelitian/drpm" element={<PenelitianDRPM />} />
                    <Route path="/penelitian/internal" element={<PenelitianInternal />} />
                    <Route path="/penelitian/info" element={<PenelitianInfo />} />
                    <Route path="/penelitian/:id" element={<PenelitianDetail />} />
                    <Route path="/pengabdian" element={<PengabdianList />} />
                    <Route path="/pengabdian/kkn" element={<KKN />} />
                    <Route path="/pengabdian/drpm" element={<PengmasDRPM />} />
                    <Route path="/pengabdian/internal" element={<PengmasInternal />} />
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