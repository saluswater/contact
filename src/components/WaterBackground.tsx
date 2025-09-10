'use client'

interface WaterBackgroundProps {
  className?: string
  backgroundColor?: string
  particleColor?: string
}

export function WaterBackground({ 
  className, 
  backgroundColor = '#0074cc', 
  particleColor = '#ffffff' 
}: WaterBackgroundProps) {
  return (
    <div 
      className={`water-animation-background ${className}`}
      style={{ backgroundColor }}
    >
      {/* Efeito de partículas/bolhas */}
      <div className="water-particles">
        {Array.from({ length: 40 }, (_, i) => {
          const size = 2 + Math.random() * 8;
          const opacity = 0.2 + Math.random() * 0.6;
          return (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 8}s`,
                background: `${particleColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`,
                boxShadow: `0 0 3px ${particleColor}30`
              }}
            />
          )
        })}
      </div>
    </div>
  )
}