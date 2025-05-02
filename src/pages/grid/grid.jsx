import React from 'react';

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#f3e2c7',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#f9ebd6',
    padding: '18px 116px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '24px',
    padding: '56px 116px 341px 116px',
  },
  card: {
    backgroundColor: '#dfc6a9',
    borderRadius: '4px',
    height: '100px',
  },
};

const Grid = () => {
  return (
    <div style={styles.body}>
      <div style={styles.header}>Grid Layout Training</div>

      <div style={styles.grid}>
        {/* 1st row */} 
        <div style={{ ...styles.card, gridColumn: 'span 1', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 1', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 1', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 3', height: '160px' }} />
        {/* 2nd row */}
        <div style={{ ...styles.card, gridColumn: 'span 2', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 1', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 1', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 2', height: '160px' }} />

        {/* 3rd row */}
        <div style={{ ...styles.card, gridColumn: 'span 3', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 2', height: '160px' }} />
        <div style={{ ...styles.card, gridColumn: 'span 1', height: '160px' }} />
      </div>
    </div>
  );
};

export default Grid;
