/* eslint-disable no-unused-vars */
import React from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Card from "../components/Card/Card";
import firebase from "../firebase";

export default function Profile() {
  // const [value, loading, error] = useDocument(
  //   firebase.firestore().collection("users").doc("5CpQKVbSizjmqdebDJtq")
  // );
  const value = true;

  // console.log(error);
  // console.log(loading);
  // console.log(value?.data(), "value");
  if (value) {
    // const det = value.data();
    return (
      <>
        <div className="flex px-20 py-6 mb-12">
          <div>LOGO</div>
          <div className="ml-auto">PROFILE</div>
        </div>
        <div className="container max-w-4xl">
          <Card>
            <div className="flex items-center border-b border-solid border-border-color px-14 py-10">
              <div>
                <h1>Profile</h1>
                <p>Some info may be visible to other people</p>
              </div>
              <div className="ml-auto">
                <button>edit</button>
              </div>
            </div>
            <div className="flex items-center border-b border-solid border-border-color px-14 py-10">
              <div className="min-w-1/3 uppercase">
                <label>Photo</label>
              </div>
              <div>here photo</div>
            </div>
            <div className="flex items-center border-b border-solid border-border-color px-14 py-10">
              <div className="min-w-1/3 uppercase">
                <label>Name</label>
              </div>
              <div>Xanthe Neal</div>
            </div>
            <div className="flex items-center border-b border-solid border-border-color px-14 py-10">
              <div className="min-w-1/3 uppercase">
                <label>Bio</label>
              </div>
              <div>Xanthe Neal</div>
            </div>
            <div className="flex items-center px-14 py-10">
              <div className="min-w-1/3 uppercase">
                <label>Phone</label>
              </div>
              <div>Xanthe Neal</div>
            </div>
          </Card>
          {/* <div>{det?.name}</div>
        <div>{det?.bio}</div>
        <div>{det?.phone}</div> */}
        </div>
      </>
    );
  }

  return <div>This is a profile page</div>;
}
