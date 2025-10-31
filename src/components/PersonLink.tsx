import React from 'react';
import { Person } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  name: string | null;
  allPeople: Person[];
}

export const PersonLink: React.FC<Props> = ({ name, allPeople }) => {
  if (!name) {
    return <>-</>;
  }

  const person = allPeople.find(p => p.name === name);

  if (!person) {
    return <>{name}</>;
  }

  return (
    <Link
      to={`/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : 'has-text-link'}
    >
      {person.name}
    </Link>
  );
};
