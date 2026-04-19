function CardForm({ cardData, onChange }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Your details</h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={cardData.name}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />

        <input
          type="text"
          name="title"
          placeholder="Job title"
          value={cardData.title}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />

        <input
          type="text"
          name="company"
          placeholder="Company name"
          value={cardData.company}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={cardData.phone}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />

        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={cardData.email}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={cardData.website}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={cardData.address}
          onChange={onChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
        />
      </div>
    </div>
  );
}

export default CardForm;
