import { useContext, useState, useRef } from "react";
import InferenceContext from "../contexts/InferenceContext";
import QueryInputs from "./QueryInputs";

export default function UploadForm() {
    const fileInputRef = useRef(null);
    const [selectedCancerTypes, setSelectedCancerTypes] = useState({
        "Gliomas": true,
        "Meningiomas": true,
        "Metastasis": true,
    });
    const [selectedImageType, setSelectedImageType] = useState({
        "t1": true,
        "t1c": false,
        "t2": false,
        "flair": false,
        "seg_t1": false,
        "seg_t1c": false,
        "seg_t2": false,
        "seg_flair": false,
    });
    const [numberOfResults, setNumberOfResults] = useState(5);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const { sendInferenceRequest, inferenceError } = useContext(InferenceContext);

    const handleChange = (e) => {
        const selected = e.target.files[0];
        const allowedTypes = ["image/png", "image/jpeg"];
        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    };

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <form
            className="bg-zinc-900 w-full flex flex-col md:flex-row md:items-start"
            onSubmit={(e) => {
                e.preventDefault();
                sendInferenceRequest({
                    file,
                    selectedCancerTypes,
                    selectedImageType,
                    numberOfResults
                });
            }}
        >
            <div className="md:flex-shrink-0">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: "none" }}
                />
                <button
                    type="button"
                    className="bg-slate-300 hover:bg-slate-100 text-black font-bold py-2 px-4 rounded mt-4 md:ml-4 md:mr-4"
                    onClick={openFileInput}
                >
                    Select Image
                </button>
            </div>
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    alt="Uploaded Image"
                    className="py-4 md:mr-4"
                />
            )}
            <div>
                <QueryInputs
                    selectedCancerTypes={selectedCancerTypes}
                    setSelectedCancerTypes={setSelectedCancerTypes}
                    selectedImageType={selectedImageType}
                    setSelectedImageType={setSelectedImageType}
                    numberOfResults={numberOfResults}
                    setNumberOfResults={setNumberOfResults}
                />
            </div>
            <div className="output mt-4 md:mt-0 md:ml-4">
                {error && <div className="error">{error}</div>}
                {inferenceError && <div className="error">{inferenceError}</div>}
            </div>
            <button
                type="submit"
                className="bg-slate-300 hover:bg-slate-100 text-black font-bold py-2 px-4 rounded mt-4 md:ml-4"
            >
                Start Search
            </button>
        </form>
    );
}
