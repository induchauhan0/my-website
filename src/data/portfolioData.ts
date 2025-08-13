// Portfolio Data - Based on Phase 1 Specifications
export interface ProjectCard {
  id: string;
  title: string;
  category: string[];
  role: string;
  summary: string;
  tools: string[];
  responsibilities: string[];
  beforeAfter: string[];
  metrics?: {
    views?: string;
    engagement?: string;
    performance?: string;
    [key: string]: string | undefined;
  };
  links: {
    video?: string;
    instagram?: string;
    youtube?: string;
    behance?: string;
    facebook?: string;
  };
  media: {
    coverImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    gallery: Array<{
      src: string;
      alt: string;
      type: 'image' | 'video';
    }>;
  };
  featured: boolean;
  sortOrder: number;
  dateCompleted: string;
  client: string;
  status: string;
}

export interface AIImageCard {
  id: string;
  title: string;
  category: string;
  objective: string;
  promptOrWorkflow: string;
  resultNotes: string;
  usageContext: string;
  technicalSpecs: {
    resolution: string;
    aspectRatio: string;
    format: string;
    colorProfile: string;
  };
  assets: Array<{
    src: string;
    alt: string;
    format: string;
    size: string;
  }>;
  credits: string[];
  tags: string[];
  featured: boolean;
  dateCreated: string;
  aiModel: string;
  iterations: number;
  promptVersion: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: {
    start: string;
    end: string;
    display: string;
  };
  type: string;
  description: string;
  achievements: string[];
  metrics: {
    [key: string]: string;
  };
  skillsUsed: string[];
  featured: boolean;
  sortOrder: number;
}

