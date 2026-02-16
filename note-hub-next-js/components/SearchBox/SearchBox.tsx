import css from './SearchBox.module.css';

interface SearchBoxProp {
  searchQuery: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ searchQuery, onChange }: SearchBoxProp) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={searchQuery}
      onChange={onChange}
    />
  );
}
