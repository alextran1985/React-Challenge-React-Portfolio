import React from 'react'

const projects = [
  {
    title: 'One',
    image: '',
    deployedLink: '',
    githubLink: 'http://www.github.com/'
  },
  {
    title: 'Two',
    image: '',
    deployedLink: '',
    githubLink: 'http://www.github.com/ehoverten'
  },
  {
    title: 'Three',
    image: '',
    deployedLink: '',
    githubLink: ''
  },
]

const Project = () => {
  return (
    <>
      <div>Project Component</div>
      { projects.map(item => (
        <div className='card'>
          <h2>{item.title}</h2>
          <img src={item.image} alt="" />
          <a href={item.deployedLink}>Project Link</a>
          <a href={item.deployedLink}>Github Link</a>
        </div>
      )) }
    </>
  )
}

export default Project
