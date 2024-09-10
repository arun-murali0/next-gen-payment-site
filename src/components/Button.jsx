export default function Button({ styles, text }) {
  return (
    <button
      className={`font-poppins bg-blue-gradient text-primary py-4 px-6 outline-none text-[18px] ${styles}`}
    >
      {text}
    </button>
  );
}
