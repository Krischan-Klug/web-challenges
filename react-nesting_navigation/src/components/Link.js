export default function Link({ children, link }) {
  return (
    <>
      <a className="navigation__link" href={link}>
        {children}
      </a>
    </>
  );
}
