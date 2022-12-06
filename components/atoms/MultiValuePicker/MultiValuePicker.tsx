import styles from './MultiValuePicker.module.css';

type Props<ValuePickerType> = {
  values: ValuePickerType[];
  selected: ValuePickerType;
  onSelect: (selected: ValuePickerType) => void;
};

const MultiValuePicker = ({ values, selected, onSelect }: Props<any>) => {
  return (
    <div className={styles.container}>
      {values.map((v, i) => {
        const itemClass = [
          styles.item,
          ...(v === selected ? [styles.selected] : []),
        ].join(' ');
        return (
          <div key={i} className={itemClass} onClick={() => onSelect(v)}>
            {v}
          </div>
        );
      })}
    </div>
  );
};

export default MultiValuePicker;
