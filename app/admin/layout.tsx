export default function AdminLayOut({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav> </Nav>

      <div className="container my-5 ">{children}</div>
    </>
  );
}
