interface titleProps {
  children: string;
  styles: string;
}

export default function Titles({ children, styles }: titleProps) {
  return <div className={styles}>{children}</div>;
}
