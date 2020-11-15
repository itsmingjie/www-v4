import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-auto mb-10 mt-8">
      <h2 className="text-lg md:text-2xl">
        <Link href="/">
          <a className="font-display hover:underline font-bold">Mingjie Jiang</a>
        </Link>{' '}
        <span className="text-grey text-md md:text-lg">@itsmingjie</span>
      </h2>
      <div className="flex w-auto ml-auto text-md md:text-lg">
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
