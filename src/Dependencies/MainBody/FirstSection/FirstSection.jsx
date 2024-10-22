import React from 'react';
import { firstSection } from '../../../Assets/Assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FirstSection/FirstSection.css'

const FirstSection = () => {
  return (
    <div className="first-section-container">
      {firstSection.map(item => (
        <div key={item._id} className='first-section-item' style={{ backgroundColor: item.backgroundColor }}>
          <div className="box-header">
            <h3 className="box-title" style={{ color: item.fontColor }}>{item.title}</h3>
            <FontAwesomeIcon style={{ color: item.fontColor }} icon={item.options} />
          </div>
          <div className="box-number">
            <span className="center-number" style={{ color: item.fontColor }}>{item.noDisplay}</span>
          </div>
          <div className="box-footer">
            <button className="add-button" style={{ color: item.fontColor }}>
              <FontAwesomeIcon icon={item.addIcon} />
            </button>
            <button className="view-all-button" style={{ color: item.fontColor }}>{item.viewAll}</button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default FirstSection