import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Edit,
  Edit2,
  Eye,
  Plus,
  Search,
  Trash2,
} from "react-feather";
import { Link } from "react-router-dom";
import TableEntryText from "@components/TableEntryText";
import ConfirmationPopup from "@components/ConfirmationPopup";
import AppointmentStatusPopup from "@components/AppointmentStatusPopup";

export default function RegistrarManagement() {
  const [deletePopupVisibility, setDeletePopupVisibility] = useState(false);
  const [updateStatusPopupVisibility, setUpdatePopupVisibility] =
    useState(false);

  const onDelete = () => {};
  return (
    <>
      <div className="dashboard__container">
        <div className="main__container__top__bar">
          <div className="details__header">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.0233 0.0274309C9.41992 0.109725 9.81653 0.137157 10.1848 0.246883C12.7628 1.01496 14.3209 2.66084 14.8592 5.21196C15.0292 6.0349 15.0292 6.88527 14.9442 7.73564C14.8592 8.53115 14.0943 9.16207 13.2727 9.16207C12.8761 9.16207 12.4512 9.16207 12.0262 9.16207C12.0262 8.77803 12.0262 8.42143 12.0262 8.03739C11.9696 8.03739 11.9412 8.00996 11.9129 8.00996C10.7797 8.00996 9.64656 8.00996 8.51337 8.00996C8.23008 8.00996 7.97511 8.20198 7.91845 8.47629C7.86179 8.72317 8.00345 8.97006 8.25841 9.07978C8.37173 9.13465 8.48504 9.13464 8.62669 9.13464C9.67488 9.13464 10.7231 9.13464 11.7713 9.13464C11.8279 9.13464 11.9129 9.13464 11.9979 9.13464C11.8563 10.3416 10.7231 11.8229 8.825 11.9875C6.78528 12.1521 5.0855 10.6708 4.94385 8.72317C4.77388 9.16208 4.40559 9.16207 4.06564 9.16207C3.61237 9.16207 3.18742 9.13464 2.81914 8.88776C2.33754 8.58601 2.05425 8.14712 2.02592 7.57106C1.99759 6.66582 1.94093 5.73315 2.1959 4.85535C2.8758 2.3591 4.51891 0.795509 7.0969 0.164588C7.38019 0.0822937 7.69182 0.0548627 7.97512 0C8.31507 0.0274314 8.65502 0.0274309 9.0233 0.0274309ZM13.7543 5.78802C13.4994 3.12718 11.0914 1.09726 8.3434 1.17955C5.31214 1.28927 3.3574 3.64837 3.21575 5.78802C3.49905 5.76059 3.78234 5.76058 4.09397 5.73315C4.43392 5.70572 4.77388 5.76058 4.94385 6.14462C5.0855 4.25186 6.6153 2.93516 8.3434 2.88029C9.3066 2.82543 10.1565 3.12717 10.8647 3.7581C11.573 4.38902 11.9696 5.18453 12.0546 6.17206C12.2245 5.78802 12.4795 5.70572 12.8195 5.73315C13.1028 5.76058 13.4427 5.76059 13.7543 5.78802Z" />
              <path d="M11.9397 19.9394C9.26909 19.9394 6.62577 19.9394 3.98246 19.9394C3.98246 19.8485 3.98246 19.7576 3.98246 19.697C3.98246 18.7576 3.98246 17.8182 3.98246 16.8788C3.98246 16.4848 3.76446 16.2121 3.4647 16.2121C3.13769 16.2121 2.89244 16.4545 2.86519 16.8182C2.86519 17.3939 2.86519 17.9697 2.86519 18.5455C2.86519 19.0303 2.86519 19.4849 2.86519 19.9697C2.78344 19.9697 2.72893 19.9697 2.67443 19.9697C1.99317 19.9697 1.3119 19.9697 0.630632 19.9697C0.249123 19.9697 0.0311213 19.697 0.00387067 19.303C-0.02338 18.2121 0.085616 17.1212 0.576128 16.1515C1.4754 14.3333 2.83794 13.2727 4.71823 13.0606C4.85448 13.0303 4.99074 13.0303 5.12699 13.0303C5.15424 13.2727 5.18149 13.5152 5.23599 13.7576C5.5085 14.9697 6.18976 15.7273 7.27979 16.0909C7.38879 16.1212 7.4433 16.1818 7.4433 16.303C7.4433 16.6667 7.4433 17.0303 7.4433 17.4242C7.4433 17.8182 7.68855 18.0909 8.01556 18.0909C8.31532 18.0909 8.58783 17.7879 8.58783 17.4242C8.58783 17 8.58783 16.5758 8.58783 16.1515C10.0049 15.697 10.7679 14.6667 10.8769 13C11.2311 13.0606 11.5854 13.0606 11.9397 13.1515C14.0652 13.6667 15.6457 15.5455 15.9455 17.9697C16 18.4242 16 18.9091 16 19.3939C16 19.697 15.7547 19.9697 15.4822 20C14.7192 20 13.9562 20 13.1932 20C13.1932 20 13.1659 20 13.1387 19.9697C13.1387 19.9091 13.1387 19.8182 13.1387 19.7273C13.1387 18.7576 13.1387 17.7879 13.1387 16.8182C13.1387 16.4848 12.9207 16.2424 12.6754 16.2121C12.4029 16.1818 12.1304 16.3333 12.0487 16.6364C12.0214 16.7576 12.0214 16.8788 12.0214 17C12.0214 17.9091 12.0214 18.8182 12.0214 19.7576C11.9397 19.7576 11.9397 19.8485 11.9397 19.9394Z" />
            </svg>
            Registrar Management
          </div>
          <div style={{ display: "flex" }}>
            <div className="list__search__wrapper">
              <input type="text" placeholder="Search" />
              <Search size={19} className="list__search__wrapper__icon" />
            </div>
            <Link
              className="details__print"
              to={"/dashboard/registrar-management/add"}
            >
              <Plus size={18} color="white" style={{ marginRight: ".5em" }} />
              Add Registrar
            </Link>
          </div>
        </div>
        <div className="details__container">
          <div className="container__main__content__listing__table">
            <div className="container__main__content__listing__table__header">
              <div className="container__main__content__listing__table__header__entry">
                Last Name
              </div>
              <div className="container__main__content__listing__table__header__entry">
                First Name
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Email
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Location
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Department
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Official Contact
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Appointment Status
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Action
              </div>
              {/* <div className="container__main__content__listing__table__header__entry">
                Appointment Status
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Appointment Date
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Appointment Time
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Appointed By
              </div> */}
            </div>
            <div className="container__main__content__listing__table__content">
              <TableEntry
                onClickDelete={() => setDeletePopupVisibility(true)}
                onClickUpdate={() => setUpdatePopupVisibility(true)}
              />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
            </div>
          </div>
        </div>
      </div>

      {deletePopupVisibility && (
        <ConfirmationPopup
          onClose={() => setDeletePopupVisibility(false)}
          onDelete={onDelete}
        />
      )}
      {updateStatusPopupVisibility && (
        <AppointmentStatusPopup
          onClose={() => setUpdatePopupVisibility(false)}
        />
      )}
    </>
  );
}

