import { useState } from 'react';

export default function TeamPhoto({ src, alt, initials }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  if (!imageAvailable) {
    return (
      <>
        <span className="ini">{initials}</span>
        <span className="ph">Photo coming soon</span>
      </>
    );
  }

  return <img src={src} alt={alt} onError={() => setImageAvailable(false)} />;
}
