import React, { useState } from 'react';
import './Popup.css';

function Popup(props) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (typeof props.onSubmit === 'function') {
      props.onSubmit({ question, options });
    } else {
      console.error('onSubmit is not a function or not provided');
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn btn btn-danger" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className='form-group mt-2'>
          <label className='question-label'>
            Question:
            <input
              type="text"
              name="question"
              className="form-control mt-2"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>
          </div>
          <div className='form-group mt-2'>
          <label>
            Options:
            {options.map((option, index) => (
              <div key={index} className="options">
                <input
                  type="text"
                  className='form-control'
            
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <button type="button"  className='btn btn-danger' onClick={() => handleRemoveOption(index)}>
                  Remove
                </button>
              </div>
            ))}
          </label>
          </div>
          <div className='buttons'>
          <button type="button" onClick={handleAddOption} className="btn btn-warning">
              Add Option
            </button>
            <button type="submit" className='btn btn-primary'>Submit</button>
          </div>
  
        </form>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Popup;
