import React from "react";
import { ArrowLeft, ExternalLink, Code, Video, Palette, Package, FileText } from "lucide-react";

export default function Licenses() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Licenses & Credits</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            SaveCash is built using open-source libraries, frameworks, and creative assets. We're grateful to the developers and creators who have contributed to these projects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          
          {/* Video Animation */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Video Animation</h2>
                <p className="text-base text-gray-700 mb-4">
                  The animated video used in the AI Assistant section of our landing page.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Video File Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[100px]">File Name:</span>
                        <code className="flex-1 bg-white px-3 py-1 rounded border border-gray-300 text-gray-900 font-mono break-all">
                          lv_0_20251026134622.mp4
                        </code>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[100px]">File Path:</span>
                        <code className="flex-1 bg-white px-3 py-1 rounded border border-gray-300 text-gray-900 font-mono break-all">
                          /public/lv_0_20251026134622.mp4
                        </code>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[100px]">Video ID:</span>
                        <code className="flex-1 bg-white px-3 py-1 rounded border border-gray-300 text-gray-900 font-mono">
                          lv_0_20251026134622
                        </code>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[100px]">Usage:</span>
                        <span className="flex-1 text-gray-700">AI Assistant Section Background Animation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UI Component Libraries */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">UI Component Libraries</h2>
                
                <div className="space-y-6">
                  
                  {/* shadcn/ui */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">shadcn/ui</h3>
                        <p className="text-sm text-gray-600">Beautiful, accessible components built with Radix UI and Tailwind CSS</p>
                      </div>
                      <a 
                        href="https://ui.shadcn.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                        <a 
                          href="https://github.com/shadcn-ui/ui/blob/main/LICENSE.md" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          MIT License
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">GitHub:</span>
                        <a 
                          href="https://github.com/shadcn-ui/ui" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          github.com/shadcn-ui/ui
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">Usage:</span>
                        <span className="text-gray-700">UI components including buttons, dialogs, forms, and more</span>
                      </div>
                    </div>
                  </div>

                  {/* Radix UI */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Radix UI</h3>
                        <p className="text-sm text-gray-600">Low-level UI primitives with accessibility built-in</p>
                      </div>
                      <a 
                        href="https://www.radix-ui.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                        <a 
                          href="https://github.com/radix-ui/primitives/blob/main/LICENSE" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          MIT License
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">GitHub:</span>
                        <a 
                          href="https://github.com/radix-ui/primitives" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          github.com/radix-ui/primitives
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">Usage:</span>
                        <span className="text-gray-700">Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown, Select, Tabs, and more</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Icon Libraries */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Palette className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Icon Libraries</h2>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Lucide React</h3>
                      <p className="text-sm text-gray-600">Beautiful & consistent icon toolkit</p>
                    </div>
                    <a 
                      href="https://lucide.dev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                      <a 
                        href="https://github.com/lucide-icons/lucide/blob/main/LICENSE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        ISC License
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">GitHub:</span>
                      <a 
                        href="https://github.com/lucide-icons/lucide" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/lucide-icons/lucide
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">Version:</span>
                      <span className="text-gray-700">0.487.0</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">Usage:</span>
                      <span className="text-gray-700">All icons throughout the application</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Animation Libraries */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Package className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Animation Libraries</h2>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Motion (Framer Motion)</h3>
                      <p className="text-sm text-gray-600">Production-ready motion library for React</p>
                    </div>
                    <a 
                      href="https://www.framer.com/motion/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                      <a 
                        href="https://github.com/framer/motion/blob/main/LICENSE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        MIT License
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">GitHub:</span>
                      <a 
                        href="https://github.com/framer/motion" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/framer/motion
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-700 min-w-[80px]">Usage:</span>
                      <span className="text-gray-700">Smooth animations, scroll-triggered effects, and motion transitions throughout the site</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Frameworks */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Package className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Core Frameworks</h2>
                
                <div className="space-y-4">
                  
                  {/* React */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">React</h3>
                        <p className="text-sm text-gray-600">A JavaScript library for building user interfaces</p>
                      </div>
                      <a 
                        href="https://react.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                        <a 
                          href="https://github.com/facebook/react/blob/main/LICENSE" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          MIT License
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">Version:</span>
                        <span className="text-gray-700">18.3.1</span>
                      </div>
                    </div>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Tailwind CSS</h3>
                        <p className="text-sm text-gray-600">A utility-first CSS framework</p>
                      </div>
                      <a 
                        href="https://tailwindcss.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                        <a 
                          href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          MIT License
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">Usage:</span>
                        <span className="text-gray-700">All styling and layout throughout the application</span>
                      </div>
                    </div>
                  </div>

                  {/* Vite */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Vite</h3>
                        <p className="text-sm text-gray-600">Next generation frontend tooling</p>
                      </div>
                      <a 
                        href="https://vitejs.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">License:</span>
                        <a 
                          href="https://github.com/vitejs/vite/blob/main/LICENSE" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          MIT License
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-700 min-w-[80px]">Version:</span>
                        <span className="text-gray-700">6.4.1</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Additional Dependencies */}
          <section className="pb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gray-100 rounded-lg">
                <FileText className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Additional Dependencies</h2>
                <p className="text-base text-gray-700 mb-6">
                  Additional open-source libraries and tools used in the project:
                </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">UI & Styling</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• class-variance-authority (CVA)</li>
                        <li>• clsx & tailwind-merge</li>
                        <li>• next-themes</li>
                        <li>• sonner (Toast notifications)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Forms & Data</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• react-hook-form</li>
                        <li>• @supabase/supabase-js</li>
                        <li>• recharts (Data visualization)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Components</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• embla-carousel-react</li>
                        <li>• react-day-picker</li>
                        <li>• cmdk (Command menu)</li>
                        <li>• input-otp</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Build Tools</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• @vitejs/plugin-react-swc</li>
                        <li>• @tailwindcss/postcss</li>
                        <li>• autoprefixer</li>
                        <li>• postcss</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-600">
                    All dependencies are available under their respective open-source licenses. Full dependency list available in <code className="bg-white px-2 py-1 rounded border border-gray-300">package.json</code>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Tagline */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-base text-gray-600 mb-2">
              We're grateful to all the open-source contributors who make SaveCash possible.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              SaveCash — Built in California. Operating globally.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
