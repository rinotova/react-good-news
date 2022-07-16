import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center mt-4 overflow-hidden">
      <svg
        className={classes.spinner}
        width="30px"
        height="30px"
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
};
export default Spinner;
