import React from 'react';

const Nama = () => {
    return (
      <main className="container mx-auto px-6 py-12">
          {/* Main Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-gray-400"></div>
              <img src="../images/icons/logo-01.png" alt="Logo" className="h-16" />
              <h1 className="text-4xl text-gray-800 uppercase tracking-wide">
                INSTITUTE OF RESEARCH AND<br />COMMUNITY SERVICES
              </h1>
              <div className="h-0.5 w-16 bg-gray-400"></div>
            </div>
          </div>
      </main>
    );
}; 

export default Nama;