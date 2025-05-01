import React from "react";

function Meal({
  score,
  calories,
  fat,
  protein,
  carbs,
  sodium,
  sugar,
  image,
  food,
  feedback,
}) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 uppercase tracking-wide">
        {food}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Meal"
            className="w-60 h-60 object-cover rounded-xl border border-gray-300 shadow"
          />
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div><strong>Calories:</strong> {calories} kcal</div>
          <div><strong>Fat:</strong> {fat} g</div>
          <div><strong>Protein:</strong> {protein} g</div>
          <div><strong>Carbs:</strong> {carbs} g</div>
          <div><strong>Sodium:</strong> {sodium} mg</div>
          <div><strong>Sugar:</strong> {sugar} g</div>
          <div><strong>Health Score:</strong> {score}</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Feedback</h3>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          {feedback.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Meal;
