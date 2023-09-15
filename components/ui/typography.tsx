import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const TypographyH1 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...props}>
      {children}
    </h1>
  );
};

export const TypographyH3 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl underline',
        className
      )}
      {...props}>
      {children}
    </h3>
  );
};

export const TypographyH4 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}>
      {children}
    </h4>
  );
};

export const TypographyP = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-2', className)}
      {...props}>
      {children}
    </p>
  );
};

export const TypographyList = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={cn('my-4 ml-4 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  );
};

export const TypographyBlockquote = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}>
      {children}
    </blockquote>
  );
};
