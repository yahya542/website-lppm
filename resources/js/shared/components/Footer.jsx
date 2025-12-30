import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top bg3 p-t-75 p-b-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0 align-center">Tentang LPPM</h5>
                            </div>
                            
                            <div className="p-t-10">
                                <p className="f1-s-8 cl8 p-b-25">
                                    Lembaga Penelitian dan Pengabdian Masyarakat Universitas Indonesia Makassar
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0 align-center">Link Terkait</h5>
                            </div>

                            <div className="p-t-10">
                                <ul className="p-b-25">
                                    <li className="flex-wr-sb-s p-b-10">
                                        <a href="#" className="f1-s-8 cl8 hov-link1">Universitas Indonesia Makassar</a>
                                    </li>
                                    <li className="flex-wr-sb-s p-b-10">
                                        <a href="#" className="f1-s-8 cl8 hov-link1">Pusat Penelitian</a>
                                    </li>
                                    <li className="flex-wr-sb-s p-b-10">
                                        <a href="#" className="f1-s-8 cl8 hov-link1">Pengabdian Masyarakat</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0 align-center">Kontak Kami</h5>
                            </div>

                            <div className="p-t-10">
                                <ul className="p-b-25">
                                    <li className="flex-wr-sb-s p-b-10">
                                        <span className="f1-s-8 cl8">Email:</span>
                                        <span className="f1-s-8 cl8">lppm@uim.ac.id</span>
                                    </li>
                                    <li className="flex-wr-sb-s p-b-10">
                                        <span className="f1-s-8 cl8">Telepon:</span>
                                        <span className="f1-s-8 cl8">(0411) 1234567</span>
                                    </li>
                                    <li className="flex-wr-sb-s p-b-10">
                                        <span className="f1-s-8 cl8">Alamat:</span>
                                        <span className="f1-s-8 cl8">Jl. Perintis Kemerdekaan, Makassar</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom bg3 p-t-10 p-b-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="f1-s-10 cl8 p-b-10">
                                &copy; 2025 LPPM UIM. Hak Cipta Dilindungi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;