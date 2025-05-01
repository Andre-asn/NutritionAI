import React from "react";

const UploadResult = ({ imageUrl, result }) => {
  if (!result) return null;

  const {
    foodName,
    calories,
    fat,
    protein,
    carbohydrates,
    sodium,
    sugar,
    score,
    feedback,
  } = result;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{foodName}</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col items-center">
          <img
            src={imageUrl}
            alt="Uploaded food"
            className="rounded-xl shadow-md w-60 h-60 object-cover border border-gray-300"
          />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Calories:</strong> {calories} kcal</div>
            <div><strong>Fat:</strong> {fat} g</div>
            <div><strong>Protein:</strong> {protein} g</div>
            <div><strong>Carbs:</strong> {carbohydrates} g</div>
            <div><strong>Sugar:</strong> {sugar} g</div>
            <div><strong>Sodium:</strong> {sodium} mg</div>
            <div><strong>Health Score:</strong> {score}</div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Feedback</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {feedback.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResult;
