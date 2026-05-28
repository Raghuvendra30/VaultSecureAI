import React, { useState } from 'react';
import { Link } from "react-router-dom";



const VaultSecureLanding = ({ heroImage = '/src/assets/hero=illustration.png' }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100vw',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'white',
        backdropFilter: 'blur(10px)',
        padding: '13px 0',
        position: 'relative',
        zIndex: 100
      }}>
        <div style={{ width: '100%', marginLeft:'25px', padding: '0 20px' }}>
          <nav style={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#1565c0' }}>
              VaultSecure Ai
            </div>
            
            <ul style={{ display: 'flex', gap: '28px', listStyle: 'none',marginLeft:'100px',fontSize:'1.1rem'}}>
              <li><a href="#products" style={{ textDecoration: 'none', color: '#333', fontWeight: 600, textShadow: '0.5px 0.5px 1px grey' }}>Products</a></li>
              <li><a href="#solutions" style={{ textDecoration: 'none', color: '#333', fontWeight: 600,textShadow: '0.5px 0.5px 1px grey' }}>Solutions</a></li>
              <li><a href="#services" style={{ textDecoration: 'none', color: '#333', fontWeight: 600,textShadow: '0.5px 0.5px 1px grey' }}>Services</a></li>
              <li><a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 ,textShadow: '0.5px 0.5px 1px grey'}}>About Us</a></li>
            </ul>
            
            <button 
              onClick={() => setShowModal(true)}
              style={{
                background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
                color: '#333',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '600px',
                border: 'none',
                cursor: 'pointer',
                zIndex: 101
              }}
            >
              Login / Signup →
            </button>

          </nav>
        </div>
      </header>
      {showModal && (
  <>
    {/* Background Blur Overlay */}
    <div 
      onClick={() => setShowModal(false)}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)',
        zIndex: 100
      }}
    />

    {/* Modal Box */}
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      zIndex: 101,
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>Welcome to VaultSecure</h2>
      
      <Link 
        to="/login" 
        onClick={() => setShowModal(false)}
        style={{
          padding: '10px 20px',
          background: '#1565c0',
          color: '#fff',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Login
      </Link>

      <Link 
        to="/signup" 
        onClick={() => setShowModal(false)}
        style={{
          padding: '10px 20px',
          background: '#4caf50',
          color: '#fff',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Sign Up
      </Link>
    </div>
  </>
)}


      {/* Main Content */}
      <main style={{ position: 'relative' }}>
        <div style={{ width: '100%', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '60px', 
            alignItems: 'center', 
            padding: '80px 0',
            position: 'relative'
          }}>
            
            {/* Background decorative elements */}
            <div style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              background: '#ff9800',
              borderRadius: '50%',
              top: '10%',
              left: '5%',
              opacity: 0.3,
              animation: 'float 8s ease-in-out infinite'
            }}></div>
            
            <div style={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              background: '#9c27b0',
              borderRadius: '50%',
              top: '20%',
              right: '10%',
              opacity: 0.3,
              animation: 'float 10s ease-in-out infinite reverse'
            }}></div>

            {/* Hero Text */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h1 style={{
                fontSize: '3.3rem',
                fontWeight: 750,
                color: '#1a1a1a',
                lineHeight: 1.1,
                marginBottom: '24px',
                marginLeft:'75px'
              }}>
                Build Trust, Not Risk — Automate Fraud Detection From Day One.
              </h1>
              <p style={{
                fontSize: '1.2rem',
                color: '#444',
                lineHeight: 1.6,
                marginBottom: '32px',
                marginLeft:'75px'
              }}>
                Discover how VaultSecure Ai protects your transactions — by helping you trust the right customers, every time.
              </p>
              <a 
                href="#demo" 
                style={{
                  background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
                  color: '#333',
                  padding: '16px 32px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)',
                  marginLeft:'75px'
                }}
              >
                Request a Demo →
              </a>
            </div>

            {/* Hero Illustration */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={heroImage}
                alt="VaultSecure AI Fraud Detection Illustration"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '20px',
                  marginRight:'140px'
                //   boxShadow: '0 20px 60px rgba(233, 30, 99, 0.3)',
                //   animation: 'float 6s ease-in-out infinite'
                }}
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback illustration (hidden by default) */}
              <div style={{
                display: 'none',
                width: '300px',
                height: '350px',
                // background: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)',
                // borderRadius: '150px 150px 150px 150px / 180px 180px 120px 120px',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 60px rgba(233, 30, 99, 0.3)',
                animation: 'float 6s ease-in-out infinite',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Hero Image<br/>Placeholder
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(2deg); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.1); 
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          ul {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VaultSecureLanding;