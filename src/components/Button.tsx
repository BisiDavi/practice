/* eslint-disable react/button-has-type */
import styles from 'styles/Button.module.css';

interface ButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ title, type }: ButtonProps): JSX.Element {
  return (
    <button type={type} className={styles.button}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  type: 'submit',
};
