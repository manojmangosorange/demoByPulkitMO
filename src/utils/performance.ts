// Performance utilities

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

// Critical resource preloading
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/upload-image/ad985e4f-a179-4593-963e-c3031c12dcff.webp', // favicon
    // Add other critical images here
  ];
  
  return preloadImages(criticalImages);
};

// Font loading optimization
export const preloadFonts = () => {
  const fonts = [
    // Add critical fonts here if any
  ];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = font;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Resource hints for external domains
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//mangosorange.co.in' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  ];
  
  hints.forEach(({ rel, href }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  });
};

// Lazy loading for non-critical CSS
export const loadCSSLazy = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};