// Portfolio Projects Data
export const portfolioProjects: ProjectCard[] = [
  {
    id: "tech-iela-shorts",
    title: "TECH-iELA Shorts — Platform-Optimized Edits",
    category: ["Video Editing", "Social Shorts", "Motion Graphics"],
    role: "Video Editor & Motion Designer",
    summary: "Short-form tech explainers tailored for YouTube and Instagram Shorts with kinetic text, smooth transitions, and engaging overlays. Optimized for 8M+ subscriber audience with focus on retention and engagement.",
    tools: ["Adobe Premiere Pro", "After Effects", "Veo AI", "Freepik"],
    responsibilities: [
      "Long-form to short-form cutdowns",
      "Hook crafting and retention optimization",
      "Kinetic typography and captions",
      "Smooth transitions and visual effects",
      "Brand-consistent overlays and graphics"
    ],
    beforeAfter: [
      "Transformed raw long-form content into engaging 20-30 second shorts",
      "Added dynamic transitions and kinetic typography for better retention",
      "Implemented platform-specific optimizations for maximum reach"
    ],
    metrics: {
      views: "8M+ subscriber reach",
      engagement: "Above-average retention rates",
      performance: "Optimized for viral potential"
    },
    links: {
      video: "[PLACEHOLDER LINK]",
      instagram: "[PLACEHOLDER LINK]",
      youtube: "[PLACEHOLDER LINK]"
    },
    media: {
      coverImage: {
        src: "/images/portfolio/social-media-short-form-content-instagram-youtube-examples.jpg",
        alt: "TECH-iELA Shorts video editing showcase",
        width: 1024,
        height: 852
      },
      gallery: [
        {
          src: "/images/portfolio/premiere_pro_video_editing_timeline_interface.jpg",
          alt: "Video editing timeline interface",
          type: "image"
        },
        {
          src: "/images/portfolio/social_media_short_form_video_examples_instagram_youtube.jpg",
          alt: "Short-form content examples",
          type: "image"
        }
      ]
    },
    featured: true,
    sortOrder: 1,
    dateCompleted: "2024-12-01",
    client: "TECH-iELA",
    status: "completed"
  },
  {
    id: "brand-x-product-ad",
    title: "Brand X Product Ad Campaign",
    category: ["Ads & Campaigns", "Motion Graphics"],
    role: "Creative Director & Video Editor",
    summary: "High-converting Instagram and Facebook ad campaign for tech gadget featuring AI-assisted scripting, animated product highlights, and performance-optimized copy that drove significant conversion rates.",
    tools: ["Adobe Premiere Pro", "After Effects", "ChatGPT", "Freepik"],
    responsibilities: [
      "AI-assisted script development with ChatGPT",
      "Animated product feature highlights",
      "Performance-style copywriting",
      "A/B testing different creative variations",
      "Conversion rate optimization"
    ],
    beforeAfter: [
      "Developed concept from basic product brief to full campaign",
      "Created multiple ad variations for A/B testing",
      "Achieved above-industry-average conversion rates"
    ],
    links: {
      video: "[PLACEHOLDER LINK]",
      instagram: "[PLACEHOLDER LINK]",
      facebook: "[PLACEHOLDER LINK]"
    },
    media: {
      coverImage: {
        src: "/images/portfolio/modern_tech_gadget_advertisement_template.jpg",
        alt: "Tech product advertisement campaign",
        width: 460,
        height: 690
      },
      gallery: [
        {
          src: "/images/portfolio/modern_tech_gadgets_product_advertisement_collage.jpg",
          alt: "Product advertisement examples",
          type: "image"
        }
      ]
    },
    featured: true,
    sortOrder: 2,
    dateCompleted: "2024-11-15",
    client: "Brand X",
    status: "completed"
  },
  {
    id: "fitness-influencer-yz-branding",
    title: "Fitness Influencer YZ — Social Media Branding",
    category: ["Graphic Design", "Branding/UI", "Video Editing"],
    role: "Brand Designer & Video Editor",
    summary: "Complete visual rebrand for fitness influencer including Instagram and YouTube assets, brand consistency guidelines, animated text overlays, and compelling call-to-action graphics across all content.",
    tools: ["Adobe Premiere Pro", "Photoshop", "Illustrator", "Veo AI"],
    responsibilities: [
      "Brand identity development",
      "Instagram story templates",
      "YouTube thumbnail designs",
      "Animated text and CTA overlays",
      "Brand consistency documentation"
    ],
    beforeAfter: [
      "Established cohesive brand identity from scattered visuals",
      "Created template system for consistent content creation",
      "Improved brand recognition and follower engagement"
    ],
    links: {
      instagram: "[PLACEHOLDER LINK]",
      youtube: "[PLACEHOLDER LINK]",
      behance: "[PLACEHOLDER LINK]"
    },
    media: {
      coverImage: {
        src: "/images/portfolio/fitness_influencer_branding_graphics_design_mockup.jpg",
        alt: "Fitness influencer branding showcase",
        width: 500,
        height: 500
      },
      gallery: [
        {
          src: "/images/portfolio/fitness_influencer_branding_mockup_graphics.jpg",
          alt: "Social media branding templates",
          type: "image"
        }
      ]
    },
    featured: true,
    sortOrder: 3,
    dateCompleted: "2024-10-20",
    client: "Fitness Influencer YZ",
    status: "completed"
  },
  {
    id: "motion-graphics-reel",
    title: "Motion Graphics Showcase Reel",
    category: ["Motion Graphics"],
    role: "Motion Graphics Designer",
    summary: "Dynamic motion graphics compilation featuring kinetic typography, smooth transitions, and visual effects across various projects and client work.",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
    responsibilities: [
      "Kinetic typography design",
      "3D animation and modeling",
      "Color grading and visual effects",
      "Sound design integration",
      "Reel compilation and pacing"
    ],
    beforeAfter: [
      "Compiled best motion graphics work into cohesive showcase",
      "Enhanced visual consistency across different projects",
      "Created compelling narrative flow for portfolio presentation"
    ],
    links: {
      video: "[PLACEHOLDER LINK]",
      behance: "[PLACEHOLDER LINK]"
    },
    media: {
      coverImage: {
        src: "/images/portfolio/colorful_dynamic_motion_graphics_illustration.jpg",
        alt: "Motion graphics showcase examples",
        width: 1280,
        height: 720
      },
      gallery: [
        {
          src: "/images/portfolio/animator_working_on_motion_graphics_colorful.jpg",
          alt: "Motion graphics creation process",
          type: "image"
        }
      ]
    },
    featured: false,
    sortOrder: 4,
    dateCompleted: "2024-09-30",
    client: "Portfolio Showcase",
    status: "completed"
  }
];

// AI Creations Data
export const aiImageGallery: AIImageCard[] = [
  {
    id: "futuristic-product-hero",
    title: "Futuristic Product Hero",
    category: "Image Generation",
    objective: "Premium hero visual for landing page sections with glassmorphism aesthetic",
    promptOrWorkflow: "Futuristic glassmorphism product scene, dark gradient background (black→emerald), soft volumetric glow, neon-green rim light, shallow depth of field, crisp reflections on glass panel, premium cinematic lighting, clean composition, space for headline text, 4K quality, aspect ratio 16:9",
    resultNotes: "Matches site palette perfectly with neon green accents and emerald gradient. Provides ample negative space for overlay text and call-to-action buttons while maintaining premium aesthetic.",
    usageContext: "Hero sections, product showcases, premium content backgrounds",
    technicalSpecs: {
      resolution: "4K (3840x2160)",
      aspectRatio: "16:9",
      format: "WebP, JPEG fallback",
      colorProfile: "sRGB"
    },
    assets: [
      {
        src: "/images/ai-creations/holographic_futuristic_data_display_3d_ui.jpg",
        alt: "Futuristic glassmorphism product hero with neon accents",
        format: "jpg",
        size: "45KB"
      }
    ],
    credits: [
      "Prompt & composition: Bhavesh Goyal",
      "AI Model: Veo",
      "Post-processing: Adobe Photoshop"
    ],
    tags: ["glassmorphism", "neon", "product", "hero", "premium", "futuristic"],
    featured: true,
    dateCreated: "2025-01-15",
    aiModel: "Veo",
    iterations: 3,
    promptVersion: "v2.1"
  },
  {
    id: "ai-brain-network",
    title: "AI Brain Network",
    category: "Image Generation",
    objective: "Conceptual visual for AI innovations section representing human creativity and AI assistance",
    promptOrWorkflow: "Digital brain network with glowing neural pathways, neon green synaptic connections, dark gradient background, floating data particles, holographic effect, represents AI creativity and innovation, 4K, aspect ratio 1:1",
    resultNotes: "Perfect representation of the intersection of human creativity and AI assistance. Vibrant neon green connections align with brand palette.",
    usageContext: "AI innovations section, technology showcases, creative process visualization",
    technicalSpecs: {
      resolution: "4K (2160x2160)",
      aspectRatio: "1:1",
      format: "WebP, JPEG fallback",
      colorProfile: "sRGB"
    },
    assets: [
      {
        src: "/images/ai-creations/ai_brain_digital_network_neon_green_circuitry.jpg",
        alt: "Digital brain network with neon green neural pathways",
        format: "jpg",
        size: "66KB"
      }
    ],
    credits: [
      "Prompt & composition: Bhavesh Goyal",
      "AI Model: Freepik AI"
    ],
    tags: ["AI", "brain", "network", "neural", "innovation", "creativity"],
    featured: true,
    dateCreated: "2025-01-10",
    aiModel: "Freepik AI",
    iterations: 2,
    promptVersion: "v1.5"
  }
];

// Experience Data
export const experienceData: ExperienceEntry[] = [
  {
    id: "freelance-video-editor",
    company: "Freelance",
    position: "Video Editor & Creative Designer",
    location: "Mumbai, India",
    duration: {
      start: "2022-01-01",
      end: "Present",
      display: "3 years"
    },
    type: "freelance",
    description: "Handling independent video editing and creative design projects alongside full-time work, specializing in social media content, brand videos, and AI-enhanced workflows for diverse clients.",
    achievements: [
      "Delivered 100+ successful video projects with consistent client satisfaction",
      "Developed efficient workflows that reduced project turnaround time by 40%",
      "Built strong client relationships leading to repeat business and referrals",
      "Integrated AI tools to enhance creative output while maintaining quality standards"
    ],
    metrics: {
      projects_delivered: "100+",
      client_retention: "90%",
      turnaround_improvement: "40%",
      client_satisfaction: "98%"
    },
    skillsUsed: [
      "Adobe Premiere Pro",
      "After Effects",
      "AI Tools Integration",
      "Client Management",
      "Project Planning",
      "Social Media Optimization"
    ],
    featured: true,
    sortOrder: 1
  },
  {
    id: "mediaguys-delhi",
    company: "Mediaguys",
    position: "Video Editor & Creative Designer",
    location: "Delhi, India",
    duration: {
      start: "2023-01-01",
      end: "2024-06-30",
      display: "1.5 years"
    },
    type: "full-time",
    description: "Led video production and creative design for multiple client brands, focusing on social media optimization and engagement-driven content.",
    achievements: [
      "Increased video engagement by 25% through optimized editing techniques",
      "Boosted ad conversion rates by 15% with compelling visual storytelling",
      "Managed end-to-end video production for multiple client brands",
      "Developed streamlined workflow reducing project turnaround by 30%"
    ],
    metrics: {
      engagement_increase: "+25%",
      conversion_improvement: "+15%",
      projects_completed: "50+",
      client_satisfaction: "95%"
    },
    skillsUsed: [
      "Adobe Premiere Pro",
      "After Effects",
      "Photoshop",
      "Client Communication",
      "Project Management",
      "Social Media Strategy"
    ],
    featured: true,
    sortOrder: 2
  },
  {
    id: "cofly-delhi",
    company: "Cofly",
    position: "Creative Video Editor",
    location: "Delhi, India",
    duration: {
      start: "2022-06-01",
      end: "2023-01-01",
      display: "7 months"
    },
    type: "full-time",
    description: "Specialized in creating engaging video content for social platforms with focus on performance marketing and lead generation.",
    achievements: [
      "Achieved 40% increase in video engagement across social platforms",
      "Generated 20% more inbound leads through strategic content optimization",
      "Developed brand-consistent video templates and style guides",
      "Implemented data-driven content strategies for improved ROI"
    ],
    metrics: {
      engagement_boost: "+40%",
      lead_generation: "+20%",
      template_creation: "15+",
      roi_improvement: "+35%"
    },
    skillsUsed: [
      "Adobe Premiere Pro",
      "After Effects",
      "Performance Marketing",
      "Analytics",
      "Content Strategy",
      "Brand Development"
    ],
    featured: true,
    sortOrder: 3
  },
  {
    id: "paghdhare-institute",
    company: "Paghdhare Institute",
    position: "Graphics Design Lecturer",
    location: "Mumbai, India",
    duration: {
      start: "2024-01-01",
      end: "Present",
      display: "Present"
    },
    type: "part-time",
    description: "Teaching graphics design fundamentals and modern digital workflows to aspiring designers, focusing on industry-relevant skills and portfolio development.",
    achievements: [
      "Mentored 50+ students in building their first professional portfolios",
      "Achieved 85% improvement in student work quality through structured curriculum",
      "Developed comprehensive course materials for modern design workflows",
      "Maintained 95% student satisfaction rating across all courses"
    ],
    metrics: {
      students_mentored: "50+",
      quality_improvement: "85%",
      satisfaction_rating: "95%",
      course_completion: "92%"
    },
    skillsUsed: [
      "Curriculum Development",
      "Adobe Creative Suite",
      "Portfolio Development",
      "Mentoring",
      "Industry Standards",
      "Student Assessment"
    ],
    featured: true,
    sortOrder: 4
  }
];

// Education & Training Data
export const educationData = [
  {
    id: "fyba-psychology",
    degree: "FYBA (Psychology)",
    institution: "SONOPANT DANDEKAR ARTS COLLEGE, PALGHAR",
    status: "Present",
    year: "Present",
    type: "degree"
  },
  {
    id: "adobe-certification",
    certification: "Adobe Premiere Pro Certified Expert",
    institution: "Adobe",
    year: "2023",
    type: "certification"
  },
  {
    id: "filmora-training",
    training: "Advanced Color Grading Workshop",
    institution: "Filmora Academy",
    year: "2024",
    type: "training"
  }
];

