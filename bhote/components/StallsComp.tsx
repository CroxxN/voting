import Button from "./VoteButton";

interface People {
    stall: number;
    instituition: string;
    project: string;
}


const StallsComp: React.FC<People> = (props) => {
    return (
        <div className="max-w-md border-solid border-orange-600 rounded-lg border-2 sm:py-10 py-24 sm:px-3 m-5">
            <div className='m-4 mt-7 pl-3 flex flex-col items-center'>

                <h1 className="text-3xl text-orange-600 font-extrabold">
                    Stall: {props.stall}
                </h1>
                <h1 className='mt-2 text-lg text-slate-600 font-bold'>
                    {props.instituition}
                </h1>
                <h1 className='sm:p-5 p-1 text-lg font-bold'>
                    {props.project}
                </h1>
                <Button stall={props.stall} />
            </div>
        </div>
    )
}
export default StallsComp;