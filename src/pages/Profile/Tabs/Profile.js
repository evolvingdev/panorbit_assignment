import React, { useState, useEffect } from "react";
import "../Dashboard.css";
import maps from "../../../assets/maps.png";
function Profile() {
  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    const profile = localStorage.getItem("profile");
    setProfileDetails(JSON.parse(profile));
  }, []);
  return (
    <div>
      <div className="details">
        <div className="personalDetails">
          <img
            src={profileDetails.profilepicture}
            width="200px"
            height="auto"
            style={{ borderRadius: "50%" }}
            alt="profilePhoto"
          />
          <br />
          <div className="miniHeading">{profileDetails.name}</div>
          <br />
          <div className="usernameProfile">
            <div className="credentials">
              <span>Username :</span> &nbsp;{" "}
              <span className="miniHeading">{profileDetails.username}</span>{" "}
            </div>
            <br />
            <div className="credentials">
              <span>E-mail :</span> &nbsp;{" "}
              <span className="miniHeading">{profileDetails.email}</span>{" "}
            </div>
            <br />
            <div className="credentials">
              <span>Phone :</span> &nbsp;{" "}
              <span className="miniHeading">{profileDetails.phone}</span>
            </div>
            <br />
            <div className="credentials">
              <span>Website :</span> &nbsp;{" "}
              <span className="miniHeading">{profileDetails.website}</span>{" "}
            </div>
            <br />
            <div className="line"></div>
            <div className="subHeading">Company</div>
            <div className="credentials">
              <span>Name :</span> &nbsp;{" "}
              <span className="miniHeading">
                {profileDetails &&
                  profileDetails.company &&
                  profileDetails.company.name}
              </span>{" "}
            </div>
            <br />
            <div className="credentials">
              <span>catchphrase :</span> &nbsp;{" "}
              <span className="miniHeading">
                {profileDetails &&
                  profileDetails.company &&
                  profileDetails.company.catchPhrase}
              </span>{" "}
            </div>
            <br />
            <div className="credentials">
              <span>bs :</span> &nbsp;{" "}
              <span className="miniHeading">
                {profileDetails &&
                  profileDetails.company &&
                  profileDetails.company.bs}
              </span>{" "}
            </div>
            <br />
          </div>
        </div>
        <div className="address">
          <span>Address : </span>
          <br />
          <br />
          <div className="credentials">
            &nbsp; &nbsp; &nbsp; &nbsp; <span>Street :</span> &nbsp;{" "}
            <span className="miniHeading">
              &nbsp;{" "}
              {profileDetails &&
                profileDetails.address &&
                profileDetails.address.street}
            </span>{" "}
          </div>
          <div className="credentials">
            &nbsp; &nbsp; &nbsp; &nbsp; <span>Suite :</span> &nbsp;{" "}
            <span className="miniHeading">
              &nbsp;{" "}
              {profileDetails &&
                profileDetails.address &&
                profileDetails.address.suite}
            </span>{" "}
          </div>
          <div className="credentials">
            &nbsp; &nbsp; &nbsp; &nbsp; <span>City :</span> &nbsp;{" "}
            <span className="miniHeading">
              &nbsp;{" "}
              {profileDetails &&
                profileDetails.address &&
                profileDetails.address.city}
            </span>{" "}
          </div>
          <div className="credentials">
            &nbsp; &nbsp; &nbsp; &nbsp; <span>Zipcode :</span> &nbsp;{" "}
            <span className="miniHeading">
              &nbsp;{" "}
              {profileDetails &&
                profileDetails.address &&
                profileDetails.address.zipcode}
            </span>{" "}
          </div>
          <div className="mapAddress">
            <img
              src={maps}
              alt=""
              width="700px"
              style={{ borderRadius: "23px" }}
            />
            <div className="latandlongitude">
              <span> Lat : </span>
              &nbsp;
              <span className="miniHeading">
                {" "}
                {profileDetails &&
                  profileDetails.address &&
                  profileDetails.address.geo &&
                  profileDetails.address.geo.lat}
              </span>{" "}
              &nbsp; &nbsp;
              <span> Long : </span>
              &nbsp;
              <span className="miniHeading">
                {profileDetails &&
                  profileDetails.address &&
                  profileDetails.address.geo &&
                  profileDetails.address.geo.lng}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
