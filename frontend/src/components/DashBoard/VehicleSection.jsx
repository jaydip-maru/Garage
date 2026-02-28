import { Link } from "react-router-dom";
import "./VehicleSection.css";

function VehicleSection() {
  const vehicles = [
    {
      name: "Bike",
      image: "https://images.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350_468x263.jpg"
    },
    {
      name: "Scooter",
      image: "https://media.istockphoto.com/id/111842186/photo/female-scooter-rider-in-paris-france.jpg?s=612x612&w=0&k=20&c=LIKLHaFnrqlhF14yAPKOO1aFOJg00HDSj4IP5TAcmvE="
    },
    {
      name: "Car",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      name: "SUV",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    },
    {
      name: "Truck",
      image: "https://img.freepik.com/premium-photo/red-semi-truck-with-lights-it-is-traveling-down-snowy-road-ai-photo_1185498-36829.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ];

  return (
    <section className="vehicle-section">
      <h1 className="head-vehical">We Service All Types of Vehicles</h1>

      <div className="vehicle-grid">
        {vehicles.map((vehicle, index) => (
            <Link to="/bookNow">
          <div className="vehicle-card" key={index}>
            <img src={vehicle.image} alt={vehicle.name} />
            <div className="overlay">
              <h3>{vehicle.name}</h3>
            </div>
          </div>
            </Link>
        ))}
      </div>
    </section>
  );
}

export default VehicleSection;