import { useState } from 'react';
import Pagination from '../components/Pagination';

const employees = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Jane', lastName: 'Smith' },
  { id: 3, firstName: 'Michael', lastName: 'Johnson' },
  { id: 4, firstName: 'Emily', lastName: 'Williams' },
  { id: 5, firstName: 'David', lastName: 'Jones' },
  { id: 6, firstName: 'Emma', lastName: 'Brown' },
  { id: 7, firstName: 'James', lastName: 'Davis' },
  { id: 8, firstName: 'Olivia', lastName: 'Miller' },
  { id: 9, firstName: 'Daniel', lastName: 'Wilson' },
  { id: 10, firstName: 'Sophia', lastName: 'Moore' },
  { id: 11, firstName: 'Lucas', lastName: 'Taylor' },
  { id: 12, firstName: 'Ava', lastName: 'Anderson' },
  { id: 13, firstName: 'Liam', lastName: 'Thomas' },
  { id: 14, firstName: 'Mia', lastName: 'Jackson' },
  { id: 15, firstName: 'Noah', lastName: 'White' },
  { id: 16, firstName: 'Isabella', lastName: 'Harris' },
  { id: 17, firstName: 'Logan', lastName: 'Martin' },
  { id: 18, firstName: 'Amelia', lastName: 'Thompson' },
  { id: 19, firstName: 'Ethan', lastName: 'Garcia' },
  { id: 20, firstName: 'Charlotte', lastName: 'Martinez' },
  { id: 21, firstName: 'Mason', lastName: 'Robinson' },
  { id: 22, firstName: 'Ella', lastName: 'Clark' },
  { id: 23, firstName: 'Alexander', lastName: 'Rodriguez' },
  { id: 24, firstName: 'Grace', lastName: 'Lewis' },
  { id: 25, firstName: 'Henry', lastName: 'Lee' },
  { id: 26, firstName: 'Scarlett', lastName: 'Walker' },
  { id: 27, firstName: 'Jacob', lastName: 'Hall' },
  { id: 28, firstName: 'Chloe', lastName: 'King' },
  { id: 29, firstName: 'William', lastName: 'Allen' },
  { id: 30, firstName: 'Lily', lastName: 'Scott' }
];

export default function EmployeesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <h1>Employees Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .slice((currentPage - 1) * 5, currentPage * 5)
            .map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={Math.ceil(employees.length / 5)}
      />
    </div>
  );
}