import styles from "./styles/App.module.scss";
import classname from "classnames/bind";

import myPhoto from "./src_assets/jpg/my-photo.jpg";
import blogImage from "./src_assets/jpg/my-project-blog.jpg";

const cx = classname.bind(styles);
function App() {
  return (
    <div className={cx("app-container")}>
      <div className={cx("my-info")}>
        <div className={cx("my-info-inner")}>
          <h1>
            <span>프론트엔드 신입 개발자</span>
            <span>신현중 입니다.</span>
          </h1>
          <p>
            <span>Age : 26살</span>
            <span>Phone : 010-7791-1632</span>
            <span>Email : koit3572@gmail.com</span>
            <span>
              Blog :{" "}
              <a href="https://main--koitblog.netlify.app/">
                https://main--koitblog.netlify.app/
              </a>
            </span>
            <span>
              GitHub :{" "}
              <a href="https://github.com/koit3572">
                https://github.com/koit3572
              </a>
            </span>
          </p>
        </div>
        <div className={cx("my-info__photo")}>
          <div className={cx("photo-inner")}>
            <img src={myPhoto} alt="my-photo" />
          </div>
        </div>
      </div>
      <div className={cx("self-introduction")}>
        <h1>자기소개</h1>
        <p className={cx("self-introduction-slogan")}>
          {'"저는 _____ 개발자 입니다."'}
        </p>
        <div className={cx("self-introduction-container")}>
          <div className={cx("self-introduction-container-item")}>
            <h2>즐기는</h2>
            <p>
              조금 늦은 시작이지만 알바를 병행 하면서 공부를 했습니다. 몸은
              힘들었지만 제가 생각한 기능이나 동작을 여러번 부딪치고, 부족한
              기술을 채워넣고 해결하는 과정이 재미있어서 지금까지 이어왔고,
              여기까지 오게 되었습니다. 물론 한번에 해결하지 못하거나 정말
              사소한 실수로 인한 오류가 원인이 되는 등 스트레스를 받는 경우도
              있었지만 이 또한 해결하였을 때의 성취감의 조미료로 느껴졌습니다.
              또한 개발자는 평생 공부하는 직종이라고들 하는데 이러한 말이 저의
              선택에 영향을 주지 못할 정도로 개발이 즐겁습니다.
            </p>
          </div>
          <div className={cx("self-introduction-container-item")}>
            <h2>질문하는</h2>
            <p>
              저는 궁금하거나 문제를 맞닥뜨렸을때 잘 넘어가지 못합니다. 프론트
              엔트 강의를 보면서도 강사님이 당장 중요하지 않아 "지금은 깊게
              이해하지 않으셔도 괜찮습니다."라는 말로 겉핡기 식으로 넘어가거나
              잘 이해가 되지 않는 부분이 있었을때에 추가 검색을 통해 더
              알아보기도 했으며, 문제에 직면했을때 해결할때까지 며칠을
              몰입하기도 했습니다.
            </p>
          </div>
          <div className={cx("self-introduction-container-item")}>
            <h2>정리하는</h2>
            <p>
              저는 문제를 해결하는데 있어 정리하고 규칙을 만들어 해결하려고
              합니다. 예를들어 식당알바를 할 때에도 주방의 오더, 식사중인 손님,
              메뉴를 주문한 손님, 테이블이 있는 손님, 테이블이 없는 손님 순으로
              우선순위를 두며, 상황에 따른 규칙을 만들고 정리하여 그에 따라
              행동합니다. 이렇게 정리하고 규칙을 만드는 습관이 개발 과정에 있어
              더욱 원활하게 문제를 해결하는데 도움이 되었습니다.
            </p>
          </div>
          <div className={cx("self-introduction-container-item")}>
            <h2>미련한</h2>
            <p>
              미련하다는 터무니없는 고집을 부릴정도로 행동이나 생각이 어리석고
              둔하다 라는 부정적인 의미가 강한 단어 이지만 프론트엔드 개발자를
              목표로한 제가 미련해 보였습니다. 늦게 시작했고 주 전공과도 거리가
              멀며, 프론트엔드 개발자업종의 레드오션 현상과, AI에 의한 대체
              가능성에 대한 불안함, 과거에 비해 신입에게 요구하는 기술도 높아져
              취업의 문턱이 높다는 사실 등 열심히 달려갔을때 종착점에 아무것도
              없진 않을까 하는 불안함에 다른길을 가야하나 생각도 했지만, 제가
              처음으로 해보고 싶었던 일이고, 공부해 나가는 과정이 즐겁기 까지
              한데, 개발자를 하지 않고 다른일을 하게 된다면 계속해서 후회할거
              같아 놓지 않고 미련하게 여기까지 왔습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={cx("study-content")}>
        <h1>교육사항</h1>
        <div className={cx("study-content-item")}>
          <h2>
            Fastcampus:한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online
          </h2>
          <p>
            강의를 들으면 저만의 변별력과 강점을 키우지 못할것같아서 개인적인
            오기로 강의를 듣고싶진 않았습니다. 그러나 뭘 모르는지 모르는
            상태로는 어떤것을 공부할지조차 방향을 잡기 힘들다고 판단해 기초를
            쌓기위해, 온라인 강의를 선택했습니다.
          </p>
        </div>
        <div className={cx("study-content-item")}>
          <h2>검색을 통한 추가 공부</h2>
          <p>
            온라인 강의를 선택할 때 가장 중요하게 본것은 강의 총 시간이였습니다.
            강의에 대한 후기나 평가는 광고성 글이 대부분인것으로 보였고 아무것도
            모르는 상태로 객관적으로 판단할 수 있는 몇 안되는 지표라
            생각했기때문입니다. 그럼에도 강의를 다 보고 난 뒤 프로젝트를
            만들어보면서 원하는 코드를 작성하기 위해 더 많은 기술이
            필요하다는것을 느꼈고 추가적인 검색을 통해 원하는 기술을
            습득해나가며 프로젝트를 완성하였습니다.
          </p>
        </div>
      </div>
      <div className={cx("my-projects")}>
        <h1>프로젝트</h1>
        <div>
          <h2>기술 블로그</h2>
          <p>
            링크 :{" "}
            <a href="https://main--koitblog.netlify.app/" target="blank">
              https://main--koitblog.netlify.app/
            </a>
          </p>
          <div>
            <img src={blogImage} alt="blog-image" width={"100%"} />
          </div>
          <h3>서비스 소개</h3>
          <ul>
            <li>
              프론트엔드를 공부하며 쌓아온 기록을 블로그화 하여 쉽게 접근할 수
              있게 만든 서비스
            </li>
            <li>추천,최신,랜덤,검색을 통해 포스트에 접근성을 높였습니다.</li>
          </ul>
          <h3>주요 기술</h3>
          <ul>
            <li>react-hook-form을 통한 form관리</li>
            <li>debounce와 throttle을 통한 성능 최적화</li>
            <li>fs,path를 통한 파일 접근 및 변환, markdown 변환</li>
            <li>
              redux-toolkit, redux-persist, next-redux-wrapper를 통한 상태관리
            </li>
            <li>
              tailwindCSS,gsap, swiper, react-icons, svg태그 등을 통한 디자인 &
              애니메이션
            </li>
          </ul>
          <h3>프로젝트 후기</h3>
          <p>
            강의를 모두 본 뒤 처음으로 기획하고 제작한 프로젝트라 폴더의 구조,
            코드정리 같은 작은 부분부터 데이터의 관리 응용 라이브러리 활용같은
            모든 부분이 어색하고 힘들었습니다. 알고있는것과 이해한다는 것에 큰
            차이와 아직 모르는 부분도 많다는것을 알게 해준 프로젝트입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
