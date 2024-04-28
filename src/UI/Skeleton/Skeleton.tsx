import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={506}
    height={660}
    viewBox="0 0 506 660"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="46" y="-2" rx="43" ry="43" width="450" height="400" />
    <rect x="59" y="418" rx="41" ry="41" width="418" height="68" />
  </ContentLoader>
);

export default Skeleton;
