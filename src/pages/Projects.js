import React, { useEffect, useState } from 'react'
import Project from '../components/Project'
import CurrentBox from '../components/CurrentBox'
import projectData from '../projectData'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectData[0])
  const handleChange = (e) => {
    e.preventDefault()
    const project = e.target.value
    setSelectedProject(JSON.parse(project))
  }
  // console.log(selectedProject);
  return (
    <div>
      <CurrentBox name='Projects' />
      <div className='flex flex-col my-20 transition-all duration-500'>
        <select
          name='project'
          id='project'
          className='font-serif mx-auto py-1 px-2 text-xl bg-black text-white cursor-pointer '
          onChange={handleChange}
        >
          {projectData.map((project) => (
            <option key={project.id} value={JSON.stringify(project)}>
              {project.title}
            </option>
          ))}
        </select>
        <div className='border-2 border-purple-700 bg-black bg-opacity-60 w-2/3 mx-auto mt-11 p-6  sm:w-11/12 lg:w-2/3'>
          <Project selectedProject={selectedProject} />
        </div>
      </div>
    </div>
  )
}

export default Projects
