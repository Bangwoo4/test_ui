import React, { useState } from 'react';
import Button from '@mui/material/Button';

function PlansList({ trips }) {
  const [visibleTrips, setVisibleTrips] = useState(5);
  const [showAllTrips, setShowAllTrips] = useState(false);

  const handleShowMore = () => {
    setVisibleTrips(prevVisibleTrips => prevVisibleTrips + 5);
  };

  const handleShowAll = () => {
    setVisibleTrips(trips.length);
    setShowAllTrips(true);
  };

  const handleCollapse = () => {
    setVisibleTrips(5);
    setShowAllTrips(false);
  };

  return (
    <div className="TripTable">
      <table>
        <thead className='tvn'>
          <tr className="TripValueName">
            <th>Route</th>
            <th>Estimated Time</th>
            <th>Estimated Cost</th>
            <th>Departure Time</th>
            <th>Driver</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.slice(0, visibleTrips).map((trip) => (
            <tr
              className="tripTripUnit"
              style={
                trip.status === 'Completed'
                  ? { backgroundColor: 'lightgreen' }
                  : trip.status === 'Scheduled'
                  ? { backgroundColor: 'lightblue' }
                  : trip.status === 'Pending'
                  ? { backgroundColor: 'grey' }
                  : trip.status === 'In progress'
                  ? { backgroundColor: 'lightcoral' }
                  : { backgroundColor: 'white'}
              }
              key={trip.id}
            >
              <td className="tripRoute">{trip.route || "__?__"}</td>
              <td className="tripRoute">{trip.route || "__?__"}</td>
              <td className="tripEstimatedTime">{trip.estimatedTime || "___?___"}</td>
              <td className="tripEstimatedCost">{trip.estimatedCost || "___?___"}</td>
              <td className="tripDepartureTime">{trip.departureTime || "__?__"}</td>
              <td className="tripDriver">{trip.driver || "__?__"}</td>
              <td className="tripVehicle">{trip.vehicle || "__?__"}</td>
              <td className="tripStatus">{trip.status || "__?__"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showAllTrips && visibleTrips < trips.length && (
        <Button variant="contained" onClick={handleShowMore}>Show More</Button>
      )}
      {!showAllTrips && (
        <Button variant="contained" onClick={handleShowAll}>Show All</Button>
      )}
      {showAllTrips && (
        <Button variant="contained" onClick={handleCollapse}>Collapse</Button>
      )}
    </div>
  );
}

export default PlansList;