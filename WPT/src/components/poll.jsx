import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Poll({ updatePollData, question, initialOptions }) {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [labelValue, setLabelValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLabelChange = (event) => {
    setLabelValue(event.target.value);
  };

  const handleAddData = () => {
    if (inputValue && labelValue) {
      const newData = [...data, { label: labelValue, y: parseInt(inputValue, 10) }];
      setData(newData);

      // Pass the updated data to the parent component (Dashboard)
      updatePollData(newData);

      setInputValue('');
      setLabelValue('');
    }
  };

  const options = {
    animationEnabled: true,
    title: {
      text: 'Dynamic Pie Chart',
    },
    data: [
      {
        type: 'pie',
        showInLegend: true,
        legendText: '{label}',
        dataPoints: data,
      },
    ],
  };

  return (
    <div id="poll">
      {/* ... (existing Poll component logic) */}
      <form>
        <label>
          Label:
          <input type="text" value={labelValue} onChange={handleLabelChange} />
        </label>
        <label>
          Value:
          <input type="number" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddData}>
          Add Data
        </button>
      </form>
      <CanvasJSChart options={options} />
      {/* ... (existing Poll component logic) */}
    </div>
  );
}

export default Poll;
