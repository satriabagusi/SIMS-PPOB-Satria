import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../redux/slices/authSlice";
import { updateProfile, updateProfilePhoto } from "../../services/user.service";
import Button from "../Elements/Button";
import TextInput from "../Elements/Input";

const ProfileDetail = () => {
  const user = useSelector((state) => JSON.parse(state.auth.user));
  const token = useSelector((state) => state.auth.token);

  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);

  const [isEditMode, setIsEditMode] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setUploadedPhoto(null);
      setPhotoPreview(null);
      setErrorMessage("");
      return;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      setUploadedPhoto(null);
      setPhotoPreview(null);
      setErrorMessage("File harus berupa gambar (.jpg, .png)");
      return;
    }

    if (file.size > 100 * 1024) {
      setUploadedPhoto(null);
      setPhotoPreview(null);
      setErrorMessage("File harus kurang dari 100kb");
      return;
    }

    setUploadedPhoto(file);

    // Tampilkan pratinjau gambar
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleUpdate = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
    };

    if(firstName === "" || lastName === ""){
      setErrorMessage("Nama depan atau nama belakang tidak boleh kosong.");
      setTimeout(() => {
        setErrorMessage("");
      }, 1500);
      return;
    }

    updateProfile(token, data, (status, response) => {
      console.log(status, response);
      if (status) {
        dispatch(setUser(JSON.stringify(response)));
        setIsEditMode(false);
        setMessage("Berhasil update data");
        setTimeout(() => {
          setMessage("");
        }, 1500);
      } else {
        setErrorMessage("Gagal update data");
      }
    });

    if (uploadedPhoto) {
      const data = {
        file: uploadedPhoto,
      };
      updateProfilePhoto(token, data, (status, response) => {
        if (status) {
          dispatch(setUser(JSON.stringify(response)));
          setMessage("Berhasil update foto");
          setTimeout(() => {
            setMessage("");
          }, 1500);
        } else {
          setErrorMessage("Gagal update foto");
          setTimeout(() => {
            setErrorMessage("");
          }, 1500);
        }
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-6 justify-center w-screen items-center text-center mt-10 mb-10">
      <div className="w-36">
        <img
          src={photoPreview ? photoPreview : (user.profile_image ? user.profile_image : "/images/Profile Photo.png")}
          alt=""
          className="border object-cover  border-slate-300 rounded-full w-36 h-36"
        />

        {isEditMode ? (
          <>
            <label
              htmlFor="profile-photo"
              className="absolute flex ml-28 w-8 h-8 top-60 border border-gray-400 rounded-full items-center justify-center cursor-pointer bg-white text-gray-400 hover:text-gray-950 transition duration-300 ease-in-out"
            >
              <i className="bi bi-pencil-fill"></i>
            </label>
            <input
              type="file"
              className="hidden"
              id="profile-photo"
              accept="image/*"
              onChange={handleFileChange}
            />
          </>
        ) : null}
      </div>
      <h1 className="font-normal text-4xl">
        {user.first_name + " " + user.last_name}
      </h1>

      <div className="flex flex-col w-2/4 items-start text-start gap-y-2">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          classtype="w-full"
          readOnly={true}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="flex flex-col w-2/4 items-start text-start gap-y-2">
        <label htmlFor="first_name" className="font-medium">
          Nama Depan
        </label>
        <TextInput
          name="first_name"
          type="text"
          placeholder="Nama Depan"
          classtype="w-full"
          readOnly={isEditMode ? false : true}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div className="flex flex-col w-2/4 items-start text-start gap-y-2">
        <label htmlFor="last_name" className="font-medium">
          Nama Belakang
        </label>
        <TextInput
          name="last_name"
          type="text"
          placeholder="Nama Belakang"
          classtype="w-full"
          readOnly={isEditMode ? false : true}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      {!isEditMode && (
        <Button
          variant="btn-outline-primary"
          classname="w-2/4 justify-center"
          onClick={() => setIsEditMode(true)}
        >
          Edit Profile
        </Button>
      )}

      {!isEditMode && (
        <Button
          variant="btn-primary"
          classname="w-2/4 justify-center"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      )}

      {isEditMode && (
        <Button
          variant="btn-primary"
          classname="w-2/4 justify-center"
          onClick={() => handleUpdate()}
        >
          Simpan
        </Button>
      )}

      {message !== "" && (
        <div className="w-2/4 text-center border border-emerald-500 rounded mt-10 bg-emerald-500 py-5 text-white">
          <p className="text-2xl font-bold">{message}</p>
        </div>
      )}
      {errorMessage !== "" && (
        <div className="w-2/4 text-center border border-red-500 rounded mt-10 bg-red-500 py-5 text-white">
          <p className="text-2xl font-bold">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
