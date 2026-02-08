import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <p className={css.wrap}>
        © NoteHUB All rigths reserved. Created {new Date().getFullYear()}
      </p>
      <Link href="mailto:yurashaplavsky@gmail.com">
        Developer: yurashaplavsky@gmail.com
      </Link>
    </footer>
  );
}
