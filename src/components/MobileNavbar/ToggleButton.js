const ToggleButton = ({ onToggle, opened }) => {
  return (
    <button
      type="button"
      className={`toggle-button${opened ? ' opened' : ''}`}
      onClick={onToggle}
    >
      <div className="button-bar item-1"></div>
      <div className="button-bar item-2"></div>
      <div className="button-bar item-3"></div>
    </button>
  );
};

export default ToggleButton;
