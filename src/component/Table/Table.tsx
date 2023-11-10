import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './table.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { changeReadStatus } from '../../slices/messagesSlice';
import type { eventMessage } from '../../types/types';

interface TableProp {
  messageList: eventMessage[];
}

export const Table: React.FC<TableProp> = ({ messageList }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <DataTable
        value={messageList}
        paginator
        rowClassName={rowData => {
          if (rowData.isRead === false) return 'bg-blue-500';
        }}
        rows={14}
        tableStyle={{ minWidth: '50rem' }}
        scrollHeight="95vh"
        dataKey="id"
        onRowDoubleClick={event => {
          dispatch(changeReadStatus(event.data.id));
        }}
        showGridlines>
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
