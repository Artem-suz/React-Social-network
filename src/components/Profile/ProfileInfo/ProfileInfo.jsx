import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user4.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileFriends from "./ProfileFriends/ProfileFriends.jsx";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileSocialNetworks from "./ProfileSocialNetworks/ProfileSocialNetworks";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmitProfileHandler = (values) => {
    const constructorSentData = {
      aboutMe: values.aboutMe,
      contacts: {
        facebook: values.Facebook,
        github: values.Github,
        instagram: values.Instagram,
        mainLink: values.MainLink,
        twitter: null,
        vk: values.Vk,
        website: values.Website,
        youtube: values.Youtube,
      },
      lookingForAJob: values.lookingForAJob,
      lookingForAJobDescription: values.lookingForAJobDescription,
      fullName: values.fullName,
    };

    let promise = props.saveProfile(constructorSentData);

    promise.then(() => {
      setEditMode(false);
      props.setEmptyErrorFromServer();
    });
  };

  const goToEditMode = () => {
    setEditMode(true);
  };

  return (
    <div className={s.descriptionBlock}>
      <div className={s.narrowColumn}>
        <div className={s.topNarrowColumn}>
          <img
            src={props.profile.photos.large || userPhoto}
            className={s.avatar}
            alt='Profile avatar'
          />

          {props.isOwner && (
            <div className={s.ownerAvatarEditor}>
              <input
                type={"file"}
                onChange={onMainPhotoSelected}
                id="fileImage"
                accept="image/*"
              />
              <label htmlFor="fileImage">
                <span className="material-icons">add_photo_alternate</span>
                Choose a Photo
              </label>
            </div>
          )}
        </div>

        <div className={s.midNarrowColumn}>
          <ProfileFriends friends={props.friends} />
        </div>

        <div className={s.botNarrowColumn}>
          <ProfileSocialNetworks />
        </div>
      </div>
      <div className={s.wideColumn}>
        
        {editMode ? (
          <ProfileDataForm
            profileContacts={props.profile.contacts}
            onSubmitProfileHandler={onSubmitProfileHandler}
            fullName={props.profile.fullName}
            aboutMe={props.profile.aboutMe}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
            errorFromServer={props.errorFromServer}
            status={props.status}
            isOwner={props.isOwner}
            
          />
        ) : (
          <ProfileData
            profileContacts={props.profile.contacts}
            isOwner={props.isOwner}
            fullName={props.profile.fullName}
            aboutMe={props.profile.aboutMe}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
            goToEditMode={goToEditMode}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        )}
      
        <div className={s.botWideColumn}>
          {props.isOwner && <MyPostsContainer  profile={props.profile} />}
        </div>


      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (

      <div> 
        <div className={s.topWideColumn}>
          <h1 className={s.name}>
            <span className={s.label}> Full name:</span> {props.fullName}
          </h1>

          

          <ProfileStatusWithHooks
            status={props.status}
            isOwner={props.isOwner}
            updateStatus={props.updateStatus}
          />

          <h3>
            <span className={s.label}> About me:</span> {props.aboutMe}
          </h3>

          

          {props.lookingForAJob && (
            <h3>
              <span className={s.label}>My skills:</span>{" "}
              {props.lookingForAJobDescription}
            </h3>
          )}

          <h3>
            <span className={s.label}>Looking for a job:</span>{" "}
            {props.lookingForAJob ? "yes" : "no"}
          </h3>
        </div>


        <div className={s.midWideColumn}>
          <div className={s.midWideColumnTop}>
            <h2>Contact information:</h2>
            {props.isOwner && (
                <div className={s.btnEditMode}>
                  <span className="material-icons" onClick={props.goToEditMode}> edit
                  </span>
                </div>
            )}
          </div>
          
          <div className={s.midWideColumnBot}>
            <h3>
              <span className={s.label}>Facebook:</span>{" "}
              {props.profileContacts.facebook}
            </h3>
            <h3>
              <span className={s.label}>Vk:</span> {props.profileContacts.vk}
            </h3>
            <h3>
              <span className={s.label}>Instagram:</span>{" "}
              {props.profileContacts.instagram}
            </h3>
            <h3>
              <span className={s.label}>Github:</span>{" "}
              {props.profileContacts.github}
            </h3>
            <h3>
              <span className={s.label}>Youtube:</span>{" "}
              {props.profileContacts.youtube}
            </h3>
            <h3>
              <span className={s.label}>Main Link:</span>{" "}
              {props.profileContacts.mainLink}
            </h3>
            <h3>
              <span className={s.label}>Website:</span>{" "}
              {props.profileContacts.website}
            </h3>

            {/* {props.isOwner && (
              <div>
                <button onClick={props.goToEditMode} className={s.btnEdit}>Edit</button>
              </div>
            )} */}
          </div>
        </div>
      </div>

      
  

  );
};

export default ProfileInfo;

