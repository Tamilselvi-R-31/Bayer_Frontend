"use client";
import { useState } from "react";
import Sidebar from '../../../../../components/common/sidebar'

export default function HealthMetrics() {
  const [metrics, setMetrics] = useState([
    { id: 1, date: "2025-02-10", heartRate: 75, temperature: 98.6, glucose: 100 },
    { id: 2, date: "2025-02-11", heartRate: 80, temperature: 98.9, glucose: 110 },
    { id: 3, date: "2025-02-12", heartRate: 72, temperature: 97.5, glucose: 95 },
    { id: 4, date: "2025-02-13", heartRate: 78, temperature: 99.1, glucose: 105 },
    { id: 5, date: "2025-02-14", heartRate: 74, temperature: 98.3, glucose: 98 },
  ]);

  const [formData, setFormData] = useState({ id: null, date: "", heartRate: "", temperature: "", glucose: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setMetrics(metrics.filter((item) => item.id !== id));
  };

  const handleEdit = (metric) => {
    setFormData(metric);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setFormData({ id: null, date: "", heartRate: "", temperature: "", glucose: "" });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setMetrics(metrics.map((item) => (item.id === formData.id ? formData : item)));
    } else {
      setMetrics([...metrics, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
    <Sidebar />
    <div className="metrics-container">
      <h1>Health Metrics</h1>
      <button className="btn add-metric" onClick={handleAdd}>Add Metric</button>

      {/* Metrics Table */}
      <table className="metrics-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Heart Rate (bpm)</th>
            <th>Body Temperature (°F)</th>
            <th>Blood Glucose (mg/dL)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr key={metric.id}>
              <td>{metric.date}</td>
              <td>{metric.heartRate}</td>
              <td>{metric.temperature}</td>
              <td>{metric.glucose}</td>
              <td className="metrics-actions">
                <button className="btn edit" onClick={() => handleEdit(metric)}>Edit</button>
                <button className="btn delete" onClick={() => handleDelete(metric.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Modal for Add/Edit Form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal metrics-modal">
            <h2>{formData.id ? "Edit" : "Add"} Metrics</h2>
            <form className="metrics-form" onSubmit={handleSubmit}>
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
              <input type="number" placeholder="Heart Rate (bpm)" value={formData.heartRate} onChange={(e) => setFormData({ ...formData, heartRate: e.target.value })} required />
              <input type="number" step="0.1" placeholder="Body Temperature (°F)" value={formData.temperature} onChange={(e) => setFormData({ ...formData, temperature: e.target.value })} required />
              <input type="number" placeholder="Blood Glucose (mg/dL)" value={formData.glucose} onChange={(e) => setFormData({ ...formData, glucose: e.target.value })} required />
              <div className="modal-actions">
                <button className="btn submit" type="submit">{formData.id ? "Update" : "Add"} Metric</button>
                <button className="btn cancel" type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
      </div>
  );
}
