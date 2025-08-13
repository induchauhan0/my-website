import React from 'react';
import { Brain, Sparkles, Code, Copy, ExternalLink, Zap } from 'lucide-react';
import TabGroup from '../ui/TabGroup';
import { aiImageGallery } from '../../data/portfolioData';

const AICreationsSection: React.FC = () => {
  // AI Workflows Data
  const aiWorkflows = [
    {
      title: "Social Shorts Enhancer Workflow",
      objective: "Transform long-form content into engaging short-form videos",
      steps: [
        "Content Analysis: Use ChatGPT to identify key hooks and moments in source material",
        "Strategic Cutting: Extract 15-30 second segments with highest engagement potential",
        "Kinetic Captions: Add dynamic text overlays using After Effects templates",
        "Sound Design: Layer trending audio and SFX hits for platform optimization",
        "Export Optimization: Render in 1080×1920 (9:16) with platform-specific compression"
      ],
      tools: ["Adobe Premiere Pro", "After Effects", "ChatGPT", "Freepik", "Veo"]
    },
    {
      title: "Product Ad Builder Workflow",
      objective: "Create high-converting product advertisements from concept to delivery",
      steps: [
        "Concept Development: Prompt ChatGPT for 3 unique ad angles and hooks",
        "Storyboard Creation: Visualize key scenes and product highlight moments",
        "Asset Gathering: Source or create product shots, lifestyle footage",
        "Motion Highlights: Animate key product features using After Effects",
        "CTA Integration: Design and animate compelling end-card with clear call-to-action"
      ],
      tools: ["ChatGPT", "Adobe Premiere Pro", "After Effects", "Freepik", "Veo"]
    },
    {
      title: "Fitness Micro-Tutorials Workflow",
      objective: "Create engaging educational content for fitness influencers",
      steps: [
        "Hook Development: Craft attention-grabbing opening line with fitness benefit",
        "3-Step Breakdown: Structure content into digestible instructional segments",
        "Brand Overlays: Apply consistent lower-thirds and progress indicators",
        "Outro CTA: Include branded call-to-action encouraging engagement",
        "Template Creation: Save reusable motion graphics templates for efficiency"
      ],
      tools: ["Adobe Premiere Pro", "After Effects", "Illustrator"]
    },
    {
      title: "Style Consistency Engine Workflow",
      objective: "Maintain visual brand consistency across all content",
      steps: [
        "Color Token Setup: Define and save brand colors (neon green, emerald, gold accents)",
        "Typography System: Create hierarchy with Poppins/SF Pro Display font scaling",
        "MOGRT Creation: Build reusable Motion Graphics Templates for common elements",
        "Auto-Caption Styling: Set up branded caption styles with consistent positioning",
        "Quality Control: Implement review checklist ensuring brand compliance"
      ],
      tools: ["Adobe After Effects", "Premiere Pro", "Brand Guidelines"]
    }
  ];

  // Prompt Library Data
  const promptLibrary = [
    {
      category: "Product Hero Prompts",
      prompts: [
        {
          title: "Glass Product Display",
          prompt: "Premium product floating on glassmorphism platform, dark gradient background {accentColor}, soft rim lighting, reflective surface, clean composition, {aspect} ratio"
        },
        {
          title: "Tech Showcase",
          prompt: "Futuristic product presentation, holographic display, {accentColor} interface elements, depth of field, premium lighting, {aspect} ratio"
        }
      ]
    },
    {
      category: "UI Component Prompts",
      prompts: [
        {
          title: "Glass Card Interface",
          prompt: "Translucent glassmorphism card, subtle blur effect, {accentColor} border glow, floating shadow, modern UI aesthetic, {aspect} ratio"
        },
        {
          title: "Neon CTA Button",
          prompt: "Glowing button sprite with {accentColor} neon outline, hover state variations, glassmorphism surface, premium interactive element"
        }
      ]
    },
    {
      category: "Background Elements",
      prompts: [
        {
          title: "Abstract Wave",
          prompt: "Flowing abstract waves, gradient from black to {accentColor}, subtle particle effects, depth and movement, {aspect} ratio"
        },
        {
          title: "Parallax Layers",
          prompt: "Multi-layered background with depth, geometric shapes, {accentColor} highlights, parallax-ready composition, {aspect} ratio"
        }
      ]
    },
    {
      category: "Typography & Motion",
      prompts: [
        {
          title: "Kinetic Type Frame",
          prompt: "Dynamic typography layout, text in motion, {accentColor} highlights, modern sans-serif, energy and movement, {aspect} ratio"
        },
        {
          title: "Tech Lower-Third",
          prompt: "Futuristic lower-third graphics, {accentColor} accent lines, glassmorphism panel, space for name and title"
        }
      ]
    },
    {
      category: "Specialized Content",
      prompts: [
        {
          title: "Fitness Thumbnail",
          prompt: "High-energy fitness scene, person in action, {accentColor} energy effects, motivational aesthetic, YouTube thumbnail optimized"
        },
        {
          title: "Luxury Gradient",
          prompt: "Premium gradient wallpaper, smooth color transition to {accentColor}, subtle texture, elegant and sophisticated, {aspect} ratio"
        }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const aiTabs = [
    {
      id: 'image-generation',
      label: 'Image Generation',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="body-text max-w-3xl mx-auto">
              Explore my AI-generated visual assets created using cutting-edge tools like Veo, Freepik AI, and custom prompts. 
              Each image is crafted to match specific project requirements and brand aesthetics.
            </p>
          </div>
          
          <div className="ai-gallery-grid">
            {aiImageGallery.map((item, index) => (
              <div key={item.id} className="glass-panel overflow-hidden group stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={item.assets[0].src}
                    alt={item.assets[0].alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-xs font-medium text-neon-green rounded border border-neon-green/30">
                      {item.aiModel}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="component-title mb-2">{item.title}</h3>
                  <p className="text-sm text-text-subtle mb-3">{item.objective}</p>
                  
                  <div className="mb-4">
                    <p className="caption-text mb-2">Prompt:</p>
                    <div className="bg-glass-bg/50 p-3 rounded text-xs font-mono text-text-primary">
                      {item.promptOrWorkflow.length > 120 
                        ? `${item.promptOrWorkflow.substring(0, 120)}...` 
                        : item.promptOrWorkflow
                      }
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-text-subtle">
                    {item.credits.join(' • ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-workflows',
      label: 'AI-Aided Videos & Ads',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="body-text max-w-3xl mx-auto">
              Step-by-step workflows that integrate AI tools to streamline video production and enhance creative output. 
              These proven processes combine human creativity with AI efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {aiWorkflows.map((workflow, index) => (
              <div key={workflow.title} className="glass-panel p-8 stagger-item" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Zap className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="component-title mb-2">{workflow.title}</h3>
                    <p className="text-sm text-text-subtle">{workflow.objective}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="accent-title mb-3">Process Steps:</h4>
                  <div className="space-y-3">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex gap-3">
                        <div className="w-6 h-6 bg-neon-green/20 rounded-full flex items-center justify-center text-xs font-bold text-neon-green mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <p className="body-text flex-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="accent-title mb-3">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workflow.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-glass-bg border border-glass-border rounded text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'prompt-library',
      label: 'Prompt Library',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="body-text max-w-3xl mx-auto">
              A curated collection of proven AI prompts for various creative needs. Copy and customize these prompts 
              for your own projects. Variables in {'{brackets}'} can be replaced with your specific requirements.
            </p>
          </div>
          
          <div className="space-y-8">
            {promptLibrary.map((category, categoryIndex) => (
              <div key={category.category} className="scroll-reveal">
                <h3 className="subsection-title mb-6">
                  <Code className="w-6 h-6 text-neon-green inline-block mr-3" />
                  {category.category}
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.prompts.map((promptItem, promptIndex) => (
                    <div key={promptItem.title} className="glass-panel p-6 stagger-item">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="component-title">{promptItem.title}</h4>
                        <button
                          onClick={() => copyToClipboard(promptItem.prompt)}
                          className="p-2 glass-button hover:bg-neon-green/10 transition-colors duration-300"
                          title="Copy prompt to clipboard"
                        >
                          <Copy className="w-4 h-4 text-neon-green" />
                        </button>
                      </div>
                      
                      <div className="bg-glass-bg/50 p-4 rounded-lg">
                        <code className="text-sm text-text-primary font-mono">
                          {promptItem.prompt}
                        </code>
                      </div>
                      
                      <div className="mt-4 text-xs text-text-subtle">
                        Replace variables like {'{accentColor}'} and {'{aspect}'} with your specific values
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="ai-creations" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">
            <Brain className="w-12 h-12 text-neon-green inline-block mr-4" />
            AI Creations & Innovations
          </h2>
          <p className="text-xl text-text-subtle max-w-4xl mx-auto mb-8">
            AI isn't replacing creativity – it's amplifying it. My approach: concept → prompt → iterate → ship. 
            I leverage AI tools like Veo, ChatGPT, Minimex, and Freepik to accelerate ideation, enhance visual quality, 
            and deliver projects faster without compromising on creative vision.
          </p>
          
          <div className="glass-panel p-6 mx-auto max-w-2xl">
            <p className="body-text">
              <Sparkles className="w-5 h-5 text-neon-green inline-block mr-2" />
              Discover how I'm pushing the boundaries of content creation through intelligent tool integration and innovative workflows.
            </p>
          </div>
        </div>

        {/* AI Tabs */}
        <div className="scroll-reveal">
          <TabGroup tabs={aiTabs} defaultTab="image-generation" />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title mb-4">
              <Brain className="w-8 h-8 text-neon-green inline-block mr-3" />
              Ready to Explore AI-Enhanced Creativity?
            </h3>
            <p className="body-text mb-6 max-w-2xl mx-auto">
              Let's collaborate to integrate AI tools into your creative workflow. From concept development to final delivery, 
              I'll show you how AI can amplify your creative vision while maintaining authentic human storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Discuss AI Integration
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#work" className="btn-secondary">
                View Traditional Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICreationsSection;
