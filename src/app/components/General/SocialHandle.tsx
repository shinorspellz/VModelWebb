import parse from "html-react-parser";

const SocialHandle = (props: any) => {
  return (
    <li className="list-inline-item">
      <a
        href={props.PLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        {parse(props.PIcon)}
      </a>
    </li>
  );
};

export default SocialHandle;
