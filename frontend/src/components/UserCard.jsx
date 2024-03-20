import React from 'react'

export const UserCard = ({ user }) => {
    const { first_name, last_name, email, image } = user;
    return (
      <article className="w-96 bg-slate-600 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <h3 className="font-bold">{first_name} {last_name}</h3>
        <small className="hidden md:block">email: {email}</small>
        <img
          className="object-cover w-4/5 mx-auto"
          src={`http://localhost:3000/img/usuarios/${image}`}
          alt="imagen-juego"
        />
      </article>
    );
  };

  export default UserCard;
