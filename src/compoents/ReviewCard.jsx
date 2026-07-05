function ReviewCard({ title, items }) {
  return (
    <div className="mb-4 rounded border border-slate-700 p-4">

      <h2 className="text-xl font-bold mb-3">
        {title}
      </h2>

      {items?.length === 0 ? (
        <p>No issues found</p>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            className="mb-3 border-l-4 pl-3"
          >
            <p>
              <strong>Location:</strong>{" "}
              {item.location}
            </p>

            <p>
              {item.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewCard;