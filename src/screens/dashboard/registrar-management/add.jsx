import React, { useState, useContext } from "react";
import { ArrowLeft, Save } from "react-feather";
import { useNavigate } from "react-router-dom";
import InputSelect from "@components/InputSelect";
import { isNullOrEmpty } from "../../../utils/isNullOrEmpty";
import { PopupContext } from "../../../context/PopupContext";
import { registrarPostCall } from "../../../apis/Repo";
import { isInvalidEmail } from "../../../utils/validations";
import binary_data from "../../../utils/binaryImage";
import Tooltip from "@components/Tooltip";

export default function AddRegistrarManagement() {
  const navigate = useNavigate();
  const { setAlertPopupVisibility, setAlertPopupMessage } =
    useContext(PopupContext);
  const [civilRegisterId, setCivilRegisterId] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [appointmentAddress, setAppointmentAddress] = useState("");
  const [appointmentsStatus, setAppointmentStatus] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointedBy, setAppointedBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setErrorMessageAndVisibility = (text, visibility) => {
    setAlertPopupMessage(text);
    setAlertPopupVisibility(visibility);
  };

  const options = [
    { value: 1, label: "registrar id 1" },
    { value: 2, label: "registrar id 2" },
    { value: 3, label: "registrar id 3" },
    { value: 4, label: "registrar id 4" },
  ];

  const appointmentOptions = [
    { value: 1, label: "Appointed" },
    { value: 2, label: "Trasferred" },
    { value: 3, label: "Posting awaited" },
  ];

  const isViewValid = () => {
    if (isNullOrEmpty(lastName))
      setErrorMessageAndVisibility("Enter last name", true);
    else if (isNullOrEmpty(firstName))
      setErrorMessageAndVisibility("Enter first name", true);
    else if (isNullOrEmpty(email))
      setErrorMessageAndVisibility("Enter email address", true);
    else if (isInvalidEmail(email))
      setErrorMessageAndVisibility("Enter valid email address", true);
    else if (isNullOrEmpty(department))
      setErrorMessageAndVisibility("Enter department", true);
    else if (isNullOrEmpty(contactNumber))
      setErrorMessageAndVisibility("Enter contact number", true);
    else if (isNullOrEmpty(appointmentAddress))
      setErrorMessageAndVisibility("Enter appointment address", true);
    else if (isNullOrEmpty(appointmentsStatus))
      setErrorMessageAndVisibility("Enter appointment status", true);
    else if (isNullOrEmpty(appointmentDate))
      setErrorMessageAndVisibility("Enter appointment date", true);
    else if (isNullOrEmpty(appointmentTime))
      setErrorMessageAndVisibility("Enter appointment time", true);
    else if (isNullOrEmpty(appointedBy))
      setErrorMessageAndVisibility("Enter appointed by", true);
    else return true;
    return false;
  };

  const postRegistrar = () => {
    if (isViewValid()) {
      let object = {
        first_name: firstName,
        last_name: lastName,
        office_email: email,
        department_name: department,
        office_contact: contactNumber,
        location: appointmentAddress,
        appointment_status: appointmentsStatus.label,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        appointed_by: appointedBy,
      };
      setIsLoading(true);
      registrarPostCall(object)
        .then(({ data }) => {
          setIsLoading(false);
          if (data.data.success) {
            navigate(-1);
          } else
            setErrorMessageAndVisibility(
              "Some error occurred, please try later",
              true
            );
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("err", err);
        });
    }
  };

  const binaryString = btoa(unescape(encodeURIComponent(binary_data)));
  // const image = `data:image/jpg;base64,${binaryString}`;
  const image =
    "iVBORw0KGgoAAAANSUhEUgAAAFgAAABSCAYAAADQDhNSAAAABHNCSVQICAgIfAhkiAAAFN5JREFUeJztnHl0FFW+xz/VS3rLTkJ2EkICIWEzgICIw8Ao6KCo4zDKuM04bqjPJyLqoAj6VBREHcVtBnXUcUMU3BVUhFFQQJEQkwhJyJ6Qfe10ernzRzVFd9JJukOKd857+Z6Tc6qr7vKrb27d+t3f73tLSk1NFQxBNWj+tw34v44hglXGEMEqY4hglTFEsMoYIlhlDBGsMoYIVhlDBKuMIYJVhu6UdxgaTsSkGZjiRoBGg62umtZfDtFRcliV/szJaYSMHo8hKhZcLqxVpTQe2I2jpUmV/rrjlBGsMZpJ/fPtxJ27CI0+qMd1a3U5NdvepfLDN7A3N5xUX/rwSOJ/exkxZ1+MKTaxx3WXvYuqT96m6MXHcHV2nFRf/UE6FcEeXXAoEx95heBRY/st6+y0UrHlFUrfeg6nNbCb15rMjPjDDSRceCVao6nf8m2Fefx011U4WpsD6icQnBKCx61+jmHTfg2AEIKW3P005exFOJ2YEpKJmDidoMhorzq2ump+eeo+Gr7b4VcfkdNmM/qW1fJU4IYQAntjHY0/7cFaUYKk1RI+fiphWZNBkgCo/24Hh+67fnBu1AdUJzhy6q8Y/8ALAAiXk/x1d3Hsy/e7WaEhcsoskhZdR/j4KcppIQRVH79F4fMP4eqy+Wxfozcw6oa/EnfeH5DcpAkhaD60n7K3X6Bh3y4QLq86w+dcQMayNUgaLQA5K6+j4fuvB+uWvaCNiIhYpUrLbqQtuRdTfDIIQfm7L1O++UUfpQTWyhJqtr1LW2EeoZmnobOEIEkSIaPHETnlLBr27cTZ0eZVyxAdx4SHXiRq+hwkSUIIga22ioLH7qL4xXVYK0uAnuOnvbgArclCWGY2APqQ8J7/9EGCqm6a1hxM+KQZALicTsre+Ue/dep3f8G+6xdQ/fm7IGRyQtKzyH5yE8Hp45RywenjyH5yEyHpWYA8amu2vce+6xdQv/uLfvspe2cjLocDgPBJM9CagwO+P3+gKsGhYyag0cmOSkv+AexN9X7Vc1rbKVh/N/nr71amhqDIaCY9+grhp51B+GlnMOnRV5R529llo2D93RSsvxuntd2vPuxN9bTkHwBAo9MROmZCoLfnF1R108wjRinHbYdzA65fs+09OsqKGbfqGYLCh6E1WRi/+jkANEEGALqa6sldtUQhKxC0HT5E+Lgpiq2NP34bcBv9QdURHBQ5XDnuPFY5oDZa8w9wYOlldFaXAzKxx8ntrC7nwNLLBkSubFOVT1sHE+rOwSazctz9BRUIrJUlFL20vsf5opfWu19kA4OnTZ62DibUjUW43SZAeWENBObkdEbfsqrH+dG3rMKcnD7gdr1s8rR1EKEqwZ6+q9Y4sBESFBHF+AdeQBccCoCtoRZbQy0grxDHP/AC+oioAbXtOWp787NPFqoS7LkE1YdFBFxf0geRtXIDxuHxcnvtbeSs+As5K/6Co11+vI3D4xm3cgOSj/hGf9CHnrBJreWyqgTb6muUY0N0bB8lfSP9ppWEjp0EgHA6+PnBW2kvzqe9OJ+fH7wV4ZT92NCxk0i/6b6A2/e0ydPWwYSqBB9/8wPyai4AxM67hLj5vwfkRUTh82to/OHfyvXGH/5N4QtrlN9x8y8hdt4lAfVhik9R2ve0dTChKsEdZYXKsTnF/5eROSWdtCX3Au4V2vYtVLz/ao9yFVtfpXrbe8rvtCX3BthPmk9bBxOqLjTsTQ3YGmoxREajDw7DGJtEZ3VZr+X1YZEYomLIuGMtWoNRPuly4WhvYdT1f0XS6ZE08pgQLhfCYcfR3opwOpG0WrQGI5l3PU7+2juw1dX0GVc2xiahDw4DoKuxDnvTycWge4PqAffWX3IwTJ8DyHNl57EKzEmjCB41FktKOuakUZgSkjHGJKA19IzhSlotiRde5Xd/lpR0Jm/YAoDTZqWzpgJrRQkdZYW0Hz1MW2EeHWWFytx+3Ea1oHq4MmnRtaT+eRkgu1g6k0U1p95fOK0dOKztGNyxjKKN6yjb9HdV+lKFYI3RxLDpc4ieeQ4Rk89E10+kSgihxHKPo6Ugh5bc/TjaW3F2duDqsuGyd52I7UoaNPogNEEGtEYzOksIoVmTCR0zvs92fcHR0Ubj/n9T+83n1O/5ElenNfCb7gWDSnDI6PHEL7iM6Fnz0ZosPsscf2O3HcmlrSifjtIjdJQfJeH8xcQvWAyAvbmRvdedF3BuTh8WydQXPlZ87soP36Dig39hTkzBPCKd4NQxBKdlYYxN7JV4p7Wd2l2fUvnhG4MydQwKwRHZM0levISwcVN6XBNC4LJ1Kjmyo6/8jZLXN3iVsaRmMPmpzUhaHUII8tcuH3AAfPicCxi7fK3ct9PB/lt+R3tRvleZ5MU3kXLlfwFyDlBrMPpcKjcf2kfJ68/Q+MM3A7IFTjKjYUpMJfOux0i5/BZltQUyqW2FeVS8+xKHn15N6+EcomfNB0BjMFL96SavdrLufQpjTAIAjft2UfziuoGaRHtxAaFjJmJKSEbSaLCMHEP1Z5u9yqRecweGqFj5n7luOUUvPkZXXTW60AhlXgZ5lRgzdyFhmZNpKcjB0dIYsD0DHsGJF1/NyKuXKqFDAKetk5ovtlL54eteo0ZrsjDjzW/RGowIIfj+T2cr7prniHPaOtl3/W9P2uk3xiYy5fmPFFcv79E7lCfCGJvE6S9tQ5IknLZOdl96hleQ3pKaQfyCxcTMXXjCVUSOVRS/vJ7yd18OyJaAR7Ck0zN2+VqSfncNklb28lz2Liref5Wf/+dWar/+CHtjnVcd4bDLbllyGpIk4WhtpjnnezQGI+PuewadJRghBKVvPkf9t9t9G2qyEDVjLtGz5hE+4XSCwodhq61COOw9yjraWpC0OsInTgMgdPQEKj9+E+F0kLDwSiLc5+t3b+8xFdkb62j47iuqPn0HSaslOC0TSatF0uqInDwLc+JI6vd8BS5Xj3592h0QwRoNWfc8pTzucvZ2Hzn3XMuxrz7sU8ThsncxfPYCAAwxCVRsfZWk319L1Bm/AeQ0fd7DS5X4gicSLrqKcaueJWbuQsInTiN84jSizzqX+PMX47J30eoj4N5acJCYuReis4SgswTj6rLRnLufMUsfRh8cihCC4pfWYy0v9m1vZ4fsWez8BEtqhjKFWVJGYxk5htpdn/gVgg2I4JQrbyX+3EWATG7Zpr+Tv+5Ov+amzqoy4s5dhNZkQR8cirXiKCOvvg1NkAEhBEc23E/bkZ5ppfSbV5G8eInXVHQcmiADkVNmERQeRcP3O7yuCacDe3MD0TPPAeTEqe1YFXHz5XiFvbGOw0+v7pHS7w5HaxM1X2xBow8iNDMbSZIwJ6UiabQ0/bSn3/v2m2BT4kgy73oMSaNBCMHRV56k5NW/+R9IFy70oeGKpzHs9F8pC472onyOPHN/jyrDZy8g9c+399t0yOjxWMuP0n70F6/z7Ud/IWrGXIIio9EEGRh2+q+Uaa1i62s0/uindyAETT/uRricREyaDkBY5mkc2/lJvxo3v4M9CQuvUIxr3LeL0jee9beqgsqP30I4nXLH7hEphKD4n4/7/EclL17id9s+ywpB8cuPKz+VPp1OKj9+MxDTASh941nq98oCFUmrI2HhFf3W8ZvgiOyZsnFCUPLGMwEbB2CrqaBuj7dmoTX/J5+qGmNskldWuj+YR4zC6EPo17D3a1ryvOfouj1fYBtgEtZzYB3npC/4TbAxOk45bi0Y+Aqn8oPXvX6XbfItRjEMj/N5vi8YPHzxvvrobkMgaC3IQbifNmO07/484TfBTvf6XJIkdCFhAzQPgtMyvX6HZEz0Wc5l6wyoXXnF6DuG0L2PkLSsgNr2hC4kTFlmO/2QvvpNcFtRnnJ83N0KGBotCRd4z1sJ5y9GHxbZo2h7yeGAEpHC3kV7yZEe5/VhkSScv9jrXPwFl4Nb+Bcohs/+rXLsyUlv8JvgY19+oBwn//EmjDE957v+EDVjDsZuj77WZCFp0XU9yro6rRz7+iO/2z729Uc+o2BJi67rEXgyDo8jasYcv9tW6sUkkvzHmwH5ifHkpDf4TXDNF1tod8v89SFhTHhoY69zXm+IO+9S5bjxwG7lOOH8xT7bKn5pPV3dVoW+0NVYR7EPYYohOk4ZvUIIrz49bfEHhuHxTHhoI3r39NhReoSaL7b0W89vgoXTSd6a2xXVuSkhhewnN/n1JgV59RZx2hkAuBx28h9ZRtPB72UjggyMvPq2HnW6Gmo5uOIaOmurelwDd+iztoqDK66hy62V8IRnrKQ5Zy/5jyzD5V5aR5x2Bgb36qw/RGTPJPvJTZgSUgA5YJ+3ZpnicvaFgFZy9qZ6Wn45SPSZ89Do9GhNZobPuQBjbCKtBT/1KflPWHgFEW4pa/2eL6n+7B06SguJnf97JEnCkpJOw75ddHVLn9sb66j+7B1cXTb04cPQh4aBEHSUFlH5wb/IX3unT5crZMwE0m5coeiG8x6+DWt5MSFpmZiTRiFJEvbWJppz9vZqc1BkNGlLVpJ67Z3o3NOMs9PKofuX0Jrnnx5uQNG04PQssu592itE6ey0Uvnxm1S8909sPkbc1L9/gjkpFSEEufffpGh4M+5cR8yvzwegpeAgP/73or5XhxqNfL2vMpLEaU+8rUhSa776gPxH5LTVsBlzGXef7Md3lBWx99pze1Q3RMeRcNFVxJ93qRLHPi7uzn3g5oCUogNK27cdzmX/jQup3vae4hNqjSaSLv4T017eTtbKDQybPhdJpwfAMnIM5qRUQI50NezdqbRVvHGd4u6EjplA3PxFfXfucvW7PI+bv0gh19nZQfHGE/Hlhr07sbtVPOakVCwjxwBylHDY9LlkrdzAtJe3k3Txn7zIrdm+hf03LgxYhnvSGY3QrMmkXrNMkeN7wt7WQsN3X6EJMigRuOrPN1Ow/q9e5UZcej0jr14q12ltltNFfrzcfEEfESWnjULC5JjJy49T+tbzXmXGLH2I2HN+B0Dtrk9xddmInPZr9G7923EIIWjJ+5Gijetoyd0/IHtOeo+GrbaK6s8203xoP/rQCExxIxRHXBtkIDg1A0vyCYFHV2O9PC+6nPJIEoKW/INEnTmPoLBItAYjxthEand+MiB7MpatUbYVdJQVkb/uTnnUa7SYR4wicsosQjOzFaWRJTmN4NQMtB7ROuFy0bB3J4efXsXRfz7hc8rzF4OeVTbGJBLzmwsZPnsB5qSRfZZ1dXXRUVGMtbwYXXCo4mUA5D92N3XffC5nG/qL2EmSHJCfeTYZt5+QUzX++C2OthZMiSMxJ4xEE9S7QFAIgbW8mGM7PqJm+3t01lT4d8P9QFVdhDklneRLb/Ra/QQK4XLhsllxdtkQdjvCJbtGkkaLpNejDTKgMZgUxc9AcGzHR5S8+SwdRwd/O6+qyp6Oo4ext56Il1Z9uglrZSkh6VkEj8qU0+f9ECNpNGhNll5lAP5AuL2Ozupy2gp/pvVwLqb4EYq40N7apAq5cAqkU6EZbvmp+03cfGifck1jMGFOTMGUkIIxJhHD8DgMUbEMO302klar1OsPnhoH4XRS//0ObHXV2I5V0VlTjrXiKB3lR72CQWHjpigEH7dRDahKsKTTYUkZLf9wuWjt5uK4bFbaCvNoK/QOmiRffgspl9+s1MtZeT0t+QfQ6PUguUe8cOGy2wkdO4nxq59H0mrdsepnKXntqX5taz2cq4gGLSmjkXQ6hKNnPvBkoap81ZQwUiYFeSNLb+HE7ih5fYOyjJa0WjKWrUFnsmBvasDeWCf/NTWgM1nIuH2NMtqbc/b2ELX0BpfNqmyg0ej1mBL6fiEPFCoTfEJ03VFW5H9Fl4u8NUuV+EJQRBRZ921A46FT0BiMZN23gSD3/oyuhlry1iz1O50O0FF+wiZPWwcTqhLsmQXprAlMTNLVUEvug7cqwZmQ9HFkLF8rS5wkiYw71hLi3lrrctjJffBWnwGfvtBZdcImT1sHE6oSrA8fphwHevMALbn7OfL0/YofHD3zHNJuWEHaDSuIPlNOxx9P+Q9kpdXVeMImT1sHE6q+5HTmE66Vo611QG1Uffo2psQUki65BsArkyuEoHzzi1R98vaA2na0n7BJax64G9gX1N2IqD3x/3M5e0qc/EXRxrUc2/Gh1zkhBLVff0zRxrUDbtdTdiVp1RlrqhIs7CduwNd3evxvSNDRTeIkSZL8kjqJHaSee+uEvWvA7fQFdTfBeEiqgsIGOMdJEqOuu4vEi67ucSnl8lvQWULk7VwDINrTJrtKX6FSlWDPgMnxeHAg0BjNZNzxiKIvE0LQuG8XAJFTzwIg8aKrMQxPIH/t8oC/IOVp02AFd7pD1Smi7cjPynHY+KmA/xuuzUmjyH7ibS9ya3d8xKHVSzi0eonXnBw982yyn3gbc5L/SiAkyW2TWzDuYetgQt2NiKVHsNVVA2CIiiFi8pn9V5I0JCy8guynNmNxbyoUQlD61vPkPboM4bAjHHbyHllGyZvPKbEKS0o62U9tlr0Mqf/bisg+E0NUDABd9TV0lPbUVAwGVP8oki40QvmqSHB6JjXbt/oUTQOET5xO5ooniJt3CRp3usnR0U7BuuVUbu2507PpwB46ygqJmDxL3nGk0xM59SyGTZuNtbK018WN1mQh854nCXILXiref42mA/1LUQcC1ffJ6cMiOX3jZ8rnCNoK8yj8xyM05+xDuJyYYpOIyJ5JzNkXeX03RwhBa8FB8h+9o9+Pbpjik8lYvpbQbhKploKD1Gx7j8YfvsFaXYak0RI2fiqj/rJc+Uieo62F76+Zd9JfG+wNp+TDdNGz5jP27se9Yr/HY7S+4sGO9laOvvY0FVtf8T+2oNGQsPBKUi6/GZ0lpMdl4XKBJHmHNl0u8h6+jdpdnwZ+U35C9SkC5LnYWl1O5OQzlUdf6n6zQuC0tlOx9VXyHr6NpgO7A3O9hKA1/wDVn70DkoQlZbSX7929P2enlYIn7qF2h//yrIHglIzg4zBEx5Fw4VVETj1L/vqqJNFVX0PrLznUf7eDum8+C/h7lb1BazITNXMew6bNJmT0eIKGxYAQWKtKadi7k4otvvUbg41TSvD/Rwx9oFllDBGsMoYIVhlDBKuMIYJVxhDBKmOIYJXxH4r7WLwgFoGBAAAAAElFTkSuQmCC";

  console.log("image", image);
  console.log("binaryString", binaryString);

  return (
    <div className="dashboard__container">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="dashboard__bg"
      >
        <div className="dashboard__container__top__bar">
          <ArrowLeft
            className="details__header__back"
            size={18}
            onClick={() => navigate(-1)}
          />
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
          Add Registrar
          <Tooltip text="Save Registrar">
            <div className="action__buttons" onClick={postRegistrar}>
              <Save size={15} color="white" style={{ marginRight: "0em" }} />
            </div>
          </Tooltip>
        </div>
        {/* <button
          className="details__print"
          disabled={isLoading}
          onClick={postRegistrar}
        >
          {isLoading ? "Processing..." : "Save"}
        </button> */}
      </div>
      <div className="form__container">
        <div className="form__wrapper">
          {/* <div className="form__bottom">
            <div className="form__bottom__content">Civil Register ID</div>
            <InputSelect
              placeholder="Select"
              widthProp={"1050px"}
              options={options}
              onChange={(e) => setCivilRegisterId(e)}
            />
          </div>
          {!isNullOrEmpty(civilRegisterId) ? (
            <> */}
          <div className="form__bottom">
            <div className="form__bottom__content">Last Name</div>
            <input
              placeholder=""
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">First Name</div>
            <input
              placeholder=""
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Email</div>
            <input
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Department</div>
            <input
              placeholder=""
              value={department}
              onChange={(e) => setDepartment(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Official Contact Number</div>
            <input
              placeholder=""
              value={contactNumber}
              onChange={(e) => setContactNumber(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Appointment Address</div>
            <input
              placeholder=""
              value={appointmentAddress}
              onChange={(e) => setAppointmentAddress(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Appointment Status</div>
            <InputSelect
              placeholder="Select"
              widthProp={"1030px"}
              options={appointmentOptions}
              value={appointmentsStatus}
              onChange={(e) => setAppointmentStatus(e)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Appointment Date</div>
            <input
              placeholder=""
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Appointment Time</div>
            <input
              placeholder=""
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Appointed By</div>
            <input
              placeholder=""
              value={appointedBy}
              onChange={(e) => setAppointedBy(e.currentTarget.value)}
            />
          </div>
          {/* <img src={"data:image/jpg;base64," + binaryString} /> */}
          {/* </>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
