import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settings__wrapper'>
        <h2 className='settings-title'>Settings</h2>

        <div className='settings__top'>
          <button className='settings__btn'>My Details</button>
          <button className='settings__btn active__btn'>Profile</button>
          <button className='settings__btn'>Password</button>
          <button className='settings__btn'>Email</button>
          <button className='settings__btn'>Notification</button>
        </div>

        <div className='details__form'>
          <h2 className='profile__title'>Profile</h2>
          <p className='profile__desc'>
            Update your photo and personal details here
          </p>
          <form>
            <div className='form__group'>
              <div>
                <label>Live in</label>
                <input type='text' placeholder='Medellin, Colombia ' />
              </div>
              <div>
                <label>Street</label>
                <input type='text' placeholder='SYL 54' />
              </div>
            </div>

            <div className='form__group'>
              <div>
                <label>Email</label>
                <input type='email' placeholder='example@gmail.com' />
              </div>
              <div>
                <label>Phone Number</label>
                <input type='Number' placeholder='+55 87*******' />
              </div>
            </div>

            <div className='form__group'>
              <div>
                <label>Date of Birth</label>
                <input type='date' placeholder='dd/mm/yyyy' />
              </div>
              <div>
                <label>Gender</label>
                <input type='text' placeholder='Male' />
              </div>
            </div>

            <div className='form__group'>
              <div>
                <label>Your Photo</label>
                <p className='profile__img-desc'>
                  This will be displayed in your profile
                </p>
                <input type='file' placeholder='choose file' />
              </div>
              <div className='profile__img-btns'>
                <button className='dlt__btn'>Delete</button>
                <button className='upd__btn'>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
