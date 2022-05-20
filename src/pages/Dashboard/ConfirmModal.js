import React from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;

  const handleDelete = () => {
    console.log(email);
    fetch(`https://cavity-care.herokuapp.com/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor ${email} info is deleted`);
        } else {
          toast.error("Something went wrong!");
        }
        setDeletingDoctor(null);
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id="confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to remove {name}?
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button onClick={handleDelete} className="btn btn-xs btn-error">
              Delete
            </button>
            <label for="confirm-modal" class="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
