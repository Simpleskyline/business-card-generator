import { useRef } from "react";
import html2canvas from "html2canvas";

function CardPreview({ cardData }) {
  const cardRef = useRef(null);

  function handleDownload() {
    html2canvas(cardRef.current, { scale: 3 }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "business-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="text-xs text-gray-400 uppercase tracking-widest">Preview</p>

      <div
        ref={cardRef}
        className="w-full rounded-2xl p-8 flex flex-col justify-between shadow-sm"
        style={{
          minHeight: "220px",
          background: "#F5F1EB",
          borderLeft: "6px solid #5C4A32",
        }}
      >
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: "#9C845C" }}
          >
            {cardData.company || "Company name"}
          </p>

          <h2
            className="text-2xl font-semibold"
            style={{ color: "#2C2318", fontFamily: "Georgia, serif" }}
          >
            {cardData.name || "Your Name"}
          </h2>

          <p className="text-sm mt-1" style={{ color: "#7A6A55" }}>
            {cardData.title || "Job title"}
          </p>
        </div>

        <div
          className="mt-6 pt-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid #DDD5C8" }}
        >
          {cardData.phone && (
            <p className="text-xs" style={{ color: "#5C4A32" }}>
              {cardData.phone}
            </p>
          )}
          {cardData.email && (
            <p className="text-xs" style={{ color: "#5C4A32" }}>
              {cardData.email}
            </p>
          )}
          {cardData.website && (
            <p className="text-xs" style={{ color: "#5C4A32" }}>
              {cardData.website}
            </p>
          )}
          {cardData.address && (
            <p className="text-xs" style={{ color: "#5C4A32" }}>
              {cardData.address}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-full py-2 rounded-xl text-sm font-medium text-white"
        style={{ background: "#5C4A32" }}
      >
        Download as PNG
      </button>
    </div>
  );
}

export default CardPreview;
