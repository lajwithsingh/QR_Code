import React from "react";
import qrCode from "./assets/images/image-qr-code.png";

const App= () => {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col max-w-qr text-center p-6 m-4 bg-white rounded-2xl font-outfit">
        <img src={qrCode} alt="Main QR Code Image" className="rounded-2xl"/>
        <div className="p-6">
          <h2 className="font-bold text-xl text-darkBlue mb-4">Improve your Front-End Skills By Building Projects</h2>
          <p className="text-grayishBlue text-md">
            Scan the QR Code to Visit Frontend Mentor and Take your coding
            skills to next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
