import Star from "./Star";

type ComponentProps = {
  count: 0 | 1 | 2 | 3 | 4 | 5;
};

export default function Stars({ count = 0 }: ComponentProps) {
  return (
    <>
      {count && (
        <ul className="card-body-stars u-clearfix">
          {new Array(count).fill(<Star />)}
        </ul>
      )}
    </>
  );
}
