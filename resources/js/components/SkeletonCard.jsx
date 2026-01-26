import React from 'react';

const SkeletonCard = () => {
  const cardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '300px', // Sesuaikan dengan ukuran card
  };

  const imageStyle = {
    width: '100%',
    aspectRatio: '16/9', // Rasio 16:9
    borderRadius: '0',
  };

  const contentStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const titleStyle = {
    height: '20px',
    width: '70%',
    borderRadius: '4px',
  };

  const descLineStyle = {
    height: '14px',
    borderRadius: '4px',
  };

  return (
    <div style={cardStyle}>
      {/* Gambar */}
      <div className="skeleton-shimmer" style={imageStyle}></div>

      {/* Konten */}
      <div style={contentStyle}>
        {/* Judul */}
        <div className="skeleton-shimmer" style={titleStyle}></div>

        {/* Deskripsi: 3 garis */}
        <div className="skeleton-shimmer" style={{ ...descLineStyle, width: '55%' }}></div>
        <div className="skeleton-shimmer" style={{ ...descLineStyle, width: '60%' }}></div>
        <div className="skeleton-shimmer" style={{ ...descLineStyle, width: '50%' }}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;