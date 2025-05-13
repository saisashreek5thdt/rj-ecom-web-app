export default function Button({ text, icon, onClick }) {
    return (
        <button
            className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white border-[2px] border-amber-400 hover:bg-black hover:border-[2px] hover:border-amber-400  bg-amber-400 hover:text-amber-400 transition duration-300 ease-in-out `}
            onClick={onClick}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {text}
        </button>
    );
}