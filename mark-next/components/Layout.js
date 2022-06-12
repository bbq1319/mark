export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx>{`
        #app {
          /* font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding-left: 220px;
          margin: 50px; */
        }
      `}</style>
    </>
  );
}
