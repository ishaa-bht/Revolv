// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { QRCodeCanvas } from 'qrcode.react';
// const WebsiteLinkQRPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { tools, businessName, websiteLink } = location.state || {};
//     const handleBack = () => {
//         navigate('/qr-generation');
//     };
//     const handleDownload = () => {
//         const canvas = document.getElementById('qr-code');
//         const pngUrl = canvas
//             .toDataURL("image/png")
//             .replace("image/png", "image/octet-stream");
//         let downloadLink = document.createElement("a");
//         downloadLink.href = pngUrl;
//         downloadLink.download = `${businessName}_QR_Code.png`;
//         document.body.appendChild(downloadLink);
//         downloadLink.click();
//         document.body.removeChild(downloadLink);
//     };
//     return (
//         <div className="website-link-qr-container">
//             <div className="qr-content">
//                 <h1>QR Code Generated</h1>
//                 <h2>for {businessName}</h2>
                
//                 <div className="qr-code-display">
//                     <QRCode 
//                         id="qr-code"
//                         value={websiteLink} 
//                         size={256}
//                         level={"H"}
//                         includeMargin={true}
//                     />
//                 </div>
//                 <p>Link: {websiteLink}</p>
//                 <div className="action-buttons">
//                     <button onClick={handleDownload} className="download-button">
//                         Download QR Code
//                     </button>
//                     <button onClick={handleBack} className="back-button">
//                         Change Link
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default WebsiteLinkQRPage;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
const WebsiteLinkQRPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { tools, businessName, websiteLink } = location.state || {};
    const handleBack = () => {
        navigate('/qr-generation');
    };
    const handleDownload = () => {
        const canvas = document.getElementById('qr-code');
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${businessName}_QR_Code.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <div className="website-link-qr-container">
            <div className="qr-content">
                <h1>QR Code Generated</h1>
                <h2>for {businessName}</h2>
                
                <div className="qr-code-display">
                    <QRCodeCanvas 
                        id="qr-code"
                        value={websiteLink} 
                        size={256}
                        level={"H"}
                        includeMargin={true}
                    />
                </div>
                <p>Link: {websiteLink}</p>
                <div className="action-buttons">
                    <button onClick={handleDownload} className="download-button">
                        Download QR Code
                    </button>
                    <button onClick={handleBack} className="back-button">
                        Change Link
                    </button>
                </div>
            </div>
        </div>
    );
};
export default WebsiteLinkQRPage;