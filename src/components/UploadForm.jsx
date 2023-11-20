import { useContext, useState } from "react";
import InferenceContext from "../contexts/InferenceContext";

export default function UploadForm() {
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

    return (
        <form className="bg-green-300 w-full" onSubmit={(e) => { e.preventDefault(); sendInferenceRequest() }}>
            <input type="file" onChange={handleChange} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {inferenceError && <div className="error">{inferenceError}</div>}
                {file && <div>{file.name}</div>}
            </div>
            <input type="submit" value="Upload" />
        </form>
    );
}