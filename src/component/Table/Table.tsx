import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './table.css';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Table = () => {
  const massagesList = useAppSelector(state => state.messages);

  return (
    <div className="card">
      <DataTable
        value={massagesList}
        paginator
        rowClassName={rowData => {
          if (rowData.equipment === 'Cisco1') return 'bg-blue-500';
        }}
        rows={14}
        tableStyle={{ minWidth: '50rem' }}
        scrollHeight="95vh">
        <Column field="date" header="Дата" style={{ width: '15%' }}></Column>
        <Column
          field="importance"
          header="Важность"
          style={{ width: '10%' }}></Column>
        <Column
          field="equipment"
          header="Оборудование"
          style={{ width: '15%' }}></Column>
        <Column
          field="message"
          header="Сообщение"
          style={{ width: '45%' }}
          sortable></Column>
        <Column
          field="responsibility"
          header="Ответственный"
          style={{ width: '15%' }}
          sortable></Column>
      </DataTable>
    </div>
  );
};
