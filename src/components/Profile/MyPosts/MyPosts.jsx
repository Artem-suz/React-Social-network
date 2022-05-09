import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { TextareaProfile } from "../../common/FormsControls/FormsControls";


const MyPosts =  (props) => {
 


  const onAddPost = (values) => {
    props.addPost(values);
    
  };

  return (
    <div className={s.myPostsBlock}>
      <div className={s.submitPostBox}>
        <h3>My posts</h3>
        <MyPostsForm onAddPost={onAddPost} />
      </div>
      <div className={s.posts}>
        {props.posts.map((p) => {
          return (
            <Post
              profile={props.profile}
              message={p.post}
              id={p.id}
              key={p.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const MyPostsForm = (props) => {
  const validationSchema = yup.object().shape({
    post: yup.string().max(100, "Too long").required(""),
  }); 

  return (
    <Formik
      initialValues={{
        post: "",
      }}
      validateOnBlur
      onSubmit={(values, actions) => {
        props.onAddPost(values.post)
        actions.resetForm({post: ""})
        
      }}
      validationSchema={validationSchema}
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
          <div>
            <Field
              placeholder="Whats&#39;s new?"
              type={"text"}
              name={"post"}
              component={TextareaProfile}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.post}
            />
          </div>
          {touched.post && errors.post && (
            <p className={s.error}>{errors.post}</p>
          )}

          <span className={s.buttonPost}>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Post
            </button>
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default MyPosts;
