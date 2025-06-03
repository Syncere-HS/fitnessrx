import React from 'react';
import { Dumbbell, MapPin, Calendar, Users, ChevronDown, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <img src="/FinalLogo.png" alt="Fitness Rx" className="h-8" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">About</a>
              <a href="#classes" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">Programs</a>
              <a href="#trainers" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">Trainers</a>
              <a href="#locations" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">Locations</a>
            </div>
            <div>
              <button className="bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Schedule your Assessment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="/6f8966_04f3ae0b1b8741199b8aa070a8f5752e~mv2.jpg"
            alt="Fitness Rx Gym"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Not just a gym;<br />your partner in achieving fitness goals
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            With over 50 years of combined personal training experience, we're here to help those who are <u>serious</u> about achieving their fitness goals. Experience the perfect blend of enjoyable workouts and tangible progress through our customer-centric philosophy and expert support.
          </p>
          <div className="mt-10">
            <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule Your Free Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Dumbbell className="h-8 w-8 text-black" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Expert Training</h3>
              <p className="mt-2 text-base text-gray-600">
                Personalized programs designed by certified trainers with decades of experience
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">All Fitness Levels</h3>
              <p className="mt-2 text-base text-gray-600">
                Programs for all levels of fitness
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Two Locations</h3>
              <p className="mt-2 text-base text-gray-600">
                Convenient facilities in both Easton and Kent Island
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trainers Section */}
      <div className="py-24 bg-gray-50" id="trainers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Expert Trainers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our certified professionals are here to guide you on your fitness journey
            </p>
          </div>
          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <div className="flex flex-col items-center">
              <img src="public/mark.png" alt="Mark Cuviello" className="w-48 h-48 rounded-full object-cover" />
              <h3 className="mt-6 text-xl font-medium text-gray-900">Mark Cuviello</h3>
              <p className="text-gray-600">Owner</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">AAAI/ISMA Certified</p>
                <p className="text-sm text-gray-600">ACE Certified</p>
                <p className="text-sm text-gray-600">ISSA Certified</p>
                <p className="text-sm text-gray-600">TABATA Bootcamp Instructor</p>
                <p className="text-sm text-gray-600">TRX Certified</p>
              </div>
              <a 
                href="mailto:mark@fitnessrxworkout.com" 
                className="mt-4 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Mark
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img src="public/stephanie.png" alt="Stephanie Booze" className="w-48 h-48 rounded-full object-cover" />
              <h3 className="mt-6 text-xl font-medium text-gray-900">Stephanie Booze</h3>
              <p className="text-gray-600">General Manager</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">Aqua Strength & Conditioning Certified</p>
                <p className="text-sm text-gray-600">Aqua Group Instructor</p>
                <p className="text-sm text-gray-600">Personal Trainer</p>
                <p className="text-sm text-gray-600">TABATA Bootcamp Instructor</p>
                <p className="text-sm text-gray-600">ACE Certified</p>
              </div>
              <a 
                href="mailto:stephanie.fitnessrx@gmail.com" 
                className="mt-4 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Stephanie
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Easton Location</h3>
              <p className="text-gray-400">123 Main Street</p>
              <p className="text-gray-400">Easton, MD 21601</p>
              <p className="text-gray-400">Phone: (410) 555-0123</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kent Island Location</h3>
              <p className="text-gray-400">456 Bay Drive</p>
              <p className="text-gray-400">Kent Island, MD 21638</p>
              <p className="text-gray-400">Phone: (410) 555-0456</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p className="text-gray-400">Monday - Friday: 5am - 9pm</p>
              <p className="text-gray-400">Saturday: 7am - 5pm</p>
              <p className="text-gray-400">Sunday: 8am - 2pm</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2025 Fitness Rx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App