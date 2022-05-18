import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import ConfirmModal from "./ConfirmModal";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`https://cavity-care.herokuapp.com/doctors`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <section>
        <h4 className="my-10 text-xl">Manage doctor </h4>
        <p>Total doctor: {doctors.length}</p>
      </section>
      <section>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Image</th>
                <th>Name</th>
                <th>email</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors &&
                doctors?.map((doctor, index) => (
                  <tr key={doctor._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div class="avatar">
                        <div class="w-12 rounded-full">
                          <img
                            src={doctor.img}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.specialty}</td>
                    <td>
                      <label
                        onClick={() => setDeletingDoctor(doctor)}
                        for="confirm-modal"
                        class="btn btn-error btn-xs text-white"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        {deletingDoctor && (
          <ConfirmModal
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
          ></ConfirmModal>
        )}
      </section>
    </>
  );
};

export default ManageDoctor;
