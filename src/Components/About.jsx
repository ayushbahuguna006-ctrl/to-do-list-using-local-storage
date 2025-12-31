import React from 'react'

function About() {
  return (
    <div>
      <div className="min-h-screen bg-stone-200 flex items-center justify-center px-6">
      <div className="max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          About This App
        </h1>

        <p className="text-gray-700 mb-4">
          This Todo List application is designed to help you stay organized,
          focused, and productive. It allows you to create, manage, and track
          your daily tasks in a simple and intuitive way.
        </p>

        <p className="text-gray-700 mb-4">
          You can add tasks, mark them as completed, and remove them when they
          are no longer needed. The app uses <span className="font-semibold">local storage</span>,
          so your tasks remain saved even after refreshing or closing the browser.
        </p>

        <p className="text-gray-700 mb-4">
          Built using <span className="font-semibold">React</span>, this project
          follows modern frontend practices to deliver a smooth and responsive
          user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Add and delete tasks easily</li>
          <li>Mark tasks as completed</li>
          <li>Persistent data using local storage</li>
          <li>Clean and minimal UI</li>
          <li>Fast and responsive performance</li>
        </ul>
        <p className='text-sm text-center mt-10 text-stone-500'>SPECIAL THANKS TO @ADITI and @ANGAD-SUDAN</p>
      </div>
    </div>
    </div>
  )
}

export default About
