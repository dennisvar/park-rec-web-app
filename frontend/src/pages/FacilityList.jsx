import React, { useState } from "react";
import BookingForm from "./BookingForm";

const mockData = [
  {
    id: 1,
    name: "Playground",
    image: "https://via.placeholder.com/150",
    description:
      "A playground with swings, slides and monkey bars for children to play on.",
    location: "Location 1",
    maxCapacity: 10,
    bookings: [
      { date: "2022-12-25", spots: 3 },
      { date: "2022-12-26", spots: 2 },
    ],
    totalBookings: function () {
      let total = 0;
      this.bookings.forEach((booking) => {
        total += booking.spots;
      });
      return total;
    },
    spotsRemaining: function () {
      return this.maxCapacity - this.totalBookings();
    },
  },
  {
    id: 2,
    name: "Tennis Court",
    image: "https://via.placeholder.com/150",
    description: "A full-size tennis court with lights for evening play.",
    location: "Location 2",
    maxCapacity: 20,
    bookings: [
      { date: "2022-12-25", spots: 5 },
      { date: "2022-12-26", spots: 10 },
    ],
    totalBookings: function () {
      let total = 0;
      this.bookings.forEach((booking) => {
        total += booking.spots;
      });
      return total;
    },
    spotsRemaining: function () {
      return this.maxCapacity - this.totalBookings();
    },
  },
  {
    id: 3,
    name: "Basketball Court",
    image: "https://via.placeholder.com/150",
    description: "A regulation-size basketball court with adjustable hoops.",
  },
  {
    id: 4,
    name: "Soccer Court",
    image: "https://via.placeholder.com/150",
    description: "A regulation-size basketball court with adjustable hoops.",
  },
];

function FacilityList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState({});
  const [bookingForm, SetBookingPage] = useState("");

  const onClose = () => SetBookingPage(false);
  const handleView = (facility) => {
    setSelectedFacility(facility);
    setShowModal(true);
  };

  return (
    <div>
      <BookingForm visible={bookingForm} Onclose={onClose} />
      <body className="bg-white">
        <body>
          <div class="h-screen bg-gray-100 pt-20">
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div class="rounded-lg md:w-2/3 flex flex-col">
                {mockData.map((data) => {
                  return (
                    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <img
                        src={data.image}
                        alt="product-image"
                        class="w-full rounded-lg sm:w-40"
                      />
                      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                          <h2 class="text-lg font-bold text-gray-900">
                            {data.name}
                          </h2>
                          <p class="mt-1 text-xs text-gray-700">
                            {data.description}
                          </p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div class="flex items-center border-gray-100 flex-col">
                            <div className="flex items-center rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 mb-2">
                              <button onClick={() => handleView(data)}>
                                View
                              </button>
                            </div>
                            <div className="flex items-center rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <button
                                onClick={() => SetBookingPage(true)}
                                className="text-sm mx-2"
                              >
                                Booking
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <div className="p-10 bg-white rounded">
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedFacility.name}
                </h2>
                <img
                  src={selectedFacility.image}
                  alt="facility-image"
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-gray-700 mt-2">
                  {selectedFacility.description}
                </p>
                <ul className="mt-2"></ul>
              </div>
            </Modal>
          )}
        </body>
      </body>
    </div>
  );
}
const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-300 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-sm">
        <div className="absolute top-0 right-0">
          <button
            className="text-white bg-red-500 rounded-sm py-1 px-3"
            onClick={onClose}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FacilityList;
