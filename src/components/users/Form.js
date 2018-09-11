import React from 'react';

function UserForm({ handleSubmit, handleChange, user }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="username">Username</label>
        <input className="input" name="username"
          placeholder="e.g. Pete232332"
          value={user.username || ''}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <input className="input" name="email"
          value={user.email || ''}
          placeholder="e.g. pete@aol.com"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        {/* Add upload from device option */}
        <label className="label" htmlFor="boardType">Board Type</label>
        <input className="input" name="boardType"
          value={user.boardType || ''}
          placeholder="e.g. OneWheel Plus"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="ridingStyle">Riding Style</label>
        <input className="input" name="ridingStyle"
          value={user.ridingStyle || ''}
          placeholder="e.g. Offroad"
          onChange={handleChange}
        />
      </div>

      <button className="button is-info is-rounded is-outlined">Submit</button>
    </form>

  );
}

export default UserForm;