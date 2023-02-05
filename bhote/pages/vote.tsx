import Button from "@/components/VoteButton";
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import ClickButton from "@/components/Button";
export default function Vote() {
    let [stall, setStall] = useState(0);
    return (
        <div className="relative w-screen flex-col h-screen m-0 p-0 bg-black overflow-y-hidden">
            <div className="sticky top-0 flex  flex-col items-center justify-between w-screen text-5xl px-20 pb-2 font-bold h-1/5 bg-white pb-5 text-blue-600">
                <div className="flex items-center justify-center">
                    <Image width={100} height={100} src="/logo.png" alt="Southwestern State College" className="mx-2" />
                    <h3>
                        Southwestern State College Exhibition
                    </h3>
                </div>




                <div className="flex items-center justify-center w-full">

                    <span className="h-[10px] w-4/12 bg-orange-500 rounded">
                    </span>
                    <h1 className="mx-5">
                        2023
                    </h1>
                    <span className="h-[10px] w-5/12 bg-orange-500 rounded">
                    </span>
                </div>


            </div>
            <div className="w-screen bg-[url('/building.jpg')] bg-fixed bg-no-repeat bg-absolute bg-cover h-full opacity-20 -z-10">

            </div>
            <div className="w-full flex items-center flex-col justify-center h-screen z-20 absolute top-[50px]">
                <div className="p-10 pt-10 pb-5 flex w-full">

                    <h1 className="w-full text-center text-5xl text-white font-bold">Enter the stall number: </h1>
                </div>
                <div className="mt-5">
                    <input max={52} min={1} className="rounded-xl p-5 w-[300px] h-20 bg-white text-black text-center text-2xl mx-auto" type="number" placeholder="Stall Number" onChange={(e) => setStall(parseInt(e.target.value))} />
                </div>
                <div className="mt-10">

                    <Button stall={stall} />
                    <Link href="/stalls">
                        <ClickButton text="Stalls" />
                    </Link>

                </div>
            </div>

        </div>
    );

}