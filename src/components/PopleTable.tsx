import React from 'react';
import { Person } from '../types';
import { PersonLink } from './PersonLink';

interface Props {
  people: Person[];
  allPeople: Person[];
  selectedSlug: string | null;
  onSelectPerson: (slug: string) => void;
}

export const PeopleTable: React.FC<Props> = ({
  people,
  allPeople,
  selectedSlug,
  onSelectPerson,
}) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr data-cy="person">
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <tr
            data-cy="person"
            key={person.slug}
            className={
              person.slug === selectedSlug ? 'has-background-warning' : ''
            }
            onClick={() => onSelectPerson(person.slug)}
            style={{ cursor: 'pointer' }}
          >
            <td>
              <PersonLink name={person.name} allPeople={allPeople} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              <PersonLink name={person.motherName} allPeople={people} />
            </td>
            <td>
              <PersonLink name={person.fatherName} allPeople={people} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
