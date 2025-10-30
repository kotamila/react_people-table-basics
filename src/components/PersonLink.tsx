import React from 'react';
import { Person } from '../types';

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
    <a href={`#/people/${person.slug}`} className="has-text-danger">
      {person.name}
    </a>
  );
};
