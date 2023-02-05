import TitleImg from "../images/pexels.jpg";

const PostMain = () => {
  return (
    <div className="post-main">
      <img src={TitleImg} alt="reneissance" />
      <div className="post-main-detail">
        <h2>THE MAIN TITLE IN TWO LINE</h2>
        <div className="post-date-contributors">
          <div className="post-detail-date">
            <h4>DATE</h4>
            <p>23rd August, 2022</p>
          </div>
          <div className="post-detail-contributors">
            <h4>CONTRIBUTORS</h4>
            <ul>
              <li>Moses Oyemade</li>
              <li>Moses Oyemade</li>
              <li>Moses Oyemade</li>
              <li>Moses Oyemade</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMain;
