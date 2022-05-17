import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";

const AddDoctor = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`https://cavity-care.herokuapp.com/services`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <section>
        <h4 className="my-10 text-xl">Add a new doctor</h4>
      </section>
      <section>
        <form className="form-control w-full max-w-xs mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="my-2 block">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Doctors's Name"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="my-2 block">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Doctors's Email"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="specialty" className="my-2 block">
              <span className="label-text">Specialty:</span>
            </label>
            <select
              id="specialty"
              class="select select-bordered w-full max-w-xs"
            >
              {services.map((service) => (
                <>
                  <option key={service._id}>{service.name}</option>
                </>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="my-2 block">
              <span className="label-text">Image:</span>
            </label>
            <input
              type="file"
              id="image"
              placeholder="Doctor's image"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="my-5">
            <button className="btn btn-primary w-full">Add Now</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddDoctor;
