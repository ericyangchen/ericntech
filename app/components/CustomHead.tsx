interface Props {
  title?: string;
}
export default function CustomHead({ title = "Home" }: Props) {
  return (
    <>
      <title>{`${title} | Eric 'N' Tech`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Eric'n'TECH is created by Chen, Yang Jung aka Eric Chen in his not-so-free time."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </>
  );
}