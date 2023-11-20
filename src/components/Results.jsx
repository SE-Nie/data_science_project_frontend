import { useContext } from "react";
import InferenceContext from "../contexts/InferenceContext";

export default function Results() {
    const { results } = useContext(InferenceContext);
    return (
        <div className=" bg-emerald-500 w-full h-full">
            <h1>Results</h1>
            <div className="flex flex-col gap-4 overflow-y-scroll h-[calc(100vh-200px)]">
                {results.map((result) => (
                    <div key={result.id} className="bg-sky-500 p-3">
                        <img src={result.payload_url} />
                        <p>{result.more_information_presumably}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}