import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store'
import { useState, useEffect, MouseEvent } from 'react'
import { errorTost, successTost } from './Modals/tost'
import { CgSpinner } from "react-icons/cg";
import axios from '../Utilities/axios';
import { PROFILE_IMAGE_UPLOAD } from '../Utilities/Constants';
import { changeUserProfile } from '../Redux/userProfileReducer';

// interface ImageUploadProps {
//     imageUrl: string;
//     onImageChange: (image: File) => void;
// }
function Settings() {
    const dispatch: AppDispatch = useDispatch()
    const profile = useSelector((state: RootState) => state.userprofile)
    const [saveChange, SetSaveChange] = useState(false)
    const [userName, SetUserName] = useState(profile.userName)
    const [userPhone, SetUserPhone] = useState(profile.userPhone)
    const [userEmail, SetUserEmail] = useState(profile.userEmail)
    const [loading, setLoading] = useState(false);

    const [previewUrl, setPreviewUrl] = useState<string>(profile.userPhoto);

    const imageUpload = (formDate: any) => {
        console.log(formDate);

        // eslint-disable-next-line no-useless-escape
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, '$1');
        axios.post(PROFILE_IMAGE_UPLOAD, formDate, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response.data.newUser.profile_image);
            successTost('Image updated')
            dispatch(changeUserProfile({ userPhoto: response.data.newUser.profile_image }));
        }).catch((error) => {
            console.log(error);
            setPreviewUrl(profile.userPhoto)
            errorTost('Something went wrong')
        })
    }


    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFile = files[0];
            // image reale-time render
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewUrl(fileReader.result as string);
            };

            fileReader.readAsDataURL(selectedFile);

            const formData = new FormData();
            formData.append('profile_image', selectedFile);

            // upload to server
            imageUpload(formData)

        }

    };



    function handleSubmit(): void {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            SetSaveChange(false)
            successTost('Profile Updated')
        }, 2000);
    }

    return (
        <div className="md:pl-16 pt-12">
            <div className="w-full md:w-full lg:w-3/4 p-6 mx-auto">
                <div className="intro-y text-xl font-medium">Settings</div>
                <div className="grid grid-cols-12 gap-6 mt-2">
                    <div className="intro-y col-span-12 lg:col-span-6">
                        <div className="intro-y box p-4">
                            <div>
                                <label htmlFor="setting-form-1" className="form-label">
                                    Photo
                                </label>
                                <div className="image-upload border shadow-sm relative flex flex-col items-center justify-center rounded-md py-8 mt-3">
                                    <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={previewUrl} alt="" />

                                    <div className="image-upload__info mt-2">
                                        Update profile Picture
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="w-full h-full top-0 left-0 absolute opacity-0"
                                        id="setting-form-1"
                                        onChange={handleImageChange}
                                    />
                                    {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}

                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="setting-form-2" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control" value={userName}
                                    onChange={(e) => { SetSaveChange(true); SetUserName(e.target.value) }} id="setting-form-2" />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="setting-form-3" className="form-label">
                                    Phone
                                </label>
                                <input type="text" className="form-control" value={userPhone}
                                    onChange={(e) => { SetSaveChange(true); SetUserPhone(e.target.value) }} id="setting-form-3" />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="setting-form-4" className="form-label">
                                    Email
                                </label>
                                <input type="text" className="form-control" value={userEmail}
                                    onChange={(e) => { SetSaveChange(true); SetUserEmail(e.target.value) }} id="setting-form-4" />
                            </div>
                            {/* <div className="mt-3">
                                <label htmlFor="setting-form-5" className="form-label">
                                    Bio
                                </label>
                                <textarea
                                    className="form-control"
                                    rows={5}
                                    id="setting-form-5"
                                    defaultValue={""}
                                />
                            </div> */}
                            {saveChange ? (
                                <button className="btn btn-primary w-full mt-3" onClick={handleSubmit}>
                                    Save Settings{loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}</button>
                            ) : (
                                <button className="btn btn-secondary w-full mt-3">Save Settings</button>
                            )}

                        </div>
                        {/* <div className="intro-y box p-4 mt-5">
                            <div className="flex items-center">
                                <div className="mr-auto">
                                    <div className="">Echo Cancellation</div>
                                    <div className="text-gray-500">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                                <input type="checkbox" className="form-check-switch" />
                            </div>
                            <div className="flex items-center mt-5">
                                <div className="mr-auto">
                                    <div className="">Noise Reduction</div>
                                    <div className="text-gray-500">
                                        Lorem Ipsum has been the industry's standard
                                    </div>
                                </div>
                                <input type="checkbox" className="form-check-switch" />
                            </div>
                            <div className="flex items-center mt-5">
                                <div className="mr-auto">
                                    <div className="">Advanced Voice Activity</div>
                                    <div className="text-gray-500">
                                        It was popularised in the 1960s
                                    </div>
                                </div>
                                <input type="checkbox" className="form-check-switch" />
                            </div>
                        </div> */}
                    </div>
                    <div className="intro-y col-span-12 lg:col-span-6">
                        {/* <div className="intro-y box p-4">
                            <div className="mt-3">
                                <label htmlFor="change-password-1" className="form-label">
                                    Current Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="change-password-1"
                                    placeholder="Current Password"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="change-password-2" className="form-label">
                                    New Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="change-password-2"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="change-password-3" className="form-label">
                                    Password Confirmation
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="change-password-3"
                                    placeholder="Password Confirmation"
                                />
                            </div>
                            <button className="btn btn-primary w-full mt-4">
                                Change Password
                            </button>
                        </div> */}
                        {/* <div className="intro-y box p-4 ">
                            <div>
                                <label htmlFor="social-media-form-1" className="form-label">
                                    Twitter
                                </label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        {" "}
                                        <i data-feather="twitter" className="w-4 h-4 mt-0.5" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="social-media-form-1"
                                        placeholder="Twitter Account"
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="social-media-form-2" className="form-label">
                                    Facebook
                                </label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        {" "}
                                        <i data-feather="facebook" className="w-4 h-4 mt-0.5" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="social-media-form-2"
                                        placeholder="Facebook Account"
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="social-media-form-3" className="form-label">
                                    Instagram
                                </label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        {" "}
                                        <i data-feather="instagram" className="w-4 h-4 mt-0.5" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="social-media-form-3"
                                        placeholder="Instagram Account"
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="social-media-form-4" className="form-label">
                                    Github
                                </label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        {" "}
                                        <i data-feather="github" className="w-4 h-4 mt-0.5" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="social-media-form-4"
                                        placeholder="Github Account"
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="social-media-form-5" className="form-label">
                                    Slack
                                </label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        {" "}
                                        <i data-feather="slack" className="w-4 h-4 mt-0.5" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="social-media-form-5"
                                        placeholder="Slack Account"
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary w-full mt-3">Save Settings</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Settings