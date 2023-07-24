"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const KEY = "f26a1d2c7387a78efdda84903fecbb7f";
  const city = "london";
  const [datos, setDatos] = useState();

  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    );
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      setDatos(data);
    });
  }, []);

  return (
    <div>
      <h1>Fetch de Weather API</h1>
      {datos && JSON.stringify(datos)}
    </div>
  );
}
