import React from 'react';

const Contact = () => {
    return (
        <div className="container p-t-40 p-b-40">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="m-text20 p-b-20">Kontak Kami</h2>
                    <div className="contact-content">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="m-text15 p-b-10">Informasi Kontak</h4>
                                <p className="s-text7">
                                    <strong>Email:</strong> lppm@uim.ac.id
                                </p>
                                <p className="s-text7 p-t-5">
                                    <strong>Telepon:</strong> (0411) 1234567
                                </p>
                                <p className="s-text7 p-t-5">
                                    <strong>Alamat:</strong> Jl. Perintis Kemerdekaan, Makassar
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="m-text15 p-b-10">Jam Operasional</h4>
                                <p className="s-text7">
                                    Senin - Jumat: 08.00 - 16.00 WITA
                                </p>
                                <p className="s-text7 p-t-5">
                                    Sabtu - Minggu: Libur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;