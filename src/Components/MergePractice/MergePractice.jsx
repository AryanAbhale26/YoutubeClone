import { useState } from "react";

function MergePractice() {
  const [likes, setLikes] = useState(0);
  const practiceMessage = "Practice makes merging easier!";

  return (
    <main className="min-h-screen bg-[#f9f9f9] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
          Collaboration Practice
        </p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Merge Practice Video
        </h1>
        <p className="mb-8 text-lg text-gray-600">{practiceMessage}</p>

        <div className="border-t border-gray-200 pt-6">
          <p className="mb-4 text-gray-700">
            This is a real page in the YouTube Clone. Create a branch, change
            the message above, and ask your friend to change the same line in a
            different way.
          </p>
          <button
            type="button"
            onClick={() => setLikes((currentLikes) => currentLikes + 1)}
            className="rounded-full bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
          >
            Like {likes}
          </button>
          <button>Click Me!</button>
        </div>
      </div>
    </main>
  );
}

export default MergePractice;
