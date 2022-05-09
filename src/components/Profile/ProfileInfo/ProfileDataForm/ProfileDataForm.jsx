import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import {
  InputLogin,
  InputProfileFacebook,
  InputProfileVk,
  InputProfileInstagram,
  InputProfileGithub,
  InputProfileYoutube,
  InputProfileMainLink,
  InputProfileWebsite,
  TextareaEditProfile,
} from "../../../common/FormsControls/FormsControls";
import s from "../../ProfileInfo/ProfileInfo.module.css";

const ProfileDataForm = (props) => {

  const validationsScema = yup.object().shape({
    Facebook: yup.string().max(30, "Max: 30 symbols"),
    Vk: yup.string().max(30, "Max: 30 symbols"),
    Instagram: yup.string().max(30, "Max: 30 symbols"),
    Github: yup.string().max(30, "Max: 30 symbols"),
    Youtube: yup.string().max(30, "Max: 30 symbols"),
    MainLink: yup.string().max(30, "Max: 30 symbols"),
    Website: yup.string().max(30, "Max: 30 symbols"),
  });

  return (
    <Formik
      initialValues={{
        Facebook: props.profileContacts.facebook,
        Vk: props.profileContacts.vk,
        Instagram: props.profileContacts.instagram,
        Github: props.profileContacts.github,
        Youtube: props.profileContacts.youtube,
        MainLink: props.profileContacts.mainLink,
        Website: props.profileContacts.website,
        fullName: props.fullName,
        aboutMe: props.aboutMe,
        lookingForAJob: props.lookingForAJob,
        lookingForAJobDescription: props.lookingForAJobDescription,
      }}
      validateOnBlur
      onSubmit={(values) => props.onSubmitProfileHandler(values)}
      validationSchema={validationsScema}
    >
    {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
    }) => (
        <Form>
          <div className={s.topWideColumn}>
            <div className={s.editContactInformationRow}>
              {" "}
              <span className={s.editLabel}>Full name:</span>
              <Field
                  placeholder="Full name"
                  type={"text"}
                  name={"fullName"}
                  component={InputLogin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
              />
              </div>
              {touched.fullName && errors.fullName && (
              <p className={s.error}> {errors.fullName} </p>
            )}

            <div className={s.editContactInformationWideRow}>
              {" "}
              <span className={s.editLabel}>About me:</span>
              <Field
                placeholder="About me"
                type={"text"}
                name={"aboutMe"}
                component={TextareaEditProfile}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe}
              />
            </div>
            {touched.aboutMe && errors.aboutMe && (
              <p className={s.error}> {errors.aboutMe} </p>
            )}

            <div className={s.editContactInformationWideRow}>
              {" "}
              <span className={s.editLabel}>My skills:</span>
              <Field
                placeholder="My professional skills"
                type={"text"}
                name={"lookingForAJobDescription"}
                component={TextareaEditProfile}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription}
              />
            </div>
            {touched.aboutMe && errors.aboutMe && (
              <p className={s.error}> {errors.aboutMe} </p>
            )}

            <div className={s.editContactInformationRow + ' ' + s.checkbox}>
              {" "}
              <span className={s.editLabel}>Looking for a job:</span>
              <Field
                type={"checkbox"}
                name={"lookingForAJob"}
                component={"input"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
            
          <div className={s.midWideColumnTop + ' ' + s.editMode}>
            <div className={s.midWideColumnTop}>
              <h2>Contact information:</h2>
              <div className={s.btnFromEditMode}>
              
                <button
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type={"submit"}
                ><span className="material-icons">
                done
                </span>
                  
                </button>
              </div>
            </div>
            
            <div className={s.editContactInformationRow}>
              {" "}
              <span className={s.editLabel}>Facebook:</span>
              <Field
                placeholder="Facebook"
                type={"text"}
                name={"Facebook"}
                component={InputProfileFacebook}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Facebook}
              />
            </div>
            {touched.Facebook && errors.Facebook && (
              <p className={s.error}> {errors.Facebook} </p>
            )}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("Facebook") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            <div className={s.editContactInformationRow}>
              {" "}
              <span className={s.editLabel}>Vk:</span>
              
              <Field
                placeholder="Vk"
                type={"text"}
                name={"Vk"}
                component={InputProfileVk}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Vk}
              />
            </div>
            {touched.Vk && errors.Vk && <p className={s.error}> {errors.Vk} </p>}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("Vk") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            <div className={s.editContactInformationRow}>
            <span className={s.editLabel}>Instagram: </span>
              
              <Field
                placeholder="Instagram"
                type={"text"}
                name={"Instagram"}
                component={InputProfileInstagram}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Instagram}
              />
            </div>
            {touched.Instagram && errors.Instagram && (
              <p className={s.error}> {errors.Instagram} </p>
            )}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("Instagram") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            <div className={s.editContactInformationRow}>
            <span className={s.editLabel}>Github: </span>
              
              <Field
                placeholder="Github"
                type={"text"}
                name={"Github"}
                component={InputProfileGithub}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Github}
              />
            </div>
            {touched.Github && errors.Github && (
              <p className={s.error}> {errors.Github} </p>
            )}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("Github") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            <div className={s.editContactInformationRow}>
            <span className={s.editLabel}>Youtube: </span>
              
              <Field
                placeholder="Youtube"
                type={"text"}
                name={"Youtube"}
                component={InputProfileYoutube}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Youtube}
              />
            </div>
            {touched.Youtube && errors.Youtube && (
              <p className={s.error}> {errors.Youtube} </p>
            )}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("Youtube") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            <div className={s.editContactInformationRow}>
            <span className={s.editLabel}>Main Link: </span>
              
              <Field
                placeholder="Main Link"
                type={"text"}
                name={"MainLink"}
                component={InputProfileMainLink}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.MainLink}
              />
            </div>
            {touched.MainLink && errors.MainLink && (
              <p className={s.error}> {errors.MainLink} </p>
            )}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("MainLink") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            <div className={s.editContactInformationRow}>
            <span className={s.editLabel}>Website: </span>
              
              <Field
                placeholder="Website"
                type={"text"}
                name={"Website"}
                component={InputProfileWebsite}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Website}
              />
            </div>
            {touched.Website && errors.Website && (
              <p className={s.error}> {errors.Website} </p>
            )}
            {props.errorFromServer &&
              props.errorFromServer.indexOf("Website") !== -1 && (
                <p className={s.error}>{props.errorFromServer}</p>
              )}
            

          </div>

          
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
