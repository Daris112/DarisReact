import React, { useState } from "react";

function WeatherSimple() {
  const [query, setQuery] = useState("Prizren");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const API_KEY = "6eb27715a1d65e1a9ea7d438612698ff";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setErr("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          query
        )}&units=metric&appid=${API_KEY}&lang=en`
      );

      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🌈 --- STYLING ---
  const container = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
    padding: 20,
    fontFamily: "'Inter', sans-serif",
  };

  const card = {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
    borderRadius: 16,
    padding: 28,
    maxWidth: 400,
    width: "100%",
    color: "white",
    textAlign: "center",
    boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
  };

  const input = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "none",
    outline: "none",
    fontSize: 15,
    background: "rgba(255,255,255,0.2)",
    color: "white",
    marginBottom: 10,
  };

  const button = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 15,
  };

  const errorBox = {
    background: "rgba(255, 0, 0, 0.25)",
    padding: "10px 12px",
    borderRadius: 10,
    marginTop: 10,
  };

  const weatherInfo = {
    marginTop: 20,
    background: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 20,
  };

  const tempText = {
    fontSize: 54,
    fontWeight: 700,
    margin: "10px 0",
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={{ fontSize: 26, marginBottom: 10 }}>🌦️ Weather App</h1>
        <form onSubmit={handleSearch}>
          <input
            style={input}
            placeholder="Enter a city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" style={button} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {err && <div style={errorBox}>⚠️ {err}</div>}

        {weather && (
          <div style={weatherInfo}>
            <h2 style={{ margin: 0 }}>
              📍 {weather.name}, {weather.sys.country}
            </h2>
            <div style={tempText}>{Math.round(weather.main.temp)}°C</div>
            <div style={{ fontSize: 16, textTransform: "capitalize" }}>
              {weather.weather[0].description}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div style={{ marginTop: 6, opacity: 0.85, fontSize: 14 }}>
              Feels like {Math.round(weather.main.feels_like)}°C • Humidity{" "}
              {weather.main.humidity}% • Wind {Math.round(weather.wind.speed)} km/h
            </div>
          </div>
        )}

        {!loading && !weather && !err && (
          <div style={{ opacity: 0.8, marginTop: 10 }}>
            Type a city to see the weather 🌍
          </div>
        )}

        <div style={{ opacity: 0.6, fontSize: 12, marginTop: 20 }}>
          Source: OpenWeatherMap API
        </div>
      </div>
    </div>
  );
}

export default WeatherSimple;
