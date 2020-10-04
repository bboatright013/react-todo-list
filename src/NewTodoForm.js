import React, {useState} from 'react';

const NewTodoForm = (props) => {
    const INITIAL_STATE = {
        task: ""
      }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
      const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      };

      const handleSubmit = evt => {
        evt.preventDefault();
        props.addTodo(formData);
        setFormData(INITIAL_STATE);
      };

      return (
          <form onSubmit={handleSubmit}>
              <label htmlFor="task">Task:</label>
              <input id="task"
                    name="task"
                    type="text"
                    placeholder="task"
                    value={formData.task}
                    onChange={handleChange} 
              />
             <button type="submit">Add Todo</button>
          </form>
      )
}

export default NewTodoForm;