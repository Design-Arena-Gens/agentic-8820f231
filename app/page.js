'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    {
      id: 1,
      title: "Full Body Shot - Front View",
      description: "Professional pose with vehicle in natural outdoor setting",
      angle: "Front",
      type: "Full Body",
      placeholder: "https://placehold.co/800x1200/1a56db/white?text=Full+Body+Front+View"
    },
    {
      id: 2,
      title: "Side View - Full Body",
      description: "Complete side profile showing person and car together",
      angle: "Side",
      type: "Full Body",
      placeholder: "https://placehold.co/800x1200/047857/white?text=Full+Body+Side+View"
    },
    {
      id: 3,
      title: "Three-Quarter Angle",
      description: "Dynamic angle capturing both subjects with depth",
      angle: "3/4 View",
      type: "Full Body",
      placeholder: "https://placehold.co/800x1200/9333ea/white?text=Three+Quarter+View"
    },
    {
      id: 4,
      title: "Close-Up Portrait",
      description: "Professional headshot with vehicle in background",
      angle: "Front",
      type: "Close-Up",
      placeholder: "https://placehold.co/800x1200/dc2626/white?text=Close+Up+Portrait"
    },
    {
      id: 5,
      title: "Close-Up Detail Shot",
      description: "Detail focus on person with car elements visible",
      angle: "Side",
      type: "Close-Up",
      placeholder: "https://placehold.co/800x1200/ea580c/white?text=Close+Up+Detail"
    },
    {
      id: 6,
      title: "Back Angle Full Body",
      description: "Rear perspective showing full scene composition",
      angle: "Back",
      type: "Full Body",
      placeholder: "https://placehold.co/800x1200/4f46e5/white?text=Back+Angle+View"
    },
    {
      id: 7,
      title: "Low Angle Shot",
      description: "Dramatic perspective from lower viewpoint",
      angle: "Low Angle",
      type: "Full Body",
      placeholder: "https://placehold.co/800x1200/0891b2/white?text=Low+Angle+Shot"
    },
    {
      id: 8,
      title: "Environmental Portrait",
      description: "Wide shot emphasizing natural background setting",
      angle: "Wide",
      type: "Full Body",
      placeholder: "https://placehold.co/1200x800/15803d/white?text=Environmental+Portrait"
    },
    {
      id: 9,
      title: "Close-Up Profile",
      description: "Side profile close-up with blurred car background",
      angle: "Profile",
      type: "Close-Up",
      placeholder: "https://placehold.co/800x1200/be123c/white?text=Profile+Close+Up"
    }
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        padding: '2rem',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '2.5rem',
          color: '#1f2937',
          fontWeight: '700'
        }}>
          Professional Photo Gallery
        </h1>
        <p style={{
          margin: 0,
          fontSize: '1.1rem',
          color: '#6b7280',
          fontWeight: '400'
        }}>
          Person & Vehicle Photography Portfolio - Multiple Angles & Perspectives
        </p>
      </header>

      {/* Gallery Grid */}
      <main style={{ padding: '3rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {photos.map(photo => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                ':hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                width: '100%',
                paddingBottom: '133%',
                position: 'relative',
                background: '#f3f4f6'
              }}>
                <img
                  src={photo.placeholder}
                  alt={photo.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.25rem',
                  color: '#1f2937',
                  fontWeight: '600'
                }}>
                  {photo.title}
                </h3>
                <p style={{
                  margin: '0 0 0.75rem 0',
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: '1.5'
                }}>
                  {photo.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: '#dbeafe',
                    color: '#1e40af',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {photo.angle}
                  </span>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: '#dcfce7',
                    color: '#166534',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {photo.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '12px',
              maxWidth: '900px',
              maxHeight: '90vh',
              overflow: 'auto',
              cursor: 'default'
            }}
          >
            <img
              src={selectedImage.placeholder}
              alt={selectedImage.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h2 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
                {selectedImage.title}
              </h2>
              <p style={{ margin: '0 0 1rem 0', color: '#6b7280' }}>
                {selectedImage.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{
                  padding: '0.5rem 1rem',
                  background: '#dbeafe',
                  color: '#1e40af',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {selectedImage.angle}
                </span>
                <span style={{
                  padding: '0.5rem 1rem',
                  background: '#dcfce7',
                  color: '#166534',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {selectedImage.type}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.95)',
        marginTop: '3rem'
      }}>
        <p style={{
          margin: 0,
          color: '#6b7280',
          fontSize: '0.95rem'
        }}>
          Professional Photography Gallery • High-Quality Images • Multiple Perspectives
        </p>
      </footer>
    </div>
  )
}
