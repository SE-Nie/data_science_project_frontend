import { createContext, useState } from "react";


const InferenceContext = createContext();

export default InferenceContext;

const InferenceContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [inferenceError, setInferenceError] = useState(null);
    const sendInferenceRequest = async (image) => {
        const formData = new FormData();
        formData.append("img", image);

        try {
            const response = await fetch("https://europe-north1-pixel-diagnose.cloudfunctions.net/inference-test", {
                method: "POST",
                body: formData,
                // Don't set the Content-Type header manually
                // The browser will handle it
                mode: 'cors'
            });

            if (!response.ok) {
                setInferenceError("Error: " + response.statusText);
                return;
            }

            const inferenceResult = await response.json();
            setResults(inferenceResult);
        } catch (error) {
            setInferenceError("Network Error: " + error.message);
        }
    };

    return (
        <InferenceContext.Provider value={{ results, setResults, sendInferenceRequest, inferenceError }}>
            {children}
        </InferenceContext.Provider>
    );
}

export { InferenceContextProvider };