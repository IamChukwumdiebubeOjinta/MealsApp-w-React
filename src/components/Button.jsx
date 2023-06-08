const Button = ({styles, text}) => (
  <button
    type="button"
    className={`relative py-[12px] font-poppins outline-secondary rounded-[30px] font-medium text-white text-[16px] ${styles}`}>
      {text}
  </button>
)

export default Button