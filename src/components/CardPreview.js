function CardPreview({ cardData }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full min-h-48 flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          {cardData.company}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">
          {cardData.name}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{cardData.title}</p>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col gap-1">
        <p className="text-xs text-gray-500">{cardData.phone}</p>
        <p className="text-xs text-gray-500">{cardData.email}</p>
        <p className="text-xs text-gray-500">{cardData.website}</p>
        <p className="text-xs text-gray-500">{cardData.address}</p>
      </div>
    </div>
  );
}

export default CardPreview;
