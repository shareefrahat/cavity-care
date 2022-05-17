import React from "react";

const AddDoctor = () => {
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
            <input
              type="text"
              id="specialty"
              placeholder="Doctors's Specialty"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-4">
            <button className="btn btn-primary">Add Now</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddDoctor;
