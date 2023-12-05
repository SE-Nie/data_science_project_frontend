import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useContext } from 'react';
import InferenceContext from './contexts/InferenceContext';

function App() {
  const { selectedImageFromResults, setSelectedImageFromResults } = useContext(InferenceContext);

  return (
    <div className="flex flex-col min-h-screen h-screen bg-zinc-900 text-slate-300">
      {/* Modals go here */}
      {selectedImageFromResults && (
        <Modal onClose={() => setSelectedImageFromResults(null)}>
          <div className="flex flex-col justify-between items-center">
            <img
              src={selectedImageFromResults.signed_url}
              alt="modal"
              className="max-w-full"
              width="400px"
              height="400px"
            />
            <p className="mt-2">
              Slice no.: {selectedImageFromResults.slice_id} / 150
            </p>
            <p className="mt-2">
              Similarity Score: {selectedImageFromResults.score.toFixed(3)}
            </p>
            <p className="mt-2"> Diagnosis: {selectedImageFromResults.diagnose}
            </p>
          </div>
        </Modal>
      )}

      <Header />

      <div className="flex-1 flex bg-zinc-900 h-[calc(100vh-150px)] overflow-y-scroll">
        <Main />
        {/* Uncomment the line below if you want to include the Sidebar */}
        {/* <Sidebar /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
