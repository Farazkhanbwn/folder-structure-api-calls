import Image from "next/image";
import React from "react";

interface PrimayImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const PrimayImage: React.FC<PrimayImageProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className,
}) => {
  return (
    <div>
      <Image
      priority
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} min-w-[${width}]px`}
        style={{ width: `${width}px`, height: `${height}px` }}
        // style={{height: `${height}px`}}
      />
    </div>
  );
};

export default PrimayImage;
