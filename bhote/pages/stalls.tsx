import StallsComp from "@/components/StallsComp"

export default function Stalls() {
    return (
        <div className="bg-white">
            <div className="flex items-center justify-center flex-col p-10">
                <h1 className="text-5xl font-bolder font-pop">Stalls</h1>
                <StallsComp stall={1} instituition="Southwestern State College" project="Sajiloscope" />
            </div>
        </div>
    )
}