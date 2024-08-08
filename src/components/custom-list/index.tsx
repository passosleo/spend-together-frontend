type CustomListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
};

export function CustomList<T>({
  data,
  renderItem,
  className,
}: CustomListProps<T>) {
  return (
    <ul className={className}>
      {data.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}
