interface titleProps {
  children: React.ReactNode;
  styles: string;
}

export default function Titles({ children, styles }: titleProps) {
  return <div className={styles}>{children}</div>;
}
