import UploadForm from './UploadForm';
import ResultsHorizontal from "./ResultsHorizontal";

export default function Main() {
    return (
        <main className="bg-zinc-900 w-full flex flex-col">
            <div className='h-[40%]'>
                <UploadForm />
            </div>
            <div className='h-[60%] overflow-y-scroll'>
                <ResultsHorizontal />
            </div>
        </main>
    )
}