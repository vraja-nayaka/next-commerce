import React from 'react';
import { Img } from 'react-image';

const Placeholder = () => <img src={'/'} alt="product img loader" />;
export default function Image({
  url,
  alt = 'placeholder',
  unloader,
  loader,
  className,
  style,
}: {
  url?: string | [string];
  alt?: string;
  unloader?: string;
  loader?: string;
  className?: string;
  style?: any;
}) {
  return (
    <Img
      draggable={false}
      style={style}
      src={url}
      alt={alt}
      loader={<Placeholder />}
      unloader={<Placeholder />}
      className={className}
    />
  );
}
