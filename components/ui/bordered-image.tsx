import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const BorderedImage = ({
  src,
  alt = '',
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Image>) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        'rounded-lg object-cover border border-primary/50 border-4 shadow-lg',
        className
      )}
      {...props}
    />
  );
};