function TableEntry({ onClickDelete, onClickUpdate }) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText>Khan</TableEntryText>
      <TableEntryText>Saleem</TableEntryText>
      <TableEntryText>saleem@yahoo.com</TableEntryText>
      <TableEntryText>Madagascar</TableEntryText>
      <TableEntryText>HR</TableEntryText>
      <TableEntryText>065-3567-754</TableEntryText>
      <div className="container__main__content__listing__table__content__list__entry">
        <button
          className="container__main__content__listing__table__content__list__entry__action__update"
          onClick={onClickUpdate}
          style={{ padding: "0.6em 2em" }}
        >
          <Edit size={14} color="white" style={{ marginRight: ".5em" }} />
          Update
        </button>
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        <Link
          className="container__main__content__listing__table__content__list__entry__action__view"
          style={{ marginRight: ".5em" }}
          to={"/dashboard/registrar-management/detail"}
        >
          <Eye size={18} />
        </Link>
        <Link
          className="container__main__content__listing__table__content__list__entry__action__edit"
          style={{ marginRight: ".5em" }}
          to={"/dashboard/registrar-management/edit"}
        >
          <Edit2 size={18} />
        </Link>
        <Link
          className="container__main__content__listing__table__content__list__entry__action__delete"
          onClick={onClickDelete}
        >
          {" "}
          <Trash2 size={18} />{" "}
        </Link>
      </div>
    </div>
  );
}
