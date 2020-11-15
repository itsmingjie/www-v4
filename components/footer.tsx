const Footer = () => {
  return (
    <footer className="footer max-w-3xl mx-auto mb-10 text-grey text-sm" role="contentinfo">
      <div>
        © 2020{" "}
        <a href="https://mingjie.info" target="_blank" rel="noopener">
          Mingjie Jiang
        </a>{" "}
        • All rights reserved.
        <br />
        <a
          href="https://github.com/itsmingjie/ganymede"
          target="_blank"
          rel="noopener"
        >
          Ganymede
        </a>{" "}
        is an open-source theme under the{" "}
        <a
          href="https://github.com/itsmingjie/ganymede/blob/master/LICENSE"
          target="_blank"
          rel="noopener"
        >
          MIT License
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
