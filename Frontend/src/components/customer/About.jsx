import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About Our AI-Enhanced Career Guidance System</h1>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">Empowering your career journey with personalized guidance powered by artificial intelligence.</p>
          </div>
        </div>
      </div>
      
      {/* Overview Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Overview</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="bg-gray-700 text-white rounded-xl shadow-lg p-8 md:p-10">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Welcome to our AI-Enhanced Career Guidance System, a cutting-edge solution developed for the Smart India Hackathon 2024 under the Ministry of Skill Development and Entrepreneurship (MSDE).
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Our platform is designed to revolutionize how individuals approach career planning by providing tailored pathways based on their unique attributes, aspirations, and potential. Through advanced AI algorithms, we analyze your aptitudes, skills, and preferences to recommend optimal career paths that align with your personal goals and market demands.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Whether you're a student exploring initial career options or a professional considering a career transition, our system offers data-driven insights to guide your decisions and maximize your career potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Discover the powerful tools and capabilities that make our system unique</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Comprehensive Aptitude Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our multi-dimensional assessment evaluates cognitive abilities, personality traits, interests, and values to create a holistic profile that serves as the foundation for career recommendations.
                </p>
                <div className="mt-6">
                  <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group focus:outline-none">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="rounded-full bg-indigo-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Personalized Career Recommendations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging machine learning algorithms, we match your profile against thousands of career paths to identify the most suitable options, providing detailed insights into why each recommendation is a good fit.
                </p>
                <div className="mt-6">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center group focus:outline-none">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="rounded-full bg-green-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Skill Gap Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our system identifies gaps between your current skills and those required for desired career paths, providing actionable recommendations for skill development and learning opportunities.
                </p>
                <div className="mt-6">
                  <button className="text-green-600 font-medium hover:text-green-800 inline-flex items-center group focus:outline-none">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="rounded-full bg-purple-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Career Progression Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Beyond immediate career recommendations, our system maps out potential long-term career trajectories, helping you visualize and plan your professional growth over time.
                </p>
                <div className="mt-6">
                  <button className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center group focus:outline-none">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology Stack Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Powered by cutting-edge technologies for optimal performance and reliability</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs font-bold">R</span>
                      </div>
                      <span>React.js for UI components</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs font-bold">TS</span>
                      </div>
                      <span>TypeScript for type safety</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs font-bold">TW</span>
                      </div>
                      <span>Tailwind CSS for styling</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs font-bold">RD</span>
                      </div>
                      <span>Redux for state management</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 012-2v-2M7 7h10"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Backend</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-xs font-bold">N</span>
                      </div>
                      <span>Node.js with Express</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-xs font-bold">MG</span>
                      </div>
                      <span>MongoDB for database</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-xs font-bold">GQ</span>
                      </div>
                      <span>GraphQL for API queries</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-xs font-bold">JWT</span>
                      </div>
                      <span>JWT for authentication</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-2 bg-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">AI & ML</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-xs font-bold">TF</span>
                      </div>
                      <span>TensorFlow for deep learning models</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-xs font-bold">NLP</span>
                      </div>
                      <span>NLP for processing user inputs</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-xs font-bold">RA</span>
                      </div>
                      <span>Recommendation Algorithms</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-xs font-bold">PY</span>
                      </div>
                      <span>Python for data processing</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-2 bg-indigo-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">DevOps</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-xs font-bold">D</span>
                      </div>
                      <span>Docker for containerization</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-xs font-bold">AWS</span>
                      </div>
                      <span>AWS for cloud hosting</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-xs font-bold">CI</span>
                      </div>
                      <span>CI/CD pipelines</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-xs font-bold">K8s</span>
                      </div>
                      <span>Kubernetes for orchestration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Meet the talented individuals behind our AI-Enhanced Career Guidance System</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="h-56 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                  <img src="https://via.placeholder.com/300x300" alt="Mitali Markana" className="w-32 h-32 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white object-cover" />
                </div>
                <div className="pt-20 pb-8 px-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">Mitali Markana</h3>
                  <p className="text-blue-600 font-semibold mb-3">Team Lead & Full Stack Developer</p>
                  <p className="text-gray-600">Experienced developer with expertise in React and Node.js</p>
                  <div className="mt-5 flex justify-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </button>
                    <button className="text-blue-400 hover:text-blue-600 focus:outline-none">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="text-blue-800 hover:text-blue-900 focus:outline-none">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="h-56 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
                  <img src="https://via.placeholder.com/300x300" alt="Parth Modhavadiya" className="w-32 h-32 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white object-cover" />
                </div>
                <div className="pt-20 pb-8 px-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">Parth Modhavadiya</h3>
                  <p className="text-purple-600 font-semibold mb-3">AI & ML Specialist</p>
                  <p className="text-gray-600">Specializes in machine learning algorithms and recommendation systems</p>
                  <div className="mt-5 flex justify-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </button>
                    <button className="text-blue-400 hover:text-blue-600 focus:outline-none">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="text-blue-800 hover:text-blue-900 focus:outline-none">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Have questions about our system or need support? We're here to help!</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-800">Email</p>
                      <a href="mailto:contact@ai-careerguidance.in" className="text-gray-600 hover:text-purple-600 transition-colors">contact@ai-careerguidance.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">Innovation Center, Tech Park,<br />Bengaluru - 560103</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;