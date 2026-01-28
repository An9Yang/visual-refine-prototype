import { MeshGradient } from '@paper-design/shaders-react';

export const HeroShader = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
    <MeshGradient
      colors={['#08090a', '#5e6ad2', '#7170ff', '#0f1011']}
      speed={0.15}
      distortion={0.6}
      swirl={0.15}
      style={{ width: '100%', height: '100%' }}
    />
    {/* Gradient overlay for text readability */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to bottom, rgba(8,9,10,0.4), rgba(8,9,10,0.6))',
      }}
    />
  </div>
);
