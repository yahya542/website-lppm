import React from 'react';

const Nama = () => {
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '24px',
        },
        titleContainer: {
            textAlign: 'center',
            marginBottom: '48px',
        },
        rowContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '16px',
         
        },
        verticalLine: {
            height: '2px',
            width: '64px',
            backgroundColor: 'black', // gray-400 equivalent
        },
        logoTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        logo: {
            width: '250px',
            height: '250px',
            objectFit: 'contain',
        },
        title: {
            fontSize: '3rem',
            color: '#1f2937', // gray-800 equivalent
            textTransform: 'uppercase',
            letterSpacing: '0.025em',
            textAlign: 'center',
            marginTop: '16px',
            fontWeight: 'bold',
        },
    };

    return (
      <main style={styles.container}>
          {/* Main Title */}
          <div style={styles.titleContainer}>
            <div style={styles.rowContainer}>
              <div style={styles.verticalLine}></div>
              <div style={styles.logoTextContainer}>
                <img src="/images/icons/uim.png" alt="Logo" style={styles.logo} />
                <h1 style={styles.title}>
                  INSTITUTE OF RESEARCH AND<br />COMMUNITY SERVICES
                </h1>
              </div>
              <div style={styles.verticalLine}></div>
            </div>
          </div>
      </main>
    );
};

export default Nama;