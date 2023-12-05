import React, { useState } from 'react';


const YourComponent = ({
    selectedCancerTypes,
    setSelectedCancerTypes,
    selectedImageType,
    setSelectedImageType,
    numberOfResults,
    setNumberOfResults
}) => {
    // Handle change for "cancer type" selection
    const handleCancerTypeChange = (type) => {
        setSelectedCancerTypes({
            ...selectedCancerTypes,
            [type]: !selectedCancerTypes[type],
        });
    };

    // Handle change for "image type" selection
    const handleImageTypeChange = (type) => {
        const objectCopyEverythingZero = Object.fromEntries(Object.entries(selectedImageType).map(([key, value]) => [key, false]));
        setSelectedImageType({ ...objectCopyEverythingZero, [type]: true });
    };

    // Handle change for "number of results per type" slider
    const handleNumberOfResultsChange = (event) => {
        setNumberOfResults(Number(event.target.value));
    };

    return (
        <div className="bg-zinc-900 m-4 flex fle">
            <label className="px-2">
                Cancer Type:
                <div className="flex flex-col">
                    {Object.entries(selectedCancerTypes).map(([type, isSelected]) => (
                        <label key={type}>
                            <input
                                type="checkbox"
                                value={type}
                                checked={isSelected}
                                onChange={() => handleCancerTypeChange(type)}
                            />
                            {type}
                        </label>
                    ))}
                </div>

            </label>

            <br />

            <label className="px-2">
                Image Type:
                <div className="flex flex-col">
                    {Object.entries(selectedImageType).map(([type, isSelected]) => (
                        <label key={type}>
                            <input
                                type="radio"
                                value={type}
                                checked={isSelected}
                                onChange={() => handleImageTypeChange(type)}
                            />
                            {type}
                        </label>
                    ))}
                </div>
            </label>

            <br />

            <label className="px-2">
                Number of Results per Type:
                <div className="flex flex-col">
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={numberOfResults}
                        onChange={handleNumberOfResultsChange}
                    />
                    {numberOfResults}
                </div>
            </label >
        </div >
    );
};

export default YourComponent;
