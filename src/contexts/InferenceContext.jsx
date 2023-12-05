import { createContext, useState, useEffect } from "react";

const InferenceContext = createContext();

export default InferenceContext;

const InferenceContextProvider = ({ children }) => {
    const [results, setResults] = useState({});
    const [inferenceError, setInferenceError] = useState(null);
    const [selectedImageFromResults, setSelectedImageFromResults] = useState(null);

    const dummy_res = {}


    // useEffect(() => {
    //     const toArray = Object.values(dummy_res);
    //     setResults(toArray);
    // }, []);

    const sendInferenceRequest = async ({ file,
        selectedCancerTypes,
        selectedImageType,
        numberOfResults }) => {

        const formData = new FormData();
        formData.append("img", file);
        formData.append("cancer_types", JSON.stringify(selectedCancerTypes));
        formData.append("image_type", JSON.stringify(selectedImageType));
        formData.append("number_of_results", JSON.stringify(numberOfResults));

        try {
            const response = await fetch("http://127.0.0.1:5001/inference", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                setInferenceError("Error: " + response.statusText);
                return;
            }

            const inferenceResult = await response.json();
            console.log(inferenceResult)
            setResults(inferenceResult);
        } catch (error) {
            setInferenceError("Network Error: " + error.message);
        }
    };

    return (
        <InferenceContext.Provider value={{
            results, setResults, sendInferenceRequest, inferenceError,
            selectedImageFromResults, setSelectedImageFromResults
        }}>
            {children}
        </InferenceContext.Provider>
    );
}

export { InferenceContextProvider };
