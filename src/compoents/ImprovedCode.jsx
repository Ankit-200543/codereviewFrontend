function ImprovedCode({ code }) {
  return (
    <div className="mt-5">

      <h2 className="text-xl mb-3">
        Improved Code
      </h2>

      <pre
        className="
        bg-black
        text-green-400
        p-5
        rounded
        overflow-auto
      "
      >
        <code>
          {code}
        </code>
      </pre>

    </div>
  );
}

export default ImprovedCode;