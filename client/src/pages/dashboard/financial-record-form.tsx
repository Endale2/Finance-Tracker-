import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  description: string;
  amount: number | string;
  type: 'income' | 'expense';
  category: string;
  date: string;
}

function FinancialRecordForm() {
  const [formData, setFormData] = useState<FormData>({
    description: '',
    amount: '',
    type: 'income',
    category: 'entertainment',
    date: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can handle form submission logic here, like sending data to a server
  };

  return (
    <div>
      <h4>Financial Record Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="entertainment">Entertainment</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
            <option value="utility">Utility</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default FinancialRecordForm;
