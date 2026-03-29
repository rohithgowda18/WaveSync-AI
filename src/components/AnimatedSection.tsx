import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface Props {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}

export default function AnimatedSection({ children, className = '', animation = 'animate-slide-up', delay = '' }: Props) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? `${animation} ${delay}` : 'opacity-0'}`}
      style={{ animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
}
