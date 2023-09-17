import { useEffect, useState } from "react";

export const SkipMountEffect = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    console.log(`fetch data with ${searchTerm}`);
  }, [searchTerm]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(e.target.elements.term.value);
        }}
      >
        <input type="text" name="term" />
        <button type="submit">Set sarch term</button>
      </form>
    </div>
  );
};
