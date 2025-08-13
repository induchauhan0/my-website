import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Disable complex animations for users who prefer reduced motion
      gsap.set('*', { clearProps: 'all' });
      return;
    }

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Scroll reveal animations
      gsap.utils.toArray('.scroll-reveal').forEach((element: any) => {
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Stagger animation for grid items
      gsap.utils.toArray('.stagger-item').forEach((element: any, index) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Hero floating animation
      gsap.to('.floating-element', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });

      // Text reveal animation
      gsap.utils.toArray('.text-reveal').forEach((element: any) => {
        const text = element.textContent;
        element.innerHTML = text.split('').map((char: string) => 
          `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
        
        gsap.to(element.children, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%'
          }
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};

export const useWaterRipple = () => {
  useEffect(() => {
    const createRipple = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      if (!target.classList.contains('water-ripple-cursor')) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';

      target.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    };

    const elements = document.querySelectorAll('.water-ripple-cursor');
    elements.forEach(element => {
      element.addEventListener('click', createRipple);
    });

    return () => {
      elements.forEach(element => {
        element.removeEventListener('click', createRipple);
      });
    };
  }, []);
};

export const useScrollSpy = (sections: string[]) => {
  const activeSection = useRef(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            activeSection.current = sectionId;
            
            // Dispatch custom event for header updates
            window.dispatchEvent(new CustomEvent('section-change', {
              detail: { activeSection: sectionId }
            }));
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return activeSection.current;
};
