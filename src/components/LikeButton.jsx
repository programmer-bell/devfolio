import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button className="btn" onClick={() => setLikes(likes + 1)}>
      👍 Like {likes}
    </button>
  );
}