

interface ButtonProps {
    text: string;
}

const ClickButton: React.FC<ButtonProps> = (props) => {
    return (
        <div className="">
            <button className="w-40 h-10 bg-black rounded-3xl hover:bg-blue-800 outline outline-white outline-4 font-bold text-lg text-white mb-5">
                {props.text}
            </button>
        </div>
    )
}

export default ClickButton;