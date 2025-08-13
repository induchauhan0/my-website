import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const TabGroup: React.FC<TabGroupProps> = ({ tabs, defaultTab, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, tabId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveTab(tabId);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      let nextIndex;
      
      if (event.key === 'ArrowRight') {
        nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
      } else {
        nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      }
      
      setActiveTab(tabs[nextIndex].id);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div 
        className="tab-container mb-8"
        role="tablist"
        aria-label="Portfolio sections"
      >
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, tab.id)}
              className={`tab-button focus-ring ${
                activeTab === tab.id ? 'active' : ''
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={`transition-all duration-300 ${
              activeTab === tab.id
                ? 'opacity-100 visible'
                : 'opacity-0 invisible absolute inset-0'
            }`}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabGroup;