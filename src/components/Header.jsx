import styles from './Header.module.css';
import igniteLogo from '../assets/react.svg';

console.log(igniteLogo);

export function Header(){
  return (
    <>
      <header className={ styles.header }>
        <img src={igniteLogo} alt="Logo" />
        <strong ></strong>
      </header>
    
    </>
  );
}