import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

export const DeleteHero: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [creator, setCreator] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleDelete = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    if (!name) errorMsg.push("Name is required");
    if (!creator) errorMsg.push("Creator is required");

    if (errorMsg.length > 0) {
      setError(errorMsg.join(", "));
    } else {
      setError("");
      e.currentTarget.submit();
    }
  };

  return (
    <form className="Formulario" action="/deletePage" method="POST" onSubmit={handleDelete}>
      <input type="text" name="name" placeholder="Name" value={name} onInput={(e) => setName(e.currentTarget.value)} />
      <input type="text" name="creator" placeholder="Creator" value={creator} onInput={(e) => setCreator(e.currentTarget.value)} />
      <button type="submit">Delete Superhero</button>
      {error && <p>{error}</p>}
    </form>
  );
};