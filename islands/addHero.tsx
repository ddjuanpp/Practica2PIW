import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { JSX } from "preact";

export const AddHeroes: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    if (!name) errorMsg.push("Name is required");
    if (!image) errorMsg.push("Image is required");
    if (!sound) errorMsg.push("Sound is required");
    if (!creator) errorMsg.push("Creator is required");

    if (errorMsg.length > 0) {
      setError(errorMsg.join(", "));
    } else {
      setError("");
      e.currentTarget.submit();
    }
  };

  return (
    <form className="Formulario" action="/addPage" method="POST" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={name} onInput={(e) => setName(e.currentTarget.value)}/>
      <input type="text" name="image" placeholder="Image URL" value={image} onInput={(e) => setImage(e.currentTarget.value)} />
      <input type="text" name="sound" placeholder="Sound URL" value={sound} onInput={(e) => setSound(e.currentTarget.value)} />
      <input type="text" name="creator" placeholder="Creator" value={creator} onInput={(e) => setCreator(e.currentTarget.value)} />
      <button type="submit">Add Superhero</button>
      {error && <p>{error}</p>}
    </form>
  );
};

