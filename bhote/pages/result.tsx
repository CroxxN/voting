export default async function Result() {
    const result = await fetch("/api/result", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await result.json();
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            {data.map((stall: any) => {
                <h1>
                    {stall.vote}
                </h1>
            })}
        </div>
    );
}
