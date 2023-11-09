import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { switchDisplay } from '../../slices/displaySlice';
import './switcher.css';

export const Switcher = () => {
  const switcherDisplay = useAppSelector(state => state.display);
  const dispatch = useAppDispatch();
  const className = (item: string) => {
    if (switcherDisplay !== item) {
      return 'inactive-button';
    }
  };
  return (
    <div>
      <Button
        label="Карточки"
        className={className('Cards')}
        onClick={() => dispatch(switchDisplay('Cards'))}
      />
      <Button
        label="Таблица"
        className={className('Table')}
        onClick={() => dispatch(switchDisplay('Table'))}
      />
    </div>
  );
};
