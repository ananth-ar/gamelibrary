import "./css/Footer.css"

function Footer() {
  return (
    <>
      <div className="footer">
        <div
          style={{ height: "1px", background: "white", margin: "5px" }}
          className="line-1"
        ></div>
        <div
          style={{ height: "1px", background: "white", margin: "5px" }}
          className="line-1"
        ></div>
        <div className="grid--2">
          <div className="footer1">
            <p className="footer_p">
              <a className="footer_content" href="">
                Feedback
              </a>
            </p>
            <p className="footer_p1">
              <a className="footer_content" href="">
                Privacy Policy
              </a>
            </p>
            <p className="footer_p1">
              <a className="footer_content" href="">
                Terms and Conditions{" "}
              </a>
            </p>
          </div>
          <div className="footer2">
            <div className="footer_p">
              Follow us on
              <div className="grid--4">
                <div className="badge">
                  <div className="i instagram">
                    {" "}
                    <img
                      className="iconimage"
                      src="src\components\img\icons\instagram.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="badge">
                  <div className="i facebook">
                    <img
                      className="iconimage"
                      src="src\components\img\icons\facebook.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="badge">
                  <div className="i youtube ">
                    <img
                      className="iconimage"
                      src="src\components\img\icons\youtube.svg"
                      alt=""
                    />
                  </div>
                </div>{" "}
                <div className="badge">
                  <div className="i x ">
                    <img
                      className="iconimage"
                      src="src\components\img\icons\x-twitter.svg"
                      alt=""
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
            <p className="footer_p1">
              Game tracker HELLO!{" "}
              <span>
                {" "}
                <img
                  className="copyright"
                  src="src\components\img\icons\copyright-regular.svg"
                  alt=""
                />
              </span>{" "}
              2018
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Footer };
