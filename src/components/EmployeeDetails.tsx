import { CSSProperties } from 'react';
import { Employee } from './Employee.type';

type Props = {
  employee: Employee;
  onBackBtnHandler: () => void;
};

const EmployeeDetails = (props: Props) => {
  const { employee, onBackBtnHandler } = props;

  const containerStyle: CSSProperties = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle: CSSProperties = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center' as 'center',
  };

  const detailStyle: CSSProperties = {
    fontSize: '18px',
    margin: '10px 0',
    color: '#555',
  };

  const buttonStyle: CSSProperties = {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Employee Details</h2>
      <p style={detailStyle}>
        <strong>First Name:</strong> {employee.firstName}
      </p>
      <p style={detailStyle}>
        <strong>Last Name:</strong> {employee.lastName}
      </p>
      <p style={detailStyle}>
        <strong>Email:</strong> {employee.email}
      </p>
      <button style={buttonStyle} onClick={onBackBtnHandler}>
        Back
      </button>
    </div>
  );
};

export default EmployeeDetails;
