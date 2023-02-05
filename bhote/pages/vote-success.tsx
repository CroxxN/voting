import Image from "next/image";
import Link from "next/link";

export default function VoteSuccess() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <Image src="/check.png" alt="Success" width={200} height={200} />
            <h1 className="text-5xl font-bold">Vote Success</h1>
            <Link href="/vote">
                <div className="mt-10 flex items-center justify-center w-40 h-10 bg-black rounded-3xl hover:bg-blue-800 hover:outline-orange-600 outline outline-blue-600 outline-4 font-bold text-lg text-white mb-5">
                    Return
                </div>
            </Link>
        </div>
    );
}