// Awards & Recognition Data
export const awardsData = [
  {
    id: "mediaguys-award",
    title: "Creative Video Editing Excellence Award From Mediaguys",
    year: "2023",
    description: "Honored for delivering high-quality, visually engaging edits with strong storytelling elements for digital campaigns",
    icon: "🏆"
  },
  {
    id: "cofly-collaboration",
    title: "Cofly X Mediaguys Collaboration Recognition",
    year: "2024",
    description: "Acknowledged for exceptional contribution in editing and post-production for the joint promotional series, boosting brand engagement",
    icon: "🎖"
  },
  {
    id: "hundred-projects",
    title: "100+ Successful Video Projects Delivered",
    year: "2024",
    description: "Completed over 100 video editing projects, including brand promos, YouTube content, and social media reels, with consistent client satisfaction",
    icon: "⭐"
  }
];

// Portfolio Categories
export const portfolioCategories = [
  "Video Editing",
  "Motion Graphics",
  "Graphic Design",
  "Branding/UI",
  "Ads & Campaigns",
  "Social Shorts"
];

// AI Creation Categories
export const aiCreationCategories = [
  "Image Generation",
  "AI-Aided Videos & Ads",
  "Prompt Library"
];

// Skills Data
export const skillsData = {
  technical: [
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Canva Pro",
    "Photoshop",
    "Illustrator",
    "Veo AI",
    "ChatGPT",
    "Minimex",
    "Freepik AI"
  ],
  creative: [
    "Video storytelling and narrative structure",
    "Brand identity and visual consistency",
    "UI/UX design principles",
    "Social-first content strategy",
    "Hook crafting and retention optimization",
    "Platform optimization (YouTube Shorts, Instagram Reels, TikTok)",
    "Motion graphics and kinetic typography"
  ],
  soft: [
    "Clear communication and client collaboration",
    "Leadership and team coordination",
    "Creative problem-solving under tight deadlines",
    "Time management and project prioritization",
    "Adaptability to emerging platforms and trends"
  ]
};

// Tool badges for hero section
export const toolBadges = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop & Illustrator",
  "Veo AI",
  "ChatGPT",
  "Freepik AI",
  "Minimex"
];

// Testimonials Data
export const testimonialsData = [
  {
    id: 1,
    content: "Working with Bhavesh has been a game-changer for our interior design marketing. His ability to transform our design concepts into compelling video content that resonates with our target audience is remarkable. The engagement on our social media has increased by 60% since we started collaborating.",
    author: "Ananya Mehta",
    position: "Marketing Manager",
    company: "UrbanHues Interiors",
    location: "India",
    avatar: "/images/professional/creative_designer_modern_workspace_portrait.jpg",
    rating: 5,
    project: "Social Media Video Campaign",
    results: "+60% engagement increase"
  },
  {
    id: 2,
    content: "Bhavesh's understanding of international markets and his ability to create content that works across different cultures is exceptional. His AI-enhanced workflow delivered our campaign assets 50% faster than traditional methods, without compromising on quality. Highly recommend for global brands.",
    author: "Daniel Roberts",
    position: "Creative Director",
    company: "BrightFrame Studios",
    location: "UK",
    avatar: "/images/professional/professional_creative_designer_modern_workspace.jpg",
    rating: 5,
    project: "International Brand Campaign",
    results: "50% faster delivery"
  },
  {
    id: 3,
    content: "The strategic approach Bhavesh brings to video content creation is outstanding. He doesn't just edit videos; he crafts visual stories that drive business results. Our brand's video content now consistently generates 3x more leads than before our collaboration.",
    author: "Arjun Sharma",
    position: "Founder & CEO",
    company: "PixelWave Media",
    location: "India",
    avatar: "/images/professional/creative_designer_modern_workspace_portrait.jpg",
    rating: 5,
    project: "Lead Generation Video Series",
    results: "3x lead generation increase"
  }
];

