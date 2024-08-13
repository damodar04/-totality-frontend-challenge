import React from 'react';

interface Property {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const handleBookNow = () => {
    // Add to cart logic here
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}/night</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
