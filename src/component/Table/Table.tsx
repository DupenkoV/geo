import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './table.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { changeReadStatus } from '../../slices/messagesSlice';
import type { eventMessage } from '../../types/types';
import { useCallback } from 'react';

interface TableProp {
  messageList: eventMessage[];
}

export const Table: React.FC<TableProp> = ({ messageList }) => {
  const dispatch = useAppDispatch();

  const buttonChangeReadStatus = useCallback(
    (item: eventMessage) => {
      return (
        <Button
          label={item.isRead ? 'Читал' : 'Не читал'}
          key={item.id}
          onClick={e => {
            dispatch(changeReadStatus(item.id));
          }}
        />
      );
    },
    [dispatch]
  );

  return (
    <div className="card">
      <DataTable
        value={messageList}
        paginator
        rowClassName={rowData => {
          if (rowData.isRead === false) return 'bg-blue-500';
        }}
        rows={9}
        tableStyle={{ minWidth: '50rem' }}
        scrollHeight="95vh"
        dataKey="id"
        showGridlines
        style={{ backgroundColor: 'lightgray' }}>
        <Column field="date" header="Дата" style={{ width: '10%' }} />
        <Column field="importance" header="Важность" style={{ width: '10%' }} />
        <Column
          field="equipment"
          header="Оборудование"
          style={{ width: '15%' }}
        />
        <Column
          field="message"
          header="Сообщение"
          style={{ width: '40%' }}
          sortable
        />
        <Column
          field="responsibility"
          header="Ответственный"
          style={{ width: '15%' }}
          sortable
        />
        <Column
          body={item => buttonChangeReadStatus(item)}
          header="Статус"
          style={{ width: '20%' }}
          sortable
        />
      </DataTable>
    </div>
  );
};
