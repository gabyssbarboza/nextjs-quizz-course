import Link from "next/link";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  href?: string;
  txt: string;
  onClick?: (e: any) => void;
}

const Button = (props: ButtonProps) => {
  function renderLink() {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.txt}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderLink()}</Link>
  ) : (
    renderLink()
  );
};

export default Button;
