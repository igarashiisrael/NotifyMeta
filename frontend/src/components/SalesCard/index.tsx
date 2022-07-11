import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
  return (
    <div className="notifymeta-card">
      <h2 className="notifymeta-sales-title">Vendas</h2>
      <div>
        <div className="notifymeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => { }}
            className="notifymeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="notifymeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => { }}
            className="notifymeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="notifymeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <td>R$ 55300.00</td>
              <td>
                <div className="notifymeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <td>R$ 55300.00</td>
              <td>
                <div className="notifymeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <td>R$ 55300.00</td>
              <td>
                <div className="notifymeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard
