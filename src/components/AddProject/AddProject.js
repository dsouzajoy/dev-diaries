import './AddProject.css'
import { FormControl, Input, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'

const AddProject = () => {
  const [formState, setFormState] = useState({
    githubUrl: '',
    learningXp: '',
    thumbnail: '',
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="content">
      <form className="add-project-form" onSubmit={handleOnSubmit}>
        <h1 className="form-title">Add project</h1>
        <FormControl mt={5}>
          <FormLabel>Github Repository URL</FormLabel>
          <Input onChange={handleFormChange} value={formState.githubUrl} id="githubUrl" />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Learning Experience</FormLabel>
          <Input onChange={handleFormChange} value={formState.learninbXp} id="learningXp" />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Thumbnail URL</FormLabel>
          <Input onChange={handleFormChange} value={formState.thumbnail} id="thumbnail" />
        </FormControl>
        <center>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </center>
      </form>
    </div>
  )
}

export default AddProject
