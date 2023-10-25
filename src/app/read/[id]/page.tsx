interface LayoutProps {
  params: {
    id: number;
  };
}

export default function Read(props: LayoutProps) {
  return (
    <>
      <h2>Read</h2>
      paramters{props.params.id}
    </>
  );
}
