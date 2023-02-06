import { useRouter } from "next/router";

interface ButtonProps {
    stall?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
    const router = useRouter();
    const vote = (e: any) => {
        e.preventDefault();
        if (props.stall === undefined || props.stall === null || props.stall < 0) {
            return;
            // Check if the stall number is valid
        }
        fetch("/api/backend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stall: props.stall
            })
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    console.log(data.message);
                })

                // router.push("/vote-success");
            } else {
                router.push("/vote-fail");
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="">
            <button onClick={vote} className="w-40 h-10 bg-black rounded-3xl hover:bg-blue-800 outline outline-white outline-4 font-bold text-lg text-white mb-5">Vote</button>
        </div>
    )
}

export default Button;