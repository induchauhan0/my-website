import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create root element
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Add meta description to document head
document.addEventListener('DOMContentLoaded', () => {
  // Set document title
  document.title = 'Bhavesh Goyal - Creative Video Editor & Graphics Designer | AI-Enhanced Workflows';
  
  // Add meta description
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Professional video editor and graphic designer from Mumbai specializing in AI-enhanced workflows, social media content, and platform optimization. 3+ years experience with TECH-iELA Shorts (8M+ subscribers).';
  document.head.appendChild(metaDescription);
  
  // Add meta keywords
  const metaKeywords = document.createElement('meta');
  metaKeywords.name = 'keywords';
  metaKeywords.content = 'video editor, graphic designer, AI workflows, social media content, YouTube Shorts, Instagram Reels, Mumbai, freelance, motion graphics, brand design';
  document.head.appendChild(metaKeywords);
  
  // Add meta author
  const metaAuthor = document.createElement('meta');
  metaAuthor.name = 'author';
  metaAuthor.content = 'Bhavesh Goyal';
  document.head.appendChild(metaAuthor);
  
  // Add Open Graph tags
  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.content = 'Bhavesh Goyal - Creative Video Editor & Graphics Designer';
  document.head.appendChild(ogTitle);
  
  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.content = 'Professional video editor and graphic designer specializing in AI-enhanced workflows and social media content optimization.';
  document.head.appendChild(ogDescription);
  
  const ogType = document.createElement('meta');
  ogType.setAttribute('property', 'og:type');
  ogType.content = 'website';
  document.head.appendChild(ogType);
  
  const ogUrl = document.createElement('meta');
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.content = window.location.href;
  document.head.appendChild(ogUrl);
  
  const ogImage = document.createElement('meta');
  ogImage.setAttribute('property', 'og:image');
  ogImage.content = '/images/hero/futuristic_glassmorphism_neon_green_background.jpg';
  document.head.appendChild(ogImage);
  
  // Add Twitter Card tags
  const twitterCard = document.createElement('meta');
  twitterCard.name = 'twitter:card';
  twitterCard.content = 'summary_large_image';
  document.head.appendChild(twitterCard);
  
  const twitterTitle = document.createElement('meta');
  twitterTitle.name = 'twitter:title';
  twitterTitle.content = 'Bhavesh Goyal - Creative Video Editor & Graphics Designer';
  document.head.appendChild(twitterTitle);
  
  const twitterDescription = document.createElement('meta');
  twitterDescription.name = 'twitter:description';
  twitterDescription.content = 'Professional video editor and graphic designer specializing in AI-enhanced workflows and social media content optimization.';
  document.head.appendChild(twitterDescription);
  
  const twitterImage = document.createElement('meta');
  twitterImage.name = 'twitter:image';
  twitterImage.content = '/images/hero/futuristic_glassmorphism_neon_green_background.jpg';
  document.head.appendChild(twitterImage);
});