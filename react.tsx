import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import axios from 'axios';

interface Property {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  amenities: string[];
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    axios.get('/api/properties').then(response => {
      setProperties(response.data);
    });
  }, []);

  const filteredProperties = properties.filter(property =>
    property.location.includes(filter)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by location..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
