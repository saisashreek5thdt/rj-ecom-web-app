export default function Button({ text, icon, onClick }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white border-[2px] border-[#b2996e] hover:border-[2px] hover:border-[#b2996e] hover:bg-transparent bg-[#b2996e] hover:text-[#b2996e] transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {text}
    </button>
  );
}
