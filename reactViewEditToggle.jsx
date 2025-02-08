import { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleViewEdit = ({ viewComponent: ViewComponent, editComponent: EditComponent }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  
  const toggleMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <div className="rounded-lg md:py-6 md:px-8 md:w-11/12 w-full">
      {isEditMode ? (
        <EditComponent toggleViewEditMode={toggleMode} />
      ) : (
        <ViewComponent toggleViewEditMode={toggleMode} />
      )}
    </div>
  );
};

ToggleViewEdit.propTypes = {
  viewComponent: PropTypes.elementType.isRequired,
  editComponent: PropTypes.elementType.isRequired
};

export default ToggleViewEdit;