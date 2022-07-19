import ReactDOM from 'react-dom';
import classes from './Spinner.module.css';

const Spinner = (props) => {
  const isFullScreen = props.isFullScreen;
  const spinnerCointainerClass = `${
    isFullScreen
      ? 'fixed z-10 bottom-0 left-0 h-full w-screen dark:bg-white dark:bg-opacity-25 bg-slate-400 bg-opacity-70'
      : 'mt-4'
  } flex items-center justify-center overflow-hidden`;

  const spinnerSize = isFullScreen ? '60px' : '30px';

  const spinnerEl = (
    <div className={spinnerCointainerClass}>
      <svg
        className={classes.spinner}
        width={spinnerSize}
        height={spinnerSize}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={classes.path}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );

  if (isFullScreen) {
    const portalElement = document.querySelector('#overlays');
    return ReactDOM.createPortal(spinnerEl, portalElement);
  }

  return spinnerEl;
};
export default Spinner;
