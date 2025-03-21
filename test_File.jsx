export default function SimpleUI() {
  return (
    <div className="p-6 flex flex-col items-center gap-4">
      {/* Button Component */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>

      {/* Select Component */}
      <div className="relative w-48">
        <select className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="" disabled selected>
            Select an option below
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}
