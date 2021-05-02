const ErrorPage = () => {
  const shakeAnimaton = `@keyframes shake {
    0% { transform: skewX(-15deg); }
    1% { transform: skewX(15deg); } 
    2% { transform: skewX(15deg); } 
    3% { transform: skewX(-15deg); }
    4% { transform: skewX(0); }
  }`;

  const zoomAnimation = `@keyframes zoomInOut {
    0% { transform: scale(1,1); }
    50% { transform: scale(1.05,1.05); }
    100% { transform: scale(1,1); }
  }`;

  const sectionStyle: React.CSSProperties = {
    width: "32rem",
    padding: "1rem",
    margin: "0 auto",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    lineHeight: 1.5,
    fontSize: "2rem",
    fontWeight: 500,
    color: "#2D3748",
  };

  const mainStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    textAlign: "center",
    backgroundColor: "#E2E8F0",
    height: "100vh",
  };

  const circleStyle: React.CSSProperties = {
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 2px 0 rgba(0, 0, 0, 0.06)",
    margin: "auto",
    width: "300px",
    height: "300px",
    border: "10px solid #bf4722",
    borderRadius: "50%",
    fontSize: "50px",
    textAlign: "center",
    color: "#bf4722",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    animation: "zoomInOut 10s infinite",
  };

  const linkStyle: React.CSSProperties = {
    color: "#bf4722",
  };

  const shakeStyle: React.CSSProperties = {
    animation: "5s shake infinite",
  };

  return (
    <main style={mainStyle}>
      <style
        dangerouslySetInnerHTML={{
          __html: `${shakeAnimaton}
                  ${zoomAnimation}`,
        }}
      />
      <section style={sectionStyle}>
        <div style={{ paddingBottom: "3rem" }}>
          <div style={circleStyle}>404</div>
        </div>

        <span>Are you lost in the woods?</span>
        <br />
        <div style={shakeStyle}>
          <a style={linkStyle} href="/">
            Go Home
          </a>
        </div>
      </section>
    </main>
  );
};
export default ErrorPage;