// Contact Information
export const contactInfo = {
  email: "creativebhavesh.ds@gmail.com",
  phone: "+91 99751 99610",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/bhaveshgoyal-ds/",
  instagram: "https://www.instagram.com/bhaveshgoyal.ds/",
  fiverr: "#", // To be updated with actual Fiverr profile
  availability: "Freelance & Full-Time"
};

// Brand Logos for Slider
export const brandLogos = [
  { name: "TECH-iELA", logo: "/images/brands/tech-iela-logo.png" },
  { name: "Mediaguys", logo: "/images/brands/mediaguys-logo.png" },
  { name: "Cofly", logo: "/images/brands/cofly-logo.png" },
  { name: "UrbanHues Interiors", logo: "/images/brands/urbanhues-logo.png" },
  { name: "BrightFrame Studios", logo: "/images/brands/brightframe-logo.png" },
  { name: "PixelWave Media", logo: "/images/brands/pixelwave-logo.png" },
  { name: "Paghdhare Institute", logo: "/images/brands/paghdhare-logo.png" }
];

// FAQ Data
export const faqData = [
  {
    id: 1,
    question: "What's Bhavesh's typical turnaround time for video projects?",
    answer: "Bhavesh typically delivers standard video editing projects within 1-2 weeks. For urgent requests, he can accommodate rush jobs within 2-3 days with premium rates. The timeline ultimately depends on project complexity and his current workload, but he's known for his reliability and meeting deadlines."
  },
  {
    id: 2,
    question: "Does Bhavesh work with international clients?",
    answer: "Absolutely! Bhavesh has extensive experience working with clients worldwide, including teams in the UK, US, and across India. He's comfortable with different time zones and ensures smooth communication throughout the project lifecycle. All file transfers and collaboration happen digitally."
  },
  {
    id: 3,
    question: "What file formats does Bhavesh deliver?",
    answer: "Bhavesh delivers in any format you need: MP4, MOV, AVI for videos; PNG, JPG, PDF, AI, PSD for graphics. He also provides source files upon request and can optimize content for specific platforms like Instagram, YouTube, or TikTok with platform-specific specifications."
  },
  {
    id: 4,
    question: "Does Bhavesh offer revisions on his work?",
    answer: "Yes! Bhavesh includes 2-3 rounds of revisions in his standard packages to ensure you're completely satisfied with the final result. Additional revisions can be accommodated based on project scope and requirements. He believes in collaborative work to achieve the perfect outcome."
  },
  {
    id: 5,
    question: "Can Bhavesh work with existing brand guidelines?",
    answer: "Definitely! Bhavesh excels at working within established brand systems and maintaining consistency across all visual content. Whether you have detailed brand guidelines or just a logo and color palette, he can ensure your content stays true to your brand identity."
  },
  {
    id: 6,
    question: "How does Bhavesh integrate AI tools in his creative process?",
    answer: "Bhavesh specializes in AI-enhanced workflows that speed up production while maintaining creative quality. He strategically uses tools like Veo for footage generation, ChatGPT for script development, and Freepik for asset creation. This approach allows him to deliver high-quality work faster and often at better value for clients."
  },
  {
    id: 7,
    question: "What makes Bhavesh different from other video editors?",
    answer: "Bhavesh combines traditional storytelling expertise with cutting-edge AI tools, plus he has experience with major channels like TECH-iELA (8M+ subscribers). His background in psychology helps him understand audience behavior, and his teaching experience means he can explain complex concepts clearly to clients."
  },
  {
    id: 8,
    question: "How can I get started with a project with Bhavesh?",
    answer: "Simply reach out through the contact form on this website, send a direct email to creativebhavesh.ds@gmail.com, or connect on LinkedIn. Bhavesh typically responds within 24 hours and can schedule a call to discuss your project goals, timeline, and budget. He's always excited to hear about new creative challenges!"
  }
